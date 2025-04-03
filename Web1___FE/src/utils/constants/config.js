// Server config
export const {
  REACT_APP_SERVER_BASE_URL,
  REACT_APP_SERVER_AI_URL,
  REACT_APP_TELEGRAM_BOT,
  REACT_APP_TELEGRAM_API_BOT,
} = process.env || {};

// Date time fomart
export const DATETIME_FORMAT = "HH:mm DD-MM-YYYY";
export const DATETIME_FORMAT_MOBILE = "HH:mm DD/MM/YYYY";
export const DATE_FORMAT = "DD-MM-YYYY";
export const DATE_FORMAT_EN = "YYYY-MM-DD";
export const YEAR_MONTH_FORMAT = "YYYY-MM";
export const MONTH_YEAR_FORMAT = "MM-YYYY";
export const TIME_FORMAT = "HH:mm";
export const SECOND_FORMAT = "HH:mm:ss DD-MM-YYYY";
export const DATETIME_REQUEST = "YYYY-MM-DD HH:mm:ss";
export const DATETIME_FORMAT2 = "DD/MM/YYYY HH:mm";
export const DATE_FORMAT_MOBILE = "DD/MM/YYYY";

// Regex
export const EMAIL_PATTERN = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g;
export const PHONE_PATTERN =
  /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
export const PASSWORD_PATTEN = /^(?=.*\d)(?=.*[a-zA-Z]).{8,}$/;

// Common Config
export const AIPT_WEB_TOKEN = "AIPT_WEB_DBMS_TOKEN";
export const SPINNING_SIZE = "large";
export const BTN_SIZE_TABLE = "small";

export const FEEDBACK_LVL = {
  0: "Tốt",
  1: "Khá",
  2: "Trung bình",
  3: "Kém",
};

export const REACTIONS_CHAT = {
  0: "👍",
  1: "❤️",
  2: "😂",
  3: "😢",
  4: "😡",
};

export const ACCEPT_JOB = {
  0: "Tiếp nhận",
  1: "Không tiếp nhận",
};

export const SOLUTION_TYPE = {
  0: "Giải pháp đã có",
  1: "Giải pháp mới",
};

export const PLAN_KD = {
  0: "Dữ liệu sẵn có",
  1: "Dữ liệu mới",
};
export const SOLUTION_TYPE_UPDATE = {
  0: "Giải pháp hiện tại",
  1: "Giải pháp đã có",
};

export const PAGINATION = {
  PAGE_NUM: 1,
  PAGE_SIZE: 10,
};

export const THU_TAB = {
  T_H_PROCEDURE: 1,
  T_T_PROCEDURE: 2,
};
export const REPORT_TAB = {
  WEEK: 1,
  MONTH: 2,
};

export const IMPORT_EXPORT_TAB = {
  THHD: 1,
  IMPORT: 2,
  EXPORT: 3,
};
export const DEFAULT_PAGE_SIZE = 10;
export const PAGE_SIZE_OPTION = [20, 50, 100];

export const DEPARTMENTS_CODE = {
  1: "Phòng kỹ thuật phần mềm",
  2: "Phòng kỹ thuật phần cứng",
  3: "Phòng kỹ thuật sản xuất",
  4: "Phòng xuất nhập khẩu",
  5: "Phòng kế toán",
  6: "Phòng hành chính nhân sự",
  7: "Phòng kinh doanh",
};

export const VEHICLE_STATUS = {
  0: "Chưa sử dụng",
  1: "Đang chờ duyệt",
  2: "Đang sử dụng",
};

export const TYPE_OVER_TIME = {
  0: "Ngày thường",
  1: "Chủ nhật",
  2: "Ngày lễ tết",
};

export const NOTARIZATION_PROCEDURE_TYPES = {
  0: "Công chứng tư",
  1: "Công chứng công",
};

export const TYPE_CV = {
  0: "Hồ sơ thường",
  1: "Hồ sơ tiềm năng",
};

export const EXPERIENCE = {
  0: "Không cần kinh nghiệm",
  1: "Dưới 1 năm",
  2: "Từ 1 đến 2 năm",
  3: "Từ 2 đến dưới 3 năm",
  4: "Từ 3 đến dưới 5 năm",
  5: "Trên 5 năm",
};
export const POINT_RANK = {
  0: "Tốt",
  1: "Khá",
  2: "Trung bình",
  3: "Yếu",
  4: "Kém",
};

export const EVALATE_RANK = {
  1: "Kém",
  2: "Trung bình ",
  3: "Khá",
  4: "Tốt",
  5: "Rất tốt",
};

export const RANK = {
  0: "Không đạt",
  1: "Đạt ",
};
export const IMPORT_TYPE = {
  1: "Nhập tay",
  2: "Nhập excel",
};

export const STATUS_FEEDBACK = {
  NON_FEEDBACK: 0,
  FEEDBACK_V1: 2,
  FEEDBACK_V2: 3,
};

export const TRY_WORK_TIME = {
  0: "30 ngày",
  1: "60 ngày",
  2: "90 ngày",
};

export const EDUCATION_LEVEL = {
  1: "12/12",
  2: "Sơ cấp",
  3: "Trung cấp",
  4: "Cao đẳng",
  5: "Đại học",
  6: "Trên đại học",
};

export const USE_NEEDS = {
  1: "Ngắn hạn",
  2: "Dài hạn",
};

export const GENDER = {
  0: "Nữ",
  1: "Nam",
};

export const INTERVIEW_STATUS = {
  0: "Phỏng vấn vòng 1", //chờ phỏng vấn v1
  1: "Phỏng vấn vòng 2", //chờ phỏng vấn v2
  2: "Đang duyệt", // cho sep duyet
  3: "Đã duyệt ",
  4: "Chờ nhận việc", // cho nhan viec
  5: "Đã nhận việc",
  6: "Không nhận việc",
};

export const INTERVIEW_ACTION = {
  1: "Mời phỏng vấn vòng 2",
  0: "Mời sếp đánh giá ",
};

export const SELECTED_CAR = {
  0: "Không xin xe ",
  1: "Xin xe",
};

export const CHECK_GOODS = {
  0: "Kiểm hàng hợp đồng ",
  1: "Kiểm hàng khác",
};

export const CHECK_DECENTRALIZE = {
  0: "Cá nhân",
  1: "Phòng ban",
};
export const STATUS_MYWORK_TABLE = {
  0: "Từ chối",
  1: "Đang chờ duyệt",
  2: "Hoàn thành",
};

export const CHECK_DEVICE = {
  0: "Thiết bị mới ",
  1: "Thiết bị sẵn kho",
};
export const TYPE_LEAVE = {
  0: "Nghỉ có kế hoạch",
  1: "Nghỉ đột xuất",
};
export const TYPE_FILE = {
  0: "Giữ file cũ ",
  1: "Chọn file mới",
};

export const TYPE_IMPORT = {
  2: "Kiểm hợp đồng ",
  3: "Kiểm kho khác",
  4: "Nhập kho trực tiếp",
};

export const EXPORT_TYPE = {
  0: "Xuất kho hợp đồng ",
  1: "Xuất kho khác",
};
export const PROJECT_TYPE = {
  1: "Chờ duyệt",
  2: "Đang triển khai",
  3: "Hoàn thành",
  4: "Hủy",
  5: "Quá hạn",
  6: "Hoàn thành chậm",
};
export const TASK_TYPE = {
  1: "Chờ triển khai",
  2: "Đang triển khai",
  3: "Hoàn thành",
  4: "Quá hạn",
};

export const COMPLETE_PROJECT_TYPE = {
  3: "Hoàn thành",
  4: "Hủy",
  5: "Giữ trạng thái cũ",
};

export const UPDATE_WORK_STATUS = {
  2: "Giữ trạng thái cũ",
  3: "Hoàn thành",
  4: "Hủy",
  7: "Tạm dừng",
};

export const TYPE_REPORT_PLAN = {
  1: "Phần mềm/cứng dự án",
  2: "Phần mềm phát triển",
  3: "Phần cứng phát triển",
  4: "Kinh doanh",
  5: "Sales admin",
};

export const WORK_TYPE = {
  1: "Chờ xác nhận ",
  2: "Đang triển khai",
  3: "Hoàn thành",
  4: "Hủy",
  5: "Quá hạn",
  6: "Hoàn thành chậm",
  7: "Tạm dừng",
};

export const ATTACHMENT_TYPE = {
  1: "Cấu hình",
  2: "Catalogue TA",
  3: "Catalogue TV",
  4: "Bảng so sánh",
  5: "Thuyết minh",
  // 6: "Báo giá",
  7: "Tài liệu khác",
};

export const RECOMMEND_TYPE = {
  1: "Công làm việc",
  2: "Phút việc riêng",
  3: "Ngày nghỉ phép",
  4: "Ngày công tác",
  5: "Làm thêm giờ ngày thường",
  6: "Làm thêm giờ ngày nghỉ",
};
export const STATUS = {
  ACCEPT: 1,
  REFUSE: 0,
  REFUSE_NOT_SEND_EMAIL: 2,
  REFUSE_PROCEDURE: 2,
  SEND_EMAIL_TO_BOSS: 3,
  RECEIVED_JOB: 4,
};

export const DEATAIL_STATUS = {
  PENDING: 1,
  D_CONFIRMED: 2,
  SUCCESS: 3,
  CANCEL: 4,
  SUPPLIER: 5,
  CONFIRM: 6,
  RECRUITING: 7,
};

export const STATUS_KEEPING = {
  1: "Giờ vào",
  0: "Giờ ra",
};

export const STATUS_FREE_TIME = {
  1: "Được xác nhận",
  0: "Đã từ chối",
};

export const TYPE_DAY = {
  0: "Ngày thường",
  1: "Ngày nghỉ(chủ nhật)",
  2: "Ngày lễ",
};

export const TYPE_KEEPING = {
  0: "Đi công tác",
  1: "Nghỉ phép",
  2: "Việc riêng",
  3: "Làm ngày nghỉ",
};

export const TYPE_UNIT = {
  0: "VND",
  1: "USD",
  2: "EUR",
  3: "GBP",
  4: "JPY",
  // 5: "CNY",
};

export const PROPOSE_STATUS = {
  ACCEPT: 0,
  PROPOSE: 1,
  ACCEPT_PROPOSE: 2,
  REFUSE_PROPOSE: 3,
};

export const PROPOSE_DISPLAY = {
  0: "Đã xác nhận",
  1: "Đã kiến nghị",
  2: "Kiến nghị được duyệt",
  3: "Kiến nghị bị từ chối",
};

export const PRODUCT_IMPORT_TYPE = {
  0: "Hợp đồng",
  1: "Xuất kho",
};

export const PAYMENT_TYPE = {
  1: "Tiền mặt",
  2: "Chuyển khoản",
};
export const CHECK_GOODS_TYPE = {
  1: "Giao cho khách",
  2: "Kiểm và lưu kho",
};
export const PRICE_CONDITION = {
  1: "VAT",
  2: "CIP",
};

export const KT_REPORT = {
  1: "Phần mềm dự án",
  2: "Phần mềm phát triển",
  3: "Phần cứng dự án",
  4: "Phần cứng phát triển",
};
export const KD_REPORT = {
  1: "Nhân viên kinh doanh",
  2: "Sales admin",
};
export const PROTECT_TYPE = {
  1: "Không bảo vệ",
  2: "LOA dự án",
  3: "LOA phân phối",
  4: "LOA phân phối độc quyền",
};
export const TYPE_HD = {
  1: "Thực tập sinh",
  2: "Học việc",
  3: "Thử việc",
  4: "Chính thức",
};
export const COME_TYPE = {
  1: "Vào",
  0: "Ra",
};

export const STATUS_BUSINESS = {
  1: "Chờ xác nhận",
  2: "Đã xác nhận",
  3: "Đã từ chối",
};
