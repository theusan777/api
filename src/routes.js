import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
  {
    method: "GET",
    path: "/products",
    handler: (req, res) => {
     return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(req.query))
    },
  },
  {
    method: "POST",
    path: "/products",
    handler: (req, res) => {
    return res.writeHead(201, { "Content-Type": "application/json" }).end(JSON.stringify(req.body))
    },
  }, 

  {
    method: "DELETE",
    path: "/products/:id",
    handler: (req, res) => {
      return res.writeHead(200, { "Content-Type": "text/plain" }).end("Product removed with ID: " + req.params.id)
    }
  }
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))

  