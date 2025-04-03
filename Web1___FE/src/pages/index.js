// imports page
import LoginDesktop from "./LoginDesktop";

/** pages
 * page hiển thị trên menu thi có thêm 2 thuộc tính icon và label
 * page không hiển thị trên menu bỏ icon và lable
 */

const pages = [
  {
    name: "login",
    path: "/",
    auth: false,
    elementDesktop: <LoginDesktop />,
  },
];

export default pages;
