import BackendAPI, {actionTypes} from "./BackendAPI";

export default {
    GetUserProfiles(user_id) {
        return BackendAPI.performAction(actionTypes.get,
            `/profile/by-user-id/${user_id}/`)
    },
    UpdateProfile(profile_id, user_id, description) {
        return BackendAPI.performAction(actionTypes.put,
            `/profile/${profile_id}/`,
            {user_id: user_id, description: description})
    },
    CreateProfile(user_id, description) {
        return BackendAPI.performAction(actionTypes.post,
            `/profile/`,
            {user_id: user_id, description: description})
    }
}