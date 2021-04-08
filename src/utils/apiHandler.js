import Axios from "axios";
import {config} from "../config";

// Create axios instances called instance
const instance = Axios.create({
    baseURL: `${config.BASE_URL}`,
    headers: {
        "Content-Type": "application/json",
    },
});

//  Axios GET instance
export const getRequest = async (url) => {
    let response;
    try {
        response = await instance({
            "method": "GET",
            "url": `${url}`,
            transformResponse: [function (responseData) {
                // Do whatever you want to transform the data
                return JSON.parse(responseData);
            }],
        });
    } catch (error) {
        return error.response;
    }
    return response;
};

//  Axios POST instance
export const postRequest = async (url, data) => {
    let response;
    try {
        response = await instance({
            "method": "POST",
            "url": `${url}`,
            data: data,
            transformResponse: [function (responseData) {
                // Do whatever you want to transform the data
                return JSON.parse(responseData);
            }],
        });
    } catch (error) {
        return error.response;
    }
    return response;
};

//  Axios UPDATE instance
export const updateRequest = async (url, data) => {
    let response;
    try {
        response = await instance({
            "method": "PATCH",
            "url": `${url}`,
            data: data,
            transformResponse: [function (responseData) {
                // Do whatever you want to transform the data
                return JSON.parse(responseData);
            }],
        });
    } catch (error) {
        return error.response;
    }
    return response;
};

//  Axios DELETE instance
export const deleteRequest = async (url) => {
    let response;
    try {
        response = await instance({
            "method": "DELETE",
            "url": `${url}`,
            transformResponse: [function (responseData) {
                // Do whatever you want to transform the data
                return JSON.parse(responseData);
            }],
        });
    } catch (error) {
        return error.response;
    }
    return response;
};