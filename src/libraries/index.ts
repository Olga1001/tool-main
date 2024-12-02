declare global {
  interface Window {
    dataLayer: any[]
    Shopify: any
    clarity: any
  }
}

type eventType = 'Click' | 'Under' | 'submit' | 'input' | 'change' | 'error' | 'success' | 'other' | 'Link' | 'Image' | 'Button' | 'Section'

export const pushData = (name: string, desc: string, type: string | number, loc: string = '') => {
  window.dataLayer = window.dataLayer || []
  window.dataLayer.push({
    event: 'event-to-ga4',
    event_name: name,
    event_desc: desc,
    event_type: type,
    event_loc: loc
  })
  console.log(`Event: ${name} | ${desc} | ${type} | ${loc}`)
}

interface StartLog {
  name: string
  dev: string
}

export const startLog = ({ name, dev }: StartLog) => {
  console.log(
    `%c EXP: ${name} (DEV: ${dev})`,
    `background: #3498eb; color: #fccf3a; font-size: 20px; font-weight: bold;`
  )
}

export const $$el = selector => document.querySelectorAll(selector)
export const $el = selector => document.querySelector(selector)

// load list of scripts
export const loadScriptsOrStyles = async (urls: string[]) => {
  const loadScriptOrStyle = (url: string) => {
    return new Promise((resolve, reject) => {
      // check script by document.scripts
      const type = url.split('.').pop()
      if (type === 'js') {
        const loadedScripts = Array.from(document.scripts).map(script => script.src.toLowerCase())
        if (loadedScripts.includes(url.toLowerCase())) {
          console.log(`Script ${url} allready downloaded!`)
          return resolve('')
        }
        const script = document.createElement('script')
        script.src = url
        script.onload = resolve
        script.onerror = reject
        document.head.appendChild(script)
      } else if (type === 'css') {
        const loadedStyles = Array.from(document.styleSheets).map(style => style.href?.toLowerCase())
        if (loadedStyles.includes(url.toLowerCase())) {
          console.log(`Style ${url} allready downloaded!`)
          return resolve('')
        }
        const style = document.createElement('link')
        style.rel = 'stylesheet'
        style.href = url
        style.onload = resolve
        style.onerror = reject
        document.head.appendChild(style)
      }
    })
  }

  for (const url of urls) {
    await loadScriptOrStyle(url)
    console.log(`Loaded librari ${url}`)
  }
  console.log('All libraries loaded!')
}

// clarity
export const clarityInterval = name => {
  let int = setInterval(function () {
    if (typeof window.clarity == 'function') {
      clearInterval(int)
      window.clarity('set', name, 'variant_1')
    }
  }, 1000)
}

//fullStory
export const fullStoryInterval = name => {
  let int = setInterval(function () {
    if (typeof window.FS === 'function' && typeof window.FS.event === 'function') {
      clearInterval(int);
      console.log('init fullStory')
      window.FS.event('SetVariant', {
        name: name,
        variant: 'variant_1'
      });
    }
  }, 1000);
};

export const truncateDescription = (description: string): string => {
  const maxLength = 300;
    if (description.length <= maxLength) {
        return description;
    } else {
        const truncatedText = description.substring(0, maxLength);
        return `${truncatedText} <a class="crs_read_more"> More...</a>`;
  }
}

export const getDeviceType = (): 'mobile' | 'desktop' => {
  const userAgent = navigator.userAgent;
  if (userAgent.match(/Android/i)
      || userAgent.match(/webOS/i)
      || userAgent.match(/iPhone/i)
      || userAgent.match(/iPad/i)
      || userAgent.match(/iPod/i)
      || userAgent.match(/BlackBerry/i)
      || userAgent.match(/Windows Phone/i)) {
      return 'mobile';
  } else {
      return 'desktop';
  }
}

// visibility element
export const visibilityOfTime = (
  selector: string | HTMLElement | Element,
  event_name: string,
  event_desc: string,
  event_loc: string,
  time = 1000,
  threshold = 0.5
) => {
  let observer: IntersectionObserver
  let timer: NodeJS.Timeout

  observer = new IntersectionObserver(
    function (entries) {
      if (entries[0].isIntersecting === true) {
        timer = setTimeout(() => {
          pushData(
            event_name,
            (entries[0].target as HTMLElement).dataset.visible || event_desc || '',
            "Visibility",
            event_loc
          )
          observer.disconnect()
        }, time)
      } else {
        console.log('Element is not fully visible')
        clearTimeout(timer) // Clear the timer if the element is not visible
      }
    },
    { threshold: [threshold] }
  )

  if (typeof selector === 'string') {
    const element = $el(selector)

    if (element) {
      observer.observe(element)
    }
  } else {
    observer.observe(selector)
  }
}

export const waitForElement = (selector: string) => {
  return new Promise((resolve) => {
    if ($el(selector)) {
      return resolve($el(selector));
    }

    const observer = new MutationObserver(() => {
      if ($el(selector)) {
        resolve($el(selector));
        observer.disconnect();
      }
    });

    observer.observe(document.documentElement, {
      childList: true,
      subtree: true,
    });
  });
}

//the user is inactive for N seconds
export const userInactive = (timeout) => {
  return new Promise((resolve, reject) => {
      var idleTime = 0;
      var idleInterval = setInterval(timerIncrement, 1000); // перевірка кожну секунду

      function timerIncrement() {
          idleTime++;
          if (idleTime > timeout) { // змінено умову на заданий період бездіяльності
              clearInterval(idleInterval);
              resolve(true); // повертаємо true, оскільки користувач не був активний протягом вказаного періоду
          }
      }

      // Обробник подій, який перевіряє кліки користувача
      document.addEventListener("click", function() {
        resolve(false);
      });
  });

}

// //Функція для перевірки, чи елемент знаходиться в полі зору
// function isElementInView(element, container) {
//   const rect = element.getBoundingClientRect();
//   const containerRect = container.getBoundingClientRect();

//   if (device === 'desktop') {
//       // Вертикальний скрол для desktop
//       return (
//           rect.top >= containerRect.top &&
//           rect.bottom <= containerRect.bottom
//       );
//   } else {
//       // Горизонтальний скрол для інших пристроїв
//       return (
//           rect.left >= containerRect.left &&
//           rect.right <= containerRect.right
//       );
//   }
// }

// // Функція для оновлення значення залежно від елементів, які в полі зору
// export const updatePeopleCountInView = (parent) => {
//     const listItems = Array.from(parent.querySelectorAll(`li`)); // або [...$$el(`.crs_popup .crs_list li`)]

//     // Знаходження елементів, які в полі зору
//     const itemsInView = listItems.filter((item) =>
//       isElementInView(item, parent)
//     );

//     // Якщо є елементи в полі зору, оновлюємо значення
//     if (itemsInView.length > 0) {
//       const peopleCount = itemsInView.reduce((count, item) => {
//         return parseInt(item.getAttribute("data-people") || 0, 10);
//       }, 0);

//       // Оновлення значення тільки якщо воно змінилося
//       if (peopleCount !== previousPeopleCount) {
//         previousPeopleCount = peopleCount;
//         console.log(peopleCount)
//         parent.closest('.crs_popup').querySelector(".crs_popup_info b").innerHTML = peopleCount + ' people';
//       }
//     }
//     // Якщо немає елементів в полі зору, залишаємо попереднє значення
//   }