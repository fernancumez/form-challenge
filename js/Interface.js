class Interface {
  addUser(user) {
    const userList = document.getElementById("user-list");
    const element = document.createElement("div");
    element.innerHTML = `
      <div class="card text-center mb-4">
        <div class="card-body">
          <strong>Usuario:</strong>${user.firstName}
          <strong>Correo:</strong>${user.email}
          <button 
            class="btn btn-danger" 
            type="button" 
            name="delete"
            onclick="handleDelete(event)"
          >
            Eliminar
          </button>
        </div>
      </div>
    `;
    userList.appendChild(element);
  }

  resetForm() {
    document.getElementById("user-form").reset();
  }

  deleteUser(user) {
    if (user.name === "delete") {
      user.parentElement.parentElement.remove();
    }
  }

  showMessage(message, cssClass) {
    const div = document.createElement("div");
    div.className = `alert alert-${cssClass} mt-2`;
    div.appendChild(document.createTextNode(message));

    // Show in the DOM
    const container = document.querySelector(".container");
    const app = document.querySelector("#app");

    // Insert message in the Interface
    container.insertBefore(div, app);

    // Remove the message after 3 seconds
    setTimeout(() => {
      document.querySelector(".alert").remove();
    }, 2000);
  }
}
