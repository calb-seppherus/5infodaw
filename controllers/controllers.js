import Usuario from '../models/usuario.js'

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

export function abretela(req,res)
{
    res.render('usuario')
}

export async function cadastrausuario(req,res)
{
    const usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: req.body.senha,
        foto: req.file.filename,
        datanasc: req.body.datanasc
    })

    console.log(usuario)
    
    await usuario.save()
    res.render('usuario')

    
}

export async function mostrausuarios(req,res)
{
    let usuarios = await Usuario.find ({})
    res.render('mostrausuarios', {Usuarios:usuarios})
}

export async function buscarusuarios(req,res)
{
    let usuarios = await Usuario.find ({nome: req.body.pesquisar})
    res.render('mostrausuarios', {Usuarios:usuarios})
}

export async function abretelaeditar(req,res)
{
    let usuario = await Usuario.findById(req.params.id)
    res.render('editausuario', {Usuario:usuario})
}

export async function editarusuario(req,res)
{
    let usuario = await Usuario.findById(req.params.id)
    usuario.nome = req.body.nome;
    usuario.email = req.body.email;
    usuario.senha = req.body.senha;
    usuario.datanasc = req.body.datanasc;
    await usuario.save()
    res.redirect('/mostrausuarios')
}

export async function deletarusuario(req,res)
{
    await Usuario.findByIdAndDelete(req.params.id)
    res.redirect('/mostrausuarios')
}