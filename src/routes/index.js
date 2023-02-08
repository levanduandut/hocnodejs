const newRouter = require('./news')
const siteRouter = require('./site')
const courseRouter = require('./courses')


function route(app) {
    app.use('/news', newRouter)
    app.use('/courses', courseRouter)
    app.use('/', siteRouter)

    // app.get('/', (req, res) => {
    //     res.render('home');
    //   })

    //   app.get('/news', (req, res) => {
    //     res.render('news');
    //   })

    //   app.get('/search', (req, res) => {
    //     res.render('search');
    //   })

    //   app.post('/search', (req, res) => {
    //     console.log(req.body);
    //     res.send(req.body);
    //   })
}

module.exports = route;