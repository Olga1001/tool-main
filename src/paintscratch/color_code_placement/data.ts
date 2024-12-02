const dir: string = 'https://conversionratestore.github.io/projects/paintscratch/img/'

const svg = {
  zoom: /*html */ `
  <svg class="crs_icon_zoom" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <path d="M11.1152 19.2304C15.5972 19.2304 19.2304 15.5972 19.2304 11.1152C19.2304 6.63322 15.5972 3 11.1152 3C6.63322 3 3 6.63322 3 11.1152C3 15.5972 6.63322 19.2304 11.1152 19.2304Z" stroke="black" stroke-width="2" stroke-linejoin="round"/>
    <path d="M11.1153 8.25104V13.9794M8.25879 11.1229L13.9795 11.1152M16.9497 16.9496L21.0001 21" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
  </svg>
  `,
  play: `
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
    <g clip-path="url(#clip0_7453_5316)">
      <path fill-rule="evenodd" clip-rule="evenodd" d="M12 4C12.855 4 13.732 4.022 14.582 4.058L15.586 4.106L16.547 4.163L17.447 4.224L18.269 4.288C19.161 4.35628 20.0004 4.73695 20.6395 5.36304C21.2786 5.98913 21.6764 6.82054 21.763 7.711L21.803 8.136L21.878 9.046C21.948 9.989 22 11.017 22 12C22 12.983 21.948 14.011 21.878 14.954L21.803 15.864C21.79 16.01 21.777 16.151 21.763 16.289C21.6764 17.1796 21.2784 18.0112 20.6391 18.6373C19.9999 19.2634 19.1602 19.6439 18.268 19.712L17.448 19.775L16.548 19.837L15.586 19.894L14.582 19.942C13.7218 19.9794 12.861 19.9987 12 20C11.139 19.9987 10.2782 19.9794 9.418 19.942L8.414 19.894L7.453 19.837L6.553 19.775L5.731 19.712C4.83895 19.6437 3.99955 19.2631 3.36047 18.637C2.72139 18.0109 2.32357 17.1795 2.237 16.289L2.197 15.864L2.122 14.954C2.04554 13.9711 2.00484 12.9858 2 12C2 11.017 2.052 9.989 2.122 9.046L2.197 8.136C2.21 7.99 2.223 7.849 2.237 7.711C2.32354 6.8207 2.72122 5.98942 3.36009 5.36334C3.99897 4.73727 4.83813 4.3565 5.73 4.288L6.551 4.224L7.451 4.163L8.413 4.106L9.417 4.058C10.2775 4.02063 11.1387 4.0013 12 4ZM10 9.575V14.425C10 14.887 10.5 15.175 10.9 14.945L15.1 12.52C15.1914 12.4674 15.2673 12.3916 15.3201 12.3003C15.3729 12.209 15.4007 12.1055 15.4007 12C15.4007 11.8945 15.3729 11.791 15.3201 11.6997C15.2673 11.6084 15.1914 11.5326 15.1 11.48L10.9 9.056C10.8088 9.00332 10.7053 8.9756 10.5999 8.97562C10.4945 8.97563 10.3911 9.00339 10.2998 9.0561C10.2086 9.1088 10.1329 9.1846 10.0802 9.27587C10.0276 9.36713 9.99993 9.47065 10 9.576V9.575Z" fill="#0000EE"/>
    </g>
    <defs>
      <clipPath id="clip0_7453_5316">
        <rect width="24" height="24" fill="white"/>
      </clipPath>
    </defs>
  </svg>`,
  close: `
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
    <path d="M14.0375 1.3061C13.6432 0.911714 13.0061 0.911714 12.6117 1.3061L7.66667 6.241L2.72165 1.29599C2.32727 0.901601 1.69018 0.901601 1.29579 1.29599C0.901403 1.69038 0.901403 2.32746 1.29579 2.72185L6.2408 7.66687L1.29579 12.6119C0.901403 13.0063 0.901403 13.6434 1.29579 14.0377C1.69018 14.4321 2.32727 14.4321 2.72165 14.0377L7.66667 9.09273L12.6117 14.0377C13.0061 14.4321 13.6432 14.4321 14.0375 14.0377C14.4319 13.6434 14.4319 13.0063 14.0375 12.6119L9.09253 7.66687L14.0375 2.72185C14.4218 2.33758 14.4218 1.69038 14.0375 1.3061Z" fill="white"/>
  </svg>`
}

const data = {
  'Acura': ['ford_toyota_acura_lincoln_mercury.png','Acura-Paint-Code.gif'],
  'Alfa-Romeo': ['mazda.png','Hyundai-Paint-Code.gif'],
  'American-Coach': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Aston-Martin': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Audi': ['audi.png','Audi-Paint-Code.png'],
  'Bentley': ['mazda.png','Hyundai-Paint-Code.gif'],
  'BMW': ['bmw.png','BMW-Paint-Code.gif','BMW-Paint-Code-2.png'],
  'BMW-Motorcycles': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Buick': ['buick.png','Buick-Paint-Code.png'],
  'Cadillac': ['gmc_cadillac.png','Cadillac-Paint-Code.png'],
  'Chevrolet': ['chevy.png','Chevy-Paint-Code.jpg'],
  'Chrysler': ['jeep_dodge_chrysler.png','Chrysler-Paint-Code.png'],
  'Citroen': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Coachmen-RV': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Daewoo': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Dodge': ['jeep_dodge_chrysler.png','Dodge-Paint-Code.png'],
  'Duckworth': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Ferrari': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Fiat': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Fleetwood': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Ford': ['ford_toyota_acura_lincoln_mercury.png','Ford-Paint-Code.gif'],
  'Forest-River': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Fountain': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Freightliner': ['mazda.png','Hyundai-Paint-Code.gif'],
  'GMC': ['gmc_cadillac.png','GMC-Paint-Code.png','Pontiac-Paint-Code.png'],
  'Harley-Davidson': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Honda': ['honda.png','Honda-Paint-Code.gif'],
  'Honda-Motorcycle': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Hyundai': ['hyundai.png','Hyundai-Paint-Code.gif'],
  'Infiniti': ['infiniti.png','Infiniti-Paint-Code.png'],
  'International': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Isata': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Itasca': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Jaguar': ['jaguar.png','Jaguar-Paint-Code.gif'],
  'Jeep': ['jeep_dodge_chrysler.png','Jeep-Paint-Code.png'],
  'Kia': ['kia.png','Kia-Paint-Code.gif'],
  'Lamborghini': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Land-Rover': ['land-rover.png','Land-Rover-Paint-Code.png'],
  'Lexus': ['lexus.png','Lexus-Paint-Code.gif'],
  'Lincoln': ['ford_toyota_acura_lincoln_mercury.png','Lincoln-Paint-Code.gif'],
  'Lotus': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Lund': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Maserati': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Mazda': ['mazda.png','Mazda-Paint-Code.gif'],
  'Mercedes-Benz': ['mercedes.png','Mercedes-Benz-Paint-Code.png','Mercedes-Benz-Paint-Code-2.png'],
  'Mini': ['mini.png','Mini-Paint-Code.png',''],
  'Mitsubishi': ['mitsubishi.png','Mitsubishi-Paint-Code.gif'],
  'Newmar': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Nissan': ['nissan.png','Nissan-Paint-Code.png'],
  'Opel': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Peterbilt': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Peugeot': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Porsche': ['porsche.png','Porsche-Paint-Code.png'],
  'Renault': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Rolls-Royce': ['mazda.png','Hyundai-Paint-Code.gif'],
  'RV-Other': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Saab': ['saab.png','Hyundai-Paint-Code.gif'],
  'Scion': ['scion.png','Scion-Paint-Code.png'],
  'SEAT': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Smart': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Subaru': ['subaru.png','Subaru-Paint-Code.gif'],
  'Suzuki': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Suzuki-Motorcycle': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Tesla': ['tesla.png','Tesla-Paint-Code.png'],
  'Toyota': ['ford_toyota_acura_lincoln_mercury.png','Toyota-Paint-Code.gif'],
  'Volkswagen': ['VW.png','Volkswagen-Paint-Code.gif'],
  'Volvo': ['volvo.png','Volvo-Paint-Code.png'],
  'Winnebago': ['mazda.png','Hyundai-Paint-Code.gif'],
  'Yamaha': ['mazda.png','Hyundai-Paint-Code.gif']
}

const dataVideo = {
  'Toyota': '/aJhKZ8l5YRk?si=QY48QFGYDJAXPSCn',
  'Chevrolet': '/aJhKZ8l5YRk?si=2BSk4WFSkWyXlSXd',
  'Volkswagen': '/XF4WvErVRoY?si=DflJ6t0zyB_9COKc',
  'Subaru': '/mkoxl-NA31I?si=Uj_yWuIr3XpC0XMy',
  'Audi': '/XF4WvErVRoY?si=DflJ6t0zyB_9COKc',
  'GMC': '/aJhKZ8l5YRk?si=2BSk4WFSkWyXlSXd',
  'Cadillac': '/aJhKZ8l5YRk?si=2BSk4WFSkWyXlSXd',
  'Pontiac': '/aJhKZ8l5YRk?si=2BSk4WFSkWyXlSXd'
}

export { dir, svg, data, dataVideo }
