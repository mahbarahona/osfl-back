export interface IHttpRequest{
    path: string
    method: string
    pathParams: any
    queryParams: any
    body: any
}