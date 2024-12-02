import { startLog, $$el, $el } from '../libraries'
// import { dataItemsPortfolio } from './data'
// import { addPortfolioSection, pdpHTML, filterPortfolioItems } from './blocks'


// @ts-ignore
import basetyle from '../libraries/base.css?raw'
// @ts-ignore
import mainStyle from './assets/css/main.css?raw'

startLog({ name: 'Portfolio', dev: 'Olha Zhuravel' })

// document.head.insertAdjacentHTML('beforeend', `<style>${basetyle}</style>`)
// document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

const device = window.matchMedia("(max-width: 767px)").matches ? 'mobile' : 'desktop';

class walky {
  msnry: any

  constructor() {
    this.msnry = null;
    this.init()
  }

  init() {
  
  }


}

new walky();
