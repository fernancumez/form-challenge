const handleSubmit = (evt) => {
  evt.preventDefault();
  const formValues = {
    firstName: document.getElementById("firstName").value,
    lastName: document.getElementById("lastName").value,
    email: document.getElementById("email").value,
    password: document.getElementById("password").value,
  };

  // Destructuring
  const { firstName, lastName, email, password } = formValues;

  // Create a new Object Product
  const usuario = new User(firstName, lastName, email, password);

  // Save user
  const interfaz = new Interface();
  interfaz.addUser(usuario);
  interfaz.showMessage("Usuario agregado correctamente", "success");
  interfaz.resetForm();
};

const handleDelete = (evt) => {
  const confirm = window.confirm("Deseas eliminar este usuario?");

  if (confirm) {
    const interfaz = new Interface();
    interfaz.deleteUser(evt.target);
    interfaz.showMessage("Usuario eliminado correctamente", "danger");
    evt.preventDefault();
  }
};
