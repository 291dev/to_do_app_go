import axios from 'axios';


export const requestInterceptor = ()=>{
axios.interceptors.request.use(req => {
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
}

export const responseInterceptor = () => {
  axios.interceptors.response.use(
  response => {
    return response;
  },
  error => {
    const status = error.response.status;
    if(status === 400){
      // できれば直接バッドリクエストエラーのパネル表示させたい
      return Promise.reject(error);
    }else if(status === 401){
      window.location.href ="/error401";
      return;
    }else if(status === 403){
      window.location.href ="/error401";
      return;
    }else{
      // window.location.href ="/error500";
      console.log(error)
      return Promise.reject(error);
    }
  }
);
}


