import { useSelector } from "react-redux";
import { isEmpty } from "utils/helps";
import pages from "pages";
import { Routes, Route } from "react-router-dom";

const PageContent = () => {
  const userLogin = useSelector((state) => state?.profile);
  return (
    <Routes>
      {pages
        .filter((page) => (!isEmpty(userLogin) ? page : !page?.auth))
        .map((page, index) => (
          <Route key={index} path={page.path} element={page?.elementDesktop} />
        ))}
    </Routes>
  );
};

export default PageContent;
