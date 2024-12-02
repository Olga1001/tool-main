import { startLog, clarityInterval, pushData, getDeviceType, visibilityOfTime, $$el, $el, waitForElement } from '../../libraries'
import { navigation, quiz, getRecommendedProducts } from './blocks';
import { dataQuiz } from './data';

// @ts-ignore
import mainStyle from './main.css?raw'

// @ts-ignore
import navigationStyle from './navigation.css?raw'

startLog({ name: 'Quiz. Problem based product selection', dev: 'Olha' })

clarityInterval('exp_prob_bas')


function checkCart() {
  let cartLength = window.currcart.length
  let totalItems = 0
  window.currcart.forEach(item => {
    const itemData = item.split('|')
    totalItems += +itemData[0]
  })

  if (cartLength > 0) {
    $('.to_cart').addClass('fix')
    $('.to_cart button span').append(/* html */ `<b>${totalItems}</b>`)
  } else {
    $('.to_cart').removeClass('fix')
    $('.to_cart button span b').remove()
  }
}

function addCartInfo(name) {
  const ellipsis = name.length > 20 ? '...' : ''
  $('body').append(/* html */ `
      <div class="add_to_cart_info">
        <p><span>${name.slice(0, 20) + ellipsis}</span> was added to Cart</p>
        <div class="close">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
          <g clip-path="url(#clip0_510_13116)">
          <path d="M5.01041 3.40381L8.19239 6.58579L11.3744 3.40381C11.75 3.02816 12.4129 3.02816 12.7886 3.40381C13.1863 3.80155 13.1642 4.44237 12.7886 4.81802L9.6066 8L12.7886 11.182C13.1863 11.5797 13.1642 12.2205 12.7886 12.5962C12.3908 12.9939 11.7721 12.9939 11.3744 12.5962L8.19239 9.41421L5.01041 12.5962C4.61266 12.9939 3.99394 12.9939 3.59619 12.5962C3.22054 12.2205 3.19845 11.5797 3.59619 11.182L6.77817 8L3.59619 4.81802C3.22054 4.44237 3.19845 3.80155 3.59619 3.40381C3.97184 3.02816 4.63476 3.02816 5.01041 3.40381Z" fill="white"/>
          </g>
          <defs>
          <clipPath id="clip0_510_13116">
          <rect width="16" height="16" fill="white"/>
          </clipPath>
          </defs>
          </svg>
        </div>
      </div>
  `)
  let autoClose = setTimeout(() => {
    $('.add_to_cart_info').remove()
  }, 5000)
  $('.add_to_cart_info .close').on('click', function () {
    $(this).closest('.add_to_cart_info').remove()
    clearTimeout(autoClose)
  })
}

class SelectYourProducts {
  page: string
  res: any

  constructor(p) {
    this.page = p;
    this.res = {
      'typeTitle': 'Scratches, Chips, or Peeling Paint',
      'type': 0,
      'size': 'Small',
      'metal': ''
    }

    this.init()
  }

  init() {

    if (
      this.page !== '/' &&
      getDeviceType() !== 'mobile' &&
      (this.page === '/cgi-bin/select-color.cgi' ||
        this.page === '/cgi-bin/order-form.cgi' ||
        this.page === '/cgi-bin/guided-order.cgi' ||
        this.page === '/cgi-bin/shopping-cart.cgi' ||
        this.page === '/cgi-bin/check-out.cgi' ||
        this.page === '/cgi-bin/review-order.cgi')
    ) {
      this.navigationChange()
    }

    if (this.page === '/cgi-bin/order-form.cgi') {
      $('head').append(`<style class="crs_style_main">${mainStyle}</style>`)

      waitForElement('.slide_cart .close').then(el => {
        el.addEventListener('click', () => {
          setTimeout(() => {
            checkCart()
          }, 200);
        })
      })

      if (sessionStorage.getItem('result_recommended')) {
        this.res = JSON.parse(sessionStorage.getItem('result_recommended'))
        setTimeout(() => {
          this.recommendedProducts()
        }, 100)
      } else {
        this.quiz()
      }
    }
  }

  navigationChange() {
    $('head').append(`<style>${navigationStyle}</style>`);
    $('#header-wrap').prepend(navigation);

    let step = 1
    switch (this.page) {
      case '/cgi-bin/select-color.cgi':
        step = 2
        break
      case '/cgi-bin/order-form.cgi':
        step = 3
        break
      case '/cgi-bin/guided-order.cgi':
        step = 3
        break
      case '/cgi-bin/shopping-cart.cgi':
        step = 4
        break
      case '/cgi-bin/check-out.cgi':
        step = 5
        break
      case '/cgi-bin/review-order.cgi':
        step = 5
        break
      default:
        break
    }

    $('.crs_steps_line ul li').each(function (i, item) {
      $(item).removeClass('current').removeClass('prev')
      if (i + 1 < step) {
        $(item).addClass('prev')
      } else if (i + 1 === step) {
        $(item).addClass('current')
      }
    })

    const listWidth = +$('.crs_steps_line ul li').eq(0).width()
    $('.crs_steps_line .line p').css('width', listWidth * step - listWidth / 2 + 'px')

  }

  quiz() {
    this.res = {
      'typeTitle': 'Scratches, Chips, or Peeling Paint',
      'type': 0,
      'size': 'Small',
      'metal': ''
    }

    $('.car-touch-up-paints-heading').after(quiz())

    $("html, body").animate({
      scrollTop: $('.quiz').offset().top - 16
    }, 500);

    $$el('.quiz [data-index]').forEach(item => {
      visibilityOfTime(item, 'exp_prob_bas_vis_01', 'Quiz', item.querySelector('label').innerText)
    })

    $('.select_current').click(function (e) {
      $(this).parent().toggleClass('active')

      pushData('exp_prob_bas_dropdown_01', 'Click', 'Dropdown', $(this).closest('[data-index]').find('label').text())
    })

    const self = this;
    console.log(self.res)

    $('.select_dropdown li').click(function (e) {
      let index = $(this).index()

      $(this).siblings().removeClass('active')
      $(this).addClass('active')

      const parent = $(this).closest('.select');
      parent.removeClass('active')

      parent.find('.select_current > div').html($(this).find('b').html())

      if ($(this).closest('[data-index="0"]').length) {
        self.res.type = index
        self.res.typeTitle = $(this).find('b').html()

      } else if ($(this).closest('[data-index="1"]').length) {
        self.res.size = $(this).find('b').html()

      } else {
        self.res.metal = $(this).find('b').html()
      }

      pushData('exp_prob_bas_dropdown_02', $(this).find('b').html(), 'Dropdown', $(this).closest('[data-index]').find('label').text())
    })

    $('.btn_next_step').click(function (e) {
      let index = $('.btn_next_step').index(this)

      pushData('exp_prob_bas_button_01', $(this).closest('[data-index]').find('.select_current > div').html(), 'Button', $(this).closest('[data-index]').find('label').text())

      $('.quiz .select.active').removeClass('active')

      if (index == 1) {
        console.log(self.res)
        $('.quiz .quiz_res p').html(`Size: <b>${self.res.size}</b>`)
      }

      if (index == 0) {
        $(this).closest('[data-index="0"]').attr('hidden', true);

        $('.quiz > .text-cust').after(`<div class="quiz_res"><p>Type of damage: <b>${self.res.typeTitle}</b></p></div>`)
        $('.quiz [data-index="1"]').removeAttr('hidden');
        self.res.metal = ''

        return
      } else if (index == 1 && (self.res.size == 'Extensive' || self.res.size == 'Large')) {
        $('.quiz [data-index="1"]').attr('hidden', true);
        $('.quiz [data-index="2"]').removeAttr('hidden');

        self.res.metal = $('.quiz [data-index="2"] .select_current > div').html()

        return
      }

      $('.quiz').remove()
      self.recommendedProducts()
    })

    $('.btn_back_step').click(function () {
      let index = $(this).closest('[data-index]').attr('data-index')

      if (index == 2) {
        $('.quiz .quiz_res p').html(`Type of damage: <b>${self.res.typeTitle}</b>`)
      } else {
        $('.quiz .quiz_res').remove()
      }

      $(this).closest('[data-index]').attr('hidden', true)
      $(this).closest('[data-index]').prev().attr('hidden', false)

      pushData('exp_prob_bas_button_06', 'Back', 'Button', $(this).closest('[data-index]').find('label').text())

    })
  }

  recommendedProducts() {
    // init recommended products

    let type = this.res.type
    let size = this.res.size
    let metal = this.res.metal
    const optionSelected = this.res.typeTitle + ', ' + size + ', ' + metal

    let data = [
      ...dataQuiz[size][0],
      ...(type != 0 ? dataQuiz[size][type] : []),
      ...(metal === 'Non-metal' ? dataQuiz[size][metal] : [])
    ]

    $('.car-touch-up-paints-heading').after(getRecommendedProducts(data, this.res))

    sessionStorage.setItem('result_recommended', JSON.stringify(this.res))

    pushData('exp_prob_bas_vis_02', 'Recommended products', 'Visibility', 'Results page Recommended products')

    visibilityOfTime($el('.recommended_products__need'), 'exp_prob_bas_vis_03', 'You might also need:', 'Results page You might also need:')

    function areOnSameLine(el1, el2) {
      return el1.getBoundingClientRect().top === el2.getBoundingClientRect().top;
    }

    const quizResDiv = document.querySelector('.recommended_products .quiz_res');
    const paragraphs = quizResDiv.querySelectorAll('p');

    for (let i = 0; i < paragraphs.length; i++) {
      let isLastOnLine = true;

      for (let j = i + 1; j < paragraphs.length; j++) {
        if (areOnSameLine(paragraphs[i], paragraphs[j])) {
          isLastOnLine = false;
          break;
        }
      }

      if (!isLastOnLine) {
        paragraphs[i].classList.add('br-1');
      }
    }
    
    $('.recommended_products li a').click(function (e) {
      let loc = 'Results page You might also need'
      let name = 'exp_prob_bas_button_04'
      let type = 'Button'

      let desc = $(this).closest('li').find('img').attr('alt')
      if ($(this).closest('.recommended_products__base')[0]) {
        loc = 'Results page Recommended products'
        name = 'exp_prob_bas_button_03'
      }

      if ($(this).hasClass('btn_add')) {
        e.preventDefault()

        name = 'exp_prob_bas_button_05'
        type = 'Add to cart Button'

        const qty = parseInt($(this).closest('li').find('.qty').html().replace('x', ''))
        const id = $(this).closest('li').attr('data-id')

        AddCart(qty, id)

        if (getDeviceType() === 'mobile') {
          checkCart()
          addCartInfo(desc)
        }
      }
      pushData(name, desc, type, loc)
    })

    $("html, body").animate({
      scrollTop: $('.recommended_products').offset().top - 16
    }, 500);

    $('.btn_add_all').on('click', function (e) {
      e.preventDefault();
      $('.recommended_products__base li').each(function (i, item) {
        const id = $(item).attr('data-id')
        const qty = parseInt($(item).find('.qty').html())

        AddCart(qty, id);
      })

      if (getDeviceType() === 'mobile') {
        checkCart()
        addCartInfo('Your base repair kit')
      }

      pushData('exp_prob_bas_button_02', optionSelected, 'Add to cart Button', 'Results page Recommended products')
    })

    const self = this;
    $('.btn_back_quiz').click(function (e) {
      e.preventDefault();
      $('.recommended_products').remove()

      self.quiz()

      sessionStorage.removeItem('result_recommended')

      pushData('exp_prob_bas_link_01', 'Take quiz again', 'Link', 'Results page You might also need:')
    })

  }
}

let page = ''
let start = setInterval(() => {
  let pageNew = window.location.pathname
  if (page !== pageNew && typeof window.isMobile === 'function') {
    page = pageNew
    setTimeout(() => {
      new SelectYourProducts(pageNew);
    }, 100);
  }
})

