const wrapper = document.querySelector(".wrapper");
const form = document.getElementById("form");
const inpTitle = document.getElementById("title");
const likedWrapper = document.getElementById("liked-wrapper");
const clearAll = document.getElementById("clear-all");

let titles = [];
let likedTitles = [];

function renderToWrapper() {
  let res = "";
  titles.map((element, index) => {
    res += `<div class="card mt-4">
          <div class="card-body d-flex align-items-center" style="font-weight: 600">
            <input type="checkbox" style="margin-right: 30px"/>
            <p class="m-0 p-0">${index + 1}) ${element.title}</p>
          </div>
          <div class="card-footer">
            <button class="btn btn-danger" onclick="deleteTitle(${index})">delete</button>
            <button class="btn btn-warning" onclick="editTitle(${index})" >edit</button>
            <button class="btn btn-info" onclick="copyTitle(${index})">copy</button>
            <button class="btn btn-light border" onclick="likeTitle(${index})">like</button>
          </div>
        </div>`;
  });

  wrapper.innerHTML = res;
};

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let obj = { id: Date.now(), title: inpTitle.value };

  inpTitle.value === "" ? alert("enter something to input") : titles.push(obj);

  inpTitle.value = "";
  renderToWrapper();
});

function deleteTitle(ind) {
  titles.splice(ind, 1);
  renderToWrapper();
};

function editTitle(ind) {
  titles[ind].title = prompt("Enter new title");
  renderToWrapper();
};



renderToWrapper();
