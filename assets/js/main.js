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

const cookieData = [
  {
    name: "Antep Fıstığı Dolgulu Cookie",
    line: "Kavrulmuş fıstık notalarıyla dengeli, yumuşak ve zengin bir lezzet.",
    image: "assets/images/cookies/antep-fistikli.png",
    alt: "Antep Fıstığı Dolgulu Cookie",
    mood: {
      a: "rgba(151, 175, 120, 0.25)",
      b: "rgba(40, 73, 52, 0.15)",
      glow: "rgba(188, 206, 150, 0.34)",
      accent: "rgba(70, 98, 61, 0.9)",
      accentSoft: "rgba(70, 98, 61, 0.34)",
    },
  },
  {
    name: "Yoğun Çikolatalı Brownie Cookie",
    line: "Derin kakao karakteriyle yogun ve tatmin edici bir doku deneyimi.",
    image: "assets/images/cookies/chocolate-brownie.png",
    alt: "Yoğun Çikolatalı Brownie Cookie",
    mood: {
      a: "rgba(108, 68, 52, 0.26)",
      b: "rgba(36, 20, 15, 0.16)",
      glow: "rgba(139, 88, 65, 0.3)",
      accent: "rgba(78, 45, 31, 0.9)",
      accentSoft: "rgba(78, 45, 31, 0.34)",
    },
  },
  {
    name: "Chocolate Chip Çubukları",
    line: "Fırından yeni çıkmış sıcaklıkta, kıvamlı ve keyifli bir atıştırmalık.",
    image: "assets/images/cookies/chocolate-chip-cubuk.png",
    alt: "Chocolate Chip Çubukları",
    mood: {
      a: "rgba(202, 160, 104, 0.26)",
      b: "rgba(104, 77, 43, 0.15)",
      glow: "rgba(223, 184, 126, 0.32)",
      accent: "rgba(140, 104, 52, 0.9)",
      accentSoft: "rgba(140, 104, 52, 0.34)",
    },
  },
  {
    name: "Limon Kremalı Beyaz Çikolatalı Cookie",
    line: "Ferah limon kreması ve beyaz çikolata dengesiyle zarif bir tat.",
    image: "assets/images/cookies/limonlu-beyaz-cikolatali.png",
    alt: "Limon Kremalı Beyaz Çikolatalı Cookie",
    mood: {
      a: "rgba(227, 220, 156, 0.28)",
      b: "rgba(163, 183, 142, 0.13)",
      glow: "rgba(245, 239, 181, 0.34)",
      accent: "rgba(146, 156, 96, 0.9)",
      accentSoft: "rgba(146, 156, 96, 0.34)",
    },
  },
  {
    name: "Lotus Biscoff Dolgulu Cookie",
    line: "Karamel-bisküvi sıcaklığı taşıyan dolgun ve yumuşak bir imza lezzet.",
    image: "assets/images/cookies/lotus.png",
    alt: "Lotus Biscoff Dolgulu Cookie",
    mood: {
      a: "rgba(204, 144, 92, 0.27)",
      b: "rgba(107, 67, 35, 0.15)",
      glow: "rgba(226, 170, 116, 0.34)",
      accent: "rgba(135, 84, 48, 0.9)",
      accentSoft: "rgba(135, 84, 48, 0.34)",
    },
  },
  {
    name: "Nutella Dolgulu Cookie",
    line: "Akışkan iç dolgusu ve yoğun çikolata notalarıyla unutulmaz bir seçim.",
    image: "assets/images/cookies/nutella.png",
    alt: "Nutella Dolgulu Cookie",
    mood: {
      a: "rgba(119, 79, 62, 0.26)",
      b: "rgba(42, 24, 18, 0.15)",
      glow: "rgba(150, 96, 74, 0.3)",
      accent: "rgba(88, 53, 40, 0.9)",
      accentSoft: "rgba(88, 53, 40, 0.34)",
    },
  },
  {
    name: "Orman Meyveli Cheesecake Cookie",
    line: "Meyvemsi dokunuşlar ve cheesecake esintisiyle ferah bir yorum.",
    image: "assets/images/cookies/orman-meyveli.png",
    alt: "Orman Meyveli Cheesecake Cookie",
    mood: {
      a: "rgba(166, 123, 145, 0.24)",
      b: "rgba(72, 47, 74, 0.13)",
      glow: "rgba(190, 143, 169, 0.3)",
      accent: "rgba(112, 72, 116, 0.9)",
      accentSoft: "rgba(112, 72, 116, 0.34)",
    },
  },
  {
    name: "Tiramisu Cookie",
    line: "Kahve ve krema notalarının dengeli buluşmasıyla rafine bir tat.",
    image: "assets/images/cookies/tiramisu.png",
    alt: "Tiramisu Cookie",
    mood: {
      a: "rgba(148, 110, 89, 0.25)",
      b: "rgba(71, 50, 40, 0.14)",
      glow: "rgba(173, 134, 112, 0.3)",
      accent: "rgba(95, 67, 53, 0.9)",
      accentSoft: "rgba(95, 67, 53, 0.34)",
    },
  },
  {
    name: "Karamelli Yer Fıstıklı Cookie",
    line: "Karamel ve yer fıstığı uyumunu bir araya getiren sıcak bir lezzet.",
    image: "assets/images/cookies/yer-fistikli.png",
    alt: "Karamelli Yer Fıstıklı Cookie",
    mood: {
      a: "rgba(201, 145, 88, 0.27)",
      b: "rgba(111, 78, 44, 0.14)",
      glow: "rgba(225, 174, 118, 0.3)",
      accent: "rgba(146, 101, 56, 0.9)",
      accentSoft: "rgba(146, 101, 56, 0.34)",
    },
  },
];

const cookiesSection = document.getElementById("cookies");
const cookieStage = document.querySelector(".cookie-stage");
const cookieImage = document.getElementById("cookieShowcaseImage");
const cookieTitle = document.getElementById("cookieShowcaseTitle");
const cookieLine = document.getElementById("cookieShowcaseLine");
const cookiePrev = document.getElementById("cookiePrev");
const cookieNext = document.getElementById("cookieNext");
const cookieSelectors = document.getElementById("cookieSelectors");
const defaultCookieMood = {
  a: "rgba(213, 191, 166, 0.22)",
  b: "rgba(15, 35, 69, 0.1)",
  glow: "rgba(213, 191, 166, 0.34)",
  accent: "rgba(15, 35, 69, 0.9)",
  accentSoft: "rgba(15, 35, 69, 0.28)",
};

let cookieIndex = 0;
let animating = false;
let touchStartX = 0;
let cookiesInView = false;

function applyMood(product) {
  if (!cookiesSection) return;
  cookiesSection.style.setProperty("--cookie-a", product.mood.a);
  cookiesSection.style.setProperty("--cookie-b", product.mood.b);
  cookiesSection.style.setProperty("--cookie-glow", product.mood.glow);
  cookiesSection.style.setProperty("--cookie-accent", product.mood.accent);
  cookiesSection.style.setProperty("--cookie-accent-soft", product.mood.accentSoft);
  cookiesSection.classList.add("is-mood-active");
}

function resetMood() {
  if (!cookiesSection) return;
  cookiesSection.style.setProperty("--cookie-a", defaultCookieMood.a);
  cookiesSection.style.setProperty("--cookie-b", defaultCookieMood.b);
  cookiesSection.style.setProperty("--cookie-glow", defaultCookieMood.glow);
  cookiesSection.style.setProperty("--cookie-accent", defaultCookieMood.accent);
  cookiesSection.style.setProperty("--cookie-accent-soft", defaultCookieMood.accentSoft);
  cookiesSection.classList.remove("is-mood-active");
}

function renderCookie(index, direction = 1) {
  if (animating) return;
  animating = true;

  cookieIndex = (index + cookieData.length) % cookieData.length;
  const selected = cookieData[cookieIndex];
  const leavingClass = direction >= 0 ? "is-leaving-next" : "is-leaving-prev";
  cookieStage.classList.remove("is-leaving-next", "is-leaving-prev");
  cookieStage.classList.add(leavingClass);

  setTimeout(() => {
    cookieTitle.textContent = selected.name;
    cookieLine.textContent = selected.line;
    cookieImage.src = selected.image;
    cookieImage.alt = selected.alt;
    if (cookiesInView) applyMood(selected);

    cookieImage.style.setProperty("--cookie-rot", "0deg");

    cookieSelectors.querySelectorAll(".cookie-dot").forEach((dot, idx) => {
      dot.classList.toggle("is-active", idx === cookieIndex);
    });

    cookieStage.classList.remove(leavingClass);
  }, 240);

  setTimeout(() => {
    animating = false;
  }, 760);
}

if (
  cookiesSection &&
  cookieStage &&
  cookieImage &&
  cookieTitle &&
  cookieLine &&
  cookiePrev &&
  cookieNext &&
  cookieSelectors
) {
  cookieData.forEach((item, idx) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "cookie-dot";
    button.textContent = item.name;
    button.setAttribute("aria-label", `${item.name} seç`);
    button.addEventListener("click", () => renderCookie(idx, idx >= cookieIndex ? 1 : -1));
    cookieSelectors.appendChild(button);
  });

  cookiePrev.addEventListener("click", () => renderCookie(cookieIndex - 1, -1));
  cookieNext.addEventListener("click", () => renderCookie(cookieIndex + 1, 1));

  cookiesSection.addEventListener(
    "touchstart",
    (event) => {
      touchStartX = event.changedTouches[0].clientX;
    },
    { passive: true }
  );

  cookiesSection.addEventListener(
    "touchend",
    (event) => {
      const dx = event.changedTouches[0].clientX - touchStartX;
      if (Math.abs(dx) < 30) return;
      if (dx < 0) renderCookie(cookieIndex + 1, 1);
      else renderCookie(cookieIndex - 1, -1);
    },
    { passive: true }
  );

  const cookiesMoodObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        cookiesInView = entry.isIntersecting;
        if (cookiesInView) applyMood(cookieData[cookieIndex]);
        else resetMood();
      });
    },
    { threshold: 0.35 }
  );

  cookiesMoodObserver.observe(cookiesSection);

  renderCookie(0, 1);
  resetMood();
  animating = false;
}
