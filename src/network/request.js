import axios from 'axios'





export function post(url,data) {
  const instance =axios.create({
    baseURL:'http://178.128.116.10:8888/api/private/v1/',//baseURL会在发送请求的时候拼接在url参数的前面
    timeout:5000,
  //   headers: {
  //     'Content-Type': 'application/x-www-form-urlencoded'
  // }
  })
  return instance.post(url,data)
}
