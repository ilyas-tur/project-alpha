const slides = document.querySelector(".slides");
const slide = document.querySelectorAll(".slide");
const prevButton = document.getElementById("prev");
const nextButton = document.getElementById("next");
let currentIndex1 = 0;

function showSlide(index) {
  slides.style.transform = `translateX(-${index * 100}%)`;
}

prevButton.addEventListener("click", () => {
  currentIndex1 = currentIndex1 > 0 ? currentIndex1 - 1 : slide.length - 1;
  showSlide(currentIndex1);
});

nextButton.addEventListener("click", () => {
  currentIndex1 = currentIndex1 < slide.length - 1 ? currentIndex1 + 1 : 0;
  showSlide(currentIndex1);
});

const menu = document.querySelector(".menu");
const modal = document.getElementById("modal");

const menuButtons = document.querySelectorAll(".menu-button");

menuButtons.forEach((button) => {
  button.addEventListener("click", (event) => {
    const menu = button.nextElementSibling;
    menu.classList.toggle("hidden");
  });
});

function openModal() {
  modal.classList.remove("hidden");
}

document.querySelector(".modal__btn-later").addEventListener("click", () => {
  modal.classList.add("hidden");
});
const trigger = document.getElementById("trigger");
const loginModal = document.getElementById("login-modal");
const formTitle = document.getElementById("form-title");
const authForm = document.getElementById("auth-form");
const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const emailError = document.getElementById("email-error");
const passwordError = document.getElementById("password-error");
const successMessage = document.getElementById("success-message");
const switchLink = document.getElementById("switch-link");
let hideTimeout;

trigger.addEventListener("mouseenter", () => {
  clearTimeout(hideTimeout);
  loginModal.style.display = "block";
});

trigger.addEventListener("mouseleave", () => {
  hideTimeout = setTimeout(() => {
    loginModal.style.display = "none";
  }, 300);
});

// Обработка формы
authForm.addEventListener("submit", (event) => {
  event.preventDefault();

  // Сбрасываем сообщения об ошибках
  emailError.style.display = "none";
  passwordError.style.display = "none";
  successMessage.style.display = "none";

  let isValid = true;

  // Проверка email
  const emailValue = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(emailValue)) {
    emailError.style.display = "block";
    isValid = false;
  }

  // Проверка пароля
  const passwordValue = passwordInput.value.trim();
  if (passwordValue.length < 6) {
    passwordError.style.display = "block";
    isValid = false;
  }

  // Если все данные корректны
  if (isValid) {
    successMessage.style.display = "block";
    authForm.reset();
  }
});

// Переключение между входом и регистрацией
switchLink.addEventListener("click", () => {
  const isLogin = formTitle.textContent === "Вход";
  formTitle.textContent = isLogin ? "Регистрация" : "Вход";
  switchLink.textContent = isLogin
    ? "Уже есть аккаунт? Войти"
    : "Зарегистрироваться";
});

let currentIndex = 0;
const carouselContent = document.getElementById("carousel-content");

const menus = {
  original: [
    {
      title: "Спагетти карбонара «Чао Италия»",
      img: "https://storage.yandexcloud.net/stor.chefmarket.ru/spagetti-karbonara-chao-italiya4__1245x700.jpeg",
      info: ["Легко", "20 минут", "910 г"],
    },
    {
      title: "Торт «Медовик как в детстве» с нежным заварным кремом",
      img: "https://storage.yandexcloud.net/stor.chefmarket.ru/tort-medovik-kak-v-detstve-s-nejnym-zavarnym-kremom__1245x700.jpeg",
      info: ["Легко", "До 20 минут"],
    },
  ],
  family: [
    {
      title:
        "Куриные фрикадельки в сливочном соусе с ароматной петрушкой и рассыпчатой гречкой",
      img: "https://storage.yandexcloud.net/stor.chefmarket.ru/kurinye-frikadelki-v-slivochnom-souse-s-aromatnoy-petrushkoy-i-ra__1245x700.jpeg",
      info: ["Средне", "40 минут", "1200 г"],
    },
    {
      title: "Традиционная сельдь под шубой со свежим укропом",
      img: "https://storage.yandexcloud.net/stor.chefmarket.ru/seld-pod-shuboy__1245x700.jpeg",
      info: ["Легко", "30 минут"],
    },
  ],
  balance: [
    {
      title:
        "Шашлычки из тигровых креветок в имбирно-медовом маринаде с ореховым соусом на жасминовом рисе",
      img: "https://storage.yandexcloud.net/stor.chefmarket.ru/shashlychki-iz-tigrovyh-krevetok-v-imbirno-medovom-marinade-s-oreho__1245x700.jpeg",
      info: ["Легко", "15 минут"],
    },
    {
      title:
        "Салат с куриным филе, обжаренным в пряных специях, авокадо, хрустящим романо, помидорами черри и бальзамической заправкой",
      img: "https://storage.yandexcloud.net/stor.chefmarket.ru/salat-s-kurinym-file-objarennym-v-pryanyh-speciyah-avokado-hrus__1245x700.jpeg",
      info: ["Легко", "20 минут", "500 г"],
    },
  ],
};

function updateCarousel() {
  carouselContent.style.transform = `translateX(-${currentIndex * 100}%)`;
}

function nextSlide() {
  if (currentIndex < carouselContent.children.length - 1) {
    currentIndex++;
    updateCarousel();
  }
}

function prevSlide() {
  if (currentIndex > 0) {
    currentIndex--;
    updateCarousel();
  }
}

function switchMenu(menu) {
  document.querySelectorAll(".navigation button").forEach((button) => {
    button.classList.remove("active");
  });
  document
    .querySelector(`.navigation button[onclick*='${menu}']`)
    .classList.add("active");

  // Update carousel content
  const selectedMenu = menus[menu];
  carouselContent.innerHTML = "";
  selectedMenu.forEach((item) => {
    const card = document.createElement("div");
    card.className = "card";
    card.innerHTML = `
                  <img src="${item.img}" alt="${item.title}">
                  <h2>${item.title}</h2>
                  <div class="info">
                      ${item.info
                        .map((infoItem) => `<span>${infoItem}</span>`)
                        .join("")}
                  </div>
                  <button class="btn">Смотреть меню</button>
              `;
    carouselContent.appendChild(card);
  });

  // Reset carousel position
  currentIndex = 0;
  updateCarousel();
}

const popupWindow = document.getElementById("popup-window");
const closeBtn = document.querySelector(".close-btn");
const notInterestedBtn = document.getElementById("not-interested");

// Показываем модальное окно, если курсор мыши уходит за пределы верхней части экрана
document.addEventListener("mouseout", (event) => {
  if (!event.relatedTarget && event.clientY <= 0) {
    popupWindow.style.display = "flex";
  }
});

// Закрываем модальное окно
closeBtn.addEventListener("click", () => {
  popupWindow.style.display = "none";
});

notInterestedBtn.addEventListener("click", () => {
  popupWindow.style.display = "none";
});

// Закрытие модального окна при клике вне его
window.addEventListener("click", (event) => {
  if (event.target === popupWindow) {
    popupWindow.style.display = "none";
  }
});
