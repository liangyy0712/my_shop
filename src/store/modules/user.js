export default {
    state: {
        loginForm: {
            id:0,
            username:''
        }
    },
    mutations: {
        setUser(state, user) {
            console.log(user.username +'user.js' + user.id)
            state.loginForm.id = user.id
            state.loginForm.username = user.username
        },
        logout(state) {
          state.loginForm.id = 0
          state.loginForm.username = ''
        }
    },
    actions: {
        
    },
    getters: {
        isLogin(state) {
            // 判断是否登录
            return state.loginForm.id !== 0
        }
    },
    // 使各个模块不冲突
    namespaced:true
}