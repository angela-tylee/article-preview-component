const shareBtn = document.querySelector(".icon-share-container");
const shareModal = document.querySelector(".share-modal-container");
const shareModalMobile = document.querySelector(".share-modal-container-mobile");
const mediaQuery = window.matchMedia('(max-width: 968px)');


shareBtn.addEventListener("click", function (e) {
  if (mediaQuery.matches) {
    if (shareModalMobile.style.display == "none") {
      shareModalMobile.style.display = "block";
    } else {
      shareModalMobile.style.display = "none";
    }
  } else {
    if (shareModal.style.display == "none") {
      shareModal.style.display = "block";
      shareModal.classList.add("show");
    } else {
      shareModal.style.display = "none";
    }
  }
});