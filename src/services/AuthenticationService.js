import Api from "@/services/Api";

export default {
  register(credentials) {
    return Api().post("register", credentials);
  }
};

// AuthenticationService.register({
//     email: 'germertilo@gmail.com',
//     password: '123456'
// })