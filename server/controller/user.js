import User from "../models/user.js";
import jwt from "jsonwebtoken";

export async function Signup(req, res) {
    const body = req.body;
    if (!body) res.json({ status: "failed", message: "body can not be empty!" });

    const { name, email, password } = body;

    if (password.length < 6){
        res.json({ status: "failed", message: "password length should be greater than 6" })
    }
    else{

        
        try {
            const user = await User.create({
                name: name,
                email: email,
                password: password
            });
            res.json({ status: "success", message: "User created successfully" });
        } catch {
            res.json({ status: "failed", message: "This email is already in use" });
        }
    }
}

export async function Login(req, res) {
    const body = req.body;
    if (!body) res.json({ status: "failed", message: "body can not be empty!" });

    const { email, password } = body;

    try {
        const user = await User.findOne({ email: email });
        if (user.password === password) {
            const token = jwt.sign({id:user.id,email:email,password:password}, process.env.JWT_SECRET);
            res.json({ status: "success", message: "Login successful", token: token });
        } else {
            res.json({ status: "failed", message: "Invalid password" });
        }
    } catch {
        res.json({ status: "failed", message: "User does not exist" });
    }
}
