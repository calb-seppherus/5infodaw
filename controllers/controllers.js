export function abreindex (req,res)
{
    res.render('index')
}

export function calculo (req,res)
{
    res.render('calculo')
}

export function calcular (req,res)
{
    const n1 = parseInt(req.body.numero1)
    const n2 = parseInt(req.body.numero2)
    const resposta = n1 + n2
    res.render('calculo',{resposta:resposta})
    //res.send('Resultado: '+resposta)
}

export function paragrafo (req,res)
{
    res.render('paragrafo')
}

export function paragrafar (req,res)
{
    const maxparag = parseInt(req.body.parag)
    const coluna = parseInt(req.body.coluna)
    res.render('paragrafo',{maxparag:maxparag,coluna:coluna})
}

export function gabriel (req,res)
{
    res.send('Hello Gabriel!')
}

export function nome (req,res)
{
    res.send('Hello '+req.params.nome+'!')
}

export function nomesobrenome (req,res)
{
    res.send('Hello '+req.params.nome+' '+req.params.sobrenome+'!')
}

export function soma (req,res)
{
    const n1 = parseInt(req.params.numero1)
    const n2 = parseInt(req.params.numero2)
    const resposta = (n1 + n2)
    res.send('O resulatdo da soma é '+resposta)
}

export function somadobro (req,res)
{
    const n1 = parseInt(req.params.numero1)
    const n2 = parseInt(req.params.numero2)
    const resposta = (n1 + n2) * 2
    res.send('O resulatdo da soma é '+resposta)
}

export function pesquisar (req,res)
{
    res.send('dados recebidos: '+req.body.nome)
}

export function abreupload(req,res)
{
    res.render('upload')
}

export function upload(req,res)
{
    res.send("<img src='/"+req.file.filename+"'>")
}