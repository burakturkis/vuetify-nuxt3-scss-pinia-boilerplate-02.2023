export default defineEventHandler((event) => {
    // console.log('request is => ', event.node.req)
    console.log(event.node.req.url)
    const { authorization } = event.node.req.headers
    
    if (event.node.req.url?.includes('api') && !authorization) {
        const error = createError({ statusCode: 401, statusMessage: 'Unauthorized' })
        sendError(event, error, false)
    }
    event.context.auth = { user: 123 }
})