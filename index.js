const express = require('express')
const exphbs = require('express-handlebars')

const app = express();

const hbs = exphbs.create({
    partialsDir: ['views/partials']

})

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars')
app.set('views', './views')

app.use(express.static('public'))

app.get('/', (req, res)=>{


    res.render('home')
})

app.get('/products', (req, res) =>{

    const products =[
        {
            img: "/img/hat.png",
            price: 20.00,
            description: 'Very beautiful product',
            size: 'M-G',
            title: 'Hat',
        },
        {
            img: "/img/shirt.png",
            price: 30.00,
            description: 'T-shirt - Rick and Morty',
            size: 'PP-P',
            title: 'T-shirt',
        },

        {
            img: "/img/jeans.png",
            price: 100.00,
            description: 'Jeans pants - Skinny',
            size: '54',
            title: 'Jeans',
        },
    ]

    res.render('blogapp', {products});
})

app.listen(3000, ()=>{
    console.log("Servidor rodando")
})