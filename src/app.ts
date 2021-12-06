import express, { urlencoded } from 'express'
import path  from 'path'
import balanceHandler from './balance/balance.routes'


const app = express()

//config
app.set('port',process.env.PORT || 3000)
app.use(express.json())
app.use(urlencoded({extended:true}))
app.use(
    express.static(path.join(__dirname, "../public"), { maxAge: 31557600000 })
);

//routing
app.use('/api/balances', balanceHandler)


export default app;



