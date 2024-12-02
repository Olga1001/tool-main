import { svg } from './data'

export const notification = <T extends string>(image: T, title: T, info: T, price: T, count: T): string => /* HTML */
  ` <div class="crs_notification">
  <div class="crs_notification_head justify-between">
      <div class="items-center">
          ${svg.checkbox}
          <h3>Added to cart</h3>
      </div>
      <button type="button" class="crs_close">
          ${svg.close}
      </button>
  </div>
  <div class="crs_notification_body justify-between">
      <div class="d-flex">
          <img src="${image}" alt="${title}">
          <div>
              <div class="crs_notification_title">${title}</div>
              <div class="crs_notification_info">${info}</div>
          </div>
      </div>
      <div class="crs_notification_price">$${price}</div>
  </div>
  <div class="crs_notification_foot justify-between items-center flex-lg-column-reverse">
      <a href="#" class="crs_continue_shop">Continue Shopping</a>
      <a href="/cart" class="crs_view_cart">view cart (${count})${svg.arrowRight}
        <span class="css-m18cj1">
            <img alt="" width="80" height="80" src="https://cerebelly.com/wp-content/themes/cerebelly/img/v2//loader/Apple.svg" style="">
        </span>
      </a>
  </div>
</div>`;

export const navigation = `
<nav class="crs_nav">
  <ul class="d-flex justify-lg-center">
    <li><a href="#ingredients">ingredients</a></li>
    <li><a href="#nutrients">Nutrients</a></li>
    <li><a href="#usvsthem">the cerebelly standard</a></li>
    <li><a href="#puree">directions & safety</a></li>
  </ul>
</nav>`;

export const arrowButton = `
<button type="button" class="crs_arrow crs_arrow_prev" hidden>${svg.arrowLeftSlide}</button>
<button type="button" class="crs_arrow crs_arrow_next" hidden>${svg.arrowRightSlide}</button>`;

export const tastes = (count: string | number) => `<p class="crs_tastes"><span>1</span> of ${count} flavors<p>`;