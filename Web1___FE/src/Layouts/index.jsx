
import SiderDesktop from "./SiderDesktop";
import PageContent from "routes";
import { Layout } from "antd";
import HeaderDesktop from "./HeaderDesktop";

const DesktopLayout = ({ isPublicPage }) => {
  return (
    <Layout hasSider id="app">
      {!isPublicPage && <SiderDesktop />}
      <Layout >
        {!isPublicPage && <HeaderDesktop />}
        <PageContent />
      </Layout>
    </Layout>
  );
}

export default DesktopLayout;