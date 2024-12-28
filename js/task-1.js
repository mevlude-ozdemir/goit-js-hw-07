const list = document.querySelector("#categories");
const listItem = list.children;
const number = `Number of categories: ` + listItem.length;

console.log(number);

[...listItem].forEach(function (item) {
  let head = item.firstElementChild;
  let ul = item.lastElementChild;
  let adet = ul.children;
  console.log(`Category:` + ` ` + head.textContent);
  console.log(`Elements:` + ` ` + adet.length);
});
