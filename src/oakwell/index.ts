import { $el, $$el, startLog, clarityInterval } from '../libraries'
import { almostFull, availableServices, requests, form } from './blocks';

//https://oakwell.com/booking-crs/
// @ts-ignore
import mainStyle from './main.css?raw'

startLog({ name: 'Introduce waiting list tool and available services', dev: 'Olha' })

clarityInterval('waitlist_and_available_services')

const device = window.innerWidth < 900 ? 'mobile' : 'desktop';

class WaitlistCalendar {
  device: 'mobile' | 'desktop';
  clickDay: boolean
  clickView: boolean

  constructor(device) {
    this.device = device
    this.clickDay = false
    this.clickView = false
    this.init()
  }

  init() {
    /* add style */
    document.body.insertAdjacentHTML('afterbegin', `<style>${mainStyle}</style>`)

    /* Join the waitlist popup */
    document.body.insertAdjacentHTML('beforeend', form)

    this.submitForm()
    this.actionForm()
    this.maskPhone()

    /* end Join the waitlist popup */

    const globalMutation = new MutationObserver((mutations) => {

      if ($el('.step.picker.active')) {
        this.almostFull()
        this.unavailable()

        $$el('.-day-').forEach(day => {
          day.addEventListener('click', (e) => {
            this.clickDay = false
          })
        })
      } else {
        this.clickView = false
        this.clickDay = false
      }

      globalMutation.disconnect()

      globalMutation.observe(document.body, {
        childList: true,
        subtree: true,
        attributes: true

      })
    })

    globalMutation.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true
    })
  }

  maskPhone() {

    var phoneInput = $el('.popups #summary-phone')

    phoneInput.addEventListener('input', function (e) {
      var value = phoneInput.value.replace(/\D/g, ''); // Удаляем все нецифровые символы
      var formattedValue = '+1-';

      if (value.length > 1) formattedValue += value.substring(1, 4);
      if (value.length >= 4) formattedValue += '-' + value.substring(4, 7);
      if (value.length >= 7) formattedValue += '-' + value.substring(7, 11);

      phoneInput.value = formattedValue;
    });

    phoneInput.addEventListener('keydown', function (e) {
      var key = e.key;
      var cursorPosition = phoneInput.selectionStart;

      // Предотвращаем удаление префикса "+1-"
      if ((key === 'Backspace' || key === 'Delete') && cursorPosition <= 3) {
        e.preventDefault();
      }

      // Разрешаем удаление цифр, учитывая дефисы
      if (key === 'Backspace' && cursorPosition > 4) {
        if (phoneInput.value[cursorPosition - 1] === '-') {
          phoneInput.setSelectionRange(cursorPosition - 1, cursorPosition - 1);
        }
      }

      if (key === 'Delete' && cursorPosition < phoneInput.value.length && phoneInput.value[cursorPosition] === '-') {
        phoneInput.setSelectionRange(cursorPosition + 1, cursorPosition + 1);
      }
    });

    phoneInput.addEventListener('focus', function () {
      // Если поле пустое, добавляем префикс "+1-"
      if (phoneInput.value === '') {
        phoneInput.value = '+1-';
      }
    });

  }

  almostFull() {  /* add Sorry, the desired day is almost full */
    if ($el('.picker-times__item') && ($$el('.picker-times__item').length < 10 || !$el('.picker-times__list').innerText.includes('PM'))) {
      if ($el('.picker-almost-full')) return
      $el('.picker-times').insertAdjacentHTML('beforeend', almostFull)

      $el('.picker-almost-full button').addEventListener('click', () => {
        this.togglePopup()
      })

      if ($el('.available-services')) {
        $el('.available-services').remove()
      }
    } else {
      if ($el('.picker-almost-full')) {
        $el('.picker-almost-full').remove()
      }
    }
  }

  togglePopup() {  /* show/hide form popup */
    $el('.popups').classList.toggle('active')
    $el('.popups').classList.remove('-typ')
    $el('.popup-waitlist__head p').innerHTML = $el('.picker-calendar__caption').innerText;
    $el('.popup-waitlist [name="your-date-crs"]').value = $el('.picker-calendar__caption').innerText;
    
  }

  unavailable() {  /* add Sorry, we are fully committed on this day */
    if ($el('.picker-unavailable') && $el('.times-empty') && this.clickDay == false) {
      this.clickDay = true

      $el('.picker-unavailable .note-title').innerHTML = `<span class="date">${$el('.picker-calendar__caption').innerText}</span>Sorry, we are fully committed <span class="text-nowrap">on this day</span>`;
      $el('.picker-unavailable .note-descr').classList.remove('ff-dm-sans')
      $el('.picker-unavailable .note-descr').innerHTML = `Join the waitlist and we'll notify you when slots <span class="text-nowrap">open up</span>
        <button type="button" class="btn_join_waitlist link-btn dark">Join the waitlist</button>`

      $el('.picker-unavailable .btn_join_waitlist').addEventListener('click', () => {
        this.togglePopup()
      })

      if ($el('.available-services')) {
        $el('.available-services').remove()
      }


      if (this.clickView == false) {
        let daySelected = $el('.-day-.-selected-')

        let month = +daySelected.dataset.month + 1;
        let monthNew = month.toString().length <= 1 ? '0' + month : month;
        let day = daySelected.dataset.date.length <= 1 ? '0' + daySelected.dataset.date : daySelected.dataset.date;

        let date = daySelected.dataset.year + '-' + monthNew + '-' + day;
        console.log('date: ' + date)
        this.addAvailableServices(date)
      }
    }
  }

  addAvailableServices(date) { /* add Available services on this day */

    let services = $$el('.services__item');
    let appid = []

    for (let i = 0; i < services.length; i++) {
      const id = services[i].dataset.id
      appid.push(id)
    }

    requests(appid, date).then(data => {
      let arrId = [];
      for (let i = 0; i < data.length; i++) {
        const times = data[i].data.times;

        if (times != '') {
          arrId.push(data[i].id)
        }

      }
      if ($el('.available-services')) {
        $el('.available-services').remove()
      }

      if (arrId != '') {
        console.log(arrId)
        $el('.picker-unavailable').insertAdjacentHTML('afterend', availableServices(arrId))

        this.actionView(date)
      }
    })
  }

  actionView(date) {  /* click view buttons */

    let buttonView = $$el('.available-services button');

    buttonView.forEach(button => {
      button.addEventListener('click', () => {

        this.clickView = true
        let id = button.dataset.id;

        let day = +date.split('-')[2]
        let month = +date.split('-')[1]
        let year = date.split('-')[0]

        let monthsFull = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

        let arrAddons = []
        $$el(`.addons-list .addon.active`).forEach(addon => {
          arrAddons.push(addon.dataset.id)
        })

        $el('.logs .log .logs-step__action').click()
        $el(`.services__item[data-id="${id}"] .service-btn`).click()
        $el(`.package-btn[data-id="${id}"]`).click()
        if (!$el(`.package[data-id="${id}"][data-addons="[]"]`)) {
          for (let i = 0; i < arrAddons.length; i++) {
            $el(`.addon[data-id="${arrAddons[i]}"]`)?.click()
          }

          $el(`.addons-btn`)?.click()
        }

        let waitYear = setInterval(() => {
          if ($el('.air-datepicker-nav--action[data-action="next"]') && $el('.air-datepicker-nav--title')) {
            let headCalendar = $el('.air-datepicker-nav--title')

            if (!headCalendar.innerHTML.includes(year) || !headCalendar.innerHTML.includes(monthsFull[month - 1])) {
              $el('.air-datepicker-nav--action[data-action="next"]').click()
            } else {
              if ($el(`.-day-[data-date="${day}"][data-month="${month - 1}"]`)) {
                clearInterval(waitYear)

                $el(`.-day-[data-date="${day}"][data-month="${month - 1}"]`).click()
                this.clickView = false
              }
            }
          }
        }, 200)
      })
    })
  }

  actionForm() { /* checkbox and close Join the waitlist */
    $el('.popup-waitlist .summary-checkbox').addEventListener('click', function () {
      if ($el('.popup-waitlist .summary-checkbox__icon.book-form_error')) {
        $el('.popup-waitlist .summary-error').remove();
        $el('.popup-waitlist .summary-checkbox__icon.book-form_error').classList.remove('book-form_error');
      }
      this.classList.toggle('active');
    })
    
    $$el('.popups .close').forEach(button => {
      button.addEventListener('click', (e) => {
        this.togglePopup()
      })
    })
    $el('.popups').addEventListener('click', (e) => {
      if (e.target.classList.contains('popups')) {
        this.togglePopup()
      }
    })

    $$el('.time-slot input').forEach(item => {
      item.addEventListener('change', (e) => {
        if (item.closest('.book-form_error') && item.checked) {
          $el('.time-slot').classList.remove('book-form_error')
          $el('.popup-waitlist .summary-error').remove();
        }
      })
    })
  }

  submitForm() {  /* sumbit Join the waitlist */
    const submitBtn = $el('.popup-waitlist .summary-btn');
    const form = $el('.popup-waitlist form.summary-form');

    form.addEventListener('submit', async (event) => {
      event.preventDefault();
      console.log('submit')
      $el('.popup-waitlist .summary-error')?.remove();
      submitBtn.disabled = true;

      const res = await this.validateForm();
      console.log('res: ', res)
      if (!res.successfully) {
        $el('.popup-waitlist .summary-checkbox').insertAdjacentHTML('beforebegin', `<div class="summary-error">${res.error}</div>`);
        submitBtn.disabled = false;
        return;
      }  

      this.sendFormData(new FormData(event.target));

      console.log(res.data);
    })
  }

  async validateForm() {  /* validation "Join the waitlist" form */
    const parentForm = $el('.popup-waitlist');
    const firstname = parentForm.querySelector('#summary-firstname').value;
    const lastname = parentForm.querySelector('#summary-lastname').value;
    const phone = parentForm.querySelector('#summary-phone').value;
    const email = parentForm.querySelector('#summary-email').value;
    const zip = parentForm.querySelector('#summary-zip').value;
    const slots = parentForm.querySelector('[name="your-slot-crs"]').value = Array.from($$el('.time-slot input:checked')).map(checkbox => checkbox.nextElementSibling.innerText);
    const date = parentForm.querySelector('.popup-waitlist__head p').textContent;

    let error = false;
    let target = null;

    if (!parentForm.querySelector('.time-slot input:checked')) {
      error = 'Please chooise preferred time slot';
      target = parentForm.querySelector('.time-slot');
    } else if (!firstname) {
      error = 'Please enter your first name';
      target = parentForm.querySelector('#summary-firstname');
    } else if (!lastname) {
      error = 'Please enter your last name';
      target = parentForm.querySelector('#summary-lastname');
    } else if (!phone || phone.length < 15) {
      error = 'Please enter your phone number';
      target = parentForm.querySelector('#summary-phone');
    } else if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      error = 'Please enter a valid email';
      target = parentForm.querySelector('#summary-email');
    } else if (!zip) {
      error = 'Please enter your zip code';
      target = parentForm.querySelector('#summary-zip');
    } else if (!parentForm.querySelector('.summary-checkbox').classList.contains('active')) {
      error = 'Please agree with the terms';
      target = parentForm.querySelector('.summary-checkbox__icon');
    }

    if (error) {
      target.closest('.book-form__group')?.classList.add('book-form_error');

      if (target.classList.contains('summary-checkbox__icon')) {
        target.classList.add('book-form_error');
      }

      console.log(target)
      if (target.classList.contains('time-slot')) {
        target.classList.add('book-form_error');
      }

      return {
        successfully: false,
        error,
      };
    }

    const caption = {
      'firstname': firstname,
      'lastname': lastname,
      'email': email,
      'phone': phone,
      'zip': zip,
      'slots': slots,
      'date': date
    }

    return {
      successfully: true,
      data: caption
    }
  }

  async sendFormData(formData) {
    try {
      const response = await fetch('/booking-crs/#wpcf7-f13722-o2', { // Вкажіть правильний URL для обробки форми
        method: 'POST',
        body: formData,
      });

      if (response.ok) {
        console.log('Form submitted successfully!');
        $el('.popups').classList.add('-typ')
        $el('.popup-waitlist .summary-btn').disabled = false;
      } else {
        console.log('Error submitting form');
        console.log(response);
        $el('.popup-waitlist .summary-checkbox').insertAdjacentHTML('beforebegin', `<div class="summary-error">error</div>`);
      }
    } catch (error) {
      console.error('Error:', error);
      $el('.popup-waitlist .summary-checkbox').insertAdjacentHTML('beforebegin', `<div class="summary-error">${error}</div>`);
     
    }
  }

}

new WaitlistCalendar(device);