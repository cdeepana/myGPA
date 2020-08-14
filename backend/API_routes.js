const testApi = require('./Controllers/API-test')
const auth = require('./Controllers/middleware/auth-middleware')
const login = require('./Controllers/auth/login-controller')
const authenticate = require('./Controllers/auth/authenticate-controller')
const register = require('./Controllers/auth/register-controller')
const one_timeConfig = require('./Controllers/semester/one_timeConfig-controller')
const semester = require('./Controllers/semester/semester-controller')
// const nodecache = require('./Controllers/nodeCache')

function routeinitialize(app) {
    app.get('/testApi',testApi)
    app.post('/login', auth('login'), login )
    app.get('/test', auth(), authenticate )
    app.post('/register', register )
    app.post('/onetimeconfig', one_timeConfig)
    app.get('/getOTC', one_timeConfig)
    app.post('/createsem',semester )
    app.get('/getsems',semester)
}

module.exports = routeinitialize;