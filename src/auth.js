var auth = {
    getAuthorization() {
        // 应该用sessionStorage
        return sessionStorage.getItem('Authorization')
    },
    setAuthorization(Authorization) {
        return sessionStorage.setItem('Authorization', Authorization)
    }
}
export default {
    install: function (vue) {
        vue.prototype.$auth=auth
    }
}