export const dir: string = 'https://conversionratestore.github.io/projects/paintscratch/img/'

export const svg = {
  arrowRight: /*html */ `
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
    <path d="M0 11.4102V0.410156L9 5.91016L0 11.4102Z" fill="#333333"/>
  </svg>`,
  arrowDown: `
  <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
    <mask id="path-1-inside-1_5500_2430" fill="white">
      <path d="M0 0H34V34H0V0Z"/>
    </mask>
    <path d="M0 0H34V34H0V0Z" fill="#D9D9D9"/>
    <path d="M1 34V0H-1V34H1Z" fill="#767676" mask="url(#path-1-inside-1_5500_2430)"/>
    <path d="M12 13L23 13L17.5 22L12 13Z" fill="#333333"/>
  </svg>`,
  basket: `
  <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 15 15" fill="none">
    <path d="M2.51189 0.0507812C2.79971 0.0507812 3.06136 0.296875 3.11369 0.597656L3.16602 0.925781H14.1555C14.705 0.925781 15.1237 1.5 14.9667 2.04688L13.5537 7.29688C13.4491 7.67969 13.1351 7.92578 12.7426 7.92578H4.44813L4.68362 9.23828H12.7688C13.1089 9.23828 13.3967 9.53906 13.3967 9.89453C13.3967 10.2773 13.1089 10.5508 12.7688 10.5508H4.16031C3.87249 10.5508 3.61084 10.332 3.55851 10.0312L1.98858 1.36328H0.627972C0.261655 1.36328 0 1.08984 0 0.707031C0 0.351562 0.261655 0.0507812 0.627972 0.0507812H2.51189ZM3.34918 12.7383C3.34918 12.0273 3.89866 11.4258 4.60513 11.4258C5.28543 11.4258 5.86107 12.0273 5.86107 12.7383C5.86107 13.4766 5.28543 14.0508 4.60513 14.0508C3.89866 14.0508 3.34918 13.4766 3.34918 12.7383ZM13.3967 12.7383C13.3967 13.4766 12.8211 14.0508 12.1408 14.0508C11.4343 14.0508 10.8848 13.4766 10.8848 12.7383C10.8848 12.0273 11.4343 11.4258 12.1408 11.4258C12.8211 11.4258 13.3967 12.0273 13.3967 12.7383Z" fill="#0000EE"/>
  </svg>`,
  arrowLeft: `
  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="12" viewBox="0 0 9 12" fill="none">
    <path d="M9 0.5L9 11.5L4.80825e-07 6L9 0.5Z" fill="#333333"/>
  </svg>`
}

export const dataSelects = {
  'Type of damage?': {
    'Scratches, Chips, or Peeling Paint': 'Scratches, rock chips, scuffs, or paint peeling off in strips.',
    'Rust': 'Rusty metal spots or paint with visible rust bubbles.',
    'Dents': 'Metal needs repair due to a hit.',
    'Bare Metal or Plastic': 'Original paint has chipped away completely.',
    'Bumper Damage': 'Tears, cracks, and holes.'
  },
  'Size & extent of damage': {
    'Small': 'A few small chips or scratches up to the size of an eraser on the end of a pencil.',
    'Medium': 'Several small chips or scratches up to the size of a dime.',
    'Large': 'Numerous large damaged areas bigger than the size of a dime.',
    'Extensive': 'Large areas have deep scratches, chips, or peeling paint on multiple panels.'
  },
  'Material type': {
    'Metal': `Parts like the car's body, doors, hood, and trunk, which have metal underneath the paint.`,
    'Non-metal': 'Parts like bumpers, lower panels, trim, and mirrors, which have plastic or composite materials under the paint.'
  }
}

export const dataQuiz = {
  'Small': {
    0: ['ppu/ppt', 'ppc', 'rc', ['alt']],
    1: ['mar', 'AF4405', ['sp']],
    2: ['FIB157', 'DYN907T', 'GLE1200'],
    3: ['ppp'],
    4: ['SEM68422']
  },
  'Medium': {
    0: ['tu2/tt2', 'tc2', 'rc', ['alt', 'wag']],
    1: ['mar', 'AF4405', ['sp']],
    2: ['FIB157', 'DYN907T', 'GLE1200'],
    3: ['tp2'],
    4: ['SEM68422']
  },
  'Large': {
    0: ['spu/spt', 'spc', 'rc', ['sp', 'AF4405', 'alt', 'wag', 'MMM6334', 'T6363', 'sphold']],
    1: ['mar', 'AF4405'],
    2: ['FIB157', 'DYN907T', 'GLE1200'],
    3: ['spp'],
    4: ['SEM68422'],
    'Non-metal': ['sem77723']
  },
  'Extensive': {
    0: ['ptu/ptt', 'ptc', 'ptp', 'AF4405', 'rc', ['sp', 'alt', 'wag', 'PRE267', 'T6363']],
    1: ['mar'],
    2: ['FIB157', 'DYN907T', 'GLE1200'],
    3: [],
    4: ['SEM68422'],
    'Non-metal': ['sem77723']
  }
}

export const qtyQuiz = {
  0: ['rc|4','alt|2', 'wag|2'],
  1: ['mar|2', 'AF4405|2', 'rc|4','alt|2', 'wag|2']
}

export const infoProduct = {
  'ppu': {
    '1/2 oz Paint Pen': 'Applies paint precisely to small chips or scratches without the mess of a brush.'
  },
  'ppt': {
    '1/2 oz. Tricoat Paint Pens (2 pens)': 'Applies paint precisely to small chips or scratches without the mess of a brush.'
  },
  'ppc': {
    '1/2 oz Clearcoat Paint Pen': 'To seal and protect the painted area, keeping it safe from the sun, moisture, and wear.'
  },
  'rc': {
    '2 oz Rubbing Compound': 'Smooths and polishes the repaired area, blending it with the rest of the paint.'
  },
  'alt': {
    '2 oz Acrylic Lacquer Thinner': 'Cleans up mistakes and keeps the paint pen working well.'
  },
  'mar': {
    '4 oz. Rust Away': 'Turns rust into a stable compound and prevents further corrosion, creating a good foundation for paint or body filler.'
  },
  'sp': {
    'Sanding Block': 'Provides a firm surface for sandpaper, making sanding easier and more effective.'
  },
  'AF4405': {
    'Sandpaper Pack': 'Smooths and prepares the surface for painting.'
  },
  'FIB157': {
    'Bondo® Body Filler  (1 quart)': 'Repairs dents, dings, holes, large rusted areas, and scratches.'
  },
  'DYN907T': {
    '4.5 oz. Spot Putty': 'Fills rough spots, minor imperfections, pinholes, and scratches, and dries smooth.'
  },
  'GLE1200': {
    'Three Plastic Spreaders': 'Ideal for spreading body filler and spot putty.'
  },
  'ppp': {
    '1/2 oz. Primer Paint Pen': 'Creates a smooth, even surface for better paint adhesion on unpainted areas.'
  },
  'SEM68422': {
    'Flexible Bumper Repair Kit': 'Repairs tears, cracks, and holes in rubber bumpers or parts with accurate and effective application.'
  },
  'tu2': {
    '2 oz. Paint Bottle': `Matches your car's color and covers up to 3 square feet.`
  },
  'tt2': {
    '2 oz. Tricoat Paint Bottles (2 bottles)': `Matches your car's color and covers up to 3 square feet.`
  },
  'tc2': {
    '2 oz Clearcoat Bottle': 'Seals and protects the painted area from sun, moisture, and wear.'
  },
  'wag': {
    '2 oz Wax and Grease Remover': 'Removes wax and grease before painting for better adhesion.'
  },
  'tp2': {
    '2 oz. Primer Bottle': 'Creates a smooth, even surface for better paint adhesion on unpainted areas.'
  },
  'ptu': {
    '16 oz. Basecoat Paint (One Pint)': `Matches your car's original color and covers about 20 square feet.`
  },
  'ptt': {
    '16 oz. Tricoat (2 Pint Containers)': `Matches your car's original color and covers about 20 square feet.`
  },
  'ptc': {
    '16 oz. Clearcoat (One Pint)': 'Seals and protects the painted area from sun, moisture, and wear.'
  },
  'ptp': {
    '16 oz. Primer (One Pint)': 'Prepares bare metal or plastic surfaces for painting and helps the paint stick better.'
  },
  'PRE267': {
    'Preval Spray System': 'Provides a professional finish without needing an air compressor.'
  },
  'T6363': {
    '12 oz. Blending Solvent': 'Blends the new clearcoat into the existing finish for a seamless look.'
  },
  'spp': {
    '12 oz. Primer Spray Can': 'Creates a smooth, even surface for better paint adhesion on unpainted areas.'
  },
  'sem77723': {
    '11.3 oz. SEM (or SAP) Adhesion Promoter (Spray Can)': 'Helps paint stick to vinyl, plastic, fiberglass, galvanized metal, chrome, aluminum, and glass.'
  },
  'spc': {
    '12 oz Clearcoat Spray Can': 'Seals and protects the painted area from sun, moisture, and wear.'
  },
  'MMM6334': {
    '3/4 Inch Masking Tape': 'Secures the areas around the painting site, providing sharp lines and preventing paint bleed'
  },
  'sphold': {
    'Spray can trigger sprayer': 'Turns a spray can into a professional sprayer for better control and a smooth coat.'
  },
  'spu': {
    '12 oz. Basecoat Spray Can': `Matches your car's original color and covers about 4 square feet.`
  },
  'spt': {
    '12 oz. Tricoat Spray Cans (2 cans)': `Matches your car's original color and covers about 4 square feet.`
  }
}

