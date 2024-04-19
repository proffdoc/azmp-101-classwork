// class Animal {
//   age;
//   static id = 1;
//   constructor(name, birthDate, gender) {
//     this.name = name;
//     this.birthDate = birthDate;
//     this.gender = gender;
//     this.age = this.getAge();
//     this.id = Animal.id++;
//     // this.id = Date.now();
//   }
//   getAge() {
//     return new Date().getFullYear() - this.birthDate;
//   }
// }

// class cat extends Animal {
//   constructor(name, birthDate, gender, weight, color, getInfo) {
//     super(name, birthDate, gender);
//     this.weight = weight;
//     this.color = color;
//   }
//   getInfo() {
//     return `name is ${this.name},birthdate is ${this.birthDate}, color is ${this.color}`;
//   }
// }

// // properties

// const cats = new cat("garfield", 2017, "male", "6.7kq", "orange");
// const animal = new Animal("garfield", 2017, "female");
// // console.log(cats);
// // console.log(cats.getInfo());
// // console.log(cats.getAge());
// console.log(cats.id);

class Human {
  constructor(name, surname, gender, nationality, age = 0) {
    age;
    this.name = name;
    this.surname = surname;
    if (age > 0) {
      this.age = age;
    } else {
      `bele bir yas yoxdur`;
    }
    this.gender = gender;
    this.nationality = nationality;
  }
  getFullName() {
    return `${this.name} ${this.surname}`;
  }
  getBirthYear() {
    return new Date().getFullYear() - this.age;
  }
}
class User extends Human {
  constructor(
    name,
    surname,
    gender,
    nationality,
    age,
    email,
    password,
    bio,
    isAdmin=false
  ) {
    super(name, surname, gender, nationality, bio, age);
    this.email = email;
    this.isAdmin = isAdmin;
    this.password = password;
    if (this.password.length < 5) {
      window.alert("Password must be 5 or more symbols");
    } else {
      this.password = password;
    }
    if (bio.length < 10) {
      window.alert("Must be 100 or more characters");
    } else {
      this.bio = bio;
    }
  }
  changePassword(currentPassword, newPassword) {
    if ((currentPassword = this.password))
      if ((currentPassword = newPassword)) {
        window.alert("Current password is same with new pasword");
      } else {
        this.password = newPassword;
      }
    else {
      this.password = newPassword;
    }
  }
  changeEmail(arr, newEmail) {
    let found = arr.find((user) => user.email === newEmail);
    if (found) {
      window.alert("email already in use!");
    } else {
      if (found.email === newEmail) {
        window.alert("new email and current email is the same");
      } else {
        found.email = newEmail;
      }
    }
  }
}
let users = [
  new User(
    "John",
    "Doe",
    "Male",
    "American",
    "johndoe",
    "john.doe@example.com",
    false,
    "password123",
    "A bit about John.",
    30
  ),
  new User(
    "Jane",
    "Doe",
    "Female",
    "British",
    "janedoe",
    "jane.doe@example.com",
    true,
    "securepassword",
    "Jane's bio goes here.",
    28
  ),
  new User(
    "Alex",
    "Smith",
    "Non-binary",
    "Canadian",
    "alexsmith",
    "alex.smith@example.com",
    false,
    "alexspassword",
    "All about Alex.",
    35
  ),
  new User(
    "Emily",
    "Clark",
    "Female",
    "Australian",
    "emilyclark",
    "emily.clark@example.com",
    false,
    "emilyspassword",
    "Explorer and photographer.",
    26
  ),
  new User(
    "Michael",
    "Brown",
    "Male",
    "German",
    "michaelbrown",
    "michael.brown@example.com",
    true,
    "michaelspass",
    "Coffee enthusiast. Avid reader.",
    32
  ),
  new User(
    "Luis",
    "Gomez",
    "Male",
    "Spanish",
    "luisgomez",
    "luis.gomez@example.com",
    false,
    "luispassword",
    "Music lover, Guitar player.",
    29
  ),
  new User(
    "Sophia",
    "Lopez",
    "Female",
    "Mexican",
    "sophialopez",
    "sophia.lopez@example.com",
    true,
    "sophiaspassword",
    "Digital marketer and content creator.",
    31
  ),
];
const Cavidan = new User(
  "Cavidan",
  "Hasanzade",
  "Male",
  "Azerbaijan",
  21,
  "mi@code.edu.az",
  "salam1234",
  true
);
console.log(Cavidan);
console.log(Cavidan.getFullName());
// console.log(Cavidan.getBirthYear());
console.log(Cavidan.age);