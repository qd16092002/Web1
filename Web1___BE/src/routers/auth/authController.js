import User1 from "../../Data/UserDB1/index.js";
import User2 from "../../Data/UserDB2/index.js";
//Đăng ký tài khoản
export const postSignUp = async (req, res) => {
  try {
    const { email, fullName } = req.body;
    // Kiểm tra email đã được sử dụng chưa
    const user = await User1.findOne({ email });
    if (user) {
      return res.status(400).send("Email này đã được sử dụng");
    }
    // Tạo tài khoản mới
    const newUser = new User1({
      email,
      fullName,
    });

    // Lưu vào cơ sở dữ liệu
    const insert = await newUser.save();
    return res.json({
      message: "Đăng ký người dùng thành công",
      userId: insert._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
export const postSignUp2 = async (req, res) => {
  try {
    const { email, fullName } = req.body;
    // Kiểm tra email đã được sử dụng chưa
    const user = await User2.findOne({ email });
    if (user) {
      return res.status(400).send("Email này đã được sử dụng");
    }
    // Tạo tài khoản mới
    const newUser = new User2({
      email,
      fullName,
    });

    // Lưu vào cơ sở dữ liệu
    const insert = await newUser.save();
    return res.json({
      message: "Đăng ký người dùng thành công",
      userId: insert._id,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
// Lấy toàn bộ danh sách user
export const getAllUser1 = async (req, res) => {
  try {
    const users = await User1.find();
    // Chuẩn bị dữ liệu trả về
    res.status(200).json({
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    // Xử lý lỗi và trả về phản hồi
    res.status(500).json({ message: error.message });
  }
};
export const getAllUser2 = async (req, res) => {
  try {
    const users = await User2.find();
    // Chuẩn bị dữ liệu trả về
    res.status(200).json({
      totalUsers: users.length,
      users,
    });
  } catch (error) {
    // Xử lý lỗi và trả về phản hồi
    res.status(500).json({ message: error.message });
  }
};
