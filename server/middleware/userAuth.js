import jwt from "jsonwebtoken";
import User from "../models/user.js";``

export default async function userAuth(req, res, next) {
    const token = req.header("token");

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = await User.findById(decoded.id);
    } catch {
        req.user = null;
    }
    next();
}