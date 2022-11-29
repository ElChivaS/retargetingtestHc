// const API_URL = 'https://deliver.kontent.ai/c5c47978-33d9-0022-146a-e31bed62d5ec'
const API_URL = "http://jsonplaceholder.typicode.com"

const HTMLResponse = document.querySelector("#app");

fetch(`${API_URL}/users`)
    .then((response) => response.json())
    .then((users) => {
        const tpl = users.map((user) => `<li>${user.name} - ${user.email}</li>`);
        HTMLResponse.innerHTML = `<ul>${tpl}</ul>`;
    });
