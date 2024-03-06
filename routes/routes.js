import express from 'express';
export const router = express.Router();
import {abreindex,calculo,calcular,paragrafo,paragrafar,gabriel,nome,nomesobrenome,soma,somadobro,pesquisar} from '../controllers/controllers.js'

router.get('/',)

router.get('/calculo',)

//rota para receber os dados, fazer o calculo e mostrar o resultado final
router.post('/calcular',) 

router.get('/paragrafo',)

router.post('/paragrafar',)

router.get('/gabriel',)

router.get('/:nome',)

router.get('/:nome/:sobrenome', )

router.get('/soma/:numero1/:numero2', )

router.get('/somadobro/:numero1/:numero2',)

router.post('/pesquisar',)

export default router;