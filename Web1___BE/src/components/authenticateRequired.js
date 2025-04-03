import jwt from "jsonwebtoken";

function authenticateRequired(req, res, next) {
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(' ')[1];

    // Kiểm tra xem token có tồn tại không
    if (!token) {
        return res.status(401).json({ message: "Truy cập bị từ chối: Không có token!" });
    }

    try {
        // Xác minh và giải mã token
        const user = jwt.verify(token, process.env.ACCESS_TOKEN_SECRET);

        // Lưu thông tin người dùng vào request object để sử dụng ở các middleware sau
        req.user = user;

        // Chuyển tiếp đến middleware tiếp theo
        next();
    } catch (err) {
        // Nếu token không hợp lệ hoặc hết hạn
        return res.status(403).json({ message: "Truy cập bị từ chối: Token không hợp lệ!" });
    }
}

export default authenticateRequired;
