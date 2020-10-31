const testApi = require('./Controllers/API-test')
const auth = require('./Controllers/middleware/auth-middleware')
const login = require('./Controllers/auth/login-controller')
const authenticate = require('./Controllers/auth/authenticate-controller')
const register = require('./Controllers/auth/register-controller')
const one_timeConfig = require('./Controllers/semester/one_timeConfig-controller')
const semester = require('./Controllers/semester/semester-controller')

function routeinitialize(app) {
    app.get('/testApi',testApi)
    app.post('/login', auth('login'), login )
    app.get('/authenticate', auth(), authenticate )
    app.post('/register', register )
    app.post('/onetimeconfig',auth(),one_timeConfig)
    app.get('/getOTC', auth(),one_timeConfig)
    app.post('/createsem', auth(),semester )
    app.delete('/deletesem',auth(),semester )
    app.get('/getsems',auth(), semester)
    app.get('/getUser',auth(),register)
}

module.exports = routeinitialize;