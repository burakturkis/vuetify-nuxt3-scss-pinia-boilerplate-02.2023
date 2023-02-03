
import { prisma } from '~~/server/utils'
import { TUserLogin } from '~~/types/user'


export const login = async ({ email, password }: TUserLogin) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    })

    if (!user || user.password !== password) {
        return { error: 'Invalid credentials.' }
    }
    prisma.$disconnect()
    return user
}