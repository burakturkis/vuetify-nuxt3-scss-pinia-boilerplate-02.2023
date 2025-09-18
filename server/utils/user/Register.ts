import { prisma } from '~~/server/utils'
import { encryptField } from '../encryption'
import { TUserRegister } from '~~/types/user'

export const register = async ({ email, password, fullname, username }: TUserRegister) => {
    try {
        // Check if user already exists
        const existingUser = await prisma.user.findUnique({
            where: { email }
        })
        
        if (existingUser) {
            return { error: 'User with this email already exists' }
        }

        // Encrypt the password before storing
        const encryptedPassword = encryptField(password)

        const created = await prisma.user.create({
            data: {
                email,
                password: encryptedPassword,
                fullname,
                username,
            },
            select: {
                id: true,
                email: true,
                username: true,
                fullname: true,
                // Don't return password
            }
        })
        
        await prisma.$disconnect()
        return { user: created, success: true }
    } catch (error) {
        await prisma.$disconnect()
        console.error('Registration error:', error)
        return { error: 'Registration failed' }
    }
}
