import { Request, Response, Router } from "express";
import { Utils } from "../utils/utils";
import { ExampleAPI } from "./example.api";

const exampleRouter = Router()
const example = new ExampleAPI()

exampleRouter.all('/',exampleController)
exampleRouter.all('/:id',exampleController)


async function exampleController(req:Request, res:Response){
    const httpRequest = Utils.adaptHttpRequest(req)

    try {
        const result = await example.handleRequest(httpRequest)
        console.log({result})
        const { headers,statusCode,data } = result

        res
            .set(headers)
            .set(statusCode)
            .send(data)

    } catch (error) {
        res.status(500).end()
    }
}

export default exampleRouter



