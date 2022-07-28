const express = require("express")

const app = express()
let router = require("./router")
const cors  = require("cors")
const bodyParser = require("body-parser")


// 针对于post传擦
app.use(bodyParser.urlencoded({
  extended:true
}))

app.use(cors())
app.use("/api",router)
app.listen(5566,()=>{
  console.log("服务器运行在5566端口");
})