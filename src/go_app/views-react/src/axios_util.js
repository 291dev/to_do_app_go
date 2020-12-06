import axios from 'axios';

export const axios_ = axios.interceptors.request.use(req => {
    var cookie;
    cookie = document.cookie;
    var cookieArrayBeforeformat = cookie.split("; ");
    cookie = {};
    cookieArrayBeforeformat.forEach(v => {
      console.log(v)
      let arr = v.split('=')
      cookie[arr[0]] = arr[1];
    })
    console.log(cookie)
    req.headers.Authorization = cookie['isOnSession']
    return req;
})


