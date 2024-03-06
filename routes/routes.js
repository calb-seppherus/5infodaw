import express from 'express';
export const router = express.Router();
import {abreindex,calculo,calcular,paragrafo,paragrafar,gabriel,nome,nomesobrenome,soma,somadobro,pesquisar} from '../controllers/controllers.js'

router.get('/',abreindex)

router.get('/calculo',calculo)

//rota para receber os dados, fazer o calculo e mostrar o resultado final
router.post('/calcular',calcular) 

router.get('/paragrafo',paragrafo)

router.post('/paragrafar',paragrafar)

router.get('/gabriel',gabriel)

router.get('/:nome',nome)

router.get('/:nome/:sobrenome',nomesobrenome )

router.get('/soma/:numero1/:numero2',soma )

router.get('/somadobro/:numero1/:numero2',somadobro)

router.post('/pesquisar',pesquisar)

export default router;