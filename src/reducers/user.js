import * as types from "./../constants/user";
const initialState = {
  isLogin: true,
  currentUser: {
    id: "aunguyenuit@gmail.com",
    email: "aunguyenuit@gmail.com",
    name: "Văn Âu",
    surname: "Nguyễn",
    password: "kim yen 0211",
    address: "Thôn An Đồng - Xã Trung Sơn - Huyện Gio Linh - Tỉnh Quảng Trị",
    phoneNum: "0989520167",
    gender: "male",
    province: 238,
    district: 1936,
    avatar:
      "https://is3-ssl.mzstatic.com/image/thumb/Purple123/v4/c1/85/a9/c185a9f7-09a5-94ef-5726-21a9084fde09/source/256x256bb.jpg",
  },
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.USER_PENDING:
      return { isLogin: false, currentUser: {} };
    case types.REGISTER_USER_SUCCESS:
      return { isLogin: true, currentUser: action.payload };
    case types.REGISTER_USER_FAILED:
      return { isLogin: false, currentUser: {} };

    case types.LOGIN_USER_SUCCESS:
      return { isLogin: true, currentUser: action.payload };
    case types.LOGIN_USER_FAILED:
      console.log(action.payload);
      return { isLogin: false, currentUser: {} };
    default:
      return state;
  }
};

export default userReducer;
