import { startLog, $$el, $el } from '../libraries'
import { dataItemsPortfolio } from './data'
import { addPortfolioSection, pdpHTML, filterPortfolioItems } from './blocks'
import imagesLoaded from 'imagesloaded';

// @ts-ignore
import basetyle from '../libraries/base.css?raw'
// @ts-ignore
import mainStyle from './assets/css/main.css?raw'

startLog({ name: 'Portfolio', dev: 'Olha Zhuravel' })

document.head.insertAdjacentHTML('beforeend', `<style>${basetyle}</style>`)
document.head.insertAdjacentHTML('beforeend', `<style>${mainStyle}</style>`)

const device = window.matchMedia("(max-width: 767px)").matches ? 'mobile' : 'desktop';

const initMasonry = () => {
  let waitMasonry = setInterval(() => {
    if (typeof Masonry === 'function') {
      clearInterval(waitMasonry)

      const container = $el('.masonry');

      const msnry = new Masonry(container, {
        itemSelector: '.item-masonry',
        columnWidth: '.width-25',
        percentPosition: true,
      });

      imagesLoaded(container, () => {
        msnry.layout();
      });

      return msnry;
    }
  })
}

const refreshMasonry = () => {
  const container = $el('.masonry');

  imagesLoaded(container, () => {
    if (portfolioInstance.msnry) {
      portfolioInstance.msnry.reloadItems();
      portfolioInstance.msnry.layout();
    } else {
      portfolioInstance.msnry = initMasonry();
    }
  });
};

const pushStatePathName = (newSearch) => {
  let newUrl = window.location.pathname + '?' + newSearch;
  history.pushState(null, '', newUrl);
}

class Portfolio {
  msnry: any

  constructor() {
    this.msnry = null;
    this.init()
  }

  init() {
    this.addProjectsInPortfolio();
    this.clickOnProject();
    this.nav();
  }

  addProjectsInPortfolio() {
    $el('.wrapper').insertAdjacentHTML('beforeend', addPortfolioSection())
  }

  clickOnProject() {
    $$el('.portfolio_item a').forEach((item, index) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();

        let namePDP = item.search.split('product=')[1].split('&')[0];
        let variantPDP = item.search.split('variant=')[1];

        let newSearch = 'product=' + namePDP + '&variant=' + variantPDP;

        pushStatePathName(newSearch);

        new PDP(namePDP, variantPDP);
      })
    })
  }

  nav() {
    $$el('nav a[data-filter]').forEach(item => {
      item.addEventListener('click', (e) => {
        e.preventDefault();

        if (item.classList.contains('active')) return

        $el('nav a.active').classList.remove('active');
        item.classList.add('active');

        const category = item.dataset.filter;
        const filteredData = filterPortfolioItems(dataItemsPortfolio, category);

        $el('.portfolio_list').innerHTML = filteredData;

        refreshMasonry();
        this.clickOnProject();
      });
    });
  }
}

const portfolioInstance = new Portfolio();
portfolioInstance.msnry = initMasonry();

setTimeout(() => {
  document.body.classList.add('init')
}, 300)

class PDP {
  namePDP: string
  variantPDP: string | number

  constructor(namePDP, variantPDP) {
  
    this.namePDP = namePDP;
    this.variantPDP = variantPDP;
    this.init()
  }

  init() {
    this.addPDP()
    this.clickBack()
    
    $el('html').classList.add('fixed_body');
  }

  addPDP() {
    $el('.product')?.remove();
    document.body.insertAdjacentHTML('afterbegin', pdpHTML(this.namePDP, this.variantPDP))

    if (device === 'mobile') {
      $el('.product_info').before($el('.product .btn-back'))
    }

    setTimeout(() => {
      $el('.product').classList.add('active')
    }, 300)

  
    const appHeight = () => {
      $el('.product').style.height = window.innerHeight + "px";
    };
    
    window.addEventListener("resize", appHeight);
    appHeight();
  }

  clickBack() {
    $el('.product .btn-back').addEventListener('click', (e) => {
      e.preventDefault()
      $el('.product').classList.remove('active')
      setTimeout(() => {
        $el('.product')?.remove()
      }, 300)

      $el('html').classList.remove('fixed_body');
      pushStatePathName('')
    })
  }
}

if (window.location.href.includes('?product')) {
  const namePDP = window.location.href.split('product=')[1].split('&')[0]
  const variantPDP = window.location.href.split('variant=')[1].replace('#', '')

  new PDP(namePDP, variantPDP);
}