import { IHttpRequest } from "../models/http-request.model";
import { Utils } from "../utils/utils";

export  class ExampleAPI{

    async handleRequest(httpRequest:IHttpRequest){

       switch(httpRequest.method){
          case 'GET':
            return await this.getExample(httpRequest)
          
          case 'POST':
            return await this.createExample(httpRequest)
          
          case 'PUT':
            return await this.updateExample(httpRequest)
          
          case 'DELETE':
            return await this.deleteExample(httpRequest)
               
          default:
            return await Utils.makeHttpError(409,'Bad request.')    
      }
    }

    private async getExample(httpRequest:IHttpRequest){
        return  {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 200,
            data: 'get'
          }
    }
    private async createExample(httpRequest:IHttpRequest){
        return  {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 201,
            data: 'create'
          }
    }
    private async updateExample(httpRequest:IHttpRequest){
        return  {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 200,
            data: 'update'
          }
    }
    private async deleteExample(httpRequest:IHttpRequest){
        return  {
            headers: {
              'Content-Type': 'application/json'
            },
            statusCode: 200,
            data: 'delete'
          }
    }

}