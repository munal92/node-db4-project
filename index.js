const app = require('./api/server.js')


const PORT = process.env.PORT || 5000;


app.listen(PORT,() => {
     console.log(`\n//---> SERVER RUNNING ON ${PORT}`)
})