import express from 'express';
export const router = express.Router();

router.get('/', (req,res)=>
{
    res.render('index')
})

//rota para abrir a pagina calculo.ejs
router.get('/calculo',(req,res)=>
{
    res.render('calculo')
})

//rota para receber os dados, fazer o calculo e mostrar o resultado final
router.post('/calcular',(req,res)=>
{
    const n1 = parseInt(req.body.numero1)
    const n2 = parseInt(req.body.numero2)
    const resposta = n1 + n2
    res.render('calculo',{resposta:resposta})
    //res.send('Resultado: '+resposta)
}) 

router.get('/paragrafo',(req,res)=>
{
    res.render('paragrafo')
})

router.post('/paragrafar',(req,res)=>
{
    const maxparag = parseInt(req.body.parag)
    const coluna = parseInt(req.body.coluna)
    res.render('paragrafo',{maxparag:maxparag,coluna:coluna})
})

router.get('/gabriel', (req,res)=>
{
    res.send('Hello Gabriel!')
})

router.get('/:nome', (req,res)=>
{
    res.send('Hello '+req.params.nome+'!')
})

router.get('/:nome/:sobrenome', (req,res)=>
{
    res.send('Hello '+req.params.nome+' '+req.params.sobrenome+'!')
})

router.get('/soma/:numero1/:numero2', (req,res)=>
{
    const n1 = parseInt(req.params.numero1)
    const n2 = parseInt(req.params.numero2)
    const resposta = (n1 + n2)
    res.send('O resulatdo da soma é '+resposta)
})

router.get('/somadobro/:numero1/:numero2', (req,res)=>
{
    const n1 = parseInt(req.params.numero1)
    const n2 = parseInt(req.params.numero2)
    const resposta = (n1 + n2) * 2
    res.send('O resulatdo da soma é '+resposta)
})

router.post('/pesquisar', (req,res) =>
{
    res.send('dados recebidos: '+req.body.nome)
})

export default router;