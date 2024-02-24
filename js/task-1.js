const quantityEl = document.querySelectorAll(".item");
// console.dir(quantityEl);
console.log(`Nomber of categories: ${quantityEl.length}`);

const titleEl = document.querySelectorAll("h2");
// console.log(titleEl);
titleEl.forEach(function (title) {
  const titleName = title.textContent;
  console.log(`Category: ${titleName}`);

  const allListEl = title.parentElement.querySelectorAll("ul>li");
  console.log(`Elements: ${allListEl.length}`);
});
