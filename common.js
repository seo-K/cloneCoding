function languageButton () {
  const selectedBox = document.querySelector(".header__country-selector");
  const selectButton = selectedBox.querySelector(".header__country-selector-button");
  const selectedValue = selectedBox.querySelector(".header__country-selected");

selectButton.addEventListener("click", ()=> {
  console.log();

  selectedBox.classList.toggle("active")
})
}

document.addEventListener("DOMContentLoaded", () =>
{
  languageButton();
})