import { useMemo } from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { findPageByPath } from "utils/helps";
import { AIPT_WEB_TOKEN } from "./utils/constants/config";
import navigatePage from "utils/helps/navigate";
import pages from "pages";
import Cookies from "js-cookie";
import DesktopLayout from "./Layouts";
const App = () => {
  const navigate = useNavigate();
  window.navigatePage = (name, params = {}, query = {}) =>
    navigatePage(navigate, name, params, query);
  const token = Cookies.get(AIPT_WEB_TOKEN);
  const currentPath = useLocation().pathname;

  const isPublicPage = useMemo(() => {
    const page = findPageByPath(currentPath, pages);
    return !page?.auth;
  }, [currentPath]);
  // useEffect(() => {
  //   if (!isEmpty(userProfile)) {
  //     // connect socket
  //     connectSocket()

  //     // join
  //     const _token = Cookies.get(AIPT_WEB_TOKEN)
  //     setTimeout(() => socketIO.emit('join', _token), 500)
  //   }
  // }, [userProfile])
  return (
    <>
      <DesktopLayout isPublicPage={isPublicPage} />
    </>
  );
};

export default App;
