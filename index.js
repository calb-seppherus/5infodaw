import express from 'express';
const app = express();
const port = 3000;

app.set('view engine','ejs');
app.use(express.urlencoded({extended:true}))

app.get('/', (req,res)=>
{
    res.render('index')
})

//rota para abrir a pagina calculo.ejs
app.get('/calculo',(req,res)=>
{
    res.render('calculo')
})

//rota para receber os dados, fazer o calculo e mostrar o resultado final
app.post('/calcular',(req,res)=>
{
    const n1 = parseInt(req.body.numero1)
    const n2 = parseInt(req.body.numero2)
    const resposta = n1 + n2
    res.render('calculo',{resposta:resposta})
    //res.send('Resultado: '+resposta)
}) 

app.get('/paragrafo',(req,res)=>
{
    res.render('paragrafo')
})

app.post('/paragrafar',(req,res)=>
{
    const maxparag = parseInt(req.body.parag)
    res.render('paragrafo',{maxparag:maxparag})
})

app.get('/gabriel', (req,res)=>
{
    res.send('Hello Gabriel!')
})

app.get('/:nome', (req,res)=>
{
    res.send('Hello '+req.params.nome+'!')
})

app.get('/:nome/:sobrenome', (req,res)=>
{
    res.send('Hello '+req.params.nome+' '+req.params.sobrenome+'!')
})

app.get('/soma/:numero1/:numero2', (req,res)=>
{
    const n1 = parseInt(req.params.numero1)
    const n2 = parseInt(req.params.numero2)
    const resposta = (n1 + n2)
    res.send('O resulatdo da soma é '+resposta)
})

app.get('/somadobro/:numero1/:numero2', (req,res)=>
{
    const n1 = parseInt(req.params.numero1)
    const n2 = parseInt(req.params.numero2)
    const resposta = (n1 + n2) * 2
    res.send('O resulatdo da soma é '+resposta)
})

app.post('/pesquisar', (req,res) =>
{
    res.send('dados recebidos: '+req.body.nome)
})



app.listen(port)