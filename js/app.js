const categories = [
  {
    category: "spressoHotBased",
    text: "بار گرم بر پایه اسپرسو",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
         </svg>`,
    isActive: true,
  },
  {
    category: "spressoColdBased",
    text: "سرد بر پایه اسپرسو",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
         </svg>`,
    isActive: false,
  },
  {
    category: "hotDrinks",
    text: "نوشیدنی گرم و دمنوش",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
         </svg>`,
    isActive: false,
  },
  {
    category: "coldDrink",
    text: "نوشیدنی سرد",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
         </svg>`,
    isActive: false,
  },
  {
    category: "dinner",
    text: "شام",
    svg: ` <svg
            class="category__icon"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1024 1024">
            <path
              d="M768 64a192 192 0 1 1-69.952 370.88L480 725.376V896h96a32 32 0 1 1 0 64H320a32 32 0 1 1 0-64h96V725.376L76.8 273.536a64 64 0 0 1-12.8-38.4v-10.688a32 32 0 0 1 32-32h71.808l-65.536-83.84a32 32 0 0 1 50.432-39.424l96.256 123.264h337.728A192.064 192.064 0 0 1 768 64zM656.896 192.448H800a32 32 0 0 1 32 32v10.624a64 64 0 0 1-12.8 38.4l-80.448 107.2a128 128 0 1 0-81.92-188.16v-.064zm-357.888 64 129.472 165.76a32 32 0 0 1-50.432 39.36l-160.256-205.12H144l304 404.928 304-404.928H299.008z"
            />
         </svg>`,
    isActive: false,
  },
];

const menu = {
  spressoHotBased: [
    {
      name: "اسپرسو سینگل",
      price: 1989889,
    },
    {
      name: "اسپرسو دبل",
      price: 1,
    },
    {
      name: "ماکیاتو",
      price: 10,
    },
    {
      name: "اسپرسو رومانو",
      price: 1,
    },
    {
      name: "اسپرسو کُن‌پانا",
      price: 1,
    },
    {
      name: "اسپرسو کُن‌کانلا",
      price: 1,
    },
    {
      name: "اسپرسو بوم بُن",
      price: 1,
    },
    {
      name: "امریکانو",
      price: 1,
    },
    {
      name: "لاته",
      price: 1,
    },
    {
      name: "موکا",
      price: 1,
    },
    {
      name: "کارامل ماکیاتو",
      price: 1,
    },
    {
      name: "کاپوچینو",
      price: 1,
    },
    {
      name: "وانیلا لاته",
      price: 1,
    },
    {
      name: "هاتزل لاته",
      price: 1,
    },
    {
      name: "سینامون لاته",
      price: 1,
    },
    {
      name: "لوتوس لاته",
      price: 1,
    },
    {
      name: "دالگونا",
      price: 1,
    },
  ],
  spressoColdBased: [
    {
      name: "ایس امریکانو",
      price: 1,
    },
    {
      name: "ایس لاته",
      price: 1,
    },
    {
      name: "ایس کارامل ماکیاتو",
      price: 1,
    },
    {
      name: "ایس موکا",
      price: 1,
    },
    {
      name: "ایس وانیلا لاته",
      price: 1,
    },
    {
      name: "ایس هاتزل لاته",
      price: 1,
    },
    {
      name: "ایس لوتوس لاته",
      price: 1,
    },
    {
      name: "ایس لاته دورو",
      price: 1,
    },
    {
      name: "ایس لاته منتا",
      price: 1,
    },
    {
      name: "افوگاتو",
      price: 1,
    },
  ],
  hotDrinks: [
    {
      name: "چای",
      price: 1,
    },
    {
      name: "هات چاکلت",
      price: 1,
    },
    {
      name: "تی لاته زعفران پسته",
      price: 1,
    },
    {
      name: "چای کرک",
      price: 1,
    },
    {
      name: "چای ماسالا",
      price: 1,
    },
    {
      name: "انواع دمنوش",
      price: 1,
    },
  ],
  coldDrink: [
    {
      name: "موهيتو كلاسيک",
      price: 1,
    },
    {
      name: "موهيتو فراگولا ",
      price: 1,
    },
    {
      name: "موهيتو ويولا ",
      price: 1,
    },
    {
      name: "موهيتو كوييک",
      price: 1,
    },
    {
      name: "موهيتو دورو ",
      price: 1,
    },
    {
      name: "مارين ",
      price: 1,
    },
    {
      name: "جنوا ",
      price: 1,
    },
    {
      name: "ورونا ",
      price: 1,
    },
    {
      name: "فلورنزا",
      price: 1,
    },
    {
      name: "روما سان ست ",
      price: 1,
    },
    {
      name: "ترنتينو",
      price: 1,
    },
  ],
  dinner: [
    {
      name: "اسنک چيكن چيلى ",
      price: 1,
    },
    {
      name: "اسنک چيكن لوچه ",
      price: 1,
    },
    {
      name: "ساندويچ لوسيس",
      price: 1,
    },
  ],
};

const menuElem = document.querySelector(".menu");
const categoriesElem = document.querySelector(".categories");

let lastScrollY = window.scrollY;
let isSmall = false;
const EDGE = 80;
const DELTA = 5;

const showCategoties = () => {
  categoriesElem.innerHTML = "";
  let categoryExample = "";

  categories.forEach((category) => {
    categoryExample = category.category;

    categoriesElem.insertAdjacentHTML(
      "beforeend",
      `
      <div class="category ${
        category.isActive ? "active" : ""
      }" data-category="${category.category}">
        <div class="category__right">
          <span class="category__title">${category.text}</span>
          <span class="category__example">${menu[categoryExample][0]?.name}، ${
        menu[categoryExample][1]?.name
      } و ...</span>
        </div>
        <div class="category__left">
          ${category.svg}
        </div>
      </div>
      `
    );
  });
};

const chooseMenuCategory = (event) => {
  const selectedCategory = event.target.closest(".category");

  if (selectedCategory) {
    document.querySelector(".active").classList.remove("active");
    selectedCategory.classList.add("active");
    showMenu(selectedCategory.dataset.category);
  }
};

const showMenu = (userSelected) => {
  const categorySelected = userSelected;
  let menuArray = "";

  if (menu[categorySelected]) {
    menuArray = menu[categorySelected];
  } else {
    menuArray = menu.spressoHotBased;
  }

  menuElem.innerHTML = "";

  menuArray.forEach((categorySelected) => {
    menuElem.insertAdjacentHTML(
      "beforeend",
      `
      <div class="menu-item">
        <div>
          <span class="menu-item__name">${categorySelected.name}</span>
        </div>
        <span class="menu-item__price">${categorySelected.price.toLocaleString()} تومان</span>
      </div>
      `
    );
  });
};

categoriesElem.addEventListener("click", chooseMenuCategory);

window.addEventListener(
  "scroll",
  () => {
    const currentY = window.scrollY;

    if (Math.abs(currentY - lastScrollY) < DELTA) return;

    const docHeight = Math.max(
      document.body.scrollHeight,
      document.documentElement.scrollHeight
    );

    const viewportHeight = window.innerHeight;

    const atTop = currentY <= EDGE;
    const atBottom = currentY + viewportHeight >= docHeight - EDGE;

    if (atTop || atBottom) {
      lastScrollY = currentY;
      return;
    }

    const scrollingDown = currentY > lastScrollY;

    if (scrollingDown && !isSmall) {
      document.body.classList.add("small");
      isSmall = true;
    }

    if (!scrollingDown && isSmall) {
      document.body.classList.remove("small");
      isSmall = false;
    }

    lastScrollY = currentY;
  },
  { passive: true }
);

window.addEventListener("load", () => {
  showCategoties();
  showMenu();
});
