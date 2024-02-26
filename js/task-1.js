const quantityEl = document.querySelectorAll(".item");
console.log(`Nomber of categories: ${quantityEl.length}`);

const titleEl = document.querySelectorAll("h2");

titleEl.forEach(function (title) {
  title.classList.add("title-class");
  const titleName = title.textContent;
  console.log(`Category: ${titleName}`);

  const allListEl = title.parentElement.querySelectorAll("ul>li");
  console.log(`Elements: ${allListEl.length}`);
});

const itemEl = document.querySelectorAll("#categories > .item");
itemEl.forEach(function (item) {
  const ulEl = item.querySelector("ul");
  ulEl.classList.add("my-ul-class");
});

const listEl = document.querySelectorAll("#categories > .list");
titleEl.forEach(function (li) {
  li.classList.add("my-li-class");
});
