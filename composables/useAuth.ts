interface User {
    id: number
    email: string
    username: string | null
    fullname: string | null
}

interface AuthState {
    user: User | null
    isLoggedIn: boolean
}

export const useAuth = () => {
    const authState = useState<AuthState>('auth.state', () => ({
        user: null,
        isLoggedIn: false
    }))

    const login = async (credentials: { email: string; password: string }) => {
        try {
            const data = await $fetch<{ success: boolean; user: User; message: string }>('/api/auth/login', {
                method: 'POST',
                body: credentials
            })

            if (data?.success && data.user) {
                authState.value = {
                    user: data.user,
                    isLoggedIn: true
                }
                
                // Store in session storage for persistence
                if (process.client) {
                    sessionStorage.setItem('auth', JSON.stringify(authState.value))
                }
                
                return { success: true, user: data.user }
            }
            
            return { success: false, error: 'Login failed' }
        } catch (error: any) {
            console.error('Login error:', error)
            return { 
                success: false, 
                error: error.data?.message || error.statusMessage || 'Login failed' 
            }
        }
    }

    const register = async (userData: { 
        email: string; 
        password: string; 
        username: string; 
        fullname: string 
    }) => {
        try {
            const data = await $fetch<{ success: boolean; user: User; message: string }>('/api/auth/register', {
                method: 'POST',
                body: userData
            })

            if (data?.success && data.user) {
                authState.value = {
                    user: data.user,
                    isLoggedIn: true
                }
                
                // Store in session storage for persistence
                if (process.client) {
                    sessionStorage.setItem('auth', JSON.stringify(authState.value))
                }
                
                return { success: true, user: data.user }
            }
            
            return { success: false, error: 'Registration failed' }
        } catch (error: any) {
            console.error('Registration error:', error)
            return { 
                success: false, 
                error: error.data?.message || error.statusMessage || 'Registration failed' 
            }
        }
    }

    const logout = () => {
        authState.value = {
            user: null,
            isLoggedIn: false
        }
        
        // Clear session storage
        if (process.client) {
            sessionStorage.removeItem('auth')
        }
    }

    const initAuth = () => {
        // Initialize auth state from session storage on client side
        if (process.client) {
            const stored = sessionStorage.getItem('auth')
            if (stored) {
                try {
                    const parsedAuth = JSON.parse(stored)
                    if (parsedAuth.isLoggedIn && parsedAuth.user) {
                        authState.value = parsedAuth
                    }
                } catch (error) {
                    console.error('Failed to parse stored auth:', error)
                    sessionStorage.removeItem('auth')
                }
            }
        }
    }

    // Initialize auth on composable creation
    initAuth()

    return {
        // State
        user: readonly(computed(() => authState.value.user)),
        isLoggedIn: readonly(computed(() => authState.value.isLoggedIn)),
        
        // Actions
        login,
        register,
        logout,
        initAuth
    }
}