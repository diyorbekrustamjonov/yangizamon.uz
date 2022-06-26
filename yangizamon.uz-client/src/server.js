import express from "express"
import { resolve } from "path"
import routes from "./routes.js"
import helmet from "helmet"
import ejs from "ejs"

import "#config/index"

!async function () {
    const app = express()
    const PORT = process.env.PORT ?? 4000

    // express json parser
    app.use(express.json())

    // static files
    app.use(express.static(resolve(process.cwd(), "src", "assets")))

    // EJS template engine
    app.engine("html", ejs.renderFile)
    app.set("view engine", "html")
    app.set("views", resolve(process.cwd(), "src", "views"))

    // routes
    app.use(routes)

    // Helmet settings
    app.use(helmet())

    try {
        app.listen(PORT, () => {
            console.log(`Server is running on *${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}()

