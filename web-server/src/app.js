const path = require('path')
const express = require('express')
const hbs = require('hbs')

const app = express()

const viewspath = path.join(__dirname, '../templates/views')

app.set('view engine', 'hbs')
app.set('views', viewspath)
hbs.registerPartials(path.join(__dirname, '../templates/partials'))

app.use(express.static(path.join(__dirname, '../public')))

// app.com

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather app!',
        name: 'Saurabh Kasar'
    })
})

// app.com/about

app.get(('/about'), (req,res) => {
    res.render('about', {
        title:'About me',
        name:'Saurabh Kasar'
    })
})

// app.com/help

app.get(('/help'), (req,res) => {
    res.render('help', {
        title:'Help',
        helpline: 'Call 180018001800',
        name:'Saurabh Kasar'
    })
})

// app.com/forecast

app.get('/forecast', (req, res) => {
    res.send({
        'forecast': 'clear', 
        'location': 'Pune'
    })
})

// app.com 404 page

app.get('*',(req,res) => {
    res.send('My 404 page')
})


app.listen(3000, () => {
    console.log('Server up on 3000!')
})