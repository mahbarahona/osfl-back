import {Request,Response } from 'express'

export default class BalanceAPI{

//! eliminar dependencias de objetos express, solo recibir y devolver objetos,(no req,no resp)


    constructor(){}
    descargarPDF(req:Request, res:Response){

        // Get balance
        // Crear balance
        // Convertir a PDF
        // Descargar 

        return {
            statusCode:'',
            data:[]
        }
    }
    getBalance(req:Request, res:Response){
        return res.status(200).send({
            method:'GET',
            params:req.params['id']
        })
    }
    createBalance(req:Request, res:Response){
        return res.status(200).send({
            method:'POST',
            params:req.params['id']
        })
    }
    updateBalance(req:Request, res:Response){
        return res.status(200).send({
            method:'UPDATE',
            params:req.params['id']
        })
    }
    deleteBalance(req:Request, res:Response){
        return res.status(200).send({
            method:'DELETE',
            params:req.params['id']
        })
    }



    
}


