
import { prisma } from '~~/server/utils'
import { encryptField, decryptField } from '../encryption'
import { TUserLogin } from '~~/types/user'

export const login = async ({ email, password }: TUserLogin) => {
    try {
        const user = await prisma.user.findUnique({
            where: { email }
        })

        if (!user) {
            return { error: 'Invalid credentials' }
        }

        // For encrypted passwords, we encrypt the input and compare
        // Or decrypt stored password and compare (less secure but simpler for demo)
        const encryptedInputPassword = encryptField(password)
        
        // Alternative approach: decrypt stored password for comparison
        let isValidPassword = false
        try {
            const decryptedStoredPassword = decryptField(user.password || '')
            isValidPassword = decryptedStoredPassword === password
        } catch {
            // If decryption fails, try direct comparison with encrypted input
            isValidPassword = user.password === encryptedInputPassword
        }

        if (!isValidPassword) {
            return { error: 'Invalid credentials' }
        }

        await prisma.$disconnect()
        
        // Return user without password
        const { password: _, ...userWithoutPassword } = user
        return { user: userWithoutPassword, success: true }
    } catch (error) {
        await prisma.$disconnect()
        console.error('Login error:', error)
        return { error: 'Login failed' }
    }
}