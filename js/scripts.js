const API_URL = 'https://deliver.kontent.ai/c5c47978-33d9-0022-146a-e31bed62d5ec'

const HTMLResponse = document.querySelector("#app");

const ul = document.createElement("ul");

fetch(`${API_URL}/items`)
    .then((response) => response.json())
    .then((data) => {
        data.items.forEach((item) => {
            let elem = document.createElement("li");
            elem.appendChild(
                document.createTextNode(`${item.system.type}`)
            );
            ul.appendChild(elem);
        });

        HTMLResponse.appendChild(ul);
    });
