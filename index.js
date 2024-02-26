import express from 'express';
const app = express();
const port = 3000;

app.set('view engine','ejs');

app.get('/', (req,res)=>{
    res.render('index')
})

app.get('/gabriel', (req,res)=>{
    res.send('Hello Gabriel!')
})

app.get('/:nome', (req,res)=>{
    res.send('Hello '+req.params.nome+'!')
})

app.get('/:nome/:sobrenome', (req,res)=>{
    res.send('Hello '+req.params.nome+' '+req.params.sobrenome+'!')
})

app.get('/soma/:numero1/:numero2', (req,res)=>{
    const n1 = parseInt(req.params.numero1)
    const n2 = parseInt(req.params.numero2)
    const resposta = (n1 + n2)
    res.send('O resulatdo da soma é '+resposta)
})

app.get('/somad/:numero1/:numero2', (req,res)=>{
    const n1 = parseInt(req.params.numero1)
    const n2 = parseInt(req.params.numero2)
    const resposta = (n1 + n2) * 2
    res.send('O resulatdo da soma é '+resposta)
})

app.listen(port)