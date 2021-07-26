import jwt from "jsonwebtoken"

const authentificate = roles => async (req, res, next) => {
    const token = req.headers.authorization
    try {
        const payload = await jwt.verify(token, process.env.SECRET)
        if (!payload) return res.status(401).end()
        if (roles.indexOf(payload.role) === -1) return res.status(401).end()
        req.payload = payload
        next()
    } catch {
        return res.status(401).end()
    }
}

export default authentificate