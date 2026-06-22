import { parseRoutePath } from "./utils/parseRoutePath.js"

export const routes = [
  {
    method: "GET",
    path: "/products",
    handler: (req, res) => {
     return res.writeHead(200).end("Product list")
    },
  },
  {
    method: "POST",
    path: "/products",
    handler: (req, res) => {
    return res.writeHead(201).end(JSON.stringify(req.body))
    },
  }, 

  {
    method: "DELETE",
    path: "/products/:id",
    handler: (req, res) => {
      return res.writeHead(200).end("Product removed with ID: " + req.params.id)
    }
  }
].map((route) => ({
  ...route,
  path: parseRoutePath(route.path),
}))

  