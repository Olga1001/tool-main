import { svg } from './data'

let productHandles = ['eucalyptus-silk-eye-mask','eucalyptus-silk-pillow-cases','eucalyptus-silk-sheet-set']
let productVariants = [];

function addDotBeforeLastTwoDigits(number) {
    let numberStr = number.toString();
    let length = numberStr.length;
    let result = numberStr.slice(0, length - 2) + '.' + numberStr.slice(length - 2);

    return (+result).toFixed(2);
}

const fetchProduct = (handle) => {
    return fetch('/products/' + handle + '.js')
        .then(response => response.json())
        .then(product => {
            // console.log('Product:', product);
            if (product.variants) {
                product.variants.forEach(function(variant) {
                    productVariants[variant.id] = { 
                        available: variant.available,
                        price: addDotBeforeLastTwoDigits(variant.price),
                        compare: addDotBeforeLastTwoDigits(variant.compare_at_price)
                    }
                });
            }
        })
        .catch(error => {
            console.log('Error fetching product for handle:', handle, error);
        });

}

export const addToCart = (id, qty) => {
    let formData = {
        items: [
            {
                'id': id,
                'quantity': qty
            }
        ]
    }

    $.ajax({
        url: '/cart/add.js',
        type: 'POST',
        data: formData,
        dataType: 'json',
        error: function (err) {
            console.log(err)
        }
    }).done(function (item) {
        $.getJSON('/cart.js', function (c) {
            $(".ic").find(".cart_count").text(c.item_count);
            $(".modal-add span").text("ADD TO CART");
            $(".modal").removeClass('active');
            $('body').removeClass('not-activated-cart')

            addToCartOK();
        })
    })
}

export const crossSellModal = (data: any): any => {
    return Promise.all(productHandles.map(fetchProduct)).then(() => {

        let optionList: string = '', optionSelect: string = '';

        const select = data.select

        for (const key in select) {
            let desc = '';

            if (data.desc.length > 1) {
                for (let j = 0; j < data.desc.length; j++) {
                    if (data.desc[j].split(':')[0] == key.split(' | ')[1]) {
                        desc = data.desc[j]
                    }
                }
            }

            if (productVariants[select[key]].available == true) {
                optionSelect += `<option value="${select[key]}" ${desc != '' ? `data-desc="${desc}"` : ''} data-compare="${(productVariants[select[key]].compare * (key.includes('4 pack') ? 2 : 1)).toFixed(2)}" data-price="${(productVariants[select[key]].price * (key.includes('4 pack') ? 2 : 1)).toFixed(2)}" data-qty="${key.includes('4 pack') ? 2 : 1}">${key}</option>`;
            }
        }

        let list = data.list
        for (let i = 0; i < list.length; i++) {
            optionList += `<li>${list[i]}</li>`;
        }

        let compare = productVariants[select[Object.keys(select)[0]]].compare, 
            price = productVariants[select[Object.keys(select)[0]]].price,
            save = Math.round(100 - price * 100 / compare).toFixed(0);

        return `
            <div class="modal">
                <div class="modal-container">
                    <div class="modal-head">
                        ${data.head} ${svg.close}
                    </div>
                    <div class="modal-product">
                        <div class="modal-product__images">
                            <div class="modal-product__save" style="${save <= 0 ? 'display: none': ''}">${save}% Off</div>${data.images}
                        </div>
                        <div class="modal-product__info">
                            <p class="modal-product__title">${data.title}</p>
                            <p class="modal-product__desc ${data.title == 'Eucalyptus Silk Sheet Set' ? 'fs-12_mob' : ''}" ${data.desc[0] == '' ? 'hidden' : ''}>${data.desc[0]}</p>
                            <p class="modal-product__prices">
                                <span style="${save <= 0 ? 'display: none': ''}">£${compare}</span>
                                <b>£${price}</b>
                            </p>
                        </div>
                    </div>
                    <div class="modal-content">
                        <ul class="modal-list">${optionList}</ul>
                        <div class="select-parent">
                            <select class="modal-select">${optionSelect}</select>
                            ${svg.arrowDown}
                        </div>
                        <button type="button" class="modal-add items-center">${svg.cart} <span>Add to cart</span></button>
                    </div>
                </div>
            </div>`;
    });
};