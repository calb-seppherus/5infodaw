import express from 'express';
export const router = express.Router();
import passport from '../config/passport.js';
import autenticacao from '../config/autenticacao.js';
//import {abreindex,calculo,calcular,paragrafo,paragrafar,gabriel,nome,nomesobrenome,soma,somadobro,pesquisar,abreupload,upload} from '../controllers/controllers.js'
import {abretela,cadastrausuario,mostrausuarios,buscarusuarios,abretelaeditar,
        editarusuario,deletarusuario,abrelogin,abrepostadd,postadd,listapost,
        filtrapost,abrepostupdate,postupdate,postdelete,} from '../controllers/controllers.js'
import multer from 'multer';
const foto = multer({ dest: './public'});

router.get('/usuario',autenticacao, abretela);
router.post('/usuario',autenticacao, foto.single('foto'), cadastrausuario)

router.get('/mostrausuarios',autenticacao, mostrausuarios)
router.post('/mostrausuarios',autenticacao, buscarusuarios)

router.get('/editarusuario/:id',autenticacao, abretelaeditar)
router.post('/editarusuario/:id',autenticacao, editarusuario)

router.get('/deletarusuario/:id',autenticacao, deletarusuario)

//rota para abrir a tela de login
router.get('/', abrelogin)
router.post('/', passport.authenticate('local',{
        successRedirect: '/usuario',
        failureRedirect: '/'
}))


router.get('/postadd',autenticacao, abrepostadd)
router.post('/postadd',autenticacao, foto.single('foto'), postadd)

router.get('/postlist',autenticacao, listapost)
router.post('/postlist',autenticacao, filtrapost)

router.get('/postupdate/:id',autenticacao, abrepostupdate)
router.post('/postupdate/:id',autenticacao,foto.single('foto'), postupdate)

router.get('/postdelete/:id',autenticacao, postdelete)


/*
router.get('/',abreindex)

router.get('/calculo',calculo)

//rota para receber os dados, fazer o calculo e mostrar o resultado final
router.post('/calcular',calcular) 

router.get('/paragrafo',paragrafo)

router.post('/paragrafar',paragrafar)

router.get('/gabriel',gabriel)

router.get('/upload', abreupload)
router.post('/upload', foto.single('foto') , upload)

router.get('/:nome',nome)

router.get('/:nome/:sobrenome',nomesobrenome )

router.get('/soma/:numero1/:numero2',soma )

router.get('/somadobro/:numero1/:numero2',somadobro)

router.post('/pesquisar',pesquisar)

*/
export default router;