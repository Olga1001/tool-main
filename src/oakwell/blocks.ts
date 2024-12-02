import { $el } from '../libraries';
import { svg } from './data'

export const almostFull = /* HTML */
  `<div class="picker-almost-full">
    <p class="ff-lato">Sorry, the desired day is almost full</p>
    <button type="button" class="flex-center btn_join_waitlist">${svg.time} Join the waitlist</button>
  </div>`;

export const availableServices = (arrId) => {
  if (arrId.length < 1) return

  let services = '';
  for (let i = 0; i < arrId.length; i++) {
    services += `<button type="button" data-id="${arrId[i]}">${$el(`.services__item[data-id="${arrId[i]}"] .service-title`).innerText} <span>VIew</span></button>`
  }

  return `
  <div class="available-services">
    <p class="ff-lato">Available services on this day</p>
    ${services}
  </div>`;
} 

export const requests = async (appid, date) => {
  const requests = appid.map(async id => {

    console.log(new Date(date))
    const formData = new FormData();
    formData.append('day', new Date(date)); // Format date properly
    formData.append('appid', id);

    console.log(formData)
    const res = await fetch("https://test.ukr-agro-select.com.ua/time.php", { method: 'POST', body: formData });
    const data = await res.json();

    let obj = {
      id: id,
      data: data
    };

    return obj;
  
  });

  try {
    const responses = await Promise.all(requests);
    console.log(responses);
    return responses;
  } catch (error) {
    console.error('Error in Promise.all:', error);
  }
}

export const form = `
<div class="popups ff-lato">
  <div class="popup-waitlist">
      <div class="popup-waitlist__head">
          <p></p>
          ${svg.close}
      </div>
      <h4 class="ff-lato">Join the waitlist</h4>
      <p>If your preferred date becomes available, we'll notify you to make a reservation</p>
      <div class="time-slot">
          <div class="summary-form__title">Preferred time slot </div>
          <div class="justify-between">
              <label>
                  <input type="checkbox">
                  <span>8am-12pm</span>
                  <span>Morning</span>
              </label>
              <label>
                  <input type="checkbox" checked>
                  <span>12pm - 5 pm</span>
                  <span>Afternoon</span>
              </label>
              <label>
                  <input type="checkbox">
                  <span>5pm - 10pm</span>
                  <span>Evening</span>
              </label>
          </div>

      </div>
      <form class="summary-form" action="/booking-crs/#wpcf7-f13722-o2" method="post">
          <!-- Title -->
          <div class="summary-form__title">Enter Contact Information</div>

          <!-- Form -->
          <div class="summary-form__inner book-form">
              <input type="hidden" name="_wpcf7" value="13722">
              <input type="hidden" name="_wpcf7_version" value="5.9.5">
              <input type="hidden" name="_wpcf7_locale" value="en_US">
              <input type="hidden" name="_wpcf7_unit_tag" value="wpcf7-f13722-o2">
              <input type="hidden" name="_wpcf7_container_post" value="0">
              <input type="hidden" name="_wpcf7_posted_data_hash" value="">
              <input type="hidden" name="your-slot-crs">
              <input type="hidden" name="your-date-crs">
              <div class="summary-form__row book-form__row">
                  <div class="summary-form__group book-form__group">
                      <label for="summary-firstname">First Name<span>*</span></label>
                      <input type="text" id="summary-firstname" name="your-firstname-crs">
                  </div>
                  <div class="summary-form__group book-form__group">
                      <label for="summary-lastname">Last Name<span>*</span></label>
                      <input type="text" id="summary-lastname" name="your-lastname-crs">
                  </div>
              </div>

              <div class="summary-form__group book-form__group">
                  <label for="summary-phone">Phone<span>*</span></label>
                  <input type="tel" id="summary-phone" name="your-phone-crs" data-mask="+1-111-111-1111">
              </div>

              <div class="summary-form__group book-form__group">
                  <label for="summary-email">Email<span>*</span></label>
                  <input type="email" id="summary-email" name="your-email-crs">
              </div>

              <div class="summary-form__group book-form__group">
                  <label for="summary-zip">Zip Code<span>*</span></label>
                  <input type="text" id="summary-zip" name="your-zip-crs">
              </div>
          </div>

          <!-- Button to continue -->
          <button type="submit" class="summary-btn link-btn dark booking-btn"><span class="spinner"></span>Join the waitlist</button>

          <!-- Required checkbox -->
          <div class="summary-checkbox">
              <div class="summary-checkbox__icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="25" viewBox="0 0 24 25" fill="none">
                      <path
                          d="M18 3.33014H6C3.79086 3.33014 2 5.121 2 7.33014V18.3301C2 20.5393 3.79086 22.3301 6 22.3301H18C20.2091 22.3301 22 20.5393 22 18.3301V7.33014C22 5.121 20.2091 3.33014 18 3.33014Z"
                          fill="#0C5947"></path>
                      <path
                          d="M15 23.545H9C3.57 23.545 1.25 21.225 1.25 15.795V9.79498C1.25 4.36498 3.57 2.04498 9 2.04498H15C20.43 2.04498 22.75 4.36498 22.75 9.79498V15.795C22.75 21.225 20.43 23.545 15 23.545ZM9 3.54498C4.39 3.54498 2.75 5.18498 2.75 9.79498V15.795C2.75 20.405 4.39 22.045 9 22.045H15C19.61 22.045 21.25 20.405 21.25 15.795V9.79498C21.25 5.18498 19.61 3.54498 15 3.54498H9Z"
                          fill="#0C5947"></path>
                      <path
                          d="M10.5814 16.3751C10.3814 16.3751 10.1914 16.2951 10.0514 16.1551L7.22141 13.3251C6.93141 13.0351 6.93141 12.5551 7.22141 12.2651C7.51141 11.9751 7.99141 11.9751 8.28141 12.2651L10.5814 14.5651L15.7214 9.42508C16.0114 9.13508 16.4914 9.13508 16.7814 9.42508C17.0714 9.71508 17.0714 10.1951 16.7814 10.4851L11.1114 16.1551C10.9714 16.2951 10.7814 16.3751 10.5814 16.3751Z"
                          fill="#DDF2D0"></path>
                  </svg>
              </div>
              Check below to indicate that you have read and agree with Oakwell Beer Spa's cancellation policy, no-show
              policy, terms &amp; conditions, electronic communications, and privacy policy. *
          </div>
      </form>
  </div>
  <div class="popup-typ">
    ${svg.close + svg.floweret}
    <h3 class="ff-lato">Thank you for joining our waitlist</h3>
    <p>We will inform you when new slots become available.</p>
    <a href="/book-now/" class="link-btn dark">See another services</a>
  </div>
</div>`