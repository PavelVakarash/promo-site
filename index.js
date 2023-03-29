// Получаем доступ к элементу canvas на странице
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

// Задаем размеры холста
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Создаем объект изображения лягушки
const frogImg = new Image();
frogImg.src = "png/frog-1.png"

// Создаем объект лягушки
const frog = {
  x: canvas.width / 2, // координата x центра лягушки
  y: canvas.height / 2, // координата y центра лягушки
  radius:150,
  width:100,
  height:100,
  velocity: { // скорость лягушки по осям x и y
    x: 2,
    y: 2
  }
};

// Функция отрисовки лягушки на холсте
function drawFrog() {
    ctx.drawImage(frogImg, frog.x - frog.width / 2, frog.y - frog.height / 2, frog.width, frog.height);
}

// Функция обновления положения лягушки
function updateFrog() {
  // Если лягушка достигает границ холста, меняем ее направление движения
 /* if (frog.x + frog.radius > canvas.width || frog.x - frog.radius < 0) {
    frog.velocity.x = -frog.velocity.x;
  }
  if (frog.y + frog.radius > canvas.height || frog.y - frog.radius < 0) {
    frog.velocity.y = -frog.velocity.y;
  } */

    if (frog.x + frog.width / 2 > canvas.width || frog.x - frog.width / 2 < 0) {
    frog.velocity.x = -frog.velocity.x;
}
if (frog.y + frog.height / 2 > canvas.height || frog.y - frog.height / 2 < 0) {
  frog.velocity.y = -frog.velocity.y; 
} 
  // Обновляем координаты лягушки
  frog.x += frog.velocity.x;
  frog.y += frog.velocity.y;
}
// Функция анимации
function animate() {
  // Очищаем холст перед каждой отрисовкой
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  
  // Обновляем положение лягушки
  updateFrog();
  
  // Отрисовываем лягушку на холсте
  drawFrog();
  
  // Запускаем функцию анимации снова после завершения текущего кадра
  requestAnimationFrame(animate);
}

// Запускаем анимацию
animate();
