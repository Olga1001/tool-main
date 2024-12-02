import { svg, dir, dataItemsPortfolio, Portfolio } from './data'

const createNavMenu = () => {
    const categories = new Set();

    for (const key in dataItemsPortfolio) {
        const variants = dataItemsPortfolio[key]['variants'];

        variants.forEach(variant => {
            const collections = variant.collections?.split(',').map(c => c.trim());
            collections?.forEach(collection => categories.add(collection));
        });
    }

    let navItems = '<li><a href="#" data-filter="all" class="active">All</a></li>';
    categories.forEach(category => {
        navItems += `<li><a href="#" data-filter="${category}">${category}</a></li>`;
    });

    return `<ul class="d-flex">${navItems}</ul>`;
};

export const addPortfolioSection = () => {
    let items = '';
    for (const key in dataItemsPortfolio) {
        const variants = dataItemsPortfolio[key]['variants']
        for (let i = 0; i < variants.length; i++) {
            
            const image = variants[i].images[0];
            const collections = variants[i].collections;

            items += `
                <div class="portfolio_item item-masonry ${variants[i].classes ? variants[i].classes : 'width-25'}" data-collections="${collections}">
                    <a href="?product=${key}&variant=${i}">
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
                <nav class="nav ">
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
        const filteredVariants = value.variants.filter(item =>
            item.collections ? options.includes(item.collections) : false
        );
    
        if (filteredVariants.length > 0) {
            filteredPortfolio[key] = { variants: filteredVariants };
        }
        }
    }
    console.log(options)
    console.log(filteredPortfolio)

    for (const key in filteredPortfolio) {
        let variants = filteredPortfolio[key]['variants'];

       for (let i = 0; i < variants.length; i++) {
        items += `
            <div class="portfolio_item item-masonry ${ variants[i].classes ? variants[i].classes : 'width-25'}" data-collections="${variants[i].collections}">
                <a href="?product=${key}&variant=${i}">
                    <span>
                        <img src="${dir + 'images/' + key + variants[i].images[0]}" alt="${key} image">
                    </span>
                </a>
            </div>`;
       }
    }

    return items;
};
  
