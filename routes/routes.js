import express from 'express';
export const router = express.Router();
//import {abreindex,calculo,calcular,paragrafo,paragrafar,gabriel,nome,nomesobrenome,soma,somadobro,pesquisar,abreupload,upload} from '../controllers/controllers.js'
import {abretela,cadastrausuario,mostrausuarios,buscarusuarios,abretelaeditar,
        editarusuario,deletarusuario,abrelogin,abrepostadd,postadd,listapost,
        filtrapost,abrepostupdate,postupdate,postdelete} from '../controllers/controllers.js'
import multer from 'multer';
const foto = multer({ dest: './public'});

router.get('/usuario', abretela);
router.post('/usuario', foto.single('foto'), cadastrausuario)

router.get('/mostrausuarios', mostrausuarios)
router.post('/mostrausuarios', buscarusuarios)

router.get('/editarusuario/:id', abretelaeditar)
router.post('/editarusuario/:id', editarusuario)

router.get('/deletarusuario/:id', deletarusuario)

router.get('/', abrelogin)



router.get('/postadd', abrepostadd)
router.post('/postadd', foto.single('foto'), postadd)

router.get('/postlist', listapost)
router.post('/postlist', filtrapost)

router.get('/postupdate/:id', abrepostupdate)
router.post('/postupdate/:id', postupdate)

router.get('/postdelete/:id', postdelete)


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