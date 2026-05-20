function openProject(link) {
  window.open(link, "_blank");
}

function openImage(src) {
  let modal = document.getElementById("modal");
  let img = document.getElementById("modal-img");
  let text = document.getElementById("modal-text");

  img.src = src;
  text.innerText = "";
  modal.style.display = "block";
}

function showResult(textContent) {
  let modal = document.getElementById("modal");
  let text = document.getElementById("modal-text");

  text.innerText = textContent;
  document.getElementById("modal-img").src = "";
  modal.style.display = "block";
}

function closeModal() {
  document.getElementById("modal").style.display = "none";
}

// Close modal when clicking outside image
window.onclick = function(event) {
  let modal = document.getElementById("modal");
  if (event.target === modal) {
    modal.style.display = "none";
  }
};