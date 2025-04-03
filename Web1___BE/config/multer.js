import multer from 'multer';
import path from 'path';

// Cấu hình nơi lưu trữ file upload
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        // Thư mục lưu file sẽ là 'uploads'
        cb(null, './uploads'); 
    },
    filename: (req, file, cb) => {
        // Tạo tên file duy nhất bằng cách sử dụng timestamp
        cb(null, Date.now() + path.extname(file.originalname)); 
    }
});

// Hạn chế loại file upload (chỉ cho phép .xlsx và .xls)
const fileFilter = (req, file, cb) => {
    const ext = path.extname(file.originalname);
    if (ext === '.xlsx' || ext === '.xls') {
        cb(null, true); // Cho phép file
    } else {
        cb(new Error('Chỉ chấp nhận file .xlsx và .xls'), false); // Từ chối file không hợp lệ
    }
};

// Cấu hình multer với các lựa chọn
const upload = multer({
    storage: storage,
    fileFilter: fileFilter,
    limits: { fileSize: 5 * 1024 * 1024 } // Giới hạn kích thước file (ở đây là 5MB)
});

export default upload;
