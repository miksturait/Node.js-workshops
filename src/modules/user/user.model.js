export default class User {
  constructor(id, email, password) {
    this.id = id;
    this.email = email;
    this.password = password;
  }

  toJSON() {
    return {
      id: this.id,
      email: this.email,
    };
  }
}
