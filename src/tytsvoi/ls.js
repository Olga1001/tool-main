(function ($) {
    // prettier-ignore
    var widgetMetadata = {"account_id":"d936765c-0e5f-4c8a-ab41-a281d1c428e4","widget_id":"test11","sm_pages":[{"name":"Facebook","url":""},{"name":"Instagram","url":""},{"name":"Viber","url":""},{"name":"Olx","url":""},{"name":"Telegram","url":""}],"color":"#222222","pop_up_text":"Ми тут!","widget_name":"test11","button_position":"right","button_has_text":true};
  
    function addParameters() {
      const result = widgetMetadata?.sm_pages.find(
        (el) => el.name === "Telegram"
      );
  
      if (!result || !result?.url) return;
  
      const pathname = location.pathname.slice(1).split(".")[0];
      if (!pathname) return;
  
      result.url += `?start=${pathname}`;
    }
  
    const icons = {
      facebook: `<svg
      viewBox="0 0 50 50"
      width="33"
      height="33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_36_1665)">
        <path
          d="M0 23.1479C0 30.4312 3.63333 36.9292 9.31458 41.1729V50L17.8271 45.3292C20.0979 45.9562 22.5042 46.2979 24.9979 46.2979C38.8042 46.2979 49.9979 35.9354 49.9979 23.15C50 10.3646 38.8062 0 25 0C11.1937 0 0 10.3625 0 23.1479ZM22.3625 16.6646L28.8833 23.4542L41.1479 16.6646L27.4812 31.1687L21.1167 24.3812L8.69375 31.1708L22.3625 16.6646Z"
          fill="#2196F3"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_36_1665">
          <rect width="50" height="50" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>`,
      instagram: `<svg
      viewBox="0 0 50 47"
      width="33"
      height="33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_36_1651)">
        <path
          d="M3.12489 3.17515C-0.804281 6.98432 -0.000113845 11.0307 -0.000113845 23.3235C-0.000113845 33.5318 -1.90845 43.7654 8.07905 46.1746C11.1978 46.9232 38.8311 46.9232 41.9457 46.1707C46.1041 45.1693 49.4874 42.0213 49.9499 36.5321C50.0145 35.766 50.0145 10.8946 49.9478 10.1129C49.4561 4.26599 45.5999 0.896265 40.5186 0.213765C39.3541 0.0562647 39.1207 0.00959796 33.1457 -0.000124253C11.952 0.00959796 7.30614 -0.871236 3.12489 3.17515Z"
          fill="url(#paint0_linear_36_1651)"
        ></path>
        <path
          d="M24.9956 6.10349C17.431 6.10349 10.2477 5.47543 7.50394 12.0477C6.37061 14.7621 6.53519 18.2874 6.53519 23.3352C6.53519 27.7646 6.38311 31.9277 7.50394 34.6207C10.2414 41.1968 17.4831 40.5668 24.9914 40.5668C32.2352 40.5668 39.7039 41.2707 42.481 34.6207C43.6164 31.879 43.4498 28.4063 43.4498 23.3352C43.4498 16.6035 43.8477 12.2577 40.3498 8.99488C36.8081 5.68932 32.0185 6.10349 24.9873 6.10349H24.9956ZM23.3414 9.20877C39.1206 9.18543 41.1289 7.54821 40.0206 30.2924C39.6269 38.3366 33.0644 37.4538 24.9977 37.4538C10.2894 37.4538 9.86644 37.061 9.86644 23.3274C9.86644 9.43432 11.0331 9.21655 23.3414 9.20488V9.20877ZM34.8498 12.069C33.6269 12.069 32.6352 12.9946 32.6352 14.136C32.6352 15.2774 33.6269 16.2029 34.8498 16.2029C36.0727 16.2029 37.0644 15.2774 37.0644 14.136C37.0644 12.9946 36.0727 12.069 34.8498 12.069ZM24.9956 14.486C19.7602 14.486 15.5164 18.4488 15.5164 23.3352C15.5164 28.2215 19.7602 32.1824 24.9956 32.1824C30.231 32.1824 34.4727 28.2215 34.4727 23.3352C34.4727 18.4488 30.231 14.486 24.9956 14.486ZM24.9956 17.5913C33.131 17.5913 33.1414 29.079 24.9956 29.079C16.8623 29.079 16.8498 17.5913 24.9956 17.5913Z"
          fill="white"
        ></path>
      </g>
      <defs>
        <linearGradient
          id="paint0_linear_36_1651"
          x1="3.22076"
          y1="43.6859"
          x2="46.9213"
          y2="3.16195"
          gradientUnits="userSpaceOnUse"
        >
          <stop stop-color="#FFDD55"></stop>
          <stop offset="0.5" stop-color="#FF543E"></stop>
          <stop offset="1" stop-color="#C837AB"></stop>
        </linearGradient>
        <clipPath id="clip0_36_1651">
          <rect width="50" height="46.6667" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>`,
      viber: `<svg
      viewBox="0 0 50 50"
      width="33"
      height="33"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clip-path="url(#clip0_36_1687)">
        <path
          d="M48.2395 28.9437C49.7312 16.3875 47.5228 8.46041 43.5395 4.87499L43.5416 4.87291C37.1124 -1.25001 15.3999 -2.15626 7.70826 5.14791C4.25409 8.72082 3.03742 13.9646 2.90409 20.4562C2.77075 26.95 2.61242 39.1146 13.9478 42.4146H13.9583L13.9478 47.4542C13.9478 47.4542 13.8708 49.4958 15.1749 49.9062C16.6666 50.3896 17.3416 49.4417 21.9812 43.9C29.7395 44.5729 35.6978 43.0312 36.3749 42.8062C37.9416 42.2812 46.8062 41.1083 48.2395 28.9437ZM22.7458 40.3542C22.7458 40.3542 17.8353 46.4771 16.3083 48.0667C15.8083 48.5833 15.2603 48.5354 15.2687 47.5104C15.2687 46.8375 15.3062 39.1437 15.3062 39.1437C5.69575 36.3896 6.26242 26.0312 6.36659 20.6125C6.47075 15.1917 7.46242 10.7521 10.3874 7.76249C17.1353 1.43541 36.1708 2.84999 41.0208 7.40832C46.9499 12.6646 44.8395 27.5146 44.852 28.0208C43.6333 38.175 36.4499 38.8187 35.1291 39.2583C34.5645 39.4458 29.3249 40.7937 22.7458 40.3542Z"
          fill="#8E24AA"
        ></path>
        <path
          d="M25.4624 8.95209C24.6603 8.95209 24.6603 10.2021 25.4624 10.2125C31.6853 10.2604 36.8103 14.5979 36.8666 22.5542C36.8666 23.3938 38.0957 23.3833 38.0853 22.5438C38.0187 13.9708 32.4207 9 25.4624 8.95209Z"
          fill="#8E24AA"
        ></path>
        <path
          d="M33.6476 21.2354C33.6289 22.0646 34.856 22.1041 34.8664 21.2646C34.9685 16.5375 32.0539 12.6437 26.5768 12.2333C25.7747 12.175 25.6914 13.4354 26.4914 13.4937C31.2414 13.8542 33.7435 17.0958 33.6476 21.2354Z"
          fill="#8E24AA"
        ></path>
        <path
          d="M32.3353 26.6125C31.3061 26.0166 30.2582 26.3875 29.8249 26.9729L28.9186 28.1458C28.4582 28.7416 27.5978 28.6625 27.5978 28.6625C21.3186 27.0021 19.6395 20.4312 19.6395 20.4312C19.6395 20.4312 19.5624 19.5416 20.1374 19.0646L21.2707 18.1271C21.8374 17.6771 22.1957 16.5937 21.6186 15.5291C20.077 12.7437 19.0415 11.7833 18.5145 11.0458C17.9603 10.3521 17.127 10.1958 16.2603 10.6646H16.2415C14.4395 11.7187 12.4665 13.6916 13.0978 15.7229C14.1749 17.8646 16.154 24.6916 22.4624 29.85C25.427 32.2896 30.1186 34.7896 32.1103 35.3666L32.129 35.3958C34.0915 36.05 35.9999 34 37.0186 32.1437V32.1291C37.4707 31.2312 37.3207 30.3812 36.6603 29.825C35.4895 28.6833 33.7228 27.4229 32.3353 26.6125Z"
          fill="#8E24AA"
        ></path>
        <path
          d="M27.4353 16.8833C29.4374 17 30.4082 18.0458 30.5124 20.1937C30.5499 21.0333 31.7686 20.975 31.7311 20.1354C31.5978 17.3312 30.1353 15.7687 27.502 15.6229C26.6999 15.575 26.6249 16.8354 27.4353 16.8833Z"
          fill="#8E24AA"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_36_1687">
          <rect width="50" height="50" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>`,
      olx: `<svg
      id="Layer_1"
      width="33"
      height="33"
      data-name="Layer 1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 280 300"
    >
      <rect fill="#002f34" width="280" height="300"></rect>
      <path
        fill="#23e5db"
        d="M171.91,94.93V204.35H144.56V94.93Zm-82,9.1a45.6,45.6,0,1,1-45.6,45.6A45.61,45.61,0,0,1,89.87,104Zm110.5,18.25,8,8,8-8h19.34v19.34l-8,8,8,8V177H216.39l-8-8-8,8H181V157.64l8-8-8-8V122.28Zm-110.5,9.13a18.22,18.22,0,1,0,18.22,18.22A18.24,18.24,0,0,0,89.87,131.41Z"
      ></path>
    </svg>`,
      telegram: `<svg
      viewBox="0 0 50 50"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      width="33"
      height="33"
    >
      <g clip-path="url(#clip0_36_1639)">
        <path
          d="M25 50C38.8071 50 50 38.8071 50 25C50 11.1929 38.8071 0 25 0C11.1929 0 0 11.1929 0 25C0 38.8071 11.1929 50 25 50Z"
          fill="#039BE5"
        ></path>
        <path
          d="M11.4394 24.4583L35.5436 15.1646C36.6623 14.7604 37.6394 15.4375 37.2769 17.1292L37.279 17.1271L33.1748 36.4625C32.8706 37.8333 32.0561 38.1667 30.9165 37.5208L24.6665 32.9146L21.6519 35.8188C21.3186 36.1521 21.0373 36.4333 20.3915 36.4333L20.8352 30.0729L32.4186 19.6083C32.9227 19.1646 32.3061 18.9146 31.6415 19.3563L17.3269 28.3688L11.1561 26.4438C9.81648 26.0188 9.78731 25.1042 11.4394 24.4583Z"
          fill="white"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_36_1639">
          <rect width="50" height="50" fill="white"></rect>
        </clipPath>
      </defs>
    </svg>`,
    };
  
    function chatWidget({ widgetMetadata, myChatWidget, lang = "ua" } = {}) {
      if (
        typeof widgetMetadata === "undefined" ||
        typeof myChatWidget === "undefined"
      )
        return;
  
      Object.values(arguments[0]).forEach((arg) => {
        typeof arg === "function" && arg();
      });
  
      let chatStarted = false;
      let sessionId = null;
      const MESSAGE_BLOCK_WIDTH = 270;
      const WIDGET_SESSION_KEY = "my_chat_widget_session";
      const STORAGE_KEY = `mcbHistory_${location.hostname}`;
      const MANAGER_BTN_DISPLAY_TIME = 10000;
  
      const textSettings = {
        title: {
          en: "technical support",
          ru: "техническая поддержка",
          ua: "технiчна пiдтримка",
        },
        label: {
          en: "you",
          ru: "вы",
          ua: "ви",
        },
      };
  
      let isOpenChat = false;
      let positionChatWidget = "right";
      let btnColor = "blue";
      let socialLinks = [];
      let popUpText = "";
  
      if (typeof widgetMetadata !== "undefined") {
        widgetMetadata?.button_position &&
          (positionChatWidget = widgetMetadata?.button_position);
  
        widgetMetadata?.color && (btnColor = widgetMetadata?.color);
  
        widgetMetadata?.sm_pages && (socialLinks = widgetMetadata?.sm_pages);
  
        widgetMetadata?.pop_up_text &&
          (popUpText = `<div class="contact-a-manager is-hidden" style="background: ${btnColor}">${widgetMetadata?.pop_up_text}</div>`);
      } else {
        domain;
        return;
      }
  
      const headers = {
        "Content-Type": "application/json",
        Authorization: `${widgetMetadata.account_id}${myChatWidget.id}`,
      };
  
      var widgetBody = `
              <div class="flex flex-col space-y-1.5 pb-6">
                <h2 class="mcb-sender font-semibold text-lg tracking-tight capitalize">${
                  textSettings.title[lang]
                }</h2>
                <p class="text-sm text-[#6b7280] leading-3">Powered by <a href="https://mychatbot.app">MyChatBot</a></p>
              </div>
        ${createSocialLinks(socialLinks)}
              <div class="chat-messages-container-wrap">
                  <!-- Chat Container -->
                  <div id="chat-messages-container" class="pr-4 h-[454px] overflow-y-auto" style="min-width: 100%; max-height: inherit;">
                    <!-- Messages will be dynamically added here -->
                  </div>
                  <!-- Input box -->
                  <div class="form-container flex items-center pt-0" style="padding-top:2rem">
                    <form enctype="multipart/form-data" id="chat-form" class="flex items-center justify-center w-full space-x-2">
                      <textarea id="chat-input"
                        class="flex max-h-28 w-full rounded-md border border-[#e5e7eb] px-3 py-2 text-sm placeholder-[#6b7280] focus:!outline-0 focus:ring-2 focus:ring-[#9ca3af] disabled:cursor-not-allowed disabled:opacity-50 text-[#030712] bg-white"
                        placeholder="Type your message"
                        style="resize: none; min-height: 40px; height: 40px;"></textarea>
                      <div class="chat-input__buttons">
                          <!--<label class="chat-input__attach-file">
                              <input id="mcb-attachment" name="image" type="file" accept="image/png, image/gif, image/jpg, image/jpeg, ">    
                          </label>-->
                          <button class="inline-flex items-center justify-center rounded-md text-sm font-medium text-[#f9fafb] disabled:pointer-events-none disabled:opacity-50 bg-black hover:bg-[#111827E6] h-10 px-4 py-2" type="submit">
                            Send
                          </button>
                      </div>
                    </form>
                  </div>
                  <div class="mcb-notices"></div>
              </div>`;
  
      function createSocialLinks(items = []) {
        return items?.length
          ? `<ul class="flex justify-center gap-[10px] mb-5 social-links">${items
              .map(({ name, url }) => {
                return url
                  ? `<li><a href="${url}" target="_blank">${
                      icons[name.toLowerCase()]
                    }</a></li>`
                  : "";
              })
              .join("")}</ul>`
          : ``;
      }
  
      function hyphenateText(text, blockWidth) {
        const tempDiv = document.createElement("div");
        tempDiv.classList.add("hidden-text-element");
  
        document.body.appendChild(tempDiv);
  
        let result = "";
        let currentLine = "";
  
        const words = text.split(" ");
  
        words.forEach((word) => {
          tempDiv.innerHTML = currentLine + word;
  
          if (tempDiv.offsetWidth > blockWidth) {
            let subWord = "";
            for (let i = 0; i < word.length; i++) {
              subWord += word[i];
              tempDiv.innerHTML = currentLine + subWord + "&shy;";
  
              if (tempDiv.offsetWidth > blockWidth) {
                result += currentLine + subWord.slice(0, -1) + "&shy;";
                subWord = word[i];
                currentLine = "";
              }
            }
            currentLine += subWord + " ";
          } else {
            currentLine += word + " ";
          }
        });
  
        result += currentLine.trim();
        document.body.removeChild(tempDiv);
  
        return result;
      }
  
      function playSound() {
        const audio = new Audio('https://girls.tytsvoi.com/wp-content/uploads/2024/09/sound-message.mp3');
        console.log(audio);
        audio.play().catch(error => {
            console.error("Виникла помилка при відтворенні аудіо:", error);
        });
      }
    
      let intervalId = null;
  
      function waitAssistentMessage() {
        let start = setInterval(() => {
          if ($('.user-message').length && $('.my_chat_bot').css('display') == 'none') {
            if ($('.user-message').last().next().length !== 0) {
              clearInterval(start);
              clearInterval(intervalId);
  
              console.log('message-count active');
  
              $('.message-count').addClass('active');
              playSound();
            }
          } else {
              clearInterval(start);
            clearInterval(intervalId);
            console.log('clearInterval intervalId');
          }
        }, 2000)
      }
  
      // Function to initialize the chat widget UI
      function initChatWidgetUI() {
        // Chat toggle button
        // possible fill: #6c47ff;
        var toggleChatBtn = $("<button>", {
          class: `fixed bottom-4 ${positionChatWidget}-4 inline-flex items-center justify-center text-sm font-medium disabled:pointer-events-none disabled:opacity-50 rounded-full w-13 h-13 hover:opacity-80 m-0 cursor-pointer bg-none p-0 normal-case leading-5 hover:text-white`,
          style: "transition: 0.2s; z-index:10000;",
          type: "button",
          "aria-haspopup": "dialog",
          "aria-expanded": "false",
          "data-state": "closed",
          "data-position": positionChatWidget,
          html: `<div class="message-count gelatine">1</div><svg xmlns="http://www.w3.org/2000/svg" width="50" height="50" viewBox="190 200 390 366"><defs><style>.cls-1 {fill: ${btnColor};}</style></defs><g id="mychatbotlogo" data-name="mychatbot logo"><path class="cls-1" d="M388.03,188.72c-105.9,0-191.74,85.84-191.74,191.74s85.84,191.74,191.74,191.74,191.74-85.84,191.74-191.74-85.85-191.74-191.74-191.74Zm128.9,317.34h-128.9c-71.19,0-128.9-57.71-128.9-128.9s57.71-128.9,128.9-128.9,128.9,57.71,128.9,128.9c0,38.26-16.68,72.61-43.15,96.21l43.15,32.69Z"/><path class="cls-1" d="M312.7,305.14h75.32c41.6,0,75.32,33.72,75.32,75.32s-33.72,75.32-75.32,75.32-75.32-33.72-75.32-75.32c0-22.36,9.75-42.43,25.22-56.22l-25.22-19.1Z"/></g></svg>${popUpText}`,
        });
  
        // Chat widget container
        var chatWidget = $("<div>", {
          class: `my_chat_bot fixed bottom-[calc(4rem+1.5rem)] ${positionChatWidget}-0 ml-4 mr-4 bg-white p-6 rounded-lg border border-[#e5e7eb] w-[440px]`,
          style:
            "box-shadow: 0 0 #0000, 0 0 #0000, 0 1px 2px 0 rgb(0 0 0 / 0.05); display: none; z-index: 10000; max-width:90%;",
        }).html(widgetBody);
        chatWidget.append(`<svg width="40" height="40" class="absolute right-[20px] top-[20px] cursor-pointer close-widget" viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M22.6066 21.3934C22.2161 21.0029 21.5829 21.0029 21.1924 21.3934C20.8019 21.7839 20.8019 22.4171 21.1924 22.8076L22.6066 21.3934ZM40.9914 42.6066C41.3819 42.9971 42.0151 42.9971 42.4056 42.6066C42.7961 42.2161 42.7961 41.5829 42.4056 41.1924L40.9914 42.6066ZM21.1924 41.1924C20.8019 41.5829 20.8019 42.2161 21.1924 42.6066C21.5829 42.9971 22.2161 42.9971 22.6066 42.6066L21.1924 41.1924ZM42.4056 22.8076C42.7961 22.4171 42.7961 21.7839 42.4056 21.3934C42.0151 21.0029 41.3819 21.0029 40.9914 21.3934L42.4056 22.8076ZM21.1924 22.8076L40.9914 42.6066L42.4056 41.1924L22.6066 21.3934L21.1924 22.8076ZM22.6066 42.6066L42.4056 22.8076L40.9914 21.3934L21.1924 41.1924L22.6066 42.6066Z" fill="black"/>
        <circle cx="32" cy="32" r="19" stroke="black" stroke-width="2"/>
        </svg>
        `);
        // Append toggle button and chat widget to body
        $("body").append(toggleChatBtn, chatWidget);
  
        //get history and update chat
        let history = localStorage.getItem(STORAGE_KEY);
        if (history) {
          chatStarted = true;
          $("#chat-messages-container").html(history);
        }
  
        function toggleWidget() {
          if (!chatStarted) {
            // getAGreetingFromAI();
          }
          //hide the "manager" button
          isOpenChat = true;
          $(".contact-a-manager").addClass("is-hidden");
          $('.message-count').removeClass('active');
  
          var isClosed = $(this).attr("data-state") === "closed";
          $(this).attr("data-state", isClosed ? "open" : "closed");
          chatWidget.toggle();
          chatScrollDown();
  
          // Start polling for messages when the chat widget is first opened
          if (isClosed) {
            pollForMessages();
          } else {
            waitAssistentMessage()
          }
        }
  
        $(".close-widget").on("click", toggleWidget);
  
        // Code to handle toggle button click...
        toggleChatBtn.on("click", toggleWidget);
  
        //show image selected
        chatWidget.find("input[name=image]").on("change", function (e) {
          let currentElement = $(this);
          let noticesContainer = $(".mcb-notices");
  
          if (currentElement.get(0).files.length) {
            processAttachedImage(currentElement);
          } else {
            currentElement.parent().removeClass("imageSelected");
            noticesContainer.html("");
          }
        });
  
        // Initialize chat functionalities
        initSendFunction(chatWidget);
      }
  
      function processAttachedImage(currentElement) {
        let currentFile = currentElement.get(0).files[0];
        let noticesContainer = $(".mcb-notices");
        let sizeLimit = 1000000 * 10;
        if (currentFile.size > sizeLimit) {
          noticesContainer.html("Please upload file less than 10MB. Thanks!");
          currentElement.val("");
  
          return;
        }
        noticesContainer.html(
          '<p style="text-align: left; padding-left: 2px;">File is attached (<a href="#" class="mcb-remove-attachment">Remove</a>)</p>'
        );
        currentElement.parent().addClass("imageSelected");
      }
  
      $(document).on("click", ".mcb-remove-attachment", function (e) {
        e.preventDefault();
        let currentAttachmentInput = $("#mcb-attachment");
        if (!currentAttachmentInput.length) return;
  
        currentAttachmentInput.val("").trigger("change");
      });
  
      function initSendFunction(chatWidget) {
        let sendMessageBtn = chatWidget.find("button"); // Assuming there's only one button
  
        sendMessageBtn.on("click", function (e) {
          e.preventDefault();
          sendMessage();
        });
      }
  
      function pollForMessages() {
        clearInterval(intervalId);
        pollForMessagesAjax();
        intervalId = setInterval(pollForMessagesAjax, 20000);
      }
  
      function pollForMessagesAjax() {
        let data = {
          action: "my_chat_fetch_replies",
          session: sessionId,
          mcb_nonce: myChatWidget.nonce,
          widget_id: myChatWidget.id,
        };
        if (!chatStarted) {
          chatStarted = true;
          data.first_init = 1;
        }
  
        $.ajax({
          url: myChatWidget.ajax_url,
          method: "POST",
          data,
          success: function ({ data }) {
            const { message } = data;
  
            if (!message) return;
  
            insertMessageToChat(aiMessageHtml(message));
            saveChatHistory();
          },
          error: function (res) {
            console.log("Error: " + res.error + res.status);
            // TODO: handle error
          },
        });
      }
  
      function updateUserMessages() {
        const children = $("#chat-messages-container").children();
        if (children.length === 0) return;
  
        const lastChildren = children.slice(-1);
  
        if (lastChildren.hasClass("user-message")) {
          lastChildren.addClass("mb-0");
          lastChildren.find(".avatar").addClass("opacity-0");
        }
      }
  
      function sendMessage() {
        let chatWidget = $(".my_chat_bot");
        let messageInput = chatWidget.find("textarea");
        let message = messageInput.val().trim();
        let noticesContainer = $(".mcb-notices");
  
        if (message.length == 0) return;
  
        let formData = new FormData();
  
        formData.append("message", message);
        formData.append("action", "my_chat_send");
        formData.append("widget_id", myChatWidget.id);
        formData.append("session", sessionId);
        formData.append("mcb_nonce", myChatWidget.nonce);
        formData.append("wp_context", location.href);
  
        // AJAX call to send the message to mychatbot API
        $.ajax({
          method: "POST",
          url: myChatWidget.ajax_url,
          contentType: false,
          processData: false,
          data: formData,
          success: async function ({ status }) {
            if (status !== 1) return;
  
            updateUserMessages();
            insertMessageToChat(userMessageHtml(message));
            saveChatHistory();
            clearForm();
  
            await showTypingMessage(3000);
            await removeTypingMessage(45000);
          },
          error: function (xhr, status, error) {
            // Handle error
            if (error) {
              noticesContainer.append(`<div class="error">Error: ${error}</div>`);
            }
          },
        });
      }
  
      function showTypingMessage(time = 0) {
        if (isTyping()) return Promise.resolve();
  
        $(".chat-messages-container-wrap").addClass("typing");
        const formContainer = document.querySelector(
          ".my_chat_bot .form-container"
        );
        var typingMessageHtml = `
                  <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1 assistant_typing">
                      <p>Assistant typing
                             <div class="dots">
                            <span></span>
                            <span></span>
                            <span></span>
                          </div>
                      </p>
                  </div>
              `;
        $(formContainer).append(typingMessageHtml);
        return new Promise((res) => {
          setTimeout(() => res(), time);
        });
      }
  
      function isTyping() {
        return $(".chat-messages-container-wrap").hasClass("typing");
      }
  
      function removeTypingMessage(timeout = 0) {
        return new Promise((res) => {
          setTimeout(function () {
            $(".form-container .assistant_typing").remove();
            $(".chat-messages-container-wrap").removeClass("typing");
            res();
          }, timeout);
        });
      }
  
      function saveChatHistory() {
        localStorage.setItem(STORAGE_KEY, $("#chat-messages-container").html());
      }
  
      function userMessageHtml(message, isImage = false, isError = false) {
        if (!message) return "";
  
        if (isImage) {
          message =
            '<img src="' + message + '" style="width: 70px; height: auto;">';
        }
  
        if (isError) {
          message = '<span class="error_message">' + message + "</span>";
        }
  
        var messageHtml = `
                  <div class="flex gap-3 my-4 text-gray-600 text-sm flex-1 user-message">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8 avatar">
                          <div class="rounded-full bg-gray-100 border p-1">
                              <svg stroke="none" fill="black" stroke-width="0" viewBox="0 0 16 16" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0Zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4Zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10Z">
                                  </path>
                              </svg>
                          </div>
                      </span>
                      <div class="leading-relaxed">
                          <span class="block font-bold text-gray-700 capitalize user-label">${
                            textSettings.label[lang]
                          }</span>
                          <p class="user-text">${hyphenateText(
                            message,
                            MESSAGE_BLOCK_WIDTH
                          )}</p> 
                      </div>
                  </div>
              `;
  
        return messageHtml;
      }
  
      function aiMessageHtml(message) {
        if (!message) return "";
  
        var html = `
        <div>
          <div class="flex flex-row-reverse gap-3 my-4 text-gray-600 text-sm flex-1">
                      <span class="relative flex shrink-0 overflow-hidden rounded-full w-8 h-8">
                          <div class="rounded-full bg-gray-100 border p-1"><svg stroke="none" fill="black" stroke-width="1.5" viewBox="0 0 24 24" aria-hidden="true" height="20" width="20" xmlns="http://www.w3.org/2000/svg">
                              <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904L9 18.75l-.813-2.846a4.5 4.5 0 00-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 003.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 003.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 00-3.09 3.09zM18.259 8.715L18 9.75l-.259-1.035a3.375 3.375 0 00-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 002.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 002.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 00-2.456 2.456zM16.894 20.567L16.5 21.75l-.394-1.183a2.25 2.25 0 00-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 001.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 001.423 1.423l1.183.394-1.183.394a2.25 2.25 0 00-1.423 1.423z"></path>
                          </svg></div>
                      </span>
                      <p style="text-align: left; margin-left: 42px;" class="leading-relaxed text-right"><span class="block font-bold text-gray-700 text-right">${
                        myChatWidget.assistantName
                      }</span></p>
                      </div>
                      <div class="ai-message">${marked.parse(
                        message.replace(/&shy;/g, "")
                      )}</div>
                  </div>
              `;
  
        return html;
      }
  
      function insertMessageToChat(html) {
        if (!html) return false;
  
        var chatContainer = document.querySelector("#chat-messages-container");
        $(chatContainer).append(html);
        chatScrollDown();
      }
  
      function chatScrollDown() {
        var chatContainer = document.querySelector("#chat-messages-container");
        setTimeout(function () {
          chatContainer.scrollTo({
            left: 0,
            top: chatContainer.scrollHeight,
            behavior: "smooth",
          });
        }, 150);
      }
  
      function clearForm() {
        $(".my_chat_bot form input, .my_chat_bot form textarea").val("");
        $("#chat-input").css("height", "40px");
        $(".chat-input__attach-file").removeClass("imageSelected");
        $("#mcb-attachment").val("").trigger("change");
      }
  
      function generateRandomId(length) {
        const characters =
          "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        let result = "";
        const charactersLength = characters.length;
  
        for (let i = 0; i < length; i++) {
          result += characters.charAt(
            Math.floor(Math.random() * charactersLength)
          );
        }
  
        return result;
      }
  
      function initCookie() {
        const id = $.cookie(WIDGET_SESSION_KEY);
        if (!id) {
          sessionId = generateRandomId(10);
          $.cookie(WIDGET_SESSION_KEY, sessionId);
        } else {
          sessionId = id;
        }
      }
  
      $(document).ready(function () {
        initChatWidgetUI();
        initCookie();
  
        let textarea = $("#chat-input");
        if (!textarea.length) return;
  
        textarea.on("keydown", function (e) {
          if (e.shiftKey && e.which === 13) {
            e.preventDefault(); // Prevent default behavior (new line) hidden
            sendMessage();
          }
        });
  
        $(window).on("load", () => {
          setTimeout(() => {
            if (!isOpenChat) $(".contact-a-manager").removeClass("is-hidden");
          }, MANAGER_BTN_DISPLAY_TIME);
        });
      });
    }
  
    const lang = "ua";
    chatWidget({
      widgetMetadata,
      myChatWidget,
      addParameters,
      lang,
    });
  })(jQuery);
  