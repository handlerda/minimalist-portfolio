window.addEventListener("DOMContentLoaded", () => {
  //get moreDetails
  const moreDetails = document.querySelectorAll(".drop-down-button");
  moreDetails.forEach((button) => {
    button.addEventListener("click", (event) => {
      const hiddenElement = event.target.nextElementSibling;

      let isHidden = !hiddenElement.classList.contains("hidden-details");
      hiddenElement.classList.toggle("hidden-details");
      if (isHidden) {
        button.innerHTML = "What did I build?";
      } else {
        button.innerHTML = "Minimize details";
      }
    });
  });
});

console.log(`hi from the file`);
