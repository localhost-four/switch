//Let#1//
// Функция для добавления сообщения на страницу
function displayMessage(mess) {

  try {
      document.getElementsByTagName("title")[0].innerHTML = mess;
  } catch(n) {
      null;
  }

  var message = document.createElement('div');
  message.innerText = mess;
  message.style.position = 'fixed';
  message.style.top = '0';
  message.style.id = "ms";
  message.style.left = '50%';
  message.style.transform = 'translateX(-100%)';
  message.style.background = 'lightblue';
  message.style.color = 'white';
  message.style.padding = '10px';
  message.style.borderRadius = '5px';
  message.style.zIndex = '9998';
  message.style.transition = 'all 0.5s ease';
  
  document.body.appendChild(message);
  
  setTimeout(function() {
      message.style.top = '-100px';
      setTimeout(function() {
          message.remove();
      }, 500);
  }, 600);
  
  var messages = document.querySelectorAll('#ms');
  messages.forEach(function(msg, index) {
      msg.style.transform = 'translateX(' + (messages.length - index) * 450 + 'px)';
  });
}
  
displayMessage('Created by: staffuser');


setInterval(function(){
  if (cooki1 > 600) {
    const randomDelay = Math.floor(Math.random() * (8000 - 500 + 1)) + 4500; 
    setTimeout(() => { 
      const events = [
        { name: "Payment for water", amount: 300 },
        { name: "Payment for electricity", amount: 500 },
        { name: "Payment for housing", amount: 800 },
      ];

      const randomIndex = Math.floor(Math.random() * events.length);
      const event = events[randomIndex];
      setTimeout(() => {  displayMessage(event.name + ': -' + event.amount); }, 800);
      let currentBuld = parseFloat(cooki1) || 0;
      let newBuld = currentBuld - event.amount;
      cooki1 = newBuld;

    }, randomDelay);
  }
}, 500)


function end(messages, groupIndex) {
  // Проверка на валидность индекса группы
  if (groupIndex < 0 || groupIndex >= messages.length) {
      console.error('Error');
      return;
  }
  
  // Получаем случайное сообщение из выбранной группы
  const randomMessage = messages[groupIndex][Math.floor(Math.random() * messages[groupIndex].length)];

  // Создаем элементы модального окна
  const modalOverlay = document.createElement('div');
  modalOverlay.style.position = 'fixed';
  modalOverlay.style.top = '0';
  modalOverlay.style.left = '0';
  modalOverlay.style.width = '100%';
  modalOverlay.style.height = '100%';
  modalOverlay.style.backgroundColor = 'rgba(0, 0, 0, 0.7)';
  modalOverlay.style.display = 'flex';
  modalOverlay.style.alignItems = 'center';
  modalOverlay.style.justifyContent = 'center';


  const modalContent = document.createElement('div');
  modalContent.style.backgroundColor = 'white';
  modalContent.style.padding = '20px';
  modalContent.style.borderRadius = '5px';
  modalContent.style.textAlign = 'center';
  
  const messageElement = document.createElement('p');
  messageElement.innerText = randomMessage;
  messageElement.style.color = 'black';
  
  const rebootButton = document.createElement('button');
  rebootButton.innerText = 'Reboot';
  rebootButton.style.marginTop = '10px';
  
  rebootButton.addEventListener('click', function() {
    localStorage.setItem("buld", 0);
    document.body.removeChild(modalOverlay);
    window.location.reload(); 
  });
  
  modalContent.appendChild(messageElement);
  modalContent.appendChild(rebootButton);
  modalOverlay.appendChild(modalContent);
  document.body.appendChild(modalOverlay);

  // Закрытие модального окна при клике на оверлей
  modalOverlay.addEventListener('click', function(event) {
      if (event.target === modalOverlay) {
          document.body.removeChild(modalOverlay);
      }
  });
}

const messages = [
  ['You bankrupt', 'You gone down', 'Out of money'],
  ['You became rich', 'Riches everywhere', 'You won'],
  ['You have identified sanitary violations', 'There are too many workers', 'The neighbors complained about you']
];


//Cookies
let cookies1 = localStorage.getItem("buld");

  //Items
let items1 = localStorage.getItem("it");
let microwaves1 = localStorage.getItem("cats");
let bakers1 = localStorage.getItem("lamp");

//Variables#1//
var cookiTxt1 = document.getElementById("scoreTxt1");
var cooki1 = document.getElementById("switch");


var itemTxt1 = document.getElementById("itemTxt1");
var itemTxt2 = document.getElementById("itemTxt2");
var itemTxt3 = document.getElementById("itemTxt3");

var up1 = document.getElementById("msg1");
var up2 = document.getElementById("msg2");
var up3 = document.getElementById("msg3");

setInterval(function(){
  setTimeout(() => { add1();  }, 600);
}, 4500)


//Functions#1//
  //AddEventListener
let isEnded = true; // Флаг завершения
cooki1.addEventListener('click', e => {
  
  const intervalId = setInterval(function() {
    if (isEnded) {
      clearInterval(intervalId); // Очищаем интервал, если уже завершено    

      if ( cookies1 < 0) {
        end(messages, 0);

      } else {
        if ( items1 + microwaves1 + bakers1 > 150000000 ) {
          end(messages, 2);

        } else {
          if ( cookies1 > 150000000 ) {
            end(messages, 1);

          }
        }
      }
      isEnded = false;
      debugger;
      return;
    }
  }, 1500);

  for (let i = 0; i < bakers1 + 1; i++) {
    add1();
  }
})

  //3 main funcs
function add1(){
  cookies1++;
  cookiTxt1.innerHTML = "You have " + cookies1 + " bulbs 🔦";

}

function reset1(){
  localStorage.setItem("buld", cookies1);
  localStorage.setItem("cats", microwaves1);
  localStorage.setItem("lamp", bakers1);
  localStorage.setItem("it", items1);
  items1 = 0;
  microwaves1 = 0;
  bakers1 = 0;
  cookies1 = 0;
  cookiTxt1.innerHTML = "bulbs yummy ⬆";
  displayMessage('All data has been downloaded'); 
}

  //Items
function itemBuy1(){
  // Предполагаем, что cookies уже инициализированы как числа
  if (typeof cookies1 !== 'number' || typeof microwaves1 !== 'number') {
    microwaves1 = 0;
    return; // Прерываем выполнение, если переменные не числовые
  }

  let amount1 = 35 * (microwaves1+1);
  if(cookies1 >= amount1){
    
    ++microwaves1;
    cookies1 = cookies1 - amount1;
    if(cookies1 < 1){
      cookiTxt1.innerHTML = "No more bulbss now";
      itemTxt1.innerHTML = microwaves1 + " cats! 💕";
      item1();
    }
    if(cookies1 >= 1){
      cookiTxt1.innerHTML = "You have " + cookies1 + " bulbss! 👾";
      itemTxt1.innerHTML = microwaves1 + " cats! 💞";
      item1();
    }
    up1.innerHTML = amount1 + ' bulbss!';

  } else {
  up1.innerHTML = 35 * (microwaves1+1) + ' bulbss!';
  itemTxt1.innerHTML = microwaves1 + " cats! 💞";
  cookiTxt1.innerHTML = "Not enough light bulbss for the cat 🥪";
  }
 }

for (let i = 0; i < microwaves1; i++) {
  item1();
}

function item1(){
  setInterval(function(){
    ++cookies1;
    setTimeout(() => {  cookiTxt1.innerHTML = "You have " + cookies1 + " bulbs 🐾"; }, 600);
    
  }, 2500);
}

function itemBuy2(){
  // Предполагаем, что cookies уже инициализированы как числа
  if (typeof cookies1 !== 'number' || typeof bakers1 !== 'number') {
    bakers1 = 0;
    return; // Прерываем выполнение, если переменные не числовые
  }

  const amount2 = 75 * (bakers1+1);

  if(cookies1 >= amount2){
    
    ++bakers1;
    cookies1 = cookies1 - amount2;
    if(cookies1 < 1){
      cookiTxt1.innerHTML = "No more bulbs left.. 🍃";
      itemTxt2.innerHTML = bakers1 + " Lamp! 📂";
      item2();
    }
    if(cookies1 >= 1){
      cookiTxt1.innerHTML = "You have " + cookies1 + " bulbs ☕";
      itemTxt2.innerHTML = bakers1 + " Lamps! 📁";
      item2();
    }
    up2.innerHTML = amount2 + ' bulbss!';

  } else {
    up2.innerHTML = 75 * (bakers1+1) + ' bulbss!';
    itemTxt2.innerHTML = bakers1 + " Lamps! 📁";
    cookiTxt1.innerHTML = "Sorry! There's not enough bulbs 📋";
  }
}

for (let i = 0; i < bakers1; i++) {
  item2();
}

function item2(){
  setInterval(function(){
    cookies1 = cookies1 + 3;
    setTimeout(() => { cookiTxt1.innerHTML = "You have " + cookies1 + " bulbs 💡"; }, 600);
  }, 1500)
}


function itemBuy3(){

  // Предполагаем, что cookies1 и items1 уже инициализированы как числа
  if (typeof cookies1 !== 'number' || typeof items1 !== 'number') {
    items1 = 0;
    return; // Прерываем выполнение, если переменные не числовые
  }

  const amount2 = 90 * (items1 + 1);

  if (cookies1 >= amount2) {

    ++items1;
    cookies1 -= amount2;

    if (cookies1 < 1) {
      cookiTxt1.innerHTML = "No more bulbs left.. ⏰";
      itemTxt3.innerHTML = items1 + " Dogs! 👁‍🗨";
      item3();
    } else {
      cookiTxt1.innerHTML = "You have " + items1 + " bulbs 🔄";
      itemTxt3.innerHTML = items1 + " Dogs! 💬";
      item3();
    }

    up3.innerHTML = amount2 + ' bulbss!';

    const emojiList = ['Specialist updated!', 'Production under control!', 'We are watching you!'];
    setTimeout(function() { displayMessage(emojiList[Math.floor(Math.random() * emojiList.length)]);  }, 500);

  } else {
    up3.innerHTML = amount2 + ' bulbss!';
    itemTxt3.innerHTML = items1 + " Dogs! 💬";
    cookiTxt1.innerHTML = "Specialist demands more 💬";
  }

}

for (let i = 0; i < items1; i++) {
  item3();
  up3.innerHTML = 90 * (items1+1)
}

function item3(){
  setInterval(function(){
    setTimeout(() => { if(cookies1 >= 75 * (bakers1+1) ){ itemBuy1(); }  }, 800); 
    setTimeout(() => { if(cookies1 >= 35 * (microwaves1+1) ){ itemBuy2(); }  }, 600);
  }, 4500)
}





const sounds = [
  new Audio('sounds/on.wav'),
  new Audio('sounds/on.mp3'),
  new Audio('sounds/on2.wav'),
];

const animations = [
  'bounce',
  'flash',
  'pulse',
  'shakeX',
];

function toggleTheme() {
  setTimeout(function(){
    const isDark = document.body.classList.toggle('dark');
    if (isDark) {
        document.body.classList.add('dark');
        addAnimation();
    } else {
        document.body.classList.remove('dark');
        addAnimation();
        createFallingEmoji();
    }

    if (document.querySelector('.point').checked) {
      playSound(); 
    } 
  }, 250)
}

document.querySelector('.point').addEventListener("change", function() {
  setTimeout(function() { displayMessage('Sound accompaniment: ' + this.checked); }, 500);
});


function createFallingEmoji() {
  const emojiList = ['🎉', '😋', '🤳', '☕', '🔦', '📸', '🤔', '😴', '⏰'];
  const emoji = document.createElement('div');
  emoji.className = 'emoji';
  emoji.textContent = emojiList[Math.floor(Math.random() * emojiList.length)];
  emoji.style.left = `${Math.random() * window.innerWidth}px`;
  document.body.appendChild(emoji);

  setTimeout(() => {
      document.body.removeChild(emoji);
  }, 500);
}



function playSound() {
  const randomIndex = Math.floor(Math.random() * sounds.length);
  sounds[randomIndex].play();
}

function addAnimation() {
  // Получаем случайную анимацию из массива
  const randomAnimation = animations[Math.floor(Math.random() * animations.length)];
  const switchElement = document.getElementById('switch');
  
  // Генерируем случайную длительность от 1 до 6 секунд
  const randomDuration = Math.random() * 5 + 1; // Генерирует число от 1 до 6
  switchElement.style.animationDuration = `${randomDuration}s`; // Устанавливаем длительность анимации
  
  // Добавляем класс анимации
  switchElement.classList.add(randomAnimation);
  
  // Удаляем анимацию после её завершения
  switchElement.addEventListener('animationend', function () {
      switchElement.classList.remove(randomAnimation);
      switchElement.style.animationDuration = ''; // Сбрасываем длительность, если это нужно
  }, { once: true });
}


// Получаем текущий URL
var url = window.location.href;

// Добавляем разрешающий параметр к URL

let path = url.split("?=").pop();

if (path.length > 0 || path == window.location.host || path == window.location.hostname || path == window.location.origin || path == window.location.href) {
  null;
} else {
  try { new Audio(scr='cursor/show.wav').play(); } catch(n) { console.log(n); }
  // Выполняем определенные действия, если URL содержит "en"
  var style = document.createElement("style");//Создаём <style>
  style.innerHTML = path;//Делаем видимым нужные теги
  document.head.appendChild(style); //И крепим это добро к <head>  
}


window.addEventListener('popstate', function (event) {
  // пользователь открыл страницу
  document.body.style.display = "block";
  document.body.style.textAlign = "block";
});

var links = document.querySelectorAll('a[data-ajax]');

Array.from(links).forEach(function(link) {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    var url = this.getAttribute('href');
    var title = this.getAttribute('data-title');
    var state = { url: url, title: title };
      
    window.history.pushState(state, title, url);
      
    // Здесь можно обновить контент страницы без перезагрузки.
  });
});


try {
  let noscript = document.querySelector('noscript');

  // Создание блока
  var div = document.createElement('div');
  // import.meta.env.PROD  import.meta.env.DEV
  if (window.WebTransportDatagramDuplexStream) { 
    // Code for Development Mode 
    div.textContent = '<small>You are running this application in <b>Development</b> mode.</small>';
  } else { 
    // Code for Testing Mod
    div.textContent = '<small>You are running this application in <b>Testing</b> mode.</small>';
  }

  noscript.appendChild(div);
} catch (error) {
  null;
  // Expected output: ReferenceError: nonExistentFunction is not defined
  // (Note: the exact output may be browser-dependent)
}

let lastScrollTop = 0;


window.addEventListener('scroll', function() {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    if (scrollTop > lastScrollTop) {
        // Прокрутка вниз
        window.scrollBy(0, 1); // Скроллим вниз на 1 пиксель
    }

    lastScrollTop = scrollTop <= 0 ? 0 : scrollTop; // Для мобильных устройств
});


//запрещает перетаскивание и выделение

function no_text() {  
  return false
}

document.ondragstart = no_text;
document.onselectstart = no_text;
document.oncontextmenu = no_text;

window.history.forward();