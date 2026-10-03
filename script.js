/* ==========================================
   SHOW SECTION
========================================== */

function showSection(sectionName) {
  // Get every section
  const sections = document.querySelectorAll(".section");

  // Hide all sections
  sections.forEach(function (section) {
    section.classList.remove("active");
  });

  // Find selected section
  const selected = document.getElementById(sectionName);

  // Show selected section
  if (selected) {
    selected.classList.add("active");
  }

  // Scroll to top
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
}

/* ==========================================
   CALL ATTORNEY
========================================== */

function callAttorney() {
  window.location.href = "tel:09761300511";
}

/* ==========================================
   EMAIL ATTORNEY
========================================== */

function emailAttorney() {
  window.location.href = "mailto:renannadado@gmail.com";
}

/* ==========================================
   GOOGLE MAP
========================================== */

function openMap() {
  window.open(
    "https://www.google.com/maps/search/?api=1&query=Bacolod+City+Negros+Occidental+Philippines",

    "_blank",
  );
}

/* ==========================================
   ACHIEVEMENT POPUP
========================================== */

function openAchievement(type) {
  const popup = document.getElementById("popup");

  const title = document.getElementById("popup-title");

  const text = document.getElementById("popup-text");

  const icon = document.getElementById("popup-icon");

  /* BAR EXAM */

  if (type === "bar") {
    icon.innerHTML = "⚖";

    title.innerHTML = "Philippine Bar Examination";

    text.innerHTML =
      "Atty. Renan A. Nadado successfully passed the Philippine Bar Examination in 2023.";
  } else if (type === "juris") {
    /* JURIS DOCTOR */
    icon.innerHTML = "🎓";

    title.innerHTML = "Juris Doctor";

    text.innerHTML =
      "Atty. Renan A. Nadado completed his legal education at the University of Recoletos Bacolod and earned his Juris Doctor qualification.";
  } else if (type === "ceswe") {
    /* CESWE */
    icon.innerHTML = "★";

    title.innerHTML = "CESWE";

    text.innerHTML =
      "CESWE is included among the professional qualifications provided for Atty. Renan A. Nadado.";
  }

  // Show popup
  popup.classList.add("show");
}

/* ==========================================
   CLOSE POPUP
========================================== */

function closePopup() {
  document.getElementById("popup").classList.remove("show");
}

/* ==========================================
   CLICK OUTSIDE POPUP
========================================== */

document.getElementById("popup").addEventListener("click", function (event) {
  if (event.target === this) {
    closePopup();
  }
});

/* ==========================================
   ESC KEY CLOSES POPUP
========================================== */

document.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    closePopup();
  }
});
