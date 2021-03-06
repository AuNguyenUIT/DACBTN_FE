import axiosService from "../Commons/axiosService";
import { API_ENDPOINT } from "../constants/index";
import qs from "query-string";

const url = "detailOrder";

export const getItemsOrder = (params = {}) => {
  let queryParams = "";
  if (Object.keys(params).length > 0) {
    queryParams = `?${qs.stringify(params)}`;
  }
  return axiosService.get(`${API_ENDPOINT}/${url}${queryParams}`);
};

export const addDetailOrder = (payload = {}) => {
  return axiosService.post(`${API_ENDPOINT}/${url}`, payload);
};

