import { svg, dir, dataItemsPortfolio, Portfolio } from './data'

const createNavMenu = () => {
    const categories = new Set();

    for (const key in dataItemsPortfolio) {
        const variants = dataItemsPortfolio[key]['variants'];

        for (const key2 in variants) {
            const collections = variants[key2].collections?.split(',').map(c => c.trim());
            collections?.forEach(collection => categories.add(collection));
        }
    }

    let navItems = '<li><a href="#" data-filter="all" class="active">All</a></li>';
    categories.forEach(category => {
        navItems += `<li><a href="#" data-filter="${category}">${category}</a></li>`;
    });

    return `<ul class="d-flex flex-wrap">${navItems}</ul>`;
};

export const addPortfolioSection = () => {
    let items = '';
    for (const key in dataItemsPortfolio) {
        const variants = dataItemsPortfolio[key]['variants']
        for (const key2 in variants) {
        // for (let i = 0; i < variants.length; i++) {
            
            const image = variants[key2].images[0];
            const collections = variants[key2].collections;

            items += `
                <div class="portfolio_item item-masonry ${variants[key2].classes ? variants[key2].classes : 'width-25'}" data-collections="${collections}">
                    <a href="?product=${key}&variant=${key2}">
                        <span>
                            <img src="${dir + 'images/' + key + image}" alt="${key} image">
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
                    ${createNavMenu()}
                </nav>
                <div class="portfolio_list masonry">${items}</div>
            <div>
        </div>`;
};

export const pdpHTML = (product, variant) => {
    const variantProduct = dataItemsPortfolio[product]['variants'][variant];
    const images = variantProduct.images;

    let slider = '';

    for (let i = 0; i < images.length; i++) {
        slider += `<div class="swiper-slide"><img src="${dir + 'images/' + product + images[i]}" alt="image"></div>`
    }

    return `
        <div class="product">
            <div class="d-flex">
                <div class="product_left">
                    <a href="#" class="btn-back items-center">${svg.arrowLeft} Back</a>
                    <div class="product_gallery">
                        ${slider}
                    </div>
                </div>
                <div class="product_right">
                    <div class="product_info">
                        <h2>${variantProduct.title}</h2>

                        ${!!variantProduct.link ? `<a href="${variantProduct.link}" target="_blank"><b>Preview</b></a><br><br>` : ''}
                       
                        <p>${variantProduct.description}</p>
                     
                        ${!!variantProduct.gitHubCode ? `<br><br><a href="${variantProduct.gitHubCode}" class="items-center" target="_blank">${svg.github} <b>Github</b></a>` : ''}
                    </div>
                </div>
            </div>
        </div>`  
}


export const filterPortfolioItems = (portfolio: Portfolio, options: string): string => {
    const filteredPortfolio: Portfolio = options === 'all' ? dataItemsPortfolio : {};
    let items: string = '';
    
    if (options !== 'all') {
        for (const [key, value] of Object.entries(portfolio)) {
            const filteredVariants: { [key: number]: PortfolioItem } = {};
            for (const [variantKey, variant] of Object.entries(value.variants)) {
                if (variant.collections?.split(',').map(c => c.trim()).includes(options)) {
                    filteredVariants[variantKey] = variant;
                }
            }
            if (Object.keys(filteredVariants).length > 0) {
                filteredPortfolio[key] = { variants: filteredVariants };
            }
        }
    }

    for (const key in filteredPortfolio) {
        let variants = filteredPortfolio[key]['variants'];
        for (const key2 in variants) {

            items += `
                <div class="portfolio_item item-masonry ${ variants[key2].classes ? variants[key2].classes : 'width-25'}" data-collections="${variants[key2].collections}">
                    <a href="?product=${key}&variant=${key2}">
                        <span>
                            <img src="${dir + 'images/' + key + variants[key2].images[0]}" alt="${key} image">
                        </span>
                    </a>
                </div>`;
            
        }
    }

    return items;
};
  
