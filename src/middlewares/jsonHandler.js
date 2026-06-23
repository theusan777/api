export async function jsonHandler(req, res) {
   if (req.method === "GET" || req.method === "DELETE") {
      req.body = null
      return req.body
   }

   const buffers = []

   for await (const chunk of req) {
      buffers.push(chunk)
   }

   if (buffers.length === 0) {
      req.body = null
      return req.body
   }

   try {
      req.body = JSON.parse(Buffer.concat(buffers).toString())
      return req.body
   } catch (error) {
      const payload = { message: "Invalid JSON" }
      res.writeHead(400, { "Content-Type": "application/json" }).end(JSON.stringify(payload))
      return null
   }
}
