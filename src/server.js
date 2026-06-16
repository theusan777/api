import http from "node:http"
import { jsonHandler } from "./middlewares/jsonHandler.js"

const server = http.createServer(async (req, res) => {
   const { method, url } = req

   const body = await jsonHandler(req, res)
   if (body === null) return

   if (method === "GET" && url === "/products") {
      return res.writeHead(200).end("Product list")
   }

   if (method === "POST" && url === "/products") {
      return res.writeHead(201).end(JSON.stringify(req.body))
   }

   return res.writeHead(404).end("Not found")
})

server.listen(3333)

