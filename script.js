document.querySelector(".buy_now1").addEventListener("click", function () {
  const cardDiv = document.querySelector(".added_product");
  const title = document.querySelector(".title").innerText;
  let p = document.createElement("li");
  p.innerText = title;
  cardDiv.appendChild(p);
  const price = document.querySelector(".price").innerText;
  const total = document.querySelector(".total");
  total.innerText = price;
});

function openModal() {
  // modal
  my_modal.showModal();
}
