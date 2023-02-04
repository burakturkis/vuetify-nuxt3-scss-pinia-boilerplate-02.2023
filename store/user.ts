import { defineStore } from 'pinia'
interface State {
    userList: UserInfo[]
    user: UserInfo | null
}
interface UserInfo {
    full_name?: string | "Full name",
    email: string,
    password?: string,
}

export const useUserStore = defineStore('user', {
    state: (): State => {
        return {
            userList: [],
            user: null,
        }
    },
    actions: {
        setUser(loginUser: UserInfo) {
            this.user = loginUser
        },
        logout() {
            this.user = null
            navigateTo('/')
        }
    }

})