export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const user: any = await user_services.login(body)

    if (user.error) {
        return {
            statusCode: 400,
            body: {
                message: user.error,
            },
        }
    }

    return user

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
})