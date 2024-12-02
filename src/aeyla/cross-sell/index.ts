import { startLog, clarityInterval, pushData, getDeviceType, $$el, $el, waitForElement } from '../../libraries'
import { crossSellModal, addToCart } from './blocks';
import { dataCrossSell, dataPrimaryProducts } from './data';

// @ts-ignore
import mainStyle from './main.css?raw'

startLog({ name: 'Cross-sell', dev: 'Olha' })

clarityInterval('exp_cross_sell')

class CrossSell {
  page: string
  device: string
  showStickyBtn: boolean
  adding: boolean
  addingQuick: boolean

  constructor() {
    this.page = window.location.pathname;
    this.device = getDeviceType();
    this.showStickyBtn = false;
    this.adding = false
    this.addingQuick = false

    if (JSON.stringify(dataCrossSell).includes(this.page) ||
      this.page.includes('/collections/beddings') ||
      this.page.includes('/collections/shop-all-aeyla') ||
      this.page.includes('/collections/pillows') ||
      this.page.includes('/collections/bundles') ||
      this.page.includes('/collections/weighted-blanket-blanket-covers')
    ) {
      this.init()
    }
  }

  init() {
    document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

    let globalMutation = new MutationObserver((mutations) => {
      if ($el('.sticky_atc_btn')) {
        if (this.showStickyBtn === true) return
        this.showStickyBtn = true
        $$el('.sticky_atc_btn').forEach(element => {
          element.addEventListener('click', () => {
            this.addToCartPDP()
          })
        })
      } else {
        this.showStickyBtn = false
      }
    
      if ($el('#AddToCart') && $el('#AddToCart').innerText.toLowerCase().includes('adding')) {
        if (this.adding === true) return
        this.adding = true
      
        this.addToCartPDP()
      } else {
        this.adding = false
      }

      if ($el('.quick_add .loader[style*="block"]')) {
        if (this.addingQuick === true) return
        this.addingQuick = true
        let href = $el('.quick_add .loader[style*="block"]').closest('.pro_card_wrapper').querySelector('a').pathname

        for (const key in dataCrossSell) {
          if (key.includes(href)) {
            let primaryProduct = dataCrossSell[key]['not_addons']

            if (!!sessionStorage.getItem(`primary_product_${primaryProduct}`)) return
            this.renderCrossSellModal(dataPrimaryProducts[primaryProduct])
            sessionStorage.setItem(`primary_product_${primaryProduct}`, dataPrimaryProducts[primaryProduct].title)
          }
        }
      } else {
        this.addingQuick = false
      }
    })

    globalMutation.observe(document.body, {
      childList: true,
      subtree: true
    })
  }

  addToCartPDP() {
    let addonsName = '';
    $$el('.upsell_wrapper .chckd').forEach(chckd => {
      if (!this.page.includes('/move-in-set-2')) {
        addonsName += chckd.querySelector('.text-main-blue > span').innerText.toLowerCase()
      }
    })

    if (addonsName != '') {
      addonsName = addonsName.includes('mask') && addonsName.includes('pillowcases') ? 'pillowcases_mask' : addonsName.includes('mask') ? 'mask' : 'pillowcases';
    }

    for (const key in dataCrossSell) {
      let path = key.split(',')
      for (let i = 0; i < path.length; i++) {
        if (path[i].includes(this.page)) {
          let primaryProduct: any = 0
          if (addonsName != '') {
            primaryProduct = dataCrossSell[key]['addons'][addonsName]
          } else {
            primaryProduct = dataCrossSell[key]['not_addons']
          }
          
          if (!!sessionStorage.getItem(`primary_product_${primaryProduct}`)) return
          this.renderCrossSellModal(dataPrimaryProducts[primaryProduct])
          sessionStorage.setItem(`primary_product_${primaryProduct}`, dataPrimaryProducts[primaryProduct].title)
        }
      }
    }
  }

  renderCrossSellModal(data) {
    $('body').addClass('not-activated-cart')

    if ($('.modal').length) {
      $('.modal').remove()
    }
    crossSellModal(data).then(modal => {
      document.body.insertAdjacentHTML('beforeend', modal)

      const appHeight = () => {
        $el('.modal').style.height = window.innerHeight + 'px';
      }
      window.addEventListener('resize', appHeight)
      appHeight()

      setTimeout(() => {
        $('.modal').addClass('active')
        pushData('exp_cross_sell_popup_section_01', 'Section', 'Visibility', 'Cross-sell popup')
      }, 500)


      $('.modal-head svg').click(function () {
        $('.modal').removeClass('active')
        $('body').removeClass('not-activated-cart')
        pushData('exp_cross_sell_popup_button_01', 'Close', 'Button', 'Cross-sell popup')
      })
      $('.modal').click(function (e) {
        if (e.target === this) {
          $(this).removeClass('active')
          $('body').removeClass('not-activated-cart')
          pushData('exp_cross_sell_popup_section_02', 'Close', 'Outside', 'Cross-sell popup')
        }
      })

      $('.modal-select').on('input', (e) => {
        const selected = $('.modal-select')[0].options[$('.modal-select')[0].selectedIndex]
        const color = selected.text.split(' | ')[0]
        const compare = selected.getAttribute('data-compare')
        const price = selected.getAttribute('data-price')

        $('.modal-product__prices span').html('£' + compare)
        $('.modal-product__prices b').html('£' + price)
        
        $('.modal-product__images img').each((index, item) => {
          $(item).attr('style', 'display: none')
          if (color == 'White' && index == 0) {
            $(item).attr('style', '')
          } else if (color == 'Stone' && index == 1) {
            $(item).attr('style', '')
          } else if (color == 'Light Blue' && index == 2) {
            $(item).attr('style', '')
          }
        })

        if (!!selected.getAttribute('data-desc')) {
          $('.modal-product__desc').html(selected.getAttribute('data-desc'))
        }

        pushData('exp_cross_sell_popup_dropdown_01', selected.text, 'Dropdown', 'Cross-sell popup')
      })

      $('.modal-add').click(function (e) {
        const id = $('.modal-select')[0].options[$('.modal-select')[0].selectedIndex].value
        const qty = $('.modal-select')[0].options[$('.modal-select')[0].selectedIndex].getAttribute('data-qty')

        $(this).find('span').text("Adding...");
        addToCart(id, qty)
        pushData('exp_cross_sell_popup_button_02', 'Add to cart', 'Button', 'Cross-sell popup')
      })
    })

  }
}

let start = setInterval(() => {
  if (document.body) {
    clearInterval(start)
    new CrossSell();
  }
})