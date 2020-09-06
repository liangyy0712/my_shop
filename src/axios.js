import axios from 'axios'

export default{
    install: function (vue) {
        // 获取auth
        var auth=vue.prototype.$auth
        // 创建一个axios
        var result = axios.create({
            baseURL: 'http://tpadmin.test/api/'
        })
        // 请求拦截器  成功  失败
        result.interceptors.request.use(config => {
            // 设置请求头
            config.headers.Authorization=auth.getAuthorization()
            // 设置config  网络请求时显示一些信息（图标、动画等）  特殊请求需要进行特殊操作
            return config
        }, err => {
            return err
        })
        // 响应拦截 成功 失败
        result.interceptors.response.use(res => {
            return res
        }, err => {
            return err
        })
        vue.prototype.$http = result
    }
}