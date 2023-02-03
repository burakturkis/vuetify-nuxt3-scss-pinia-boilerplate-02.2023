import { isRegistered } from './user/isRegistered'
import { register } from './user/register'
import { login } from './user/login'
import { PrismaClient } from '@prisma/client'
import { fieldEncryptionMiddleware } from 'prisma-field-encryption'

const prisma = new PrismaClient()
prisma.$use(fieldEncryptionMiddleware({
    encryptionKey: process.env.PRISMA_FIELD_ENCRYPTION_KEY,
}))


const user_services = {
    isRegistered,
    register,
    login
}
export { user_services, prisma }