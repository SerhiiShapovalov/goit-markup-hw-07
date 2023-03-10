// Write JavaScript here
function app() {
  const buttons = document.querySelectorAll(".portfolio-btn");
  const cards = document.querySelectorAll(".portfolio-item");

  function filter(category, items) {
    items.forEach((item) => {
      const isItemFiltered = !item.classList.contains(category);
      const isShowAll = category.toLowerCase() === "all";
      if (isItemFiltered && !isShowAll) {
        item.classList.add("anime");
      } else {
        item.classList.remove("hide");
        item.classList.remove("anime");
      }
    });
  }

  buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
      const currentCategory = btn.dataset.filter;
      filter(currentCategory, cards);
    });
  });

  cards.forEach((card) => {
    card.ontransitionend = function () {
      if (card.classList.contains("anime")) {
        card.classList.add("hide");
      }
    };
  });
}

app();
