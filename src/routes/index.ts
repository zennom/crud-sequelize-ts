import { Router } from 'express'
import * as usuarioController from '../controllers/usuarioController'

const router = Router();

router.get('/',(req,res) =>{
    res.send("Teste")
})

router.get('/usuarios',usuarioController.index)
router.get('/cadastro',usuarioController.visualizaPaginaCadastro)
router.post('/cadastro',usuarioController.cadastroUsuario)
router.get('/editar/:id',usuarioController.editaUsuario)
router.post('/editar/:id',usuarioController.atualizaUsuario)

//criando a rota para excluir o usuário
router.get('/excluir/:id',usuarioController.deletaUsuario)


export default router;
