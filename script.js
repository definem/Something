const wrapper = document.querySelector(".wrapper");
const form = document.getElementById("form");
const inpTitle = document.getElementById("title");

let titles = [];

form.addEventListener("submit", (evt) => {
  evt.preventDefault();
  titles.unshift(inpTitle.value);
  renderToWrapper();
console.log(titles);
  inpTitle.value = "";
});

function renderToWrapper() {
  let res = "";
  titles.forEach((element) => {
    res += `<div class="card mt-2">
    <div class="card-body" style="font-weight: 600">${element}</div>
    <div class="card-footer">
      <button class="btn btn-danger">Delete</button>
      <button class="btn btn-warning">Edit</button>
      <button class="btn btn-info">Copy</button>
    </div>
  </div>`;
  });

  wrapper.innerHTML = res;
}