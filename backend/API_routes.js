const testApi = require('./Controllers/API-test')
const auth = require('./Controllers/auth/auth-middleware')
const login = require('./Controllers/auth/login-controller')
const authenticate = require('./Controllers/auth/authenticate-controller')
const register = require('./Controllers/auth/register-controller')
const one_timeConfig = require('./Controllers/semester/one_timeConfig-controller')

function routeinitialize(app) {
    app.get('/testApi',testApi)
    app.post('/login', auth('login'), login )
    app.get('/test', auth(), authenticate )
    app.post('/register', register )
    app.post('/onetimeconfig', one_timeConfig)
}

module.exports = routeinitialize;