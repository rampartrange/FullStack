import BackendAPI, {actionTypes} from "./BackendAPI";


export default {
    RegisterUser(login, email, password) {
        return BackendAPI.performAction(actionTypes.post,
            '/auth/register/',
            {
                username: login,
                email: email,
                password: password
            });
    },

    Login(email, password) {
        return BackendAPI.performAction(actionTypes.post,
            '/auth/login/',
            {email: email, password: password});
    },

    GetActiveUser(user_id, access) {
        return BackendAPI.performAction(actionTypes.get,
            `/user/${user_id}`, {},
            {Authorization: `Bearer ${access}`});
    },

    RefreshUser(refresh) {
        return BackendAPI.performAction(actionTypes.post,
            '/auth/refresh/',
            {refresh: refresh});
    }

}