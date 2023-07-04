// <!-- ----- Bismillah ---- -->
const wrapper = document.querySelector(".wrapper");
const form = document.getElementById("form");
const inpTitle = document.getElementById("title");

let titles = [];

function renderToWrapper() {
  let res = "";
  titles.forEach((element, index) => {
    res += `<div class="card mt-2">
    <div class="card-body" style="font-weight: 600">${element.title}</div>
    <div class="card-footer">
      <button class="btn btn-danger" onclick="deleteTitle(${index})">Delete</button>
      <button class="btn btn-warning" onclick="editTitle(${index})">Edit</button>
      <button class="btn btn-info">Copy</button>
    </div>
  </div>`;
  });

  wrapper.innerHTML = res;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  let obj = { id: Date.now(), title: inpTitle.value };

  if (inpTitle.value.length < 1) {
    alert("Enter something to input: ");
  } else {
    titles.push(obj);
    inpTitle.value = "";
    renderToWrapper();
  }
});

function deleteTitle(ind) {
  titles.splice(ind, 1);
  renderToWrapper();
}

function editTitle(ind) {
  titles[ind].title = prompt("Enter new title");
  renderToWrapper();
}

renderToWrapper();
