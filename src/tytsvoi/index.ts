import { startLog, $$el, $el } from '../libraries'

// @ts-ignore
import soundFile from './livechat-129007.mp3';

startLog({ name: '', dev: 'Olha Zhuravel' })

function playSound() {
  const audio = new Audio(soundFile);
  console.log(audio)
  audio.play().catch(error => {
      console.error("Виникла помилка при відтворенні аудіо:", error);
  });
}
playSound()

class ChangeChat {

  constructor() {
    this.init()
  }

  init() {

    document.body.insertAdjacentHTML('afterbegin', `
      <style>
       .ai-message ol li {
          box-shadow: 0 0 5px 0px rgba(0, 0, 0, 0.1);
          display: block;
          padding: 10px;
          border-radius: 4px;
          margin: 8px 0;
      }
      </style>`)

      function playSound() {
        const audio = new Audio('../assets/sound-message.mp3');
        console.log(audio);
        audio.play().catch(error => {
            console.error("Error audio:", error);
        });
      }

      function waitAssistentMessage() {
        let start = setInterval(() => {
          if ($('.user-message').length) {
            if ($('.user-message').last().next().length !== 0) {
              clearInterval(start);
              clearInterval(intervalId);
  
              console.log('message-count active');
  
              $('.message-count').addClass('active');
              playSound();
            }
          } else {
            clearInterval(intervalId);
            console.log('clearInterval intervalId');
          }
        }, 2000)
      }
  }

}

// new ChangeChat();
