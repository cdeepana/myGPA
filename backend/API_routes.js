const testApi = require('./Controllers/API-test');
const auth = require('./Controllers/auth/auth-middleware');
const login = require('./Controllers/auth/login-controller');

function routeinitialize(app) {
    app.get('/testApi',testApi);
    app.post('/login', auth(), login );

}

module.exports = routeinitialize;