const clothing = [
    {
        id:      0,
        price:   200,
        title:   'Футболка "Эволюционируй или Сдохни"',
        size:    'S/M/L',
        color:   ['blue', 'beige', 'gray'],
        isNew:   false,
        img:     './src/assets/kolesatshirt.png',
        details: 'Брендированная футболка Материал: Хлопок 80%, Вискоза 20%',
        advice:  'Написать дяде Рику для уточнения.',
    },
    {
        id:      1,
        price:   250,
        title:   'Футболка <Frontend>',
        size:    'S/M',
        color:   ['blue', 'beige', 'gray'],
        isNew:   true,
        img:     './/src/assets/frontendtshirt.jpg',
        details: 'Футболка Материал: Хлопок 80%, Вискоза 20%',

    },
    {
        id:      2,
        price:   300,
        title:   'Свитшот',
        size:    'S/L',
        color:   ['blue', 'beige', 'gray'],
        isNew:   true,
        img:     './src/assets/kolesasweatshirt.jpg',
        details: 'Брендированный Свитшот Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:      3,
        price:   350,
        title:   'Свитшот Front end developer by day',
        size:    'M/L',
        color:   ['blue', 'beige', 'gray'],
        isNew:   false,
        img:     './src/assets/frontendsweatshirt.jpg',
        details: 'Свитшот Материал: Хлопок 80%, Вискоза 20%',
        advice:  'Написать дяде Морти для уточнения.',
    },
    {
        id:      4,
        price:   400,
        title:   'Худи React',
        size:    'S/M/L',
        color:   ['blue', 'beige', 'gray'],
        isNew:   false,
        img:     './src/assets/react1.jpg',
        details: 'Брендированный Худи Материал: Хлопок 80%, Вискоза 20%',
    },
    {
        id:      5,
        price:   225,
        title:   'Худи Frontend Happy Hour',
        size:    'S',
        color:   ['blue', 'beige', 'gray'],
        isNew:   false,
        img:     './src/assets/hoodie.jpg',
        details: 'Худи Материал: Хлопок 80%, Вискоза 20%',
    },
];
const accessories = [
    {
        id:      6,
        price:   100,
        title:   'Бутылка',
        volume:  0.7,
        isNew:   false,
        img:     './src/assets/kolesabottle.jpg',
        details: 'Бутылка для воды с трубочкой',
    },
    {
        id:               7,
        price:            125,
        title:            'Зонт',
        accessoriesColor: 'Синий/Красный/Черный',
        isNew:            false,
        img:              './src/assets/umbrella.jpg',
    },
    {
        id:               8,
        price:            50,
        title:            'Картхолдер',
        accessoriesColor: 'Синий/Красный/Черный',
        isNew:            false,
        img:              './src/assets/cartholder.jpg',
    },
    {
        id:      9,
        price:   120,
        title:   'Бутылка',
        isNew:   true,
        volume:  1,
        img:     './src/assets/kolesabottle.jpg',
        details: 'Бутылка для воды с трубочкой',
    },
    {
        id:               10,
        price:            175,
        title:            'Зонт',
        accessoriesColor: 'Синий/Красный/Черный',
        isNew:            false,
        img:              './src/assets/umbrella.jpg',
    },
    {
        id:               11,
        price:            75,
        title:            'Картхолдер',
        accessoriesColor: 'Синий/Красный/Черный',
        isNew:            true,
        img:              './src/assets/cartholder.jpg',
    },
];
const grid = document.querySelector('.js__product-grid');

// Make card

const makeProductCard = (img, isNew, price, title, size, volume, accessoriesColor, id) => {
    const card = document.createElement('div');

    card.classList = 'body__grid-item grid-item js__grid-item';
    card.id = id;

    card.innerHTML = `
            <div class="grid-item__imgs">
                <img src=${img} alt="Item Picture" class="grid-item__pic">
                ${isNew ? '<img src="/src/assets/Label.svg" alt="" class="grid-item__badge">' : ''}
            </div>
            <div class="grid-item__info">
                <div class="grid-item__price fw-600">${price} баллов</div>
                <div class="grid-item__title fw-600">${title}</div>
                <div class="grid-item__additional"> ${size ? `Размеры ${size}` : ''} ${volume ? `Объем ${volume}л` : ''}
                ${accessoriesColor ? `Цвет ${accessoriesColor}` : ''}
                </div>
                <button type="submit" class='grid-item__order-btn'>Заказать</button>
            </div>`;

    return card;
};

// Clear Grid

const clearGrid = () => {
    while (grid.firstElementChild) { grid.removeChild(grid.firstElementChild); }
};

// Load Cards

const loadCards = (category) => {
    clearGrid();
    category.sort((x, y) => (x.isNew < y.isNew ? 1 : -1));
    category.forEach((card) => {
        const cardHtml = makeProductCard(card.img, card.isNew, card.price, card.title,
            card.size, card.volume, card.accessoriesColor, card.id);

        grid.append(cardHtml);
    });
};

// Concating two categories

const allProducts = clothing.concat(accessories);

// Load all card on page load

window.addEventListener('load', () => {
    loadCards(allProducts);
});

// Event listeneres on radio-buttons and load the chosen mock

const radioBtns = document.querySelectorAll('.js__filter-btn');

radioBtns.forEach((radioBtn) => {
    radioBtn.addEventListener('click', () => {
        if (radioBtn.value === 'clothing') {
            loadCards(clothing);
        } else if (radioBtn.value === 'accessories') {
            loadCards(accessories);
        } else {
            loadCards(allProducts);
        }
    });
});

// Close modal
const closeWindow = (modal) => {
    document.addEventListener('click', (e) => {
        if (e.target.className === 'close' || e.target.className === 'modal__wrapper') {
            modal.style.display = 'none';
            document.querySelector('html').style.overflow = 'auto';
        }
    });
};

// Build modal

function buildModal(id) {
    const modal = document.createElement('div');

    modal.className = 'modal';
    modal.id = id;

    allProducts.forEach((product) => {
        if (product.id === id) {
            modal.innerHTML = `<div class="modal__wrapper">
            <div class="modal__container">
            <div class="modal__imgs imgs">
                <img src=${product.img} alt="Main modal Picture" class="imgs__main-pic">
                <div class="imgs__preview-pics">
                    <img src=${product.img} alt="Preview Image" class="imgs__preview-pic">
                    <img src=${product.img} alt="Preview Image" class="imgs__preview-pic--selected imgs__preview-pic">
                    <img src=${product.img} alt="Preview Image" class="imgs__preview-pic">
                </div>
            </div>
            <div class="modal__item-info item-info">
                <div>
                    <h3 class="item-info__title mb-8">${product.title}</h3>
                    <h3 class="item-info__price mb-8 fw-600">${product.price} баллов</h3>
                    <button class="btn btn--blue mb-24">Заказать</button>
            </div>
            <div class="modal__balance balance">
                <div class="balance__info">
                <div class="balance__title mb-4">Твой баланс:</div>
                <div class="balance__amount">3 945 баллов</div>
            </div>
            <div class="balance__icon">
                <img src="/src/assets/🛍.png" alt="Balance Icon">
            </div>
            </div>
            ${product.color || product.accessoriesColor ? `<div class="color mb-24">
            <div class="color__title mb-8">Цвета:</div>
                <div class="color__picker">
                    <input type="radio" name="color-pick" id="color__blue__${product.id}" value="color__blue"
                    class="product-filter-btn" checked>
                    <label for="color__blue__${product.id}" class="filter-label">Синий</label>
                    <input type="radio" name="color-pick" id="color__beige__${product.id}" value="color__beige"
                    class="product-filter-btn">
                    <label for="color__beige__${product.id}" class="filter-label"> Бежевый</label>
                    <input type="radio" name="color-pick" id="color__gray__${product.id}" value="color__beige"
                    class="product-filter-btn">
                    <label for="color__gray__${product.id}" class="filter-label"> Серый</label>
                </div>
            </div>` : ''}
            ${product.size ? `<div class="size mb-24">
            <div class="size__title mb-8">Размер:</div>
            <div class="size__picker">

                <input type="radio" name="size-pick" id="size_s__${product.id}" value="size_s"
                class="product-filter-btn"
                checked>
                <label for="size_s__${product.id}" class="filter-label"> S</label>

                <input type="radio" name="size-pick" id="size_m__${product.id}" value="size_m"
                class="product-filter-btn">
                <label for="size_m__${product.id}" class="filter-label">M</label>

                <input type="radio" name="size-pick" id="size_l__${product.id}" value="size_l"
                class="product-filter-btn">
                <label for="size_l__${product.id}" class="filter-label">L</label>

            </div>
        </div>` : ''}

            ${product.volume ? `<div class="modal__size mb-24">
                <div class="size__title mb-8">Объем:</div>
                <div class="size__picker">
                <input type="radio" name="size-pick" id="size_s__${product.id}" value="${product.volume}"
                class="product-filter-btn"
                        checked>
                    <label for="size_s__${product.id}" class="filter-label"> ${product.volume}л</label>
                </div>
            </div>` : ''}

            ${product.details ? `<div class="modal__details mb-24">
                <div class="details__title mb-4 fw-600">Детали:</div>
                <div class="details__text">${product.details}</div>
            </div>` : ''}

            ${product.advice ? `<div class="modal__advice">
                <div class="advice__title mb-4 fw-600">Как выбрать размер:</div>
                <div class="advice__text">${product.advice}</div>
                </div>` : ''}
                </div>
                <button class="close-button" ><img src="/src/assets/Icon shape.png" alt="close button" class="close">
                </button>
        </div>
        </div>`;
        }
    });
    closeWindow(modal);

    return modal;
}

// Open modal

grid.addEventListener('click', (e) => {
    let gridItem = e.target;

    while (gridItem.className !== 'body__grid-item grid-item js__grid-item') {
        gridItem = gridItem.parentElement;
    }

    buildModal(+gridItem.id);

    document.querySelector('.wrapper').append(buildModal(+gridItem.id));
    document.querySelector('html').style.overflow = 'hidden';
});
