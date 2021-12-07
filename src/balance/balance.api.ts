import app from '../app';
import { IHttpRequest } from '../models/http-request.model'
import { IRegistroBalance } from '../models/registro-balance.model';
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

        

        /*
            * VALIDAR DATOS DE ENTRADA

            * CREAR el BALANCE()
                * crear titulo-html
                * crear lista resumen
                    saldo
                    total ingresos
                    cantidad ingresos   
                    total egresos
                    cantidad egresos
                * por cada registro
                    crear un registro-html
                * appendear lista de registros-html
        */

        return {
          headers:{
              'Content-Type':'application/json'
          },
          statusCode:200,
          data:'descargar balance'
        }
    }
    

    private crearRowHTMLBalance(row:IRegistroBalance){
        const {id,fecha,titulo,descripcion,numero_documento,tipo,monto,saldo} = row        
        return ` 
            <tr>
                <td>${id}</td>
                <td>${fecha}</td>
                <td>${titulo}</td>
                <td>${descripcion}</td>
                <td>${numero_documento}</td>
                <td>${tipo}</td>
                <td>${monto}</td>
                <td>${saldo}</td>
            </tr>
        `
    }

    private getSaldoRegistro(anterior:number, actual:number){
        return anterior + actual
    }

    private getMontoByTipo(tipo:string, monto:number){
        return  tipo === '0' ? -monto : monto
    }

}


