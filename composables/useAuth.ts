import { useUserStore } from "~~/store/user"

export const useAuth = (state: boolean = false) => {
    const store = useUserStore()
    return store.user ? true : false
}