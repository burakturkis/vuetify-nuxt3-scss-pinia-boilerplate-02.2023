interface TUserRegister {
    username: string
    email: string
    password: string
    fullname: string
}
interface TUserLogin {
    email: string
    password: string
}


export { TUserRegister, TUserLogin }