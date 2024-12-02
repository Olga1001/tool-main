import {$el, $$el, startLog, clarityInterval, pushData, waitForElement, visibilityOfTime} from '../libraries'
import { stickyBlock, rightSide } from './blocks'

import { data } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

startLog({ name: 'Blog Table of contents + CTAs', dev: 'Olha' })

clarityInterval('blog_table_of_contents_and_ctas')

const device = window.matchMedia('(max-width: 767px)').matches ? 'mobile' : 'desktop'

class ChangeBlog {
  headerMobile: string
  device: string

  constructor(device) {
    this.headerMobile = ''
    this.device = device
    this.init()
  }

  init() {
    if (!$el('.crs_style')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style">${mainStyle}</style>`)
    }

    waitForElement('.blog-sidebar-sticky .blog-content-block').then(el => {
      this.renderTableContent()
      this.renderRightSide()
    
      visibilityOfTime('.blog-content-block .blog-content-heading', 'exp_blogcontentsctas_visibility_01', 'Table of contents', 'Table of contents')

      $$el('.blog-content-block a').forEach(item => {
        item.addEventListener('click', () => {
          pushData('exp_blogcontentsctas_link_01', item.innerText, 'Link', 'Table of contents')
        })
      })

      $el('.c-updated-nav-button.get-started-start.gs-mobile').addEventListener('click', () => {
        pushData('exp_blogcontentsctas_button_03', 'Get Started', 'Button', 'Header')
      })
    })
  }

  renderTableContent() {
    if ($el('.blog-content .blog-content-block') || this.device === 'mobile') return

    $el('.blog-content')?.insertAdjacentHTML('afterbegin', `
    <div class="blog-content-block">
      ${$el('.blog-sidebar-sticky .blog-content-block').innerHTML}
    </div>`)
  }

  renderRightSide() {
    for (const key in data) {
      if (window.location.href.includes(key)) {
        if (this.device === 'desktop') {
          let bulets = data[key].bulets;
          let list = '';
  
          for (let i = 0; i < bulets.length; i++) {
            list += `<li>${bulets[i]}</li>`
          }

          $el('.blog-sidebar-sticky').insertAdjacentHTML('afterbegin', rightSide(data[key].header, list))

          visibilityOfTime('.blog-sidebar-sticky', 'exp_blogcontentsctas_visibility_02', data[key].header, 'Sticky block')

        } else {
          this.headerMobile = data[key]['header_mobile']
          this.renderSticky()
        }

        $el('.crs_cta').addEventListener('click', () => {
          pushData('exp_blogcontentsctas_button_01','Try Riverside for Free','Button','Sticky block')
        })
      }
    }
  }

  renderSticky() {
    document.body.insertAdjacentHTML('beforeend', stickyBlock(this.headerMobile))

    visibilityOfTime('.crs_sticky', 'exp_blogcontentsctas_visibility_02', this.headerMobile, 'Sticky block')

    let count = 0;

    const actionSticky = () => {
      if ($el('.blog-sidebar-wrapper') && count >= 20) {
        let rectBottom = $el('.blog-sidebar-wrapper').getBoundingClientRect().bottom

        if (rectBottom < 0) {
          $el('.crs_sticky').classList.add('active')
        } else {
          $el('.crs_sticky').classList.remove('active')
        }
      }
    }

    setInterval(() => {
      if (count < 20) {
        count += 1
        actionSticky()
      }
    }, 1000)

    window.addEventListener('scroll', () => actionSticky())

    $el('.crs_sticky_arrow').addEventListener('click', () => {
      $el('.crs_sticky').classList.toggle('collapsed')

      pushData('exp_blogcontentsctas_button_02','Arrow','Button','Sticky block')
    })
  }
}

new ChangeBlog(device)