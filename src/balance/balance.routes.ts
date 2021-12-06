import {  Router, Request, Response } from 'express'

import BalanceAPI from './balance.api'

const balanceHandler = Router()
const balance = new BalanceAPI()

balanceHandler.route('/')
            .get( balance.getBalance)
            .post(balance.createBalance)
balanceHandler.route('/balance/:id')
            .get(balance.getBalance)
            .put(balance.updateBalance)
            .delete(balance.deleteBalance)
            
balanceHandler.route('/descargar')
            .post(balance.descargarPDF)



balanceHandler.all('/',(req:Request, res:Response)=>{
    //clonar req 
    //determinar
})

export default balanceHandler