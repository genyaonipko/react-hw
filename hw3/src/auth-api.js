const users = [
  {
    name: "mango",
    login: "mango@mail.com",
    password: "qwerty",
    avatar: "https://image.flaticon.com/icons/svg/145/145859.svg"
  },
  {
    name: "poly",
    login: "poly@mail.com",
    password: "12345",
    avatar: "https://image.flaticon.com/icons/svg/145/145862.svg"
  }
];
export const signIn = ({ login, password }) => {
  return new Promise((resolve, reject) => {
    const user = users.find(user => user.login === login);
    setTimeout(() => {
      if (!user) {
        reject("User does not exist!");
        return;
      }
      if (user.password !== password) {
        reject("Invalid password!");
        return;
      }
      resolve({
        name: user.name,
        login: user.login,
        avatar: user.avatar
      });
    }, 300);
  });
};
export const signOut = () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve();
    }, 300);
  });
};
