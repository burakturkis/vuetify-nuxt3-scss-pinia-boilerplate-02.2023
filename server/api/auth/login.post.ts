import { user_services } from '~~/server/utils'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        
        // Validate required fields
        if (!body.email || !body.password) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Email and password are required'
            })
        }

        const result = await user_services.login(body)

        if (result.error) {
            throw createError({
                statusCode: 401,
                statusMessage: result.error
            })
        }

        return {
            success: true,
            user: result.user,
            message: 'Login successful'
        }
    } catch (error: any) {
        console.error('Login API error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Login failed'
        })
    }
})