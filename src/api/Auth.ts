import Api from './API';

const route = '/users'

export default {
  register(user: any) {
    return Api.post(`${route}/register`, user);
  },
  login(user: {email: string, password: string}) {
    return Api.post(`${route}/login/`, user);
  },
  logout() {
    return Api.get(`${route}/logout`);
  },
  uploadAvatar(avatarPic: FormData) {
    return Api.post(`${route}/avatar`, avatarPic);
  }
}