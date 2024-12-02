import { svg, dir } from './data'

const accordionBlock = /* HTML */  
`<div class="crs_accordion">
  <h3>To proceed to paint selection, start with finding your car color code</h3>
  <div class="crs_accordion_current">What is a color code?</div>
  <div class="crs_accordion_content">
    <p>Your vehicle's color code is a unique identifier for the exact paint shade used on your vehicle. It ensures you get the precise color match for touch-ups or repaints.</p>
    <p><b>Ordering Paint:</b> Always use the color code found on your vehicle, not the color name or what you see on a screen. Screen colors can be misleading due to variations in display settings.</p>
    <p><b>Where to Find It:</b> Check the driver’s side door jamb, glove box, engine compartment, or trunk for a sticker or plate with the code. It's usually near a label that says "Paint".</p>
    <p><b>Need Help?</b> If you can't find or read the color code, ask a dealership or auto body shop for help. Provide your vehicle identification number (VIN) for accurate assistance.</p>
    <p><b>Remember: To avoid color mismatches, never rely on visual impressions from a screen or paint names. Always refer to the color code.</b></p>
  </div>
</div>`;

const imagesBlock = /* HTML */
`<div class="crs_images">
  <h3>Where to find your vehicle’s color code:</h3>
  <div class="d-lg-flex crs_images_row">
    <div class="crs_images_left relative"><img src="${dir}paint-code-locations/mazda.png" alt="image">${svg.zoom}</div>
    <div class="crs_images_right">
      <div class="relative"><img src="${dir}color-id-tag/Hyundai-Paint-Code.gif" alt="image">${svg.zoom}</div>
    </div>
  </div>
</div>
<button type="button" class="crs_video" style="display: none">${svg.play} <span>Video instruction on how to find your color code</span></button>
<h3>Select the paint color based only on your color code:</h3>`;

const popupVideo = (video) => /* HTML */ 
`<div class="crs_popup crs_popup_video">
  <div class="crs_popup_container">
    <div class="crs_popup_head">Video instruction ${svg.close}</div> 
    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/${video}" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
  </div> 
</div>`;

const popupImage = /* HTML */ 
`<div class="crs_popup crs_popup_image">
  <div class="crs_popup_container">
    <div class="crs_popup_head">${svg.close}</div> 
    <img src="#" alt="image">
  </div> 
</div>`;

export {
  accordionBlock, imagesBlock, popupVideo, popupImage
}
