(function () {
  "use strict";

  // Relative paths so images load from public/images when opening public/index.html (file or server)
  var projects = [
    {
      title: "HR Analytics Dashboard",
      description: "Analyzed workforce data to uncover trends in attrition, satisfaction, and performance.",
      tools: ["SQL", "Excel", "Tableau", "Power BI"],
      images: [
        "images/Hr_Dashboard_01.png",
        "images/Hr_Dashboard_02.png",
        "images/Hr_Dashboard_03.png"
      ],
      github: null
    },
    {
      title: "Road Accident Analysis Dashboard",
      description: "Processed accident datasets to highlight hotspots, severity, and contributing factors.",
      tools: ["SQL", "Excel", "Tableau", "Power BI"],
      images: [
        "images/Road_Accident_01.png",
        "images/Road_Accident_02.png",
        "images/Raod_Accident_03.png"
      ],
      github: "https://github.com/AbhiramIndrala/Road-Accident-Data-Analytics.git"
    },
    {
      title: "Amazon Sales & Shipment Dashboard",
      description: "Tracked KPIs like total quantity, courier status, and weekly revenue trends.",
      tools: ["Excel", "Tableau"],
      images: [
        "images/Amazon_Sales_Dashboard_01.png",
        "images/Amazon_Sales_Dashboard_02.png",
        "images/Amazon_Sales_Dashboard_03.png",
        "images/Amazon_Sales_Dashboard_04.png"
      ],
      github: "https://github.com/AbhiramIndrala/Amazon-Tableau-Data-Analytics-Dashboard.git"
    },
    {
      title: "Supercars Sales Dashboard",
      description: "Compared Ferrari, Audi, Ford, Bugatti, and Lamborghini sales using Excel + Tableau.",
      tools: ["Excel", "Tableau"],
      images: [
        "images/Super_Cars_Sales(Ferrari ).png",
        "images/Super_Cars_Sales(Audi).png",
        "images/Ford.png",
        "images/Bugatti.png",
        "images/Lambornigi.png"
      ],
      github: "https://github.com/AbhiramIndrala/Super-Cars-Sales-Dashboard.git"
    },
    {
      title: "Adidas Sales Analysis",
      description: "Analyzed Adidas product sales and categories with Excel + Tableau.",
      tools: ["Excel", "Tableau"],
      images: ["images/Adidas_Sales_Dashboard.png"],
      github: "https://github.com/AbhiramIndrala/Adidas-Data-Analysis-Tableau-Dashboard.git"
    },
    {
      title: "Airbnb NYC Dashboard",
      description: "Explored Airbnb listings in New York City with Excel + Tableau.",
      tools: ["Excel", "Tableau"],
      images: ["images/Airbnb_Dashboard.png"],
      github: "https://github.com/AbhiramIndrala/Airbnb-Data-Analytics-Dashboard.git"
    },
    {
      title: "IMDb Movie Analytics Dashboard",
      description: "Analyzed IMDb ratings, genres, directors, and box office collections.",
      tools: ["Excel", "Tableau"],
      images: ["images/IMDB_01.png", "images/IMDB_02.png"],
      github: null
    },
    {
      title: "Attack on Titan Analytics Dashboard",
      description: "Anime‑themed Tableau dashboard analyzing episodes, ratings, votes, and sentiment.",
      tools: ["Excel", "Tableau"],
      images: [
        "images/Attack_On_Titan_01.png",
        "images/Attack_On_Titan_02.png",
        "images/Attack_On_Titan_03.png"
      ],
      github: "https://github.com/AbhiramIndrala/Attack-On-Titans-Dashboard.git"
    },
    {
      title: "Demon Slayer Character Analytics Dashboard",
      description: "Profiled characters, abilities, breathing styles, and battles using Excel + Tableau.",
      tools: ["Excel", "Tableau"],
      images: [
        "images/Demon_Slayer_01.png",
        "images/Demon_Slayer_02.png",
        "images/Demon_Slayer_03.png",
        "images/Demon_Slayer_04.png"
      ],
      github: "https://github.com/AbhiramIndrala/Demon-Slayer-Data-Analysis.git"
    }
  ];

  function escapeHtml(str) {
    var div = document.createElement("div");
    div.textContent = str;
    return div.innerHTML;
  }

  function renderProjectCard(project) {
    var toolsHtml = project.tools
      .map(function (t) {
        return '<span class="project-card__tool">' + escapeHtml(t) + "</span>";
      })
      .join("");
    var imagesHtml = project.images
      .map(function (img, i) {
        return (
          '<img src="' +
          escapeHtml(img) +
          '" alt="' +
          escapeHtml(project.title) +
          " screenshot " +
          (i + 1) +
          '" class="project-image" />'
        );
      })
      .join("");
    var githubHtml = project.github
      ? '<a href="' +
        escapeHtml(project.github) +
        '" target="_blank" rel="noopener noreferrer" class="project-card__link">View on GitHub</a>'
      : "";

    return (
      '<article class="project-card">' +
      '<div class="project-card__image-wrap project-card__images">' +
      imagesHtml +
      "</div>" +
      '<div class="project-card__content">' +
      '<h3 class="project-card__title">' +
      escapeHtml(project.title) +
      "</h3>" +
      '<div class="project-card__tools tools">' +
      toolsHtml +
      "</div>" +
      '<p class="project-card__description">' +
      escapeHtml(project.description) +
      "</p>" +
      githubHtml +
      "</div>" +
      "</article>"
    );
  }

  function renderProjectsSection() {
    var grid = document.getElementById("projects-grid");
    if (!grid) return;
    grid.innerHTML = projects.map(renderProjectCard).join("");
  }

  var menuButton = document.querySelector(".navbar__menu");
  var nav = document.querySelector(".navbar__nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", function () {
      nav.classList.toggle("navbar__nav--open");
    });
    nav.addEventListener("click", function (e) {
      if (e.target.matches(".navbar__link")) {
        nav.classList.remove("navbar__nav--open");
      }
    });
  }

  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener("click", function (e) {
      var targetId = this.getAttribute("href");
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        target.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    });
  });

  var yearSpan = document.getElementById("year");
  if (yearSpan) {
    yearSpan.textContent = String(new Date().getFullYear());
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", renderProjectsSection);
  } else {
    renderProjectsSection();
  }
})();
