// Open external projects in new tab
function openProject(link) {
  window.open(link, "_blank");
}

// Open modal
function openImage(src) {
  const modal = document.getElementById("modal");
  const img = document.getElementById("modal-img");
  const text = document.getElementById("modal-text");

  img.src = src;
  text.innerText = '';
  modal.style.display = "block";
}

// Show text in modal
function showResult(text) {
  const modal = document.getElementById("modal");
  const result = document.getElementById("modal-text");

  result.innerText = text;
  document.getElementById("modal-img").src = '';
  modal.style.display = "block";
}

// Close modal
function closeModal() {
  document.getElementById("modal").style.display = "none";
}