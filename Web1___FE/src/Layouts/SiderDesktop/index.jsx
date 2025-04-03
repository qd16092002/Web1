import "./index.scss";
import classNames from 'classnames/bind';
import styles from './SiderDesktop.module.sass';
import { findChildByName, isEmpty } from "utils/helps"
import { Link, useLocation } from "react-router-dom"
import pages from "pages"
import { IconNavbarLogout, IconNavbarUser } from "assets/svgs";
import { useDispatch, useSelector } from "react-redux";
import Cookies from "js-cookie";
import { SET_PROFILE } from "utils/constants/redux-actions";
import { AIPT_WEB_TOKEN } from "utils/constants/config";
import logo from "assets/images/logoVoice.png"

const cx = classNames.bind(styles);
const SiderDesktop = () => {
  const userLogin = useSelector((state) => state?.profile);
  const dispatch = useDispatch();
  const currentPath = useLocation().pathname
  // menu items
  const items = pages.filter(page => page?.auth === true && page?.label && !page?.parent)
    .map(page => {
      const children = findChildByName(page?.name)
      let item = {
        key: page?.name,
        icon: page?.icon,
        iconactive: page?.iconActive,
        label: page?.label,
        url: page?.path
      }

      if (!isEmpty(children)) {
        item.children = children
      }
      return item
    });
  const handleLogout = () => {
    dispatch({ type: SET_PROFILE, payload: {} });
    Cookies.remove(AIPT_WEB_TOKEN);
    window.navigatePage("login");
  };
  return (
    <div className={cx("navbar")}>
      <div style={{ display: 'grid', alignContent: 'flex-start', gap: '12px' }}>
        <div className={cx('navbar_logo')}>
          <img className={cx('navbar_logo_image')} src={logo} alt="logo" />
        </div>
        <div className={cx("menu")}>
          {items.map((page, index) => {
            return (
              <Link to={page.url} key={index} className={cx(currentPath === page.url ? "items_active" : "items_inactive")}>
                {currentPath === page.url ? page.iconactive : page.icon}
                {page.label}
              </Link>
            )
          })}
        </div>
      </div>
      <div className={cx('footer_navbar')}>
        <div className={cx('footer_navbar_line')}>
        </div>
        <div className={cx('footer_navbar_content')}>
          <div className={cx('footer_navbar_content_left')}>
            <IconNavbarUser />
            <div className={cx('footer_navbar_content_left_title')}>{userLogin?.email}</div>
          </div>
          <button onClick={handleLogout} className={cx('footer_navbar_content_right')}>
            <IconNavbarLogout />
          </button>
        </div>
      </div>
    </div>
  )
}

export default SiderDesktop