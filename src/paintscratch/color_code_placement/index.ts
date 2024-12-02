import {$el, $$el, startLog, clarityInterval, pushData, truncateDescription, getDeviceType} from '../../libraries'
import {
  accordionBlock,
  imagesBlock,
  popupVideo,
  popupImage
} from './blocks'

import { dir, svg, data, dataVideo } from './data'
// @ts-ignore
import mainStyle from './main.css?raw'

startLog({ name: 'Color code placement', dev: 'Olha' })

clarityInterval('exp_сolor_code_placement')

class ColorCodePlacement {
  device: 'mobile' | 'desktop'

  constructor() {
    this.device = getDeviceType()
    this.init()
  }

  init() {
    if (!$el('.crs_style_color')) {
      document.head.insertAdjacentHTML('beforeend', `<style class="crs_style_color">${mainStyle}</style>`)
    }
    
    this.addAccordion();
    this.addImages();
    this.addVideo();
    this.closePopup();
    if (this.device === 'mobile') {
      this.addReadMore();
    }
  }

  addAccordion() {
    if ($el('.crs_accordion')) return
    if (!$el('.select-color span.instructions + p')) return

    $el('.select-color span.instructions + p').insertAdjacentHTML('afterend', accordionBlock)

    $el('.crs_accordion_current').addEventListener('click', (e) => {
      $el('.crs_accordion').classList.toggle('active');
      let desc = ''
      if ($el('.crs_accordion').classList.contains('active')) {
        desc = 'Open'
      } else {
        desc = 'Close'
      }
      
      pushData('exp_color_code_button_03', desc, 'Button', 'What is a color code?')
     })
  }

  addImages() {
    if (!$el('#color-display-table')) return
    if ($el('.crs_images')) return

    $el('#color-display-table').insertAdjacentHTML('beforebegin', imagesBlock)
    document.body.insertAdjacentHTML('beforeend', popupImage)

    for (let key in data) {
        if ($el('#page #main h1').innerText.toLowerCase().includes(key.toLowerCase())) {
     
          let additionalImage = data[key][2] != undefined ? `<div class="relative"><img src="${dir}color-id-tag/${data[key][2]}" alt="image">${svg.zoom}</div>` : '';
          
          if (!$el('.crs_images_left img').src.includes(data[key][0])) {
            $el('.crs_images_left img').src = dir + 'paint-code-locations/' + data[key][0];
          }

          $el('.crs_images_right').innerHTML = `<div class="relative"><img src="${dir}color-id-tag/${data[key][1]}" alt="image">${svg.zoom}</div>` + additionalImage;

        }
    }

    $$el('.crs_images_row .relative > img').forEach((item, index) => {
      item.addEventListener('click', (e) => {
        $el('.crs_popup_image img').src = item.src;
        setTimeout(() => {
          $el('.crs_popup_image').classList.add('active');
        }, 200)

        let loc = item.closest('.crs_images_right') ? 'Color plate' : 'Where to find your color'
        pushData('exp_color_code_image_01','Section','Image', loc)
        
      })
    })
  }

  addVideo() {
    if (!$el('.crs_video')) return
    if ($el('.crs_popup_video')) return

    let videoSelector = $el('.crs_video');

    for (let key in dataVideo) {
      if ($el('#page #main h1').innerText.toLowerCase().includes(key.toLowerCase())) {
        videoSelector.insertAdjacentHTML('afterend', popupVideo(dataVideo[key]))
        

        $el('.crs_popup_video iframe').addEventListener('click', (e) => {
          pushData('exp_color_code_button_01','Play','Button','Video instruction pop up');
        })

        videoSelector.style.display = 'flex';
        videoSelector.addEventListener('click', (e) => {
          $el('.crs_popup_video').classList.add('active');
          pushData('exp_color_code_link_01','Video','Link','Video instruction on how to find your color code')
        })

      }
    }
  }

  stopVideo() {
    if (!$el('.crs_popup_video iframe')) return

    let leg = $el('.crs_popup_video iframe').src;
    $el('.crs_popup_video iframe').src = leg;
  }

  closePopup() {
    $$el('.crs_popup_head svg').forEach(item => {
      item.addEventListener('click', (e) => {
        item.closest('.crs_popup').classList.remove('active');
        this.stopVideo();

        if (item.closest('.crs_popup_video')) {
          pushData('exp_color_code_button_02','Close','Button','Video instruction pop up')
        } else {
          pushData('exp_color_code_button_02','Close','Button','Image pop up')
        }
      })
    })

    document.addEventListener('click', (e) => {
      if (e.target.classList.contains('crs_popup')) {
        e.target.classList.remove('active');
        this.stopVideo();

        if (e.target.classList.contains('crs_popup_video')) {
          pushData('exp_color_code_under_01','Close','Under','Video instruction pop up')
        } else {
          pushData('exp_color_code_under_01','Close','Under','Image pop up')
        }
      }
    })
  }

  addReadMore() {
    $$el('#main h3').forEach(item => {
      if (item.innerText.includes('Color Code Information') && !item.nextElementSibling.querySelector('.crs_read_more')) {
        const selectorDescription = item.nextElementSibling
        const originalDescription = selectorDescription.innerText;
        const truncatedDescription = truncateDescription(originalDescription);
        selectorDescription.innerHTML = truncatedDescription

        $el('.crs_read_more').addEventListener('click', (e) => {
          selectorDescription.innerHTML = originalDescription;
          pushData('exp_color_code_link_02','More','Link', 'Color Code Information')
        })
      }
    })
  }
}

let start = setInterval(() => {
  if (window.location.href.includes('cgi-bin/select-color.cgi')) {
    if (!$el('#no_car_selected[style*="block"]') && !$el('.crs_images') && $el('#color-display-table')) {
      for (let key in data) {
        if ($el('#page #main h1').innerText.toLowerCase().includes(key.toLowerCase()) && 
          !$el('#page #main h1').innerText.toLowerCase().includes('motorcycle') &&
          data[key][0] != 'mazda.png') 
        {
          new ColorCodePlacement();
        }
      }
    }

    if ($el('#no_car_selected[style*="block"]') && !$el('.crs_style') && getDeviceType() === 'mobile') {
      document.head.insertAdjacentHTML('beforeend', `
      <style class="crs_style">
        @media screen and (max-width: 768px) {
          #color_search_pop a.action-button-orange {
            margin-left: 0!important;
            width: 100%;
          }
        }
      </style>`);
    }
  }
})
