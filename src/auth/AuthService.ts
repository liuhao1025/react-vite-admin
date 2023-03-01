const AuthService = {
  user: null,
  login() {
    this.user = {
      id: 1,
      name: "LiuHao",
    };
    return this.user;
  },
  logout() {
    this.user = null;
    return this.user;
  },
};

export default AuthService;
