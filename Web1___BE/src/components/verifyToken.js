import jwt from "jsonwebtoken";

// Giả sử bạn có một function kiểm tra danh sách đen
async function isTokenBlacklisted(token) {
    // Logic kiểm tra token trong danh sách đen
    return false; // Trả về true nếu token bị blacklist
}

function verifyToken(req, res, next) {
    const token = req.headers['authorization'];

    if (!token) {
        return res.status(403).send('Token is required');
    }

    jwt.verify(token, 'secretkey', async (err, decoded) => {
        if (err) {
            return res.status(403).send('Invalid token');
        }

        // Kiểm tra token trong danh sách đen
        const blacklisted = await isTokenBlacklisted(token);
        if (blacklisted) {
            return res.status(403).send('Token has been blacklisted');
        }

        req.user = decoded; // Lưu thông tin giải mã token vào req.user
        next();
    });
};

export default verifyToken;
