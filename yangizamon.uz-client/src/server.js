import express from "express"
import { resolve } from "path"
import morgan from "morgan"
import helmet from "helmet"
import "#config/index"
import ejs from "ejs"
import routes from "./routes.js"

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


    try {
        app.listen(PORT, () => {
            console.log(`Server is running on *${PORT}`)
        })
    }catch(error){
        console.log(error)
    }
}()

