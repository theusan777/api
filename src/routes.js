import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
  {
    method: "GET",
    path: "/products",
    handler: ({req, res, database}) => {
     return res.writeHead(200, { "Content-Type": "application/json" }).end(JSON.stringify(database.select("products", req.query)))
    },
  },
  {
    method: "POST",
    path: "/products",
    handler: ({req, res, database}) => {
    const { name, price } = req.body
    database.insert("products", { id: Date.now(), name, price })
    return res.writeHead(201, { "Content-Type": "application/json" }).end(JSON.stringify({ id: Date.now(), name, price }))
    },
  }, 

  {
    method: "DELETE",
    path: "/products/:id",
    handler: ({req, res, database}) => {
      database.delete("products", req.params.id)
      return res.writeHead(200, { "Content-Type": "text/plain" }).end("Product removed with ID: " + req.params.id)
    }
  }
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))

  