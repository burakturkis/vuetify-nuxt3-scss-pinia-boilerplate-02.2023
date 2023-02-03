import { prisma } from '~~/server/utils'
import { TUserRegister } from '~~/types/user'

export const register = async ({ email, password, fullname, username }: TUserRegister) => {
    const created = await prisma.user.create({
        data: {
            email,
            password,
            fullname,
            username,
        },
    })
    prisma.$disconnect()
    return created


}
