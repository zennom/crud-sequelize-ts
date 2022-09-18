import {Model, DataTypes} from 'sequelize'
import { sequelize } from '../instances/mysql'

export interface UsuarioInstance extends Model{
    id: number
    nome: string
    email: string
}
export const Usuario = sequelize.define<UsuarioInstance>("Usuario,",{
    id:{
        primaryKey:true,
        type:DataTypes.INTEGER
    },
    nome:{
        type:DataTypes.STRING
    },
    email:{
        type: DataTypes.INTEGER,
    }
},{
    tableName:'usuarios',
    timestamps:false
})