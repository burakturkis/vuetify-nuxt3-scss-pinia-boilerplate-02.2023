export default defineEventHandler((event) => {
    const url = event.node.req.url
    const { authorization } = event.node.req.headers
    
    // Skip auth check for login/register endpoints
    const authEndpoints = ['/api/auth/login', '/api/auth/register']
    const isAuthEndpoint = authEndpoints.some(endpoint => url?.includes(endpoint))
    
    if (url?.includes('api') && !authorization && !isAuthEndpoint) {
        const error = createError({ statusCode: 401, statusMessage: 'Unauthorized' })
        sendError(event, error, false)
    }
    
    event.context.auth = { user: 123 }
})