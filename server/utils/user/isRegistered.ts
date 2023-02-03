import { prisma } from '~~/server/utils'

export const isRegistered = async (email: string) => {
    const user = await prisma.user.findUnique({
        where: {
            email,
        },
    })
    console.log('user is ', user)
    prisma.$disconnect()

    return user ? true : false
}
