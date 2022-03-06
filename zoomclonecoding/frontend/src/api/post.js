import { PostGet } from "../types/post";
import { createQueryString } from "../utils/createQueryString.js";
import { getReq } from "../utils/customFetch.js";

export const getPost = async (condition = {}) => {
    return await (await getReq(`/post${createQueryString(PostGet)}`)).json();
};