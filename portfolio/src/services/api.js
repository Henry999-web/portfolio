import axios from 'axios';

const API_URL = 'http://localhost:5000/api';

const axiosInstance = axios.create({
    baseURL: API_URL,
});

// Request interceptor to add the auth token header to every request
axiosInstance.interceptors.request.use(
    (config) => {
        const user = JSON.parse(localStorage.getItem('user'));
        if (user && user.token) {
            config.headers.token = `Bearer ${user.token}`;
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export const loginCall = async (userCredential, dispatch) => {
    dispatch({ type: "LOGIN_START" });
    try {
        const res = await axiosInstance.post("/auth/login", userCredential);
        dispatch({ type: "LOGIN_SUCCESS", payload: res.data });
    } catch (err) {
        dispatch({ type: "LOGIN_FAILURE", payload: err });
    }
};

export const getPosts = async (cat) => {
    try {
        const res = await axiosInstance.get(`/posts${cat ? `?cat=${cat}` : ''}`);
        return res.data;
    } catch (err) {
        console.error(err);
        return [];
    }
};

export const getPost = async (slug) => {
    try {
        const res = await axiosInstance.get(`/posts/${slug}`);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const createPost = async (postData) => {
    try {
        const res = await axiosInstance.post("/posts", postData);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const updatePost = async (id, postData) => {
    try {
        const res = await axiosInstance.put(`/posts/${id}`, postData);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};

export const deletePost = async (id) => {
    try {
        const res = await axiosInstance.delete(`/posts/${id}`);
        return res.data;
    } catch (err) {
        console.error(err);
        return null;
    }
};
