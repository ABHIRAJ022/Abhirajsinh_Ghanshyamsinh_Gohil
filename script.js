function openProject(link) {
  window.open(link, "_blank");
}

function openImage(src) {
  let modal = document.getElementById("modal");
  let img = document.getElementById("modal-img");

  img.src = src;
  modal.style.display = "block";
}

function showResult(text) {
  let modal = document.getElementById("modal");
  let result = document.getElementById("modal-text");

  result.innerText = text;
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}