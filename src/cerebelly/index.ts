import { $el, $$el, startLog, clarityInterval, userInactive, pushData, waitForElement, visibilityOfTime, fullStoryInterval } from '../libraries'
import { notification, navigation, arrowButton, tastes } from './blocks';
import { dataTastes } from './data';
import { init as initFullStory } from '@fullstory/browser';

// @ts-ignore
import baseStyle from './base.css?raw'
// @ts-ignore
import mainStyle from './main.css?raw'

startLog({ name: 'Enhancements on PDP and new Add to Cart notification', dev: 'Olha' })

clarityInterval('new_add_to_cart')

initFullStory({
  orgId: 'P34MT'
});

fullStoryInterval('new_add_to_cart')

const device = window.innerWidth < 900 ? 'mobile' : 'desktop';

class Notification {
  device: 'mobile' | 'desktop';
  currency: string;
  isSelectorWrapper: string
  clickRemove: boolean
  clickAdd: boolean
  notExitPopup: boolean
  type: string
  waitSetCoupon: boolean
  completedCoupon: boolean

  constructor(device) {
    this.device = device
    this.isSelectorWrapper = this.getSelectorWrapper()
    this.clickRemove = false
    this.clickAdd = false
    this.notExitPopup = false
    this.type = ''
    this.waitSetCoupon = false
    this.completedCoupon = false
    this.init()
  }

  init() {
    this.appendStyleAndScript()
    this.handleUserInactive(this.device === 'desktop' ? 20 : 10)
    this.handleUserAfte180()

    let countEvent = 0;
    waitForElement('.e-nav .mobile-cart-box').then((el) => {
      el.addEventListener('click', (e) => {
        document.body.classList.remove('crs_hide_cart')
        let waitCheckoutBtn = setInterval(() => {
          if ($el('.cart-product-actions') && !$el('.btn_checkout')) {
            clearInterval(waitCheckoutBtn)
            $el('.cart-product-actions').insertAdjacentHTML('afterbegin', `<a href="/cart" class="button primary red btn_checkout">checkout</a>`)
          }
        })
      })

      document.body.classList.add('crs_hide_cart')
      document.addEventListener('click', (e) => {
        this.notShowExitIntent()
        if (!e.target.closest('.modal') && !e.target.closest('.mobile-cart-box') && !e.target.closest('.cart-product')) {
          document.body.classList.add('crs_hide_cart')
        }
        if (e.target.closest('.modal.css-w1q39a')) {
          if ((e.target.closest('.default-close') || e.target.closest('.default-close-container')) && this.clickAdd === false) {
            document.body.classList.add('crs_hide_cart')
            pushData('exp_newaddtocart_click_08', 'Close', 'Button', `Cart ${JSON.parse(localStorage.getItem('v4Cart'))?.cart?.price != 0 ? '' : 'empty'} popover`)
          } else if (e.target.closest('.css-jobqsc') && e.target.classList.contains('red')) {
            pushData('exp_newaddtocart_click_09', 'Shop all', 'Button', 'Cart empty popover')
          } else if (e.target.classList.contains('continue')) {
            pushData('exp_newaddtocart_click_12', `Continue shopping`, 'Button', 'Cart popover')
          } else if (e.target.classList.contains('btn_checkout')) {
            pushData('exp_newaddtocart_click_11', `Checkout`, 'Button', 'Cart popover')
          }
        }

        if ($el('.modal.css-w1q39a')) {
          if (e.target.closest('.cart-product-reset')) {
            pushData('exp_newaddtocart_click_10', `Remove "${e.target.closest('.cart-product-info').querySelector('.title').innerHTML.split('<span')[0]}"`, 'Button', 'Cart popover')
            if (!$el('.modal.css-w1q39a .cart-product')) {
              countEvent = 0
            }
            this.updateDataNotification()
          } else if (e.target.closest('.added-container')) {
            pushData('exp_newaddtocart_click_13', `${e.target.closest('button').getAttribute('aria-label')}`, 'Button', 'Cart popover')

            if (!$el('.modal.css-w1q39a .cart-product')) {
              countEvent = 0
            }
            this.updateDataNotification()
          }
        }

        if ($el('.modal.css-w1q39a')) {
          if (countEvent == 0) {
            countEvent = 1
            visibilityOfTime($el('.modal.css-w1q39a'), 'exp_newaddtocart_vis_10', `View slide in cart`, `Cart ${JSON.parse(localStorage.getItem('v4Cart'))?.cart?.price == 0 ? 'empty' : ''} popover`)
          }
        } else {
          countEvent = 0
        }

        if (e.target.closest('.remove') || e.target.classList.contains('remove')) {

          let storage = JSON.parse(localStorage.getItem('data_notification'))
          let titleProduct = e.target.closest('.added-container').querySelector('.remove').getAttribute('aria-label').toLowerCase().trim();

          if (titleProduct.includes(storage?.title.toLowerCase().trim())) {
            $el('.crs_notification')?.remove()

            this.updateDataNotification()
          }
        }
      })
    })

    waitForElement('.pageContainer .product').then(el => {
      $$el('.sidebar a').forEach(item => {
        item.addEventListener('click', (e) => this.notShowExitIntent())
      })
    })

    this.exitIntent()

    let oldUrl = window.location.href
    const globalMutation = new MutationObserver((mutations) => {
      if (oldUrl != window.location.href) {
        oldUrl = window.location.href
        document.body.classList.add('crs_hide_cart')
      }

      this.isSelectorWrapper = this.getSelectorWrapper()

      this.navigation()
      this.changeElements()

      if (window.location.href.includes('/bundle')) {
        this.addTastes()
      }

      document.body.style.overflow = $el('.modal .product-wrapper .css-5nnxvq .action-wrapper') ? 'hidden' : ''

      if (JSON.parse(localStorage.getItem('v4Cart'))?.cart?.price == 0 && $el('.crs_notification')) {
        $el('.crs_notification').remove()
      }

      if (JSON.parse(localStorage.getItem('v4Cart'))?.cart?.price > 0 && this.waitSetCoupon === false && ($el('#header-section')?.textContent.includes('first order') || $el('#header-section')?.textContent.includes('with Code'))) {
        this.setCoupon()
      }

      globalMutation.disconnect()

      globalMutation.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true

      })
    })

    globalMutation.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    })
  }

  notShowExitIntent = () => {
    this.notExitPopup = true;
    setTimeout(() => {
      this.notExitPopup = false;
    }, 500)
  }

  handleUserAfte180() {
    setTimeout(() => {
      if (!this.isExitIntentTriggered() &&
        this.isCartNotEmpty() &&
        !$el('.crs_notification') &&
        !this.isOnCartOrCheckoutPage()
      ) {

        sessionStorage.setItem("exit_intent", 'true')
        this.renderNotification()
        pushData('exp_newaddtocart_vis_05', 'After 180 seconds', 'Visibility', 'Popover')
      }
    }, 180000)
  }

  handleUserInactive(inactivityTime: number) {
    userInactive(inactivityTime).then(inactive => {
      if (inactive && !this.isExitIntentTriggered() && this.isCartNotEmpty() && !this.isOnCartOrCheckoutPage()) {
        sessionStorage.setItem("exit_intent", 'true');
        this.renderNotification();
        pushData('exp_newaddtocart_vis_04', 'User inactive', 'Visibility', 'Popover');
      }
    });
  }

  exitIntent() {
    if (this.device === 'desktop') {
      let x = 0,
        y = 0;
      window.addEventListener("mousemove", function (e) {
        x = e.clientX;
        y = e.clientY;
      });
      document.body.addEventListener(
        "mouseleave",
        function () {
          if (
            x < 50 ||
            y < 50 ||
            x > window.innerWidth - 50 ||
            y > window.innerHeight - 50
          ) {

            if (
              sessionStorage.getItem("exit_intent") == null &&
              !$el('.crs_notification') &&
              JSON.parse(localStorage.getItem('v4Cart'))?.cart?.price != 0 &&
              JSON.parse(localStorage.getItem('v4Cart'))?.cart?.price != undefined &&
              !window.location.href.includes('cart') &&
              !window.location.href.includes('order') &&
              !window.location.href.includes('checkout')
            ) {
              sessionStorage.setItem("exit_intent", 'true')
              new Notification(device).renderNotification()

              pushData('exp_newaddtocart_vis_03', 'Exit intent', 'Visibility', 'Popover')
            }
          }
        },
        { once: false }
      );
    } else {
      let speedValue = /android/i.test(navigator.userAgent) ? 120 : 120;
      let lastPosition = 0;
      let currentSpeed = 0;

      let scrollSpeed = (selector: string = 'window') => {
        let newPosition = selector == 'window' ? window.scrollY : $el(selector).scrollTop;
        currentSpeed = newPosition - lastPosition;
        lastPosition = newPosition;

        if (
          (currentSpeed > speedValue || currentSpeed < -speedValue) &&
          !this.isExitIntentTriggered() &&
          !$el('.crs_notification') &&
          !$el('.css-m18cj1') &&
          this.isCartNotEmpty() &&
          this.notExitPopup === false &&
          !this.isOnCartOrCheckoutPage()
        ) {
          console.dir(currentSpeed)
          sessionStorage.setItem("exit_intent", 'true');
          this.renderNotification();

          pushData('exp_newaddtocart_vis_03', 'Exit intent', 'Visibility', 'Popover')
          if (selector == 'window') {
            document.removeEventListener("scroll", () => scrollSpeed());
          } else {
            $el(selector).removeEventListener("scroll", scrollSpeed());
          }
        }
      };

      document.addEventListener("scroll", () => scrollSpeed());
      waitForElement(this.isSelectorWrapper).then(el => {
        $el(this.isSelectorWrapper).addEventListener("scroll", () => {
          scrollSpeed(this.isSelectorWrapper)
          this.checkAttentiveCreativ()
        });
      })
    }
  }

  isExitIntentTriggered() {
    return sessionStorage.getItem("exit_intent") != null;
  }

  isCartNotEmpty() {
    const cart = JSON.parse(localStorage.getItem('v4Cart'))?.cart;
    return cart?.price != 0 && cart?.price != undefined;
  }

  isOnCartOrCheckoutPage() {
    const url = window.location.href;
    return url.includes('cart') || url.includes('order') || url.includes('checkout');
  }

  getSelectorWrapper() {
    return this.device === 'desktop' ?
      window.location.href.includes('box-builder') ?
        '.modal #pdp' :
        '.modal .product-wrapper' :
      '.modal .css-12a0csp'
  }

  appendStyleAndScript() {//add scroll smooth and add styles
    if (!$el('.crs_style') && !$el('.crs_script')) {

      let scriptSeamless = document.createElement('script');
      scriptSeamless.src = 'https://cdn.jsdelivr.net/npm/seamless-scroll-polyfill@latest/lib/bundle.min.js';
      scriptSeamless.async = false;
      scriptSeamless.className = 'crs_script'
      document.head.appendChild(scriptSeamless)

      document.head.insertAdjacentHTML('beforeend', `
      <style class="crs_style">${baseStyle + mainStyle}</style>`)
    }
  }

  addTastes() {
    if ($el('.crs_tastes')) return
    if (!$el('.css-5nnxvq picture')) return

    for (let key in dataTastes) {
      let arrPath = window.location.href.split('/'),
        path = arrPath[arrPath.length - 1].split('?')[0];

      let arrKey = dataTastes[key]
      for (let i = 0; i < arrKey.length; i++) {
        if (arrKey[i] == path) {
          $el('.css-5nnxvq').insertAdjacentHTML('afterbegin', tastes(key))

          //arrow slider (Bundle)
          $el('.css-5nnxvq').insertAdjacentHTML('afterbegin', arrowButton)

          $el('.crs_arrow_next').hidden = false

          let count = 1;
          $$el('.crs_arrow').forEach(item => {
            let event_desc = item.classList.contains('crs_arrow_prev') ? 'prev' : 'next'

            visibilityOfTime(item, 'exp_newaddtocart_vis_09', `View ${event_desc} arrow`, 'Product')

            item.addEventListener('click', () => {
              if (item.classList.contains('crs_arrow_next') && $el('.css-12a0csp .next')) {
                $el('.css-12a0csp .next').click()
                count += 1
                pushData('exp_newaddtocart_click_06', 'Next', 'Button', 'Product')
              } else if (item.classList.contains('crs_arrow_prev') && $el('.css-12a0csp .prev')) {
                $el('.css-12a0csp .prev').click()
                count -= 1
                pushData('exp_newaddtocart_click_07', 'Prev', 'Button', 'Product')
              }

              $el('.crs_arrow_prev').hidden = count <= 1;
              $el('.crs_arrow_next').hidden = count >= key;

              $el('.crs_tastes > span').innerHTML = count;
            })
          })
        }
      }
    }
  }

  checkPageUrl() {
    const pageUrl = window.location.href
    if (pageUrl.includes('checkout') || pageUrl.includes('cart')) {
      return 'not_exp'
    } else if (pageUrl.includes('/product') || pageUrl.includes('/bundle')) {
      return 'pdp'
    } else {
      return 'other'
    }
  }

  renderNotification() {
    if ($el('.crs_notification')) {
      $el('.crs_notification').remove();
    }

    if (this.isCartNotEmpty()) {
      this.updateDataNotification()

      setTimeout(() => {
        let dataNotification = JSON.parse(localStorage.getItem('data_notification'))

        document.body.insertAdjacentHTML('afterbegin', notification(dataNotification.image, dataNotification.title, dataNotification.type, dataNotification.price, dataNotification.count))

        setTimeout(() => {
          $el('.crs_notification').classList.add('active')
          this.checkAttentiveCreativ()
          if (this.clickAdd === true) {
           
            pushData('exp_newaddtocart_vis_02', 'Add to cart', 'Visibility', 'Popover')
            this.clickAdd = false
          }
        }, 100)

        this.actionNotification()
      }, 200);
    }
  }

  actionNotification() { //close notification
    if (!$el('.crs_notification')) return

    let selectNotification = $el('.crs_notification')

    selectNotification.querySelector('.crs_close').addEventListener('click', (e) => {
      selectNotification.classList.remove('active')
      setTimeout(() => {
        selectNotification?.remove()
      }, 200)
      pushData('exp_newaddtocart_click_03', 'Close', 'Button', 'Popover')
    })

    selectNotification.querySelector('.crs_continue_shop').addEventListener('click', (e) => {
      e.preventDefault();
      selectNotification.classList.remove('active')
      setTimeout(() => {
        selectNotification?.remove()
      }, 200)
      pushData('exp_newaddtocart_click_04', 'Continue Shopping', 'Button', 'Popover')
    })

    selectNotification.querySelector('.crs_view_cart').addEventListener('click', (e) => {
      if ($el('#header-section')?.textContent.includes('first order') || $el('#header-section')?.textContent.includes('with Code')) { 
        e.preventDefault()
        e.target.classList.add('spinner')
        let strat = setInterval(() => {
          if (this.completedCoupon === true) {
            clearInterval(strat)
            window.location.href = '/cart'
            e.target.classList.remove('spinner')
          }
        })
      } else {
        window.location.href = '/cart'
      }

      pushData('exp_newaddtocart_click_02', 'View cart', 'Button', 'Popover')
    })

  }

  setCoupon() {
    let content = $el('#header-section')?.textContent
    let coupon = content.includes('first order') ? 'firstbite10' : content.split('with Code ')[1].split(' ')[0]
   
    this.waitSetCoupon = true
    console.dir(coupon)

    const cartBoxes = JSON.parse(localStorage.getItem('v4Cart'))?.cart?.boxes;
    let boxes = [];
    let products = {}

    for (const i in cartBoxes) {
      let lines = cartBoxes[i].lines
      for (const key in lines) {
        products[key] = lines[key].count
      }

      boxes.push({
        "products": products,
        "nochild": true,
        "plan_id": cartBoxes[i].blueprint.id,
        "product_id": cartBoxes[i].productId,
        "new_order": false,
        "cadence": cartBoxes[i].cadence,
        "type":  cartBoxes[i].type,
        "name":  cartBoxes[i].title,
        "is_trialpack": false,
        "bundle_name": "",
        "is_vegan": false
      })
    }

    console.dir(boxes)

    fetch('https://cerebelly.com/wp-json/cerebelly/api/checkout/cart-totals', {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'POST',
      body: JSON.stringify({
        "shipping":{"first_name":"","last_name":"","address_1":"","address_2":"","city":"","state":"","postcode":"","phone":null,"email":""},
        "billing":{"first_name":"","last_name":"","address_1":"","address_2":"","city":"","state":"","postcode":"","phone":null,"email":""},
        "new_discount_code":coupon,
        "remove_discount_code":null,
        "boxes": boxes,
        "discount_codes":[],
        "shipping_method":"Standard",
        "no_shipping":false})
    }).then((res) => res.json()).then((data) => {
      console.dir(data)
      console.dir('completed ' + coupon)
      this.completedCoupon = true
    }).catch((error) => {
      console.error("Error:", error);
    });
  }

  resizeOfferPdp() {
    if (!$el('.css-5nnxvq picture img')) return
    if (!$el('.css-5nnxvq .action-wrapper')) return

    let sumHeightImage: string | number = 0

    if (device === 'mobile') {
      sumHeightImage = `76px - 24px - 48px` + (window.location.href.includes('bundle') ? ' - 28px' : '');
    } else {
      sumHeightImage = '67px - 66px - 34px' + (window.location.href.includes('bundle') ? ' - 34px - 34px' : '');
    }

    $el('.css-5nnxvq picture img').style = `${device !== 'mobile' ? 'max-' : ''}height: calc(${window.innerHeight}px - ${sumHeightImage} - ${$el('.css-5nnxvq .action-wrapper').clientHeight}px`;

  }

  navigation() {
    if ($el('.crs_nav')) return
    if (!$el('.css-12a0csp .product-wrapper .left-side')) return

    //add navigation on page (PDP)
    if (this.device === 'mobile') {
      $el('.css-12a0csp .product-wrapper .left-side').insertAdjacentHTML('beforeend', navigation)
    } else {
      $el('.css-12a0csp .product-wrapper').insertAdjacentHTML('afterbegin', navigation)
      $el('.crs_nav ul').after($el('.css-mc9jj7 .controls .default-close, .css-1ryd8t3 .controls .default-close, .css-194jzej .controls .default-close'))
    }

    $el('.modal.css-1ryd8t3 .default-close, .modal.css-mc9jj7 .default-close, .modal.css-194jzej .default-close').addEventListener('click', (e) => {
      if (e.target.closest('.modal').querySelector('.product-wrapper')) {
        pushData('exp_newaddtocart_click_05', 'Close', 'Button', 'Product')
      }
    })

    pushData('exp_newaddtocart_vis_06', 'View product', 'Visibility', 'Product')
    pushData('exp_newaddtocart_vis_01', 'View navigation', 'Visibility', 'Under the add to cart')

    document.body.classList.add('crs_hide_cart')

    $$el('.right-side section').forEach(item => {
      let event_desc = 'View Nutrition Facts section'
      if (item.querySelector('h3')) {
        event_desc = item.querySelector('h3').innerText
      }

      visibilityOfTime(item, 'exp_newaddtocart_vis_08', event_desc, 'Product')
    })

    if ($el('.modal .product-wrapper button.button.red')) {
      pushData('exp_newaddtocart_vis_07', 'View ' + $el('.modal .product-wrapper button.button.red').innerText + ' button', 'Visibility', 'Product')
    }

    //scroll to element (PDP)
    $$el('.crs_nav a').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        pushData('exp_newaddtocart_click_01', e.target.innerText, 'Nav panel', 'Under the add to cart')

        let id = e.target.href.split('#')[1];
        if (!$el('#' + id)) return

        // patch all methods
        seamless.polyfill();
        // or use specific methods .css-12a0csp 
        seamless.scrollBy($el(this.isSelectorWrapper), { behavior: "smooth", top: $el('#' + id).getBoundingClientRect().top - item.clientHeight - 20, left: 0 });
      })
    })

    //change width 
    function setWidth(device) {
      if ($el('.crs_nav') && device === 'desktop') {
        let startResize = setInterval(() => {
          if ($el('.css-12a0csp .right-side')) {
            clearInterval(startResize)
            $el('.crs_nav').style.width = $el('.css-12a0csp .right-side').clientWidth + 'px'
            $el('.crs_nav').style.right = window.innerWidth - $el('.css-12a0csp .right-side').getBoundingClientRect().right + 'px'
          }
        })
      }
    }

    window.addEventListener('resize', () => {
      setWidth(this.device)
    })
    
    setWidth(this.device)

    //fixed navigation bar (PDP) mobile
    $el('.css-12a0csp').addEventListener('scroll', (e) => {
      if (this.device !== 'mobile') return

      let navRect = $el('.crs_nav').getBoundingClientRect().bottom;

      if (navRect < 0) {
        $el('.crs_nav').classList.add('fixed')
      } else {
        $el('.crs_nav').classList.remove('fixed')
      }

      if (navRect < -100) {
        $el('.crs_nav').classList.add('active')
        $el('.css-mc9jj7 .default-close, .css-1ryd8t3 .default-close, .modal.css-194jzej .default-close').style = 'top: 55px!important'
      } else {
        $el('.crs_nav').classList.remove('active')
        $el('.css-mc9jj7 .default-close, .css-1ryd8t3 .default-close, .modal.css-194jzej .default-close').style = ''
      }
    })

    //add active navigation is element viewport
    function isElementInViewport(el) {
      var rect = el.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }

    if (this.device === 'desktop') {
      $$el('.crs_nav a')[0].classList.add('active');
    }

    $el(this.isSelectorWrapper).addEventListener('scroll', (e) => {

      const sections = $$el('.product-wrapper .right-side section[id] h2');
      const navLinks = $$el('.crs_nav a');

      var visibleIndex = -1;

      sections.forEach(function (heading, index) {
        if (isElementInViewport(heading) && visibleIndex === -1) {
          visibleIndex = index;
        }
      });

      if (visibleIndex !== -1) {
        navLinks.forEach(function (item, index) {
          // Scroll the parent container to bring the item into view
          if (index === visibleIndex) {
            item.classList.add('active');

            const navContainer = $el('.crs_nav ul');
            const itemRect = item.getBoundingClientRect();
            const containerRect = navContainer.getBoundingClientRect();

            if (itemRect.left < containerRect.left) {
              // Scroll left if item is out of view on the left
              navContainer.scrollLeft -= containerRect.left - itemRect.left;
            } else if (itemRect.right > containerRect.right) {
              // Scroll right if item is out of view on the right
              navContainer.scrollLeft += itemRect.right - containerRect.right;
            }
          } else {
            item.classList.remove('active');
          }
        });
      }
    })
  }

  checkAttentiveCreativ() {
    if ($el('#attentive_overlay') && this.device === 'mobile') {
      if ($el('.crs_notification') && !$el('#attentive_overlay.crs_top')) {
        $el('#attentive_overlay').classList.add('crs_top')
      }
      if (!$el('.crs_notification') && $el('#attentive_overlay.crs_top')) {
        $el('#attentive_overlay').classList.remove('crs_top')
      }

      if ($el('.bar-product-image')) {
        if ($el('.scrolled .bar-product-image')) {
          if ($el('#attentive_overlay iframe') && !$el('.crs_notification') && $el('#attentive_overlay iframe').style.bottom == '16px') {
            $el('#attentive_overlay iframe').style.bottom = $el('.bar-product-image').clientHeight + 'px'
          }

        } else {
          if ($el('#attentive_overlay iframe').style.bottom != '16px') {
            $el('#attentive_overlay iframe').style.bottom = '16px'
          }
        }
      }

    }
  }

  changeElements() {
    this.checkAttentiveCreativ()
    //change text "bag" on "cart"
    $$el('.button').forEach((item, index) => {
      let textButton = item.innerText.toLowerCase()

      if (textButton.includes('to bag')) {
        let text = item.innerText;
        item.innerText = text.toLowerCase().replace('bag', 'cart')
      }

      if (textButton.includes('to cart')) {
        if (item.closest('.add') || item.closest('.sticky-button-mobile') || item.closest('.made-for-header-actions') || item.closest('.action-button-wrap') || item.closest('.css-vmdrei')) {
          item.addEventListener('click', (e) => {
            if (this.clickAdd === false) {
              this.clickAdd = true

              if ($el('.css-nco9x8 .tab .wrapper .text.full')) {
                this.type = $el('.css-nco9x8 .tab .wrapper .text.full').innerText.split('/')[1]
              } else if ($el('.css-v9y3g3 .made-for-header .clickable')) {
                this.type = $el('.css-v9y3g3 .made-for-header .clickable').innerText.replace('|', '')
              } else if ($el('.css-x4efki .box-content .box-info .blueprint')) {
                this.type = $el('.css-x4efki .box-content .box-info .blueprint').innerText.split('|')[1]
              } else {
                this.type = ''
              }

              if (item.closest('.element-bundles') && item.closest('.highlight')) {
                pushData('exp_newaddtocart_click_14', 'Add to cart', 'Button', 'PLP')
              }
            }
          })
        }
      }
    })

    //render Notification after chages
    if ($el('.modal .cart-product .product-count') && this.clickAdd == true) {
      document.body.classList.add('crs_hide_cart')
      this.type = $el('.modal .cart-product .product-count').innerText;
      this.renderNotification()
      $el('.crs_hide_cart .modal .cart-product .product-count').closest('.modal').querySelector('.default-close').click();
    }

    //change wapper (PDP)
    //change subscribe  
    if ($el('.css-5nnxvq .unit-price .discount .subscribe') && !$el('.css-5nnxvq .action-wrapper > .subscribe')) {
      $el('.css-5nnxvq .unit-price').after($el('.css-5nnxvq .unit-price .discount .subscribe'))
    }

    //change prices 
    if ($el('.css-5nnxvq .prices') && !$el('.css-5nnxvq .unit-price > .prices')) {
      $el('.css-5nnxvq .unit-price .discount').after($el('.css-5nnxvq .prices'))
    }

    if ($el('.left-side .action-wrapper') && $el('.right-side .css-s7fk0u h2')) {
      //change name
      if (!$el('.left-side .action-wrapper > h2')) {
        $el('.left-side .action-wrapper').insertAdjacentHTML('afterbegin', `<h2>${$el('.right-side .css-s7fk0u h2').innerHTML}</h2>`)
      } else {
        let name = $el('.right-side .css-s7fk0u h2').innerHTML;
        if ($el('.left-side .action-wrapper > h2').innerHTML != name) {
          $el('.left-side .action-wrapper > h2').innerHTML = $el('.right-side .css-s7fk0u h2').innerHTML;
          this.resizeOfferPdp()
        }
      }
      //change weight
      if ($el('.pdp-net-weight') && !$el('.css-5nnxvq picture + .pdp-net-weight')) {
        $el('.css-5nnxvq picture').after($el('.pdp-net-weight'))
        this.resizeOfferPdp()
      }
    }

    // find <img> with attr loading="lazy" and delete (PDP)
    $$el('.product-wrapper .right-side img[loading="lazy"]').forEach(img => {
      img.removeAttribute('loading');
    });

    $el('.modal .left-side .remove')?.addEventListener('click', (e) => {
      if (this.clickRemove == false) {
        this.clickRemove = true
        setTimeout(() => {
          if ($el('.modal .left-side .add button')) {
            pushData('exp_newaddtocart_vis_07', 'View ' + $el('.modal .left-side .add button').innerText + ' button', 'Visibility', 'Product')
            this.clickRemove = false
          }
        }, 500)
      }
    })

    $$el('.cart-product .cart-product-reset button').forEach(item => {
      item.addEventListener('click', (e) => {
        if (this.clickRemove == false) {
          this.clickRemove = true
          let storage = JSON.parse(localStorage.getItem('data_notification'))
          let titleProduct = item.closest('.cart-product').querySelector('.title').innerHTML;

          this.type = item.closest('.cart-product')?.nextElementSibling?.querySelector('.product-count')?.innerText || $el('.cart-product .product-count').innerText

          if (titleProduct.includes(storage?.title)) {
            $el('.crs_notification')?.remove()
            this.updateDataNotification()
          }
          setTimeout(() => {
            this.clickRemove == false
          }, 200);
        }
      })
    })

    //add id section (PDP)
    if ($el('#puree')) return
    $$el('.product-wrapper .right-side section').forEach(item => {
      let titleH3 = item.querySelector('h3')?.innerText.toLowerCase()
      let titleH2 = item.querySelector('h2')?.innerText.toLowerCase()

      if (titleH3?.includes('ingredients')) {
        item.id = 'ingredients';
      } else if (titleH3?.includes('nutrients')) {
        item.id = 'nutrients';
      } else if (titleH3?.includes('us vs them')) {
        item.id = 'usvsthem';
      } else if (titleH2?.includes('directions & safety')) {
        item.id = 'puree';
      }
    })
  }

  updateDataNotification() {
    setTimeout(() => {
      if (this.isCartNotEmpty()) {

        const dataCart = JSON.parse(localStorage.getItem('v4Cart'))?.cart?.boxes

        const keys = Object.keys(dataCart);
        let lastKey = keys[keys.length - 1];
        let lastObject = dataCart[lastKey];

        // Проходимо назад по масиву, поки не знайдемо об'єкт з incomplete == false
        while (lastObject && lastObject.incomplete == true && lastKey > 0) {
          lastKey--;
          lastObject = dataCart[lastKey];
        }

        let count = 0
        for (const key in dataCart) {
          if (dataCart[key].incomplete == false) {
            count += 1
          }
        }

        let image = '/wp-content/themes/cerebelly/build/21c99a25c363149c9021.jpg';

        if (lastObject.image) {
          image = lastObject.image.includes('https') ? lastObject.image : 'https://cerebelly.com/wp-json/cerebelly/image/get?path=' + lastObject.image
        } else {
          if (lastObject.type == 'personalized') {
            image = '/wp-content/themes/cerebelly/build/1167d3c7a96e3f66206f.jpg'
          }
        }

        let dataNotification = {}

        if (this.type != '') {
          dataNotification.type = this.type
        } else {
          dataNotification.type = $el('.cart-product .product-count') ? $el('.cart-product .product-count').innerText : JSON.parse(localStorage.getItem('data_notification'))?.type || ''
        }

        $$el('.product').forEach(item => {
          if (item?.querySelector('.title')?.innerText.includes(lastObject.title)) {
            dataNotification.type = item.querySelector('.quantity')?.innerHTML || item.querySelector('.info')?.innerHTML.split(' | ')[1] || item.querySelector('.desktop')?.innerHTML.replace(' | ', '');
          }
        })

        dataNotification.title = lastObject.title || '';
        dataNotification.image = image;
        dataNotification.price = lastObject.price.toFixed(2);
        dataNotification.count = count

        localStorage.setItem('data_notification', JSON.stringify(dataNotification))
      }
    }, 200)
  }
}

new Notification(device);