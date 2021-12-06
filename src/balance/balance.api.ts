import { IHttpRequest } from '../models/http-request.model'
import { Utils } from '../utils/utils';

export default class BalanceAPI{

    constructor(){}

    async handleRequest(httpRequest:IHttpRequest){

        switch(httpRequest.method){
            case 'GET':
                return await this.descargarPDF(httpRequest)

            default:
                return Utils.makeHttpBadRequestResponse()
        }
    }


    private async descargarPDF(httpRequest:IHttpRequest){

        // Get balance
        // Crear balance
        // Convertir a PDF
        // Descargar 

        return {
          headers:{
              'Content-Type':'application/json'
          },
          statusCode:200,
          data:'descargar balance'
        }
    }
    
}


