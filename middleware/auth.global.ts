
import { useAuth } from "~~/composables/useAuth"

export default defineNuxtRouteMiddleware((to: any, from: any) => {
    // Skip middleware for API routes
    if (to.path.startsWith('/api/')) {
        return
    }

    const { isLoggedIn } = useAuth()

    // Allow access to auth pages when not logged in
    if (!to.path.includes('auth') && !isLoggedIn.value) {
        return navigateTo('/auth')
    }
    
    // Redirect to home if already logged in and trying to access auth pages
    if (to.path.includes('auth') && isLoggedIn.value) {
        return navigateTo('/')
    }
})