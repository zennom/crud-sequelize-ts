import { Request, Response } from "express";
import { Usuario } from '../models/Usuario'

export const index = async (req: Request, res: Response)=>{

    let users = await Usuario.findAll()
    res.render("pages/usuario",{
        users
    })
}
export const visualizaPaginaCadastro = async(req:Request, res: Response) =>{
    res.render("pages/cadastrar")
} 
//criando controller para pegar as infos de usuários via BODY
export const cadastroUsuario = async(req:Request, res: Response) =>{
    //recebendo os dados do form via body
    let {nome,email} = req.body
    
    if(nome && email){
        await Usuario.create({
            nome,
            email
        })
    }
    //após ter salvado, redirecionamos para /usuarios
    res.redirect("/usuarios")
} 
export const editaUsuario = async(req:Request, res: Response) =>{
    let {id} = req.params
    
    let user = await Usuario.findByPk(id)

    res.render('pages/editar',{
        user
    })
}

export const atualizaUsuario = async(req:Request, res: Response) =>{
    let {id} = req.params
    let {nome,email} = req.body

    await Usuario.update({
        nome,
        email
    },
    {
        where:{
            id
        }
    })

    res.redirect('/usuarios')
}



