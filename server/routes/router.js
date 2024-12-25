import urlRoute from "./urlRoute.js";
import userRoute from "./userRoute.js";
import userAuth from "../middleware/userAuth.js";

function routes(app){
    app.use("/api",userAuth,urlRoute)
    app.use("/api/user",userRoute)
}

export default routes;