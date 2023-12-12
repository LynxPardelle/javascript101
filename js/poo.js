document.title = "Programación orientada a Objetos";
document.body.innerHTML = `<h1>Users</h1>`;
document.body.innerHTML += '<div id="users-container"></div>';
document.body.innerHTML += `
<form class="mt-3">
  <div class="mb-3">
    <label for="first_name" class="form-label">Nombre</label>
    <input type="text" class="form-control" id="first_name" />
  </div>
  <div class="mb-3">
    <label for="last_name" class="form-label">Apellido</label>
    <input type="text" class="form-control" id="last_name" />
  </div>
  <div class="mb-3">
    <label for="age" class="form-label">Edad</label>
    <input type="number" class="form-control" id="age" />
  </div>
  <div class="mb-3">
    <label for="email" class="form-label">Email</label>
    <input type="email" class="form-control" id="email" />
  </div>
  <button type="button" class="btn btn-primary" onclick="addUser()">Agregar</button>
</form>
`;
let usersContainer = document.getElementById("users-container");

class User {
  interactions = 0;
  id = Math.floor(Math.random() * 1000000);
  constructor(first_name, last_name, age, email) {
    this.first_name = first_name;
    this.last_name = last_name;
    this.age = age;
    this.email = email;
  }
  getFullName() {
    this.interactions++;
    return this.first_name + " " + this.last_name;
  }
  getInteractions() {
    this.interactions++;
    return this.interactions;
  }
  changeEmail(new_email) {
    this.interactions++;
    if (this.email !== new_email) {
      this.email = new_email;
      renderUsers();
    }
  }
  changeName(new_name) {
    this.interactions++;
    if (this.first_name !== new_name) {
      this.first_name = new_name;
      renderUsers();
    }
  }
  changeLastName(new_last_name) {
    this.interactions++;
    if (this.last_name !== new_last_name) {
      this.last_name = new_last_name;
      renderUsers();
    }
  }
  changeAge(new_age) {
    this.interactions++;
    if (this.age !== new_age) {
      this.age = new_age;
      renderUsers();
    }
  }
}

let users = [];

users.push(new User("John", "Doe", 30, "john@doe.com"));
users.push(new User("Jane", "Doe", 29, "jane@doe.com"));
users.push(new User("John", "Smith", 25, "john@smith.com"));
users.push(new User("Jane", "Smith", 24, "jane@smith.com"));
let renders = 0;
renderUsers();
function renderUsers() {
  renders++;
  console.log(renders);
  usersContainer.innerHTML = `
${users
  .map(function (user) {
    return `
    <div class="card p-3">
      <h2 class="card-title">${user.getFullName()}</h2>
      <p class="card-text" >Age: ${user.age}</p>
      <p class="card-text">Email: ${user.email}</p>
      <div class="d-flex flex-wrap justify-content-evenly align-items-center">
        <button class="btn btn-primary" onclick="makeChangesInUser(${
          user.id
        }, 'age', ${user.age + 1})">Subir edad</button>
        <button class="btn btn-primary" onclick="makeChangesInUser(${
          user.id
        }, 'age', ${user.age - 1})">Bajar edad</button>
      </div>
      <div class="d-flex flex-nowrap justify-content-between align-items-center">
        <input type="text" class="form-control" id="email-${
          user.id
        }" value="${user.email}" />
            <button class="btn btn-primary" onclick="makeChangesInUser(${
              user.id
            }, 'email', document.getElementById('email-${user.id}').value)">Cambiar email</button>
      </div>
      <div class="d-flex flex-nowrap justify-content-between align-items-center">
        <input type="text" class="form-control" id="first_name-${
          user.id
        }" value="${user.first_name}" />
            <button class="btn btn-primary" onclick="makeChangesInUser(${
              user.id
            }, 'first_name', document.getElementById('first_name-${user.id}').value)">Cambiar Nombre</button>
      </div>
      <div class="d-flex flex-nowrap justify-content-between align-items-center">
        <input type="text" class="form-control" id="last_name-${
          user.id
        }" value="${user.last_name}" />
            <button class="btn btn-primary" onclick="makeChangesInUser(${
              user.id
            }, 'last_name', document.getElementById('last_name-${user.id}').value)">Cambiar Apellido</button>
      </div>
    </div>`;
  })
  .join("")}
`;
}

function makeChangesInUser(id, type, value) {
  let user = users.find(function (user) {
    return user.id === id;
  });
  console.log("user", user);
  console.log("value", value);
  switch (type) {
    case "age":
      user.changeAge(value);
      break;
    case "email":
      user.changeEmail(value);
      break;
    case "first_name":
      user.changeName(value);
      break;
    case "last_name":
      user.changeLastName(value);
      break;
    default:
      break;
  }
}

function addUser() {
  let first_name = document.getElementById("first_name").value;
  let last_name = document.getElementById("last_name").value;
  let age = document.getElementById("age").value;
  let email = document.getElementById("email").value;
  console.log("user", { first_name, last_name, age, email });
  users.push(new User(first_name, last_name, age, email));
  console.log("users", users);
  renderUsers();
}
