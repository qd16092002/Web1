import jwt from "jsonwebtoken";

function authenticateToken(req, res, next) {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1]; // Tách "Bearer" và token
    if (!token) {
        console.log("Authorization Header Missing or Undefined:", authHeader);
        return res.status(401).json({ message: "Access Denied: No Token Provided!" });
    }
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, user) => {
        if (err) {
            console.error("JWT Verification Error:", err.message);
            return res.status(403).json({ message: "Invalid or Expired Token" });
        }

        req.user = user; // Lưu thông tin người dùng vào request
        next(); // Tiếp tục
    });
}




export default authenticateToken;
