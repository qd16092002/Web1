import { Layout } from "antd";
import "./index.scss";

const HeaderDesktop = () => {
  return (
    <Layout.Header className="app-header">
      <div className="app-header--left">
        <span className="app-header--title hidden-mobile">
          VoiceMasterAI v3
        </span>
      </div>
      <div className="app-header--right"></div>
    </Layout.Header>
  );
};

export default HeaderDesktop;
