import Usuario from '../models/usuario.js'
import Post from '../models/post.js'
import post from '../models/post.js'

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
    res.render('editausuario.ejs', {Usuario:usuario})
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
    let usuario = await Usuario.findByIdAndDelete(req.params.id)
    res.redirect('/mostrausuarios')
}

export async function abrelogin(req,res)
{
    res.render('login.ejs')
}

/*-------------------------------------------------------------------------------------------------------*/

export async function abrepostadd(req,res)
{
    res.render('adicionarpost.ejs')
}

export async function postadd(req,res)
{
    let tags = req.body.tags.split(';')
    const post = new Post(
        {
            titulo: req.body.titulo,
            texto: req.body.descricao,
            tags: tags,
            foto: req.file.filename,
            data: req.body.data,
            status: req.body.status
        })

    console.log(post);
    await post.save();

    res.render('adicionarpost.ejs');
}

export async function listapost(req,res)
{
    let post = await Post.find ({})
    res.render('mostrapost', {Post:post})
}

export async function filtrapost(req,res)
{
    let post = await Post.find ({titulo: new RegExp(req.body.pesquisar, 'i')})
    res.render('mostrapost', {Post:post})
}

export async function abrepostupdate(req,res)
{
    let post = await Post.findById(req.params.id);
    res.render('editapost.ejs', {Post:post});
}

export async function postupdate(req,res)
{
    let post = await Post.findById(req.params.id)
    post.titulo = req.body.titulo;
    post.texto = req.body.texto;
    post.status = req.body.status;
    post.tags = req.body.tags.split(',');
    post.foto = req.file.filename;
    await post.save()
    res.redirect('/mostrapost')
}

export async function postdelete(req,res)
{
    let post = await Post.findByIdAndDelete(req.params.id);
    res.redirect('/postlist');
}