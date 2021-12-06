import {  Router, Request, Response } from 'express'
import { Utils } from '../utils/utils'

import BalanceAPI from './balance.api'

const balanceHandler = Router()
const balance = new BalanceAPI()
            

balanceHandler.all('/',balanceController)

async function balanceController(req:Request, res:Response){
  
    const httpRequest = Utils.adaptHttpRequest(req)

    try {
        const result = await balance.handleRequest(httpRequest)
        const { headers,statusCode,data } = result

        res
            .set(headers)
            .set(statusCode)
            .send(data)

    } catch (error) {
        res.status(500).end()
    }
}

export default balanceHandler