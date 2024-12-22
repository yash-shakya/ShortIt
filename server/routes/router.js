import urlRoute from "./urlRoute.js";
import userRoute from "./userRoute.js";
import userAuth from "../middleware/userAuth.js";

function routes(app){
    app.use("/",userAuth,urlRoute)
    app.use("/user",userRoute)
}

export default routes;