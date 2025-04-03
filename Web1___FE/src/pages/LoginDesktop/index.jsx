import classNames from "classnames/bind";
import styles from "./LoginDesktop.module.sass";
import { useState } from "react";
import { SpinCustom } from "components";
import { actionGetDataBase1, actionGetDataBase2 } from "./actions";

const cx = classNames.bind(styles);
const LoginDesktop = () => {
  const [spinning, setSpinning] = useState(false);
  const [database1, setDatabase1] = useState();
  const [database2, setDatabase2] = useState();
  const handleGetDataBase1 = async () => {
    setSpinning(true);

    try {
      const { data, status } = await actionGetDataBase1();
      if (status === 200) {
        setDatabase1(data);
      }
    } catch (error) {
      console.log(error);
    }
    setSpinning(false);
  };
  const handleGetDataBase2 = async () => {
    setSpinning(true);

    try {
      const { data, status } = await actionGetDataBase2();
      if (status === 200) {
        setDatabase2(data);
      }
    } catch (error) {
      console.log(error);
    }
    setSpinning(false);
  };
  return (
    <SpinCustom spinning={spinning}>
      <div className={cx("wallpapper")}>
        <div className={cx("wallpapper2")}>
          <div onClick={handleGetDataBase1} className={cx("button")}>
            Lấy danh sách user từ DB 1
          </div>
          {database1 && (
            <>
              {database1?.users.map((value, index) => {
                return (
                  <div key={index}>
                    {value?.email}
                    {value?.fullName}
                  </div>
                );
              })}
            </>
          )}
        </div>
        <div className={cx("wallpapper2")}>
          <div onClick={handleGetDataBase2} className={cx("button")}>
            Lấy danh sách user từ DB 2
          </div>
          {database2 && (
            <>
              {database2?.users.map((value, index) => {
                return (
                  <div key={index}>
                    {value?.email}
                    {value?.fullName}
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </SpinCustom>
  );
};

export default LoginDesktop;
