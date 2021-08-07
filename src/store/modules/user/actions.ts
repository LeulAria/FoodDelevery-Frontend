export interface IUser {
  uid: string;
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  stuff: boolean;
}

export const setUser = (context: any, user: IUser) => {
  console.log("SET THE USER HERE <ACTION>: ", user)
  context.commit('SET_USER', user )
}

export const logOut = (context: any) => {
  alert("logout")
  localStorage.clear();
  context.commit('LOGOUT_USER');
}