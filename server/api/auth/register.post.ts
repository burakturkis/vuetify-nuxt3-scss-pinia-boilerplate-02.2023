import { user_services } from '~~/server/utils'

export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const isRegistered = await user_services.isRegistered(body.email)
    console.log('isRegistered', isRegistered)

    if (!isRegistered) {
        const user = user_services.register(body)

        // const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
        //     expiresIn: '1d',
        // })

        // return {
        //     statusCode: 200,
        //     body: {
        //         token,
        //         user,
        //     },
        // }
        return { user }
    }

    return {
        statusCode: 400,
        body: {
            message: 'User already registered',
        },
    }
})