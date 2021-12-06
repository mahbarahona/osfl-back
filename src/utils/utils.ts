import { Request } from "express";

export class Utils{

    static adaptHttpRequest(req:Request){
        return Object.freeze({
            path: req.path,
            method: req.method,
            pathParams: req.params,
            queryParams: req.query,
            body: req.body
          })
    }
    static makeHttpError(statusCode:number, errorMessage:string){
        return {
            headers: {
                'Content-Type': 'application/json'
              },
              statusCode,
              data: JSON.stringify({
                success: false,
                error: errorMessage
              })
          }
    }


}