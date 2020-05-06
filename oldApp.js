
const http = require('http')// permitet crear un web server 



http.createServer( ( req , res ) => {

    res.writeHead( 200 , {'Content-Type': 'text/plain'})
    const data = {

        id : Math.random(3).toFixed(2),
        res : 'Response from HTTP server'
    }
    
    res.write(JSON.stringify( data ))
    res.end()
})
.listen(8080)
