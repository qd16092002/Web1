import api from "utils/service/api"
import * as actions from 'utils/constants/redux-actions'

export const actionGetNotification = () => {
  return api({
    method: "GET",
    url: "/get-notifications-by-user",
  })
}

export const actionChangePassword = (data) => {
  return api({
    method: "POST",
    url: "/change-password",
    data
  })
}

export const actionChangeNotificationStatus = (id) => {
  return api({
    method: "PUT",
    url: `/change-notification-status/${id}`,
  })
}

export const actionGetNotificationNotApproved = () => {
  return api({
    method: "GET",
    url: `/number-of-pending-procedure`,
  })
}
export const actionGetNoticePins = async (dispatch) => {
  try {
    // get user info
    const { status, data } = await api({
      method: "GET",
      url: "/number-of-pending-procedure"
    })

    // set profile state
    if (status === 200) {
      dispatch({ type: actions.SET_NOTICE_PIN, payload: data })
    }
  } catch (error) {
    console.log(error)
  }
}