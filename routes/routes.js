import express from 'express';
export const router = express.Router();
//import {abreindex,calculo,calcular,paragrafo,paragrafar,gabriel,nome,nomesobrenome,soma,somadobro,pesquisar,abreupload,upload} from '../controllers/controllers.js'
import {abretela,mostradados} from '.../controllers/controllers.js'
import multer from 'multer';
const foto = multer({ dest: './public'});

router.get('/usuario', abretela);
router.post('/usuario', foto.single('foto'), mostradados)

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