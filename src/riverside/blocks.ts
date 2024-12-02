import { svg } from './data'

export const stickyBlock = (header_mobile: string) => `
  <div class="crs_sticky">
    <button type="button" class="crs_sticky_arrow">${svg.arrowDown}${svg.arrowUp}</button>
    <div class="crs_sticky__head">${header_mobile}</div>
    <a href="https://riverside.fm/start" class="crs_cta">Try Riverside for Free</a>
  </div>`;

export const rightSide = (header: string, list: string) => `
  <div class="crs_rightside">
    <div class="crs_rightside__head">${svg.logo}</div>
    <h3>${header}</h3>
    <ul>${list}</ul>
    <a href="https://riverside.fm/start" class="crs_cta">Try Riverside for Free</a>
  </div>`;