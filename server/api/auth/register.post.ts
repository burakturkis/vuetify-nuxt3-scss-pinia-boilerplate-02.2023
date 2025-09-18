import { user_services } from '~~/server/utils'

export default defineEventHandler(async (event) => {
    try {
        const body = await readBody(event)
        
        // Validate required fields
        if (!body.email || !body.password || !body.username || !body.fullname) {
            throw createError({
                statusCode: 400,
                statusMessage: 'Missing required fields'
            })
        }

        const result = await user_services.register(body)

        if (result.error) {
            throw createError({
                statusCode: 400,
                statusMessage: result.error
            })
        }

        return {
            success: true,
            user: result.user,
            message: 'Registration successful'
        }
    } catch (error: any) {
        console.error('Registration API error:', error)
        throw createError({
            statusCode: error.statusCode || 500,
            statusMessage: error.statusMessage || 'Registration failed'
        })
    }
})