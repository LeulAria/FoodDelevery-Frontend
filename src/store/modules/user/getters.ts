export const userInfo = (store: any) => {
  return store.user
}
export const userAvatar = (store: any) => {
  return store.user.avatar;
}
export const isLoggedIn = (store: any) => {
  return store?.user?.data?.user ? true : false
}
export const user = (store: any) => {
  return store?.user?.data?.user 
}