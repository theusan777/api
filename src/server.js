import http from "node:http"

const server = http.createServer((req, res) => {
   const { method, url } = req

   if (method === "GET" && url === "/products") {
      return res.writeHead(200).end("Product list")
   }

   if (method === "POST" && url === "/products") {
      return res.writeHead(201).end("Product created")
   }

   return res.writeHead(404).end("Not found")
})

server.listen(3333)

