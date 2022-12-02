class Usuario {
  constructor(id, email, pass, name, lastname, rut, phone, sex, birthday) {
    this.id = id;
    this.email = email;
    this.pass = pass;
    this.name = name;
    this.lastname = lastname;
    this.rut = rut;
    this.phone = phone;
    this.sex = sex;
    this.birthday = birthday;
    this.carro = [];
    this.compras = [];
  }
}

export default Usuario;
