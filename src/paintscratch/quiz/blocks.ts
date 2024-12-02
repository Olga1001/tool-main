import { svg, dataSelects, infoProduct, qtyQuiz } from './data'

export const navigation = /* HTML */
    `<div class="crs_steps_line">
        <div class="line">
            <p></p>
        </div>
        <ul>
            <li>Find Your Car<span></span></li>
            <li>Select Your Color<span></span></li>
            <li>Select Your Products<span></span></li>
            <li>Shopping Cart<span></span></li>
            <li>Checkout<span></span></li>
        </ul>
    </div>`;

export const quiz = () => { /* HTML */
    let selectors = ''

    for (const key in dataSelects) {
        const keysArray = Object.keys(dataSelects);
        const index = keysArray.indexOf(key)

        selectors += `<div data-index="${index}" ${index != 0 ? 'hidden' : ''}>
        <label class="text-cust">${key}</label>
            <div class="items-lg-center">
                <div class="select">
                    <div class="select_current"><div>${Object.keys(dataSelects[key])[0]}</div> ${svg.arrowDown}</div>
                    <ul class="select_dropdown">`

        for (const key2 in dataSelects[key]) {
            selectors += ` 
                <li>
                    <b>${key2}</b> ${dataSelects[key][key2]}
                </li>`
        }

        selectors += `</ul></div><div class="items-center">
            <button type="button" class="btn_back_step is_mob items-center" ${index == 0 ? 'hidden' : ''}>${svg.arrowLeft} Back</button>
            <button type="button" class="btn_next_step">Next ${svg.arrowRight}</button></div>
        </div>
        <button type="button" class="btn_back_step is_desk items-center" ${index == 0 ? 'hidden' : ''}>${svg.arrowLeft} Back</button></div>`
    }

    return `<div class="quiz">
        <h3 class="h3_title">Need Help Choosing the Right Product?</h3>
        <p class="text-cust">Use our guide to find the perfect solution for your needs, or explore all options below.</p>
        ${selectors}
    </div>`
};

const listRecommendedProducts = (data, qty) => {
    return `
        <li data-id="${data.id}">
            <a href="${data.href}">
                <img src="${data.image.replace('/thumb','/thumb2')}" alt="${data.title}">
            </a>
            <div>
                <div class="items-center">
                    <a href="${data.href}">${data.title}</a>
                    <p ${qty == 1 ? 'hidden' : ''} class="qty">${qty}x</p>
                </div>
            
                <p>${data.desc}</p>
                <div class="row items-center">
                    <p class="text-cust price">${data.price}</p> 
                    <a href="#" class="btn_add items-center">${svg.basket} Add to Cart</a>
                </div>
            </div>
        </li>`
}

const getQty = (id, res) => {

    let qty = 1;

    if (res.size == 'Extensive') {
        let arr = qtyQuiz[res.type == 1 ? 1 : 0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i].split('|')[0] == id) {
                qty = parseInt(arr[i].split('|')[1])
            }
        }
    }

    return qty
}

export const getRecommendedProducts = (data, res) => {

    let baseOption = '';
    let needOption = '';
    let total = 0;
    let tricoat = false;
    let parent, title, desc, id;

    let dataProduct: any = {}
    console.log('RecommendedProducts: ')
    console.log(data)

    for (let i = 0; i < data.length; i++) {
        if (typeof data[i] === 'object') {
            for (let j = 0; j < data[i].length; j++) {
                parent = $(`.products-list.${data[i][j]}`)
                title = Object.keys(infoProduct[data[i][j]])[0]

                dataProduct.id = data[i][j],
                dataProduct.href = parent.find(`.related-items`).attr('href'),
                dataProduct.image = parent.find(`.related-items img`).attr('src'),
                dataProduct.desc = infoProduct[data[i][j]][title],
                dataProduct.title = title,
                dataProduct.price = parent.find(`.price`).html();

                needOption += listRecommendedProducts(dataProduct, getQty(data[i][j], res))
            }
        } else {
         
            if (i == 0) {
                if ($('.orderforms #page #main .car-touch-up-paints-heading p').html().includes('Tricoat')) {
                    tricoat = true
                }

                parent = $(`.products-list.${data[i].split('/')[+tricoat]}`)
                title = Object.keys(infoProduct[data[i].split('/')[+tricoat]])[0]
                desc = infoProduct[data[i].split('/')[+tricoat]][title]
                id = data[i].split('/')[+tricoat]

            } else {
                parent = $(`.products-list.${data[i]}`)
                title = Object.keys(infoProduct[data[i]])[0]
                desc = infoProduct[data[i]][title]
                id = data[i]
            }
            
            const priceHtml = parent.find(`.price`).html();

            dataProduct.id = id,
            dataProduct.href = parent.find(`.related-items`).attr('href'),
            dataProduct.image = parent.find(`.related-items img`).attr('src'),
            dataProduct.desc = desc,
            dataProduct.title = title;
            dataProduct.price = priceHtml;


            if (priceHtml) {
                const numbersOnly = priceHtml.match(/[\d,.]+/);

                if (numbersOnly && numbersOnly.length > 0) {
                    total += parseFloat(numbersOnly[0] * getQty(id, res));
                }
            }
            
            baseOption += listRecommendedProducts(dataProduct, getQty(id, res))
        }
    }

    let currency = $(`.products-list.${data[1]} .price`).html().split(/[\d,.]+/g)[0];

    return `
        <div class="recommended_products">
            <h3 class="h3_title">Recommended products</h3>
            <p class="text-cust">Your custom kit comes complete with everything you need for a perfect repair. For detailed application instructions and helpful tips, browse our website to guide you through the process.</p>
            <div class="quiz_res"><p >Type of damage: <b>${res.typeTitle}</b></p><p>Size: <b>${res.size}</b></p>${res.metal != '' ? `<p>Material type: <b>${res.metal}</b></p>` : ''}</div>
            <div class="b-1">
                <div class="recommended_products__base">
                    <h3 class="h3_title">What’s included in your <span class="is_desk">base</span> repair kit:</h3>
                    <ul>${baseOption}</ul>
                    <div class="items-center">
                        <a href="#" class="btn_add_all">Add to Cart</a>
                        <p class="total">${currency}${total.toFixed(2)}</p>
                    </div>
                </div>
                <div class="recommended_products__need">
                    <h3 class="h3_title">You might also need:</h3>
                    <ul>${needOption}</ul>
                </div>
            </div>
            <a href="#" class="btn_back_quiz items-center">${svg.arrowLeft} Take quiz again</a>
        </div>`
}