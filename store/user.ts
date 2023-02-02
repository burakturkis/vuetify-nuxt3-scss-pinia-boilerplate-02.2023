import { defineStore } from 'pinia'
interface State {
    userList: UserInfo[]
    user: UserInfo | null
}
interface UserInfo {
    name: string
    age: number
}

export const useUserStore = defineStore('user', {
    state: (): State => {
        return {
            userList: [],
            user: null,
        }
    },
    getters: {
        getUser: (state) => state.user,
    },
    actions: {
        increment(user: UserInfo) {
            this.user = user
        },
    },
})