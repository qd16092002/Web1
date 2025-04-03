import {
  REACT_APP_SERVER_BASE_URL,
  AIPT_WEB_TOKEN,
  PROJECT_TYPE,
  TASK_TYPE,
  WORK_TYPE,
  STATUS_MYWORK_TABLE,
  REACT_APP_SERVER_AI_URL,
} from "utils/constants/config";
import Cookies from "js-cookie";
import pages from "pages";
import { Tag } from "antd";

const has = Object.prototype.hasOwnProperty;

export const isEmpty = (prop) => {
  return (
    prop === null ||
    prop === undefined ||
    (has.call(prop, "length") && prop.length === 0) ||
    (prop.constructor === Object && Object.keys(prop).length === 0) ||
    `${prop}`.toLocaleLowerCase() === "null"
  );
};

export const getRouterParams = (path, params) => {
  if (!isEmpty(params)) {
    Object.keys(params).forEach((key) => {
      path = path.replace(`:${key}`, params[key]);
    });
  }

  return path;
};

export const memberUtils = {
  colors: ["#f56a00", "#87d068", "#fde3cf", "#e4a0c4", "#a289c2"],

  removeAccents: (str) => {
    return str.normalize("NFD").replace(/[\u0300-\u036f]/g, "");
  },

  getInitials: (name) => {
    const nameParts = name.trim().split(" ");
    const firstLetter = memberUtils.removeAccents(nameParts[0][0]);
    const lastLetter = memberUtils.removeAccents(
      nameParts[nameParts.length - 1][0]
    );
    return `${firstLetter}${lastLetter}`;
  },

  randomColor: () => {
    return memberUtils.colors[
      Math.floor(Math.random() * memberUtils.colors.length)
    ];
  },
};

export const convertQueryToString = (routerPath, query) => {
  if (typeof query === "object" && !isEmpty(query)) {
    const querys = [];
    Object.keys(query).forEach((key) => {
      querys.push(`${key}=${query[key]}`);
    });
    return `${routerPath}?${querys.join("&")}`;
  }
  if (typeof query === "string") {
    return `${routerPath}${query}`;
  }
  return routerPath;
};

export const findPageByPath = (currentPath, pages = []) => {
  const page = pages.find((page) => {
    const path = new RegExp(
      "^" + page.path.replace(/:[^/]+/g, "([^/]+)") + "$"
    );
    return path.test(currentPath);
  });
  return page;
};

// export const findChildByName = (name) => {
//   return pages.filter(page => page?.parent === name).map(page => ({
//     key: page?.name,
//     icon: page?.icon,
//     label: page?.label,
//   }))
// }

export const findChildByName = (name) => {
  // cha: cấp 1
  // con: cấp 2
  // cháu: cấp 3

  // Hàm để tìm tất cả các phần tử con
  const findChildren = (parentName) => {
    const children = pages
      .filter((page) => page.parent === parentName)
      .map((page) => ({
        key: page.name,
        icon: page.icon,
        label: page.label,
        // Tìm các phần tử cấp con cho phần tử cấp 2 hiện tại
        ...(findChildren(page.name).length > 0
          ? { children: findChildren(page.name) }
          : {}),
      }));
    return children;
  };

  // Tìm tất cả các phần tử có tên parent trùng với `name`
  return pages
    .filter((page) => page.parent === name)
    .map((page) => ({
      key: page.name,
      icon: page.icon,
      label: page.label,
      // Tìm các phần tử cháu
      ...(findChildren(page.name).length > 0
        ? { children: findChildren(page.name) }
        : {}),
    }));
};

export const getFormatFunction = (unit, value) => {
  switch (unit) {
    case "0":
      return formatCurrency(value || 0);
    case "1":
      return formatCurrencyUSD(value || 0);
    case "2":
      return formatCurrencyEUR(value || 0);
    case "3":
      return formatCurrencyGBP(value || 0);
    case "4":
      return formatCurrencyJPY(value || 0);
    default:
      return formatCurrency(value || 0);
  }
};

export const formatCurrency = (number) => {
  let s = number;
  // let s = parseInt(number)
  s = new Intl.NumberFormat("vi-VN", {
    style: "currency",
    currency: "VND",
  }).format(s);
  return s;
};

export const formatCurrencyUSD = (number) => {
  number = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 3,
  }).format(number);
  return number;
};
export const formatCurrencyEUR = (number) => {
  number = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "EUR",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 3,
  }).format(number);
  return number;
};

export const formatCurrencyGBP = (number) => {
  number = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "GBP",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 3,
  }).format(number);
  return number;
};

export const formatCurrencyJPY = (number) => {
  number = new Intl.NumberFormat("ja-JP", {
    style: "currency",
    currency: "JPY",
    currencyDisplay: "narrowSymbol",
    maximumFractionDigits: 3,
  }).format(number);
  return number;
};

export const formatVND = (value) => {
  if (!value) return "";
  const formattedValue = value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return `${formattedValue} VND`;
};

export const IsJsonString = (str) => {
  try {
    var json = JSON.parse(str);
    return typeof json === "object";
  } catch (e) {
    return false;
  }
};

export const GetTelegramUser = (data) => {
  try {
    let temp = [];

    data?.result?.forEach((element) => {
      const chat = !isEmpty(element?.message)
        ? element?.message.chat
        : element?.my_chat_member.chat;
      if (!temp.find((t) => t?.id === chat?.id)) {
        temp.push(chat);
      }
    });
    return temp;
  } catch (error) {
    console.log(error);
  }
};

export const getServerBaseUrl = () => {
  if (!isEmpty(REACT_APP_SERVER_BASE_URL)) {
    return REACT_APP_SERVER_BASE_URL;
  }

  return null;
};

export const getServerAIUrl = () => {
  if (!isEmpty(REACT_APP_SERVER_AI_URL)) {
    return REACT_APP_SERVER_AI_URL;
  }

  return null;
};

export const getFullUrlStaticFile = (path) => {
  const server_url = getServerBaseUrl();
  let url = `${path}`
    .replace("_internal\\", "")
    .replace("_internal/", "")
    .replace("server\\", "")
    .replace("server/", "")
    .replace("src\\", "")
    .replace("src/", "");

  if (server_url) {
    url = `${server_url}/${url}`;
  }

  return url;
};
console.log(1);

export const getUrlToOff = (path) => {
  let url = getFullUrlStaticFile(path);

  if (isEmpty(REACT_APP_SERVER_BASE_URL)) {
    url = `${window.location.origin}/${url}`;
  }

  return url;
};

export const getUrlUserAvatar = () => {
  const token = Cookies.get(AIPT_WEB_TOKEN);
  const path = `/get-user-avatar/${token}`;

  return getFullUrlStaticFile(path);
};

export const handleSetUrlParam = (key, value) => {
  // lấy ra đường dẫn
  let currentUrl = new URL(window.location.href);

  // sử dụng search params
  let searchParams = new URLSearchParams(currentUrl.search);
  searchParams.set(key, value);

  // cập nhật lại key
  if (isEmpty(value)) {
    searchParams.delete(key);
  } else {
    searchParams.set(key, value);
  }

  // cập nhật lại dường dẫn
  let newUrl = `${currentUrl.origin}${
    currentUrl.pathname
  }?${searchParams.toString()}`;
  window.history.pushState(null, null, newUrl);
};

export const setFormListItemValue = (form, item_name, name, index, value) => {
  const items = form.getFieldValue(item_name);
  items[index][name] = value;
  form.setFieldsValue({ item_name: items });
};

export const handleGetProcedureStatusClassName = (status_code) => {
  switch (status_code) {
    case "PENDING":
      return "process--waiting";
    case "D_CONFIRMED":
      return "process--waiting";

    case "SUCCESS":
      return "process--success";

    case "CANCEL":
      return "process--cancel";

    case "CONFIRMED":
      return "process--success";

    case "SUPPLIER":
      return "process--success";

    default:
      return "process";
  }
};

export const handleGetStatusProcedured = (v, r) => {
  // console.log(v, r);

  switch (v) {
    case "PENDING":
      return <Tag color="warning">{r?.status}</Tag>;
    case "D_CONFIRMED":
      return <Tag color="warning">{r?.status}</Tag>;

    case "SUCCESS":
      return <Tag color="success">{r?.status}</Tag>;

    case "CANCEL":
      return <Tag color="#e31a1c">{r?.status}</Tag>;

    case "CONFIRMED":
      return <Tag color="success">{r?.status}</Tag>;

    case "SUPPLIER":
      return <Tag color="success">{r?.status}</Tag>;

    default:
      return "process";
  }
};

export const handleGetProcedureProject = (status_code) => {
  switch (status_code) {
    case 1:
      return <Tag color="warning">{PROJECT_TYPE[String(status_code)]}</Tag>;

    case 2:
      return <Tag color="processing">{PROJECT_TYPE[String(status_code)]}</Tag>;

    case 3:
      return <Tag color="success">{PROJECT_TYPE[String(status_code)]}</Tag>;

    case 4:
      return <Tag color="#A9A9A9">{PROJECT_TYPE[String(status_code)]}</Tag>;

    case 5:
      return <Tag color="#f50">{PROJECT_TYPE[String(status_code)]}</Tag>;

    case 6:
      return <Tag color="purple">{PROJECT_TYPE[String(status_code)]}</Tag>;

    default:
      return "process";
  }
};

export const handleGetProcedureWork = (status_code) => {
  switch (status_code) {
    case 1:
      return <Tag color="warning">{WORK_TYPE[String(status_code)]}</Tag>;

    case 2:
      return <Tag color="processing">{WORK_TYPE[String(status_code)]}</Tag>;

    case 3:
      return <Tag color="success">{WORK_TYPE[String(status_code)]}</Tag>;

    case 4:
      return <Tag color="#A9A9A9">{WORK_TYPE[String(status_code)]}</Tag>;

    case 5:
      return <Tag color="#f50">{WORK_TYPE[String(status_code)]}</Tag>;

    case 6:
      return <Tag color="cyan">{WORK_TYPE[String(status_code)]}</Tag>;

    case 7:
      return <Tag color="purple">{WORK_TYPE[String(status_code)]}</Tag>;

    default:
      return "process";
  }
};

export const handleGetStatusTask = (status_code) => {
  switch (status_code) {
    case 1:
      return <Tag color="warning">{TASK_TYPE[String(status_code)]}</Tag>;

    case 2:
      return <Tag color="processing">{TASK_TYPE[String(status_code)]}</Tag>;

    case 3:
      return <Tag color="success">{TASK_TYPE[String(status_code)]}</Tag>;

    case 4:
      return <Tag color="#f50">{TASK_TYPE[String(status_code)]}</Tag>;

    default:
      return "process";
  }
};

export const handleGetMyWork = (status_id) => {
  switch (status_id) {
    case 0:
      return (
        <Tag color="#e31a1c">{STATUS_MYWORK_TABLE[String(status_id)]}</Tag>
      );

    case 1:
      return (
        <Tag color="warning">{STATUS_MYWORK_TABLE[String(status_id)]}</Tag>
      );

    case 2:
      return (
        <Tag color="success">{STATUS_MYWORK_TABLE[String(status_id)]}</Tag>
      );

    default:
      return "process";
  }
};

export const range = (start = 0, end = 0) => {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
};

export const convertMinutesToHoursAndMinutes = (minutes) => {
  const hours = Math.floor(minutes / 60);
  const remainingMinutes = minutes % 60;
  return `${hours} giờ - ${remainingMinutes} phút`;
};
