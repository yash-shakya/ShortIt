import shortid from "shortid";
import URL from "../models/shorturls.js";

export async function shortUrl(req, res) {
    const body = req.body;
    const user = req.user;


    if (!body) res.json({ status: "failed", message: "url can not be empty!" });

    let short=null;
    const { mainUrl, shortUrl } = body;

    if (!shortUrl) {short = shortid();}
    else {short = shortUrl;}

    try {
        const result = await URL.create({
            mainUrl: mainUrl,
            shorturl: short
        })
        if (user) {
            await user.shortUrls.push(result.id);
            await user.save();
        }
        res.json({ status: "success", message: `Your short Url is http://localhost:5173/${short}`, url:short })
    } catch {
        res.json({ status: "failed", message: "Custom ID already used, Enter unique custom id" });
    }
}

export async function redirectToUrl(req, res) {
    const shortId = req.params.shortId;

    if (!shortId) res.json({ status: "failed", message: "Invalid URL" });

    try {
        const response = await URL.findOne({ shorturl: shortId });
        res.json({url:response.mainUrl});
    } catch {
        res.json({ status: "failed", message: "Invalid Short Id" });
    }

}

export async function getUrls(req, res) {
    const user = req.user;
    if (!user) res.json({ status: "failed", message: "User not found" });

    else{

        const urlIdArray = user.shortUrls;
        
        try {
            const urlArray = await Promise.all(
                urlIdArray.map(async (id) => {
                    return await URL.findById(id);
                })
            );
            res.json({status:"success", data:urlArray})
        } catch {
            res.json({ status: "failed", message: "No urls found" });
        }
    }
}

export async function getUser(req, res) {
    const user = req.user;
    if (!user) res.json({ status: "failed", message: "User not found" });
    else{
        res.json(user);
    }
}