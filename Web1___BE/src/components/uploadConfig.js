import multer from 'multer';
import path from 'path';

// Cấu hình lưu trữ file
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads/assetdevice/');  // Đường dẫn lưu trữ file
    },
    filename: (req, file, cb) => {
        cb(null, Date.now() + path.extname(file.originalname));  // Tên file sẽ là thời gian + phần mở rộng
    }
});

// Kiểm tra định dạng file
const fileFilter = (req, file, cb) => {
    const filetypes = /pdf|excel|png|jpg|docx|txt/;
    const extname = filetypes.test(path.extname(file.originalname).toLowerCase());
    const mimetype = filetypes.test(file.mimetype);

    if (extname && mimetype) {
        return cb(null, true); // Chấp nhận file
    } else {
        cb('Error: File not supported!'); // Từ chối file không hợp lệ
    }
};

// Khởi tạo multer với các tùy chọn trên
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 10 * 1024 * 1024 } // Giới hạn dung lượng file tối đa 10MB
});
export default upload