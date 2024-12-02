(function() {
  "use strict";
  const A = ({ name: o, dev: n }) => {
    console.log(
      `%c EXP: ${o} (DEV: ${n})`,
      "background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;"
    );
  }, w = (o) => document.querySelectorAll(o), h = (o) => document.querySelector(o), y = "../src/portfolio/assets/", k = {
    arrowLeft: (
      /*html */
      `
    <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>`
    ),
    close: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>`,
    zoomPlus: `
    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.88 16.56c-1.576 1.155-3.54 1.866-5.667 1.92h-.013c-.045.001-.098.001-.152.001-4.967 0-8.999-4.002-9.048-8.957v-.005-.24c0-5.125 4.155-9.28 9.28-9.28s9.28 4.155 9.28 9.28c-.04 2.142-.755 4.109-1.939 5.707l.019-.027 7.44 7.44-1.76 1.6zm-12.24-7.28c.023 3.716 3.041 6.72 6.76 6.72 3.734 0 6.76-3.027 6.76-6.76 0-.014 0-.028 0-.042v.002c0-.004 0-.01 0-.015 0-1.847-.766-3.515-1.998-4.703l-.002-.002c-1.221-1.235-2.915-2-4.788-2-3.718 0-6.732 3.014-6.732 6.732v.072zm5.92 3.733v-2.933h-2.96v-1.6h2.96v-2.906h1.6v2.906h2.88v1.6h-2.88v2.934z"/></svg>`,
    github: `
    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
    </svg>`
  }, b = {
    cerebelly: {
      variants: {
        0: {
          images: ["/notification.png", "/pdp.png"],
          title: " A/B тестування повідомлення додавання товара у кошик",
          gitHubCode: "https://conversionratestore.github.io/projects/cerebelly/add_to_cart_notification.js",
          description: `
          <b>Опис:</b> Було реалізовано A/B тест для покращення взаємодії користувачів з вебсайтом. 
          Одним із ключових елементів цього тесту стало створення повідомлення, яке з'являється при додаванні товару в кошик ("add to cart") на всьому сайті. Це ж повідомлення також з'являється під час спроби виходу з сайту (exit intent), що допомагає утримати користувачів та збільшити конверсії.
          <br><br>
          <b>Додаткові зміни:</b> 
          <br><br><b>Навігаційна панель:</b> На сторінці товару (PDP) було додано нову навігаційну панель для полегшення навігації та покращення користувацького досвіду.
          <br><br><b>Редизайн елементів:</b> Деякі елементи на сторінці товару (PDP) були передизайнені для підвищення візуальної привабливості та зручності використання.
          <br><br><b>Технології:</b> Проєкт реалізовано з використанням JavaScript/TypeScript, HTML та CSS.
        `,
          collections: "ts",
          classes: "width-50"
        }
      }
    },
    huntergalloway: {
      variants: {
        0: {
          link: "https://www.huntergalloway.com.au/",
          images: ["/screencapture-huntergalloway-au-2024-08-15-18_08_16.png", "/screencapture-huntergalloway-au-contact-2024-08-15-18_09_38.png", "/screencapture-huntergalloway-au-mortgage-calculator-2024-08-15-18_09_08.png", "/blog.png"],
          title: "Редизайн i розробка вебсайту",
          description: `
          <b>Опис:</b> Було проведено повний редизайн та розробку ключових сторінок вебсайту, включаючи головну сторінку, сторінку калькулятора, сторінки блогів і контактну сторінку. Проєкт орієнтований на створення сучасного дизайну з акцентом на високу продуктивність і зручність користувачів.
          <br><br>
          <b>Технічні деталі:</b> 
          <br><br><b>Розробка:</b> Використано PHP, JavaScript, HTML та CSS для створення функціонального та адаптивного інтерфейсу.
          <br><br><b>CMS:</b> Вебсайт реалізовано на платформі WordPress, з використанням WP Engine, NitroPack для забезпечення високої швидкості завантаження.
          <br><br><b>Конструктор:</b> Для створення блогів застосовано Elementor, що дозволяє клієнтам самостійно оновлювати контент, зберігаючи цілісність дизайну.
          <br><br><b>Форми:</b> За допомогою Contact Form 7 створено форми з інтеграцією HubSpot для збору та обробки даних від користувачів.
          <br><br><b>Слайдер:</b> Реалізовано Swiper Slider для плавного і привабливого відображення динамічного контенту.
          <br><br><b>Оптимізація:</b> Значну увагу приділено оптимізації швидкості завантаження сайту, що підтверджується високими результатами в PageSpeed Insights. Також було виправлено неочікувані зміщення елементів під час завантаження сторінок, що значно покращило показник Cumulative Layout Shift (CLS) і забезпечило стабільність інтерфейсу.
        `,
          collections: "js"
        }
      }
    },
    lemieux: {
      variants: {
        0: {
          images: ["/popup_1.png", "/popup_2.png", "/popup_2_1.png", "/popup_3.png", "/popup_4.png", "/popup_4_1.png"],
          title: "A/B тестування exit intent попапів",
          gitHubCode: "https://conversionratestore.github.io/projects/lemieux/exit_popup.js",
          description: `
          <b>Опис:</b> 
          Було реалізовано A/B тест, в рамках якого створено чотири попапи, що з'являються при спробі виходу з сайту (exit intent). Кожен попап мав різні тригери та умови появи, що дозволяло таргетувати різні категорії користувачів. Не більше двох попапів показувались за сесію, в залежності від того, чи є товари в кошику, і чи користувач є новим чи постійним. Також, текст у деяких попапах змінювався в залежності від країни користувача.
          <br><br><b>Функціональність:</b>
          <br><br><b> Інтеграції та налаштування:</b><br>
            <br>-Підключення до API для отримання даних з кошика та інформації про товари.
            <br> -Налаштування попапів у Klaviyo.
             <br> <br>
             <b>Додаткові функції:</b><br>
            <br>-Додавання таймера для стимулювання швидких дій.
            <br>-Реалізація слайдера для відображення динамічного контенту.
            <br>-Можливість копіювання промокода безпосередньо з попапа.
             <br> <br>
             <b>Технології:</b> Використано JavaScript, HTML та CSS
        `,
          collections: "js",
          classes: "width-50"
        },
        1: {
          images: ["/slide_in_cart.png"],
          title: "A/B тестування нового Slide-in кошика",
          gitHubCode: "https://conversionratestore.github.io/projects/lemieux/slide_in_cart.js",
          description: `
          <b>Опис:</b> 
          Було реалізовано A/B тест нового Slide-in cart, який забезпечує повний функціонал кошика, використовуючи API. 
          API дозволило додавати, видаляти та оновлювати товари в кошику, реалізувати логіку промокодів, 
          вивести загальну суму замовлення, вартість доставки, знижки тощо,
          забезпечуючи інтуїтивно зрозумілий і швидкий процес покупки.
          <br> <br>
          <b>Технології:</b> JavaScript, HTML та CSS
        `,
          collections: "js"
        }
      }
    },
    doyogawithme: {
      variants: {
        0: {
          images: ["/free.png", "/free_desk.png", "/form.png"],
          title: "A/B тестування реєстраційного блоку",
          gitHubCode: "https://conversionratestore.github.io/projects/doyogawithme/account_progress.js",
          description: `
          <b>Опис:</b> Було реалізовано A/B тест для перевірки ефективності реєстраційного блоку, який закликає користувачів підписатися на доступ до безкоштовних занять.
          <br><br><b>Функціональність:</b>
          <br><br><b>Кнопки реєстрації:</b> У блоці передбачено дві кнопки для реєстрації, одна з яких дозволяє користувачам підписатися через Google, а інша — за допомогою електронної пошти.
          <br><br><b>Технології:</b> Проєкт реалізовано з використанням JavaScript/TypeScript, HTML та CSS.
        `,
          collections: "js"
        }
      }
    },
    paintscratch: {
      variants: {
        0: {
          images: ["/quiz-1.png", "/quiz-2.png", "/quiz-3.png", "/quiz-final.png"],
          title: "A/B тестування квізу для підбору ремонтних наборів",
          link: "https://www.paintscratch.com/cgi-bin/order-form.cgi",
          gitHubCode: "https://github.com/Olga1001/portfolio/src/paintscratch",
          description: `
          <b>Опис:</b> 
          Було реалізовано A/B тест інтерактивного квізу, який допомагає користувачам підібрати оптимальний набір для ремонту, виходячи з їхніх потреб. Користувачі відповідають на питання, обираючи "Type of damage," "Size," і "Material type," після чого їм надаються рекомендації щодо продуктів.
          <br><br><b>Функціональність:</b><br>
          <br><b>Рекомендовані продукти:</b>
          На основі відповідей користувачам показується персоналізований набір продуктів з текстом, який підтверджує, що "Your custom kit comes complete with everything you need for a perfect repair." У комплекті відображаються товари, необхідні для ремонту, разом з кнопкою "Add to cart," яка дозволяє додати всі товари з цієї групи до кошика.        
          <br><br><b>Додаткові продукти:</b>
          Також користувачам пропонуються додаткові товари, які можуть знадобитися, з окремими кнопками "Add to cart" для кожного товару.
          <br><br>
          У кінці квізу додається кнопка "Take quiz again," що дозволяє користувачам повторити процес для підбору інших товарів.
          `,
          collections: "ts"
        }
      }
    },
    lakelasvegaswatersports: {
      variants: {
        0: {
          images: ["/home.png"],
          title: "A/B тестування редизайну головної сторінки",
          gitHubCode: "https://conversionratestore.github.io/projects/llvws/home.js",
          description: `
          <b>Опис:</b> 
          Було проведено A/B тест для редизайну головної сторінки вебсайту, з метою покращення користувацького досвіду та підвищення конверсії. 
          <br><br><b>Функціональність:</b><br>
          <br><b>Блоки інформації:</b>
          Додано блок з інформацією про доступні активності, включаючи варіанти як "Electric Boat Rental," "Kayak Rentals," "Swimmable Pontoon Boat," а також різні круїзи, такі як "Jingle On The Waves Cruise" і "Santa Sail - Kid Friendly Cruise." Користувачі можуть переглядати всі варіанти оренди і круїзів.
          <br><br><b>Банер:</b>
          Введено банер "Yacht Charter Services: Book Your Luxury Experience" для акцентування уваги на послугах оренди яхт.
          <br><br><b>Бенефіти:</b>
          Додані пропозиції, такі як "10% off with code: BOOK10" та "Free cancellation up to 24H before the event," для підвищення привабливості пропозицій.
          <br><br><b>Слайдер:</b>
          Реалізовано слайдер з відгуками клієнтів, що підвищує довіру та привабливість сервісів.
         <br> <br><b>Блок подій:</b>
          Виведено блок з інформацією про події для інформування користувачів про майбутні заходи.
          <br><br><b>Карта:</b>
          Додано інтерактивну карту, що показує місцезнаходження компанії.
        `,
          collections: "js"
        }
      }
    },
    mammutmarsch: {
      variants: {
        0: {
          images: ["/popup.png"],
          title: "A/B тестування редизайну головної сторінки",
          gitHubCode: "https://conversionratestore.github.io/projects/mammutmarsch/t-shirt_upsell.js",
          description: `
          <b>Опис:</b> Було реалізовано A/B тест попапу, який з’являється в залежності від обраного пакету користувача. Попап пропонує придбати футболку для події (Event T-Shirt) з різними розмірами (S, M, L, XL, XXL) за 20€.
          <br><br><b>Функціональність:</b><br>
          <br><b>Деталі пропозиції:</b>
          У попапі представлено опис футболки: високоякісна бавовняна футболка з індивідуальним друком для кожної події, доступна у жіночому та чоловічому варіантах, з модним кроєм.
        
          <br><br><b>Опції:</b>
          Користувачі мають можливість або додати футболку до замовлення, або пропустити пропозицію та завершити реєстрацію без додаткових покупок.

        `,
          collections: "js"
        }
      }
    },
    html: {
      variants: {
        0: {
          images: ["/mailhealthcare_letter.png", "/mailhealthcare_product.webp", "/mailhealthcare_contact.png", "/mailhealthcare_404.png"],
          link: "https://olga1001.github.io/mailhealthcare/dist/product.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/mailhealthcare",
          description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
          collections: "pug"
        },
        1: {
          images: ["/keto.png"],
          title: "Верстка",
          description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
          collections: "pug"
        },
        2: {
          images: ["/ve2pay.webp"],
          title: "Верстка",
          description: `
          <b>Опис:</b> Верстка w2p<br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
          collections: "pug"
        },
        3: {
          images: ["/home.webp", "/ConsumerAttorneys_new_credit-reporting.png"],
          link: "https://olga1001.github.io/ConsumerAttorneys_new/dist/main.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/ConsumerAttorneys_new",
          description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
          collections: "pug"
        },
        4: {
          images: ["/csgo.jpg"],
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/csgo",
          description: `
          <b>Опис:</b> Верстка CS GO рулетка<br><br>`,
          collections: "html"
        },
        5: {
          images: ["/magic.jpg"],
          link: "https://olga1001.github.io/magic/app/index.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/magic",
          description: `
          <b>Опис:</b> Верстка<br><br>
          HTML + SASS + jQuery + Slick + wow animation`,
          collections: "html"
        },
        6: {
          images: ["/monopoly.webp"],
          link: "https://olga1001.github.io/monopoly/dist/index.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/monopoly",
          description: `
          <b>Опис:</b> Верстка monopoly<br><br>`,
          collections: "html"
        },
        7: {
          images: ["/foot.jpg"],
          link: "https://olga1001.github.io/foot/index.html",
          title: "Верстка",
          gitHubCode: "https://github.com/Olga1001/foot",
          description: `
          <b>Опис:</b> Верстка<br><br>
          HTML + CSS + jQuery + Swiper`,
          collections: "html"
        }
      }
    }
  }, I = () => {
    var e;
    const o = /* @__PURE__ */ new Set();
    for (const i in b) {
      const a = b[i].variants;
      for (const r in a) {
        const l = (e = a[r].collections) == null ? void 0 : e.split(",").map((c) => c.trim());
        l == null || l.forEach((c) => o.add(c));
      }
    }
    let n = '<li><a href="#" data-filter="all" class="active">All</a></li>';
    return o.forEach((i) => {
      n += `<li><a href="#" data-filter="${i}">${i}</a></li>`;
    }), `<ul class="d-flex">${n}</ul>`;
  }, B = () => {
    let o = "";
    for (const n in b) {
      const e = b[n].variants;
      for (const i in e) {
        const a = e[i].images[0], r = e[i].collections;
        o += `
                <div class="portfolio_item item-masonry ${e[i].classes ? e[i].classes : "width-25"}" data-collections="${r}">
                    <a href="?product=${n}&variant=${i}">
                        <span>
                            <img src="${y + "images/" + n + a}" alt="${n} image">
                        </span>
                    </a>
                </div>`;
      }
    }
    return `
        <div class="portfolio">
            <div class="container">
                <div class="text-center">
                    <h3 class="c-orange">Welcome to</h3>
                    <h1>ZHURAVEL OLHA</h1>
                    <h3>Completed projects</h3>
                </div>
                <nav class="nav">
                    ${I()}
                </nav>
                <div class="portfolio_list masonry">${o}</div>
            <div>
        </div>`;
  }, $ = (o, n) => {
    const e = b[o].variants[n], i = e.images;
    let a = "";
    for (let r = 0; r < i.length; r++)
      a += `<div class="swiper-slide"><img src="${y + "images/" + o + i[r]}" alt="image"></div>`;
    return `
        <div class="product">
            <div class="d-flex">
                <div class="product_left">
                    <a href="#" class="btn-back items-center">${k.arrowLeft} Back</a>
                    <div class="product_gallery">
                        ${a}
                    </div>
                </div>
                <div class="product_right">
                    <div class="product_info">
                        <h2>${e.title}</h2>

                        ${e.link ? `<a href="${e.link}" target="_blank"><b>Preview</b></a><br><br>` : ""}
                       
                        <p>${e.description}</p>
                     
                        ${e.gitHubCode ? `<br><br><a href="${e.gitHubCode}" class="items-center" target="_blank">${k.github} <b>Github</b></a>` : ""}
                    </div>
                </div>
            </div>
        </div>`;
  }, H = (o, n) => {
    var a;
    const e = n === "all" ? b : {};
    let i = "";
    if (n !== "all")
      for (const [r, l] of Object.entries(o)) {
        const c = {};
        for (const [v, m] of Object.entries(l.variants))
          (a = m.collections) != null && a.split(",").map((g) => g.trim()).includes(n) && (c[v] = m);
        Object.keys(c).length > 0 && (e[r] = { variants: c });
      }
    for (const r in e) {
      let l = e[r].variants;
      for (const c in l)
        i += `
                <div class="portfolio_item item-masonry ${l[c].classes ? l[c].classes : "width-25"}" data-collections="${l[c].collections}">
                    <a href="?product=${r}&variant=${c}">
                        <span>
                            <img src="${y + "images/" + r + l[c].images[0]}" alt="${r} image">
                        </span>
                    </a>
                </div>`;
    }
    return i;
  };
  var L = typeof globalThis < "u" ? globalThis : typeof window < "u" ? window : typeof global < "u" ? global : typeof self < "u" ? self : {};
  function O(o) {
    return o && o.__esModule && Object.prototype.hasOwnProperty.call(o, "default") ? o.default : o;
  }
  var _ = { exports: {} }, x = { exports: {} }, S;
  function M() {
    return S || (S = 1, function(o) {
      (function(n, e) {
        o.exports ? o.exports = e() : n.EvEmitter = e();
      })(typeof window < "u" ? window : L, function() {
        function n() {
        }
        let e = n.prototype;
        return e.on = function(i, a) {
          if (!i || !a)
            return this;
          let r = this._events = this._events || {}, l = r[i] = r[i] || [];
          return l.includes(a) || l.push(a), this;
        }, e.once = function(i, a) {
          if (!i || !a)
            return this;
          this.on(i, a);
          let r = this._onceEvents = this._onceEvents || {}, l = r[i] = r[i] || {};
          return l[a] = !0, this;
        }, e.off = function(i, a) {
          let r = this._events && this._events[i];
          if (!r || !r.length)
            return this;
          let l = r.indexOf(a);
          return l != -1 && r.splice(l, 1), this;
        }, e.emitEvent = function(i, a) {
          let r = this._events && this._events[i];
          if (!r || !r.length)
            return this;
          r = r.slice(0), a = a || [];
          let l = this._onceEvents && this._onceEvents[i];
          for (let c of r)
            l && l[c] && (this.off(i, c), delete l[c]), c.apply(this, a);
          return this;
        }, e.allOff = function() {
          return delete this._events, delete this._onceEvents, this;
        }, n;
      });
    }(x)), x.exports;
  }
  /*!
   * imagesLoaded v5.0.0
   * JavaScript is all like "You images are done yet or what?"
   * MIT License
   */
  (function(o) {
    (function(n, e) {
      o.exports ? o.exports = e(n, M()) : n.imagesLoaded = e(n, n.EvEmitter);
    })(
      typeof window < "u" ? window : L,
      function(e, i) {
        let a = e.jQuery, r = e.console;
        function l(t) {
          return Array.isArray(t) ? t : typeof t == "object" && typeof t.length == "number" ? [...t] : [t];
        }
        function c(t, s, p) {
          if (!(this instanceof c))
            return new c(t, s, p);
          let d = t;
          if (typeof t == "string" && (d = document.querySelectorAll(t)), !d) {
            r.error(`Bad element for imagesLoaded ${d || t}`);
            return;
          }
          this.elements = l(d), this.options = {}, typeof s == "function" ? p = s : Object.assign(this.options, s), p && this.on("always", p), this.getImages(), a && (this.jqDeferred = new a.Deferred()), setTimeout(this.check.bind(this));
        }
        c.prototype = Object.create(i.prototype), c.prototype.getImages = function() {
          this.images = [], this.elements.forEach(this.addElementImages, this);
        };
        const v = [1, 9, 11];
        c.prototype.addElementImages = function(t) {
          t.nodeName === "IMG" && this.addImage(t), this.options.background === !0 && this.addElementBackgroundImages(t);
          let { nodeType: s } = t;
          if (!s || !v.includes(s))
            return;
          let p = t.querySelectorAll("img");
          for (let d of p)
            this.addImage(d);
          if (typeof this.options.background == "string") {
            let d = t.querySelectorAll(this.options.background);
            for (let J of d)
              this.addElementBackgroundImages(J);
          }
        };
        const m = /url\((['"])?(.*?)\1\)/gi;
        c.prototype.addElementBackgroundImages = function(t) {
          let s = getComputedStyle(t);
          if (!s)
            return;
          let p = m.exec(s.backgroundImage);
          for (; p !== null; ) {
            let d = p && p[2];
            d && this.addBackground(d, t), p = m.exec(s.backgroundImage);
          }
        }, c.prototype.addImage = function(t) {
          let s = new g(t);
          this.images.push(s);
        }, c.prototype.addBackground = function(t, s) {
          let p = new f(t, s);
          this.images.push(p);
        }, c.prototype.check = function() {
          if (this.progressedCount = 0, this.hasAnyBroken = !1, !this.images.length) {
            this.complete();
            return;
          }
          let t = (s, p, d) => {
            setTimeout(() => {
              this.progress(s, p, d);
            });
          };
          this.images.forEach(function(s) {
            s.once("progress", t), s.check();
          });
        }, c.prototype.progress = function(t, s, p) {
          this.progressedCount++, this.hasAnyBroken = this.hasAnyBroken || !t.isLoaded, this.emitEvent("progress", [this, t, s]), this.jqDeferred && this.jqDeferred.notify && this.jqDeferred.notify(this, t), this.progressedCount === this.images.length && this.complete(), this.options.debug && r && r.log(`progress: ${p}`, t, s);
        }, c.prototype.complete = function() {
          let t = this.hasAnyBroken ? "fail" : "done";
          if (this.isComplete = !0, this.emitEvent(t, [this]), this.emitEvent("always", [this]), this.jqDeferred) {
            let s = this.hasAnyBroken ? "reject" : "resolve";
            this.jqDeferred[s](this);
          }
        };
        function g(t) {
          this.img = t;
        }
        g.prototype = Object.create(i.prototype), g.prototype.check = function() {
          if (this.getIsImageComplete()) {
            this.confirm(this.img.naturalWidth !== 0, "naturalWidth");
            return;
          }
          this.proxyImage = new Image(), this.img.crossOrigin && (this.proxyImage.crossOrigin = this.img.crossOrigin), this.proxyImage.addEventListener("load", this), this.proxyImage.addEventListener("error", this), this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.proxyImage.src = this.img.currentSrc || this.img.src;
        }, g.prototype.getIsImageComplete = function() {
          return this.img.complete && this.img.naturalWidth;
        }, g.prototype.confirm = function(t, s) {
          this.isLoaded = t;
          let { parentNode: p } = this.img, d = p.nodeName === "PICTURE" ? p : this.img;
          this.emitEvent("progress", [this, d, s]);
        }, g.prototype.handleEvent = function(t) {
          let s = "on" + t.type;
          this[s] && this[s](t);
        }, g.prototype.onload = function() {
          this.confirm(!0, "onload"), this.unbindEvents();
        }, g.prototype.onerror = function() {
          this.confirm(!1, "onerror"), this.unbindEvents();
        }, g.prototype.unbindEvents = function() {
          this.proxyImage.removeEventListener("load", this), this.proxyImage.removeEventListener("error", this), this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        };
        function f(t, s) {
          this.url = t, this.element = s, this.img = new Image();
        }
        return f.prototype = Object.create(g.prototype), f.prototype.check = function() {
          this.img.addEventListener("load", this), this.img.addEventListener("error", this), this.img.src = this.url, this.getIsImageComplete() && (this.confirm(this.img.naturalWidth !== 0, "naturalWidth"), this.unbindEvents());
        }, f.prototype.unbindEvents = function() {
          this.img.removeEventListener("load", this), this.img.removeEventListener("error", this);
        }, f.prototype.confirm = function(t, s) {
          this.isLoaded = t, this.emitEvent("progress", [this, this.element, s]);
        }, c.makeJQueryPlugin = function(t) {
          t = t || e.jQuery, t && (a = t, a.fn.imagesLoaded = function(s, p) {
            return new c(this, s, p).jqDeferred.promise(a(this));
          });
        }, c.makeJQueryPlugin(), c;
      }
    );
  })(_);
  var T = _.exports;
  const E = /* @__PURE__ */ O(T), D = `html.fixed_body,
.fixed_body body {
  overflow: hidden !important;
}

/* flex */
.d-flex {
  display: flex;
}

.items-center {
  display: flex;
  align-items: center;
}

.justify-between {
  display: flex;
  justify-content: space-between;
}

.justify-center {
  display: flex;
  justify-content: center;
}

.d-none {
  display: none;
}

.text-center {
  text-align: center;
}

@media (min-width: 900px) {
  .flex-lg-column-reverse {
    display: flex;
    flex-direction: column-reverse;
  }
  .justify-lg-center {
    display: flex;
    justify-content: center;
  }
}
@media (min-width: 768px) {
  .d-md-flex {
    display: flex;
  }
}/*# sourceMappingURL=base.css.map */`, z = `*, *:before, *:after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Noto Sans", Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji";
  color: #1e1e1e;
  line-height: 1;
}
body:before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  vertical-align: middle;
  background-color: #fff;
  z-index: 99;
  width: 100%;
  height: 100%;
}
body.init:before {
  content: none;
}

.container {
  padding: 0 20px;
  max-width: 1440px;
  margin: 0 auto;
}

img {
  width: 100%;
  height: 100%;
}

h1, h3 {
  color: #fff;
  margin: 8px 0;
}

h2 {
  padding: 20px 0;
  font-size: 34px;
  line-height: 1.4;
}

a {
  text-decoration: none;
}
a svg {
  margin-right: 8px;
}
a:hover {
  color: orange;
}
a:hover svg {
  fill: orange;
}

.item-masonry {
  padding: 10px;
}
.item-masonry img {
  display: block;
}
.item-masonry span {
  background-color: #f5f5f5;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
  border-radius: 4px;
  padding: 4px;
  display: block;
}

.width-25 {
  width: 25%;
}

.width-50 {
  width: 50%;
}

/* PDP */
.product {
  position: fixed;
  left: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  overflow-y: auto;
  opacity: 0;
  pointer-events: none;
  transition: all 0.25s ease;
  z-index: 99;
}
.product.active {
  opacity: 1;
  pointer-events: auto;
}
.product.active .product_right, .product.active .product_left {
  transform: translateX(0);
}
.product_left, .product_right {
  width: 50%;
  padding: 40px 60px;
  min-height: 100vh;
  transition: all 0.3s ease;
}
.product_left {
  background-color: #6032a4;
  transform: translateX(-100%);
  box-shadow: 5px 5px 10px rgba(96, 50, 164, 0.4);
  z-index: 2;
}
.product_right {
  background-color: rgb(243, 243, 243);
  transform: translateX(100%);
}
.product_gallery .swiper-slide {
  height: -moz-fit-content;
  height: fit-content;
}
.product_gallery img {
  width: 100%;
  -o-object-fit: contain;
     object-fit: contain;
  -o-object-position: top;
     object-position: top;
  margin-bottom: 7px;
  box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);
}
.product_info {
  padding: 20px 0;
  line-height: 22px;
  position: sticky;
  top: 40px;
  height: -moz-fit-content;
  height: fit-content;
  font-size: 14px;
  max-width: 500px;
}

.btn-back {
  margin-bottom: 20px;
  color: #fff;
}
.btn-back svg {
  fill: #fff;
  width: 20px;
  height: 20px;
  margin-right: 8px;
}

.btn-close {
  position: fixed;
  top: 2.5%;
  right: calc(2.5% + 5px);
  transform: translateX(50%);
  z-index: 99999;
  border: 2px solid #fff;
  padding: 8px;
  background-color: transparent;
  border-radius: 50%;
  display: flex;
}
.btn-close svg {
  fill: #fff;
  width: 16px;
  height: 16px;
}

.btn-zoom {
  position: absolute;
  right: 10px;
  bottom: 10px;
  z-index: 1;
  background-color: transparent;
  border-radius: 50%;
  padding: 4px;
  width: 32px;
  height: 32px;
  border: 2px solid #757575;
  background-color: #fff;
}
.btn-zoom svg {
  width: 16px;
  height: 16px;
}

.nav {
  padding: 10px;
}
.nav li {
  list-style-type: none;
  margin-right: 10px;
}
.nav li a {
  display: block;
  padding: 4px 8px;
  line-height: 22px;
  font-size: 16px;
  border-radius: 16px;
  min-width: 45px;
  text-align: center;
  color: #1e1e1e;
  background-color: #f5f5f5;
}
.nav li a.active {
  background-color: orange;
  color: #fff;
}

/* portfolio */
.portfolio {
  padding: 20px 0;
  background-color: #6032a4;
  min-height: 100vh;
}

.c-orange {
  color: orange;
}

@media screen and (min-width: 768px) {
  .mySwiper .swiper-wrapper {
    display: block !important;
  }
}
@media screen and (max-width: 1440px) {
  .nav_social {
    right: 20px;
  }
}
@media screen and (max-width: 767px) {
  .container {
    padding: 0 10px;
  }
  h2 {
    font-size: 18px;
  }
  .nav,
  .item-masonry {
    padding: 4px;
  }
  .width-25 {
    width: 33.33%;
  }
  .width-50 {
    width: 66.66%;
  }
  .product {
    background-color: #6032a4;
  }
  .product_left, .product_right {
    width: 100%;
    padding: 14px;
    min-height: auto;
  }
  .product_info {
    padding: 0;
    min-height: 300px;
  }
  .product > .d-flex {
    flex-direction: column-reverse;
  }
  .btn-back {
    color: #1e1e1e;
    margin-bottom: 0;
    margin-top: 10px;
  }
  .btn-back svg {
    fill: #1e1e1e;
  }
}/*# sourceMappingURL=main.css.map */`;
  A({ name: "Portfolio", dev: "Olha Zhuravel" }), document.head.insertAdjacentHTML("beforeend", `<style>${D}</style>`), document.head.insertAdjacentHTML("beforeend", `<style>${z}</style>`);
  const q = window.matchMedia("(max-width: 767px)").matches ? "mobile" : "desktop", P = () => {
    let o = setInterval(() => {
      if (typeof Masonry == "function") {
        clearInterval(o);
        const n = h(".masonry"), e = new Masonry(n, {
          itemSelector: ".item-masonry",
          columnWidth: ".width-25",
          percentPosition: !0
        });
        return E(n, () => {
          e.layout();
        }), e;
      }
    });
  }, W = () => {
    const o = h(".masonry");
    E(o, () => {
      u.msnry ? (u.msnry.reloadItems(), u.msnry.layout()) : u.msnry = P();
    });
  }, j = (o) => {
    let n = window.location.pathname + "?" + o;
    history.pushState(null, "", n);
  };
  class G {
    constructor() {
      this.msnry = null, this.init();
    }
    init() {
      this.addProjectsInPortfolio(), this.clickOnProject(), this.nav();
    }
    addProjectsInPortfolio() {
      h(".wrapper").insertAdjacentHTML("beforeend", B());
    }
    clickOnProject() {
      w(".portfolio_item a").forEach((n, e) => {
        n.addEventListener("click", (i) => {
          i.preventDefault(), i.stopPropagation();
          let a = n.search.split("product=")[1].split("&")[0], r = n.search.split("variant=")[1], l = "product=" + a + "&variant=" + r;
          j(l), new C(a, r);
        });
      });
    }
    nav() {
      w("nav a[data-filter]").forEach((n) => {
        n.addEventListener("click", (e) => {
          if (e.preventDefault(), n.classList.contains("active"))
            return;
          h("nav a.active").classList.remove("active"), n.classList.add("active");
          const i = n.dataset.filter, a = H(b, i);
          h(".portfolio_list").innerHTML = a, W(), this.clickOnProject();
        });
      });
    }
  }
  const u = new G();
  u.msnry = P(), setTimeout(() => {
    document.body.classList.add("init");
  }, 300);
  class C {
    constructor(n, e) {
      this.namePDP = n, this.variantPDP = e, this.init();
    }
    init() {
      this.addPDP(), this.clickBack(), h("html").classList.add("fixed_body");
    }
    addPDP() {
      var e;
      (e = h(".product")) == null || e.remove(), document.body.insertAdjacentHTML("afterbegin", $(this.namePDP, this.variantPDP)), q === "mobile" && h(".product_info").before(h(".product .btn-back")), setTimeout(() => {
        h(".product").classList.add("active");
      }, 300);
      const n = () => {
        h(".product").style.height = window.innerHeight + "px";
      };
      window.addEventListener("resize", n), n();
    }
    clickBack() {
      h(".product .btn-back").addEventListener("click", (n) => {
        n.preventDefault(), h(".product").classList.remove("active"), setTimeout(() => {
          var e;
          (e = h(".product")) == null || e.remove();
        }, 300), h("html").classList.remove("fixed_body"), j("");
      });
    }
  }
  if (window.location.href.includes("?product")) {
    const o = window.location.href.split("product=")[1].split("&")[0], n = window.location.href.split("variant=")[1].replace("#", "");
    new C(o, n);
  }
})();
//# sourceMappingURL=index.js.map
