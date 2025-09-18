import { isRegistered } from './user/isRegistered'
import { register } from './user/register'
import { login } from './user/login'
import { PrismaClient } from '@prisma/client'

// Simple Prisma client - encryption is handled manually in user service functions
const prisma = new PrismaClient()

const user_services = {
    isRegistered,
    register,
    login
}

export { user_services, prisma }