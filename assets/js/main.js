const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");
const linkItems = navLinks.querySelectorAll("a");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("open");
});

linkItems.forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
  });
});

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        observer.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.14 }
);

document.querySelectorAll(".reveal").forEach((el) => observer.observe(el));

const products = [
  {
    title: "Orman Meyveli Cheesecake Cookie",
    text: "Sisli orman esintisini taşıyan meyvemsi dokunuşlar ve cheesecake zarafeti.",
    image: "linear-gradient(140deg, #3e5b48, #1c2f27)",
    atmosphere: [
      "rgba(53, 88, 69, 0.52)",
      "rgba(31, 58, 48, 0.46)",
      "rgba(32, 55, 43, 0.24)",
      "rgba(8, 20, 15, 0.3)",
      "rgba(134, 178, 150, 0.2)",
      "rgba(13, 28, 21, 0.24)",
    ],
  },
  {
    title: "Lotus Biscoff Cookie",
    text: "Karamel gün batımı sıcaklığında, tarçın notalarıyla sofistike bir denge.",
    image: "linear-gradient(140deg, #c99356, #84502e)",
    atmosphere: [
      "rgba(199, 137, 72, 0.5)",
      "rgba(146, 82, 41, 0.42)",
      "rgba(192, 117, 57, 0.24)",
      "rgba(64, 33, 17, 0.27)",
      "rgba(255, 209, 154, 0.2)",
      "rgba(115, 71, 34, 0.23)",
    ],
  },
  {
    title: "Nutella Dolgulu Cookie",
    text: "Kadifemsi yansımalarla derin çikolata karakteri ve akışkan iç dolgu.",
    image: "linear-gradient(140deg, #5d3a2e, #1f1412)",
    atmosphere: [
      "rgba(74, 44, 35, 0.55)",
      "rgba(31, 17, 15, 0.48)",
      "rgba(73, 39, 32, 0.26)",
      "rgba(8, 6, 9, 0.3)",
      "rgba(198, 149, 128, 0.16)",
      "rgba(23, 13, 16, 0.22)",
    ],
  },
  {
    title: "Antep Fıstığı Dolgulu Cookie",
    text: "Asil yeşil tonları ve altın dokunuşlu fıstık dolgusu ile rafine bir lezzet.",
    image: "linear-gradient(140deg, #8fad5f, #4f6a31)",
    atmosphere: [
      "rgba(109, 151, 75, 0.5)",
      "rgba(62, 92, 44, 0.42)",
      "rgba(171, 150, 89, 0.22)",
      "rgba(31, 52, 27, 0.28)",
      "rgba(228, 207, 139, 0.22)",
      "rgba(73, 83, 34, 0.2)",
    ],
  },
  {
    title: "Tiramisu Cookie",
    text: "İtalyan gece kafe atmosferinden ilham alan espresso ve krema uyumu.",
    image: "linear-gradient(140deg, #8a5d44, #2e2321)",
    atmosphere: [
      "rgba(120, 77, 55, 0.48)",
      "rgba(45, 34, 31, 0.43)",
      "rgba(90, 58, 47, 0.24)",
      "rgba(12, 14, 18, 0.28)",
      "rgba(205, 172, 145, 0.16)",
      "rgba(26, 21, 26, 0.22)",
    ],
  },
  {
    title: "Yoğun Çikolatalı Brownie Cookie",
    text: "Yoğun kakao ruhu ve lav dokulu derinlik ile etkileyici bir tat deneyimi.",
    image: "linear-gradient(140deg, #5a3023, #1f1411)",
    atmosphere: [
      "rgba(96, 46, 30, 0.52)",
      "rgba(32, 17, 14, 0.46)",
      "rgba(87, 39, 25, 0.24)",
      "rgba(13, 8, 8, 0.31)",
      "rgba(186, 109, 78, 0.16)",
      "rgba(24, 14, 14, 0.22)",
    ],
  },
  {
    title: "Limon Kremalı Beyaz Çikolatalı Cookie",
    text: "Limon gün doğumu ferahlığı ve beyaz çikolatanın kremsi zarafeti.",
    image: "linear-gradient(140deg, #e2d27d, #b6c79f)",
    atmosphere: [
      "rgba(224, 206, 122, 0.45)",
      "rgba(184, 204, 174, 0.36)",
      "rgba(243, 236, 182, 0.25)",
      "rgba(115, 131, 119, 0.21)",
      "rgba(255, 250, 214, 0.25)",
      "rgba(171, 191, 178, 0.2)",
    ],
  },
  {
    title: "Karamelli Yer Fıstıklı Cookie",
    text: "Kavrulmuş altın tonlarda sıcak ve dolgun karamel-fıstık harmonisi.",
    image: "linear-gradient(140deg, #ca8f53, #7a5633)",
    atmosphere: [
      "rgba(206, 145, 84, 0.47)",
      "rgba(122, 85, 49, 0.41)",
      "rgba(183, 121, 62, 0.23)",
      "rgba(63, 41, 22, 0.26)",
      "rgba(242, 198, 147, 0.2)",
      "rgba(110, 78, 42, 0.2)",
    ],
  },
  {
    title: "Chocolate Chip Çubukları",
    text: "Fırından yeni çıkmış artisan atölye sıcaklığında kıtır bir final dokunuşu.",
    image: "linear-gradient(140deg, #b18052, #6a442b)",
    atmosphere: [
      "rgba(182, 128, 80, 0.45)",
      "rgba(114, 71, 42, 0.38)",
      "rgba(160, 102, 64, 0.22)",
      "rgba(55, 33, 20, 0.24)",
      "rgba(236, 194, 149, 0.17)",
      "rgba(92, 61, 37, 0.21)",
    ],
  },
];

const flavorShowcase = document.getElementById("flavorShowcase");
const flavorStage = document.getElementById("flavorStage");
const flavorPlatform = document.getElementById("flavorPlatform");
const flavorImage = document.getElementById("flavorImage");
const flavorTitle = document.getElementById("flavorTitle");
const flavorText = document.getElementById("flavorText");
const flavorDots = document.getElementById("flavorDots");
const flavorPrev = document.getElementById("flavorPrev");
const flavorNext = document.getElementById("flavorNext");
const cookiesSection = document.getElementById("cookies");

let currentProductIndex = 0;
let platformRotation = 0;
let cookieRotation = 0;
let isAnimatingFlavor = false;
let touchStartX = 0;

function setAtmosphere(product) {
  const [a, b, c, d, e, f] = product.atmosphere;
  document.body.style.setProperty("--atmo-a", a);
  document.body.style.setProperty("--atmo-b", b);
  document.body.style.setProperty("--atmo-c", c);
  document.body.style.setProperty("--atmo-d", d);
  document.body.style.setProperty("--atmo-e", e);
  document.body.style.setProperty("--atmo-f", f);
}

function resetAtmosphere() {
  document.body.classList.remove("atmosphere-active");
}

function renderProduct(index, direction = 1) {
  if (isAnimatingFlavor) return;
  isAnimatingFlavor = true;
  currentProductIndex = (index + products.length) % products.length;
  const selected = products[currentProductIndex];
  const outClass = direction >= 0 ? "is-transitioning-next" : "is-transitioning-prev";

  flavorStage.classList.remove("is-transitioning-next", "is-transitioning-prev", "is-entering");
  flavorStage.classList.add(outClass);

  setTimeout(() => {
    flavorTitle.textContent = selected.title;
    flavorText.textContent = selected.text;
    flavorImage.style.background = `
      radial-gradient(circle at 50% 30%, rgba(255, 255, 255, 0.44), transparent 58%),
      ${selected.image}
    `;

    platformRotation += direction * 14;
    cookieRotation += direction * 7;
    flavorPlatform.style.setProperty("--platform-rotation", `${platformRotation}deg`);
    flavorImage.style.setProperty("--cookie-rotation", `${cookieRotation}deg`);

    const dotItems = flavorDots.querySelectorAll(".flavor-dot");
    dotItems.forEach((dot, dotIndex) => {
      dot.classList.toggle("is-active", dotIndex === currentProductIndex);
    });

    if (document.body.classList.contains("atmosphere-active")) {
      setAtmosphere(selected);
    }

    flavorStage.classList.remove(outClass);
    flavorStage.classList.add("is-entering");
  }, 280);

  setTimeout(() => {
    flavorStage.classList.remove("is-entering");
    isAnimatingFlavor = false;
  }, 980);
}

if (flavorShowcase) {
  products.forEach((product, index) => {
    const dotButton = document.createElement("button");
    dotButton.type = "button";
    dotButton.className = "flavor-dot";
    dotButton.textContent = product.title;
    dotButton.setAttribute("aria-label", `${product.title} ürününü seç`);
    dotButton.addEventListener("click", () => renderProduct(index, index >= currentProductIndex ? 1 : -1));
    flavorDots.appendChild(dotButton);
  });

  flavorPrev.addEventListener("click", () => renderProduct(currentProductIndex - 1, -1));
  flavorNext.addEventListener("click", () => renderProduct(currentProductIndex + 1, 1));

  flavorShowcase.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  flavorShowcase.addEventListener(
    "touchend",
    (event) => {
      const deltaX = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(deltaX) < 32) return;
      if (deltaX < 0) {
        renderProduct(currentProductIndex + 1, 1);
      } else {
        renderProduct(currentProductIndex - 1, -1);
      }
    },
    { passive: true }
  );

  const atmosphereObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.body.classList.add("atmosphere-active");
          setAtmosphere(products[currentProductIndex]);
        } else {
          resetAtmosphere();
        }
      });
    },
    { threshold: 0.32 }
  );

  atmosphereObserver.observe(cookiesSection);
  renderProduct(0, 1);
  isAnimatingFlavor = false;
}
