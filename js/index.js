const siteContent = {
  nav: {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png",
  },
  cta: {
    h1: "DOM Is Awesome",
    button: "Get Started",
    "img-src": "img/header-img.png",
  },
  "main-content": {
    "features-h4": "Features",
    "features-content":
      "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4": "About",
    "about-content":
      "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4": "Services",
    "services-content":
      "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4": "Product",
    "product-content":
      "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4": "Vision",
    "vision-content":
      "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  contact: {
    "contact-h4": "Contact",
    address: "123 Way 456 Street Somewhere, USA",
    phone: "1 (888) 888-8888",
    email: "sales@greatidea.io",
  },
  footer: {
    copyright: "Copyright Great Idea! 2018",
  },
};

// Example: Update the img src for the logo
// let logo = document.getElementById("logo-img");
// logo.setAttribute("src", siteContent["nav"]["img-src"]);

// ========== HEADER/NAVIGATION ==========

const navLogo = document.querySelector("#logo-img");
const navLinks = document.querySelectorAll("header nav a");
navLogo.setAttribute("src", siteContent.nav["img-src"]);

navLinks.forEach(
  (link, index) =>
    (link.textContent = siteContent.nav[`nav-item-${index + 1}`]) &&
    (link.style.color = "green")
);

const nav = document.querySelector("nav");
const addedNavElement1 = document.createElement("a");
addedNavElement1.innerHTML = "test";
nav.appendChild(addedNavElement1);

// ========== CTA/MAIN BANNER ==========

const ctaImage = document.querySelector("#cta-img");
const ctaTitle = document.querySelector(".cta .cta-text h1");
const ctaButton = document.querySelector(".cta .cta-text button");

ctaImage.setAttribute("src", siteContent.cta["img-src"]);
ctaTitle.textContent = siteContent.cta.h1;
ctaButton.textContent = siteContent.cta.button;

// ========== MAIN CONTENT ==========

// Main Content Reference Object (for organization)
const sectionMain = {
  top: {
    features: {
      heading: document.querySelector(
        ".main-content .top-content .text-content:nth-of-type(1) h4"
      ),
      description: document.querySelector(
        ".main-content .top-content .text-content:nth-of-type(1) p"
      ),
    },
    about: {
      heading: document.querySelector(
        ".main-content .top-content .text-content:nth-of-type(2) h4"
      ),
      description: document.querySelector(
        ".main-content .top-content .text-content:nth-of-type(2) p"
      ),
    },
  },
  middle: {
    image: document.querySelector("#middle-img"),
  },
  bottom: {
    services: {
      heading: document.querySelector(
        ".main-content .bottom-content .text-content:nth-of-type(1) h4"
      ),
      description: document.querySelector(
        ".main-content .bottom-content .text-content:nth-of-type(1) p"
      ),
    },
    product: {
      heading: document.querySelector(
        ".main-content .bottom-content .text-content:nth-of-type(2) h4"
      ),
      description: document.querySelector(
        ".main-content .bottom-content .text-content:nth-of-type(2) p"
      ),
    },
    vision: {
      heading: document.querySelector(
        ".main-content .bottom-content .text-content:nth-of-type(3) h4"
      ),
      description: document.querySelector(
        ".main-content .bottom-content .text-content:nth-of-type(3) p"
      ),
    },
  },
};

// Top section
sectionMain.top.features.heading.textContent =
  siteContent["main-content"]["features-h4"];
sectionMain.top.features.description.textContent =
  siteContent["main-content"]["features-content"];
sectionMain.top.about.heading.textContent =
  siteContent["main-content"]["about-h4"];
sectionMain.top.about.description.textContent =
  siteContent["main-content"]["about-content"];

// Middle section
sectionMain.middle.image.setAttribute(
  "src",
  siteContent["main-content"]["middle-img-src"]
);

// Bottom section
sectionMain.bottom.services.heading.textContent =
  siteContent["main-content"]["services-h4"];
sectionMain.bottom.services.description.textContent =
  siteContent["main-content"]["services-content"];
sectionMain.bottom.product.heading.textContent =
  siteContent["main-content"]["product-h4"];
sectionMain.bottom.product.description.textContent =
  siteContent["main-content"]["product-content"];
sectionMain.bottom.vision.heading.textContent =
  siteContent["main-content"]["vision-h4"];
sectionMain.bottom.vision.description.textContent =
  siteContent["main-content"]["vision-content"];

// ========== CONTACT AREA ==========

const sectionContact = [
  ...document.querySelectorAll(".contact h4"),
  ...document.querySelectorAll(".contact p"),
];

sectionContact.forEach(
  (info, index) =>
    (info.textContent = Object.values(siteContent.contact)[index])
);

// ========== FOOTER ==========

const copyright = document.querySelector("footer p");
copyright.textContent = siteContent.footer.copyright;
