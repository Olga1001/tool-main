export const dir: string = '../src/portfolio/assets/'

interface objInteface {
  [key: string]: any
}

interface PortfolioItem {
  link?: string;
  images: string[];
  title: string;
  gitHubCode?: string;
  description: string;
  collections?: string;
  classes?: string
}

export interface Portfolio {
  [key: string]: {
    variants: { [key: number]: PortfolioItem };
  };
}

export const svg: objInteface = {
  arrowLeft: /*html */ `
    <svg height="512px" id="Layer_1" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><polygon points="352,128.4 319.7,96 160,256 160,256 160,256 319.7,416 352,383.6 224.7,256 "/></svg>`,
  close: `
    <svg xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 50 50" width="50px" height="50px"><path d="M 9.15625 6.3125 L 6.3125 9.15625 L 22.15625 25 L 6.21875 40.96875 L 9.03125 43.78125 L 25 27.84375 L 40.9375 43.78125 L 43.78125 40.9375 L 27.84375 25 L 43.6875 9.15625 L 40.84375 6.3125 L 25 22.15625 Z"/></svg>`,
  zoomPlus: `
    <svg fill="#000000" width="20px" height="20px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="m14.88 16.56c-1.576 1.155-3.54 1.866-5.667 1.92h-.013c-.045.001-.098.001-.152.001-4.967 0-8.999-4.002-9.048-8.957v-.005-.24c0-5.125 4.155-9.28 9.28-9.28s9.28 4.155 9.28 9.28c-.04 2.142-.755 4.109-1.939 5.707l.019-.027 7.44 7.44-1.76 1.6zm-12.24-7.28c.023 3.716 3.041 6.72 6.76 6.72 3.734 0 6.76-3.027 6.76-6.76 0-.014 0-.028 0-.042v.002c0-.004 0-.01 0-.015 0-1.847-.766-3.515-1.998-4.703l-.002-.002c-1.221-1.235-2.915-2-4.788-2-3.718 0-6.732 3.014-6.732 6.732v.072zm5.92 3.733v-2.933h-2.96v-1.6h2.96v-2.906h1.6v2.906h2.88v1.6h-2.88v2.934z"/></svg>`,
  github: `
    <svg aria-hidden="true" height="24" viewBox="0 0 24 24" version="1.1" width="24" data-view-component="true" class="octicon octicon-mark-github">
      <path d="M12.5.75C6.146.75 1 5.896 1 12.25c0 5.089 3.292 9.387 7.863 10.91.575.101.79-.244.79-.546 0-.273-.014-1.178-.014-2.142-2.889.532-3.636-.704-3.866-1.35-.13-.331-.69-1.352-1.18-1.625-.402-.216-.977-.748-.014-.762.906-.014 1.553.834 1.769 1.179 1.035 1.74 2.688 1.25 3.349.948.1-.747.402-1.25.733-1.538-2.559-.287-5.232-1.279-5.232-5.678 0-1.25.445-2.285 1.178-3.09-.115-.288-.517-1.467.115-3.048 0 0 .963-.302 3.163 1.179.92-.259 1.897-.388 2.875-.388.977 0 1.955.13 2.875.388 2.2-1.495 3.162-1.179 3.162-1.179.633 1.581.23 2.76.115 3.048.733.805 1.179 1.825 1.179 3.09 0 4.413-2.688 5.39-5.247 5.678.417.36.776 1.05.776 2.128 0 1.538-.014 2.774-.014 3.162 0 .302.216.662.79.547C20.709 21.637 24 17.324 24 12.25 24 5.896 18.854.75 12.5.75Z"></path>
    </svg>`,
}

export const dataItemsPortfolio: Portfolio = {
  'cerebelly': {
    variants: {
      0: {
        images: ['/notification.png', '/pdp.png'],
        title: ' A/B тестування повідомлення додавання товара у кошик',
        gitHubCode: 'https://conversionratestore.github.io/projects/cerebelly/add_to_cart_notification.js',
        description: `
          <b>Опис:</b> Було реалізовано A/B тест для покращення взаємодії користувачів з вебсайтом. 
          Одним із ключових елементів цього тесту стало створення повідомлення, яке з'являється при додаванні товару в кошик ("add to cart") на всьому сайті. Це ж повідомлення також з'являється під час спроби виходу з сайту (exit intent), що допомагає утримати користувачів та збільшити конверсії.
          <br><br>
          <b>Додаткові зміни:</b> 
          <br><br><b>Навігаційна панель:</b> На сторінці товару (PDP) було додано нову навігаційну панель для полегшення навігації та покращення користувацького досвіду.
          <br><br><b>Редизайн елементів:</b> Деякі елементи на сторінці товару (PDP) були передизайнені для підвищення візуальної привабливості та зручності використання.
          <br><br><b>Технології:</b> Проєкт реалізовано з використанням JavaScript/TypeScript, HTML та CSS.
        `,
        collections: 'ts',
         classes: 'width-50'
      }
    }
  },
  'huntergalloway': {
    variants: {
      0: {
        link: 'https://www.huntergalloway.com.au/',
        images: ['/screencapture-huntergalloway-au-2024-08-15-18_08_16.png', '/screencapture-huntergalloway-au-contact-2024-08-15-18_09_38.png', '/screencapture-huntergalloway-au-mortgage-calculator-2024-08-15-18_09_08.png', '/blog.png'],
        title: 'Редизайн i розробка вебсайту',
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
        collections: 'js'
      }
    }
  },
  'lemieux': {
    variants: {
      0: {
        images: ['/popup_1.png', '/popup_2.png', '/popup_2_1.png', '/popup_3.png', '/popup_4.png', '/popup_4_1.png'],
        title: 'A/B тестування exit intent попапів',
        gitHubCode: 'https://conversionratestore.github.io/projects/lemieux/exit_popup.js',
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
         collections: 'js',
         classes: 'width-50'
      },
      1: {
        images: ['/slide_in_cart.png',],
        title: 'A/B тестування нового Slide-in кошика',
        gitHubCode: 'https://conversionratestore.github.io/projects/lemieux/slide_in_cart.js',
        description: `
          <b>Опис:</b> 
          Було реалізовано A/B тест нового Slide-in cart, який забезпечує повний функціонал кошика, використовуючи API. 
          API дозволило додавати, видаляти та оновлювати товари в кошику, реалізувати логіку промокодів, 
          вивести загальну суму замовлення, вартість доставки, знижки тощо,
          забезпечуючи інтуїтивно зрозумілий і швидкий процес покупки.
          <br> <br>
          <b>Технології:</b> JavaScript, HTML та CSS
        `,
         collections: 'js'
      }
    }
  },

  'doyogawithme': {
    variants: {
      0: {
        images: ['/free.png', '/free_desk.png', '/form.png'],
        title: 'A/B тестування реєстраційного блоку',
        gitHubCode: 'https://conversionratestore.github.io/projects/doyogawithme/account_progress.js',
        description: `
          <b>Опис:</b> Було реалізовано A/B тест для перевірки ефективності реєстраційного блоку, який закликає користувачів підписатися на доступ до безкоштовних занять.
          <br><br><b>Функціональність:</b>
          <br><br><b>Кнопки реєстрації:</b> У блоці передбачено дві кнопки для реєстрації, одна з яких дозволяє користувачам підписатися через Google, а інша — за допомогою електронної пошти.
          <br><br><b>Технології:</b> Проєкт реалізовано з використанням JavaScript/TypeScript, HTML та CSS.
        `,
        collections: 'js',
        
      }
    }
  },
  'paintscratch': {
    variants: {
      0: {
        images: ['/quiz-1.png','/quiz-2.png','/quiz-3.png','/quiz-final.png'],
        title: 'A/B тестування квізу для підбору ремонтних наборів',
        link: 'https://www.paintscratch.com/cgi-bin/order-form.cgi',
        gitHubCode: 'https://github.com/Olga1001/portfolio/src/paintscratch',
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
        collections: 'ts'
      }
    }
  },
  'lakelasvegaswatersports': {
    variants: {
      0: {
        images: ['/home.png'],
        title: 'A/B тестування редизайну головної сторінки',
        gitHubCode: 'https://conversionratestore.github.io/projects/llvws/home.js',
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
         collections: 'js'
      }
    }
  },

  'mammutmarsch': {
    variants: {
      0: {
        images: ['/popup.png'],
        title: 'A/B тестування редизайну головної сторінки',
        gitHubCode: 'https://conversionratestore.github.io/projects/mammutmarsch/t-shirt_upsell.js',
        description: `
          <b>Опис:</b> Було реалізовано A/B тест попапу, який з’являється в залежності від обраного пакету користувача. Попап пропонує придбати футболку для події (Event T-Shirt) з різними розмірами (S, M, L, XL, XXL) за 20€.
          <br><br><b>Функціональність:</b><br>
          <br><b>Деталі пропозиції:</b>
          У попапі представлено опис футболки: високоякісна бавовняна футболка з індивідуальним друком для кожної події, доступна у жіночому та чоловічому варіантах, з модним кроєм.
        
          <br><br><b>Опції:</b>
          Користувачі мають можливість або додати футболку до замовлення, або пропустити пропозицію та завершити реєстрацію без додаткових покупок.

        `,
        collections: 'js'
      }
    }
  },
  

  'html': {
    variants: {
      0: {
        images: ['/mailhealthcare_letter.png','/mailhealthcare_product.webp','/mailhealthcare_contact.png','/mailhealthcare_404.png'],
        link: 'https://olga1001.github.io/mailhealthcare/dist/product.html',
        title: 'Верстка',
        gitHubCode: 'https://github.com/Olga1001/mailhealthcare',
        description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
        collections: 'pug'
      },
      1: {
        images: ['/keto.png'],
        title: 'Верстка',
        description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
        collections: 'pug'
      },
      2: {
        images: ['/ve2pay.webp'],
        title: 'Верстка',
        description: `
          <b>Опис:</b> Верстка w2p<br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
        collections: 'pug'
      },
      3: {
        images: ['/home.webp', '/ConsumerAttorneys_new_credit-reporting.png'],
        link: 'https://olga1001.github.io/ConsumerAttorneys_new/dist/main.html',
        title: 'Верстка',
        gitHubCode: 'https://github.com/Olga1001/ConsumerAttorneys_new',
        description: `
          <b>Опис:</b> Верстка <br><br>
          Gulp + Pug + SASS + BrowserSync + Linters`,
        collections: 'pug'
      },
      4: {
        images: ['/csgo.jpg'],
        title: 'Верстка',
        gitHubCode: 'https://github.com/Olga1001/csgo',
        description: `
          <b>Опис:</b> Верстка CS GO рулетка<br><br>`,
        collections: 'html'
      },
      5: {
        images: ['/magic.jpg'],
        link: 'https://olga1001.github.io/magic/app/index.html',
        title: 'Верстка',
        gitHubCode: 'https://github.com/Olga1001/magic',
        description: `
          <b>Опис:</b> Верстка<br><br>
          HTML + SASS + jQuery + Slick + wow animation`,
        collections: 'html'
      },
      6: {
        images: ['/monopoly.webp'],
        link: 'https://olga1001.github.io/monopoly/dist/index.html',
        title: 'Верстка',
        gitHubCode: 'https://github.com/Olga1001/monopoly',
        description: `
          <b>Опис:</b> Верстка monopoly<br><br>`,
        collections: 'html'
      },
      7: {
        images: ['/foot.jpg'],
        link: 'https://olga1001.github.io/foot/index.html',
        title: 'Верстка',
        gitHubCode: 'https://github.com/Olga1001/foot',
        description: `
          <b>Опис:</b> Верстка<br><br>
          HTML + CSS + jQuery + Swiper`,
        collections: 'html'
      },
    }
  },
  'react': {
    variants: {
      0: {
        images: ['/catalog.png','/cart.png','/checkout.png'],
        link: 'https://miway.netlify.app/catalog',
        title: 'Miway',
        gitHubCode: '',
        description: ``,
        collections: 'react'
      },
      1: {
        images: ['/marvel-catalog.png','/comics.png','/comic.png'],
        title: 'Marvel',
        gitHubCode: '',
        description: ``,
        collections: 'react'
      },
    }
  },
  'pixi': {
    variants: {
      0: {
        images: ['/zombi-main.png'],
        title: 'Zombi game',
        gitHubCode: '',
        description: ``,
        collections: 'pixi'
      }
    }
  }
}