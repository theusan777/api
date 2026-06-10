import http from "node:http"

const server = http.createServer((req, res) => {
   return res.end("Meu primeiro projeto com Node.js")
})

server.listen(3333)

