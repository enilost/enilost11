import store from '../store/store.js'

export default function (to,from,next) {
    if (store.getters.TOKEN_GETT) {
        next()
    }else{
        next('/login')
    }
}