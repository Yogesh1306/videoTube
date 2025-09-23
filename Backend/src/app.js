import express from "express"

const app = express()

app.use(express.json())

import userRoutes from "./routes/users.routes.js"
import videoRoutes from "./routes/videos.routes.js"
import commentRoutes from "./routes/comments.routes.js"

app.use("/api/v1/users", userRoutes)
app.use("/api/v1/videos", videoRoutes)
app.use("/api/v1/comments", commentRoutes)



export {app}