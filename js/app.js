const categories = [
  {
    category: "lunch",
    text: "نهار",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
         </svg>`,
    status: "active",
  },
  {
    category: "diner",
    text: "شام",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
            </svg>`,
    status: "notActive",
  },
  {
    category: "cold",
    text: "بار سرد",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
            </svg>`,
    status: "notActive",
  },
  {
    category: "breakFest",
    text: "صبحانه",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
            </svg>`,
    status: "notActive",
  },
  {
    category: "moncy",
    text: "میمون",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
            </svg>`,
    status: "notActive",
  },
];

const menu = {
  lunch: [
    {
      name: "گربه",
      price: "323",
      about: "نبتینمبتنسیتبناس ابتسا بنتسنمبتمن",
    },
    {
      name: "سگ",
      price: "343",
      about: " لبابالالالا تبتسنمتبنتنیبسیبشسبس",
    },
    {
      name: "میمون",
      price: "7777",
      about: "بنتسنمبت",
    },
    {
      name: "کلبوک",
      price: "76543",
      about: "نبتینمبتنسیتبناس",
    },
    {
      name: "ایمن",
      price: "76543",
      about: "نبتینمبتنسیتبناس",
    },
  ],
  diner: [
    {
      name: "khk",
      price: "323",
      about: "نبتینمبتنسیتبناس ابتسا بنتسنمبتمن",
    },
    {
      name: "dd",
      price: "343",
      about: " لبابالالالا ",
    },
    {
      name: "ff",
      price: "7777",
      about: "بنتسنمبت",
    },
    {
      name: "ssa",
      price: "76543",
      about: "نبتینمبتنسیتبناس",
    },
    {
      name: "ایمن",
      price: "76543",
      about: "نبتینمبتنسیتبناس",
    },
    {
      name: "ایمن",
      price: "76543",
      about: "نبتینمبتنسیتبناس",
    },
  ],
  cold: [],
  breakFest: [],
  moncy: [],
  dog: [],
};

const swiperContainer = document.querySelector(".mySwiper");
const menuElem = document.querySelector(".menu");
const categoriesElem = document.querySelector(".categories");

let lastScrollY = window.scrollY;

window.addEventListener("scroll", () => {
  const currentY = window.scrollY;

  if (currentY > lastScrollY) {
    document.body.classList.add("small");
  } else {
    document.body.classList.remove("small");
  }

  console.log(lastScrollY);
  console.log(currentY);

  lastScrollY = currentY;
});

const showCategories = () => {
  categoriesElem.innerHTML = "";

  categories.forEach((category) => {
    categoriesElem.insertAdjacentHTML(
      "beforeend",
      `
        <div class="category ${category.status === "active" ? "active" : ""}">
          <div class="category__icon-box" onclick="chooseCategory('${
            category.category
          }')">
            ${category.svg}
          </div>
          <span class="category__title">${category.text}</span>
        </div>
      `
    );
  });
};

const showMenu = (category) => {
  menuElem.innerHTML = "";

  let categorySelected;

  if (category) {
    categorySelected = menu[category];
  } else {
    categorySelected = menu.lunch;
  }

  categorySelected.forEach((menu) => {
    menuElem.insertAdjacentHTML(
      "beforeend",
      `
      <div class="menu-item">
        <span class="menu-item__name">${menu.name}</span>
        <p class="menu-item__about">${menu.about}</p>
        <span class="menu-item__price">${menu.price}</span>
      </div>
      `
    );
  });
};

function chooseCategory(category) {
  userCategorySelected = category;

  categories.forEach((category) => {
    category.status = "notActive";
  });

  const categoryIndex = categories.findIndex((index) => {
    return index.category === userCategorySelected;
  });

  categories[categoryIndex].status = "active";

  showCategories();
  showMenu(categories[categoryIndex].category);
}

window.addEventListener("load", () => {
  showCategories();
  showMenu();
});
