export const usersStorage = [
  { id: 1, username: "belizario", password: "123456", rule: "admin" },
];

export const users = {
  findAll: () => usersStorage,

  findById: (id) => usersStorage.find((user) => user.id === +id),

  findByEmail: (email) => usersStorage.find((user) => user.email === email),
};

export class User {
  constructor(id, username, email, password, rule = "guest") {
    this.id = Math.floor(Math.random() * 9999);
    this.username = username;
    this.email = email;
    this.password = password;
    this.rule = rule;
  }
}
