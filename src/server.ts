import app from "./app";



const server = app.listen(app.get('port'), ()=>{
    console.log("Server running on port %d in %s mode",app.get('port'),'Dev')
})

export default server