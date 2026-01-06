let users = JSON.parse(localStorage.getItem("users")) || [];

function addUser() {
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;

  if (!name || !email) return alert("All fields required");

  users.push({ id: Date.now(), name, email });
  localStorage.setItem("users", JSON.stringify(users));

  document.getElementById("name").value = "";
  document.getElementById("email").value = "";

  renderUsers();
}

function deleteUser(id) {
  users = users.filter(u => u.id !== id);
  localStorage.setItem("users", JSON.stringify(users));
  renderUsers();
}

function renderUsers() {
  const search = document.getElementById("search").value.toLowerCase();
  const list = document.getElementById("userList");
  list.innerHTML = "";

  users
    .filter(u => u.name.toLowerCase().includes(search))
    .forEach(user => {
      list.innerHTML += `
        <tr>
          <td>${user.name}</td>
          <td>${user.email}</td>
          <td>
            <button onclick="deleteUser(${user.id})">Delete</button>
          </td>
        </tr>
      `;
    });
}

renderUsers();
