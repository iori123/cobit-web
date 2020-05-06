const express = require('express')
// const morgan  = require ('morgan')
const path = require('path')

const hbs = require ( 'hbs') // template engine 

require('./hbs/helpers')
const app = express()

// app.use(morgan('dev'))

app.use( express.static( path.join( __dirname , 'public')))

hbs.registerPartials(path.join(__dirname , 'views/partials' ))

app.set( 'view engine','hbs'); // establenco an variable de ajuste de mi app : esta establece la extencion at file in path than variable views 






app.get( '/' , ( req, res ) => {

    res.render('home' ,{
        title : 'Inicio',
        name : 'renzo patana lopez' ,
       
    } )
})
app.get( '/about' , ( req, res ) => {

    res.render('about' , {
        title : 'Pag about',
        perfile : 'user',
       
    } )
})

const port = process.env.PORT || 3000
// send templates for Client 

app.listen( port , () => console.log( `server init in port : ${port}`))