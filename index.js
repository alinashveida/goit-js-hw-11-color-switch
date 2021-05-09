const colors = [
    '#FFFFFF',
    '#2196F3',
    '#4CAF50',
    '#FF9800',
    '#009688',
    '#795548',
  ];

  const randomIntegerFromInterval = (min, max) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  const startBtn = document.querySelector('button[data-action="start"]');
  console.log(startBtn);

  const stopBtn = document.querySelector('button[data-action="stop"]');
  console.log(stopBtn);

  startBtn.addEventListener('click', changeColors);

  let isActive = false

  function changeColors(){
      if(isActive){
          return
      }
      isActive = true;
      timer = setInterval(() =>{
          document.body.style.background = `${colors[randomIntegerFromInterval(0, colors.length)]}`;

      },1000)

  };

  stopBtn.addEventListener('click', () => {
    clearInterval(timer);
    isActive = false;
  });
