const hour = document.querySelector('.hour');
const minute = document.querySelector('.minutes');
const second = document.querySelector('.seconds');
const date = document.querySelector('.date');
const dateOptions = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

const setValue = value => {
  return value.toString().length === 1 
    ? '0' + value
    : value.toString();
}

const setTime = () => {
  const current = new Date();

  date.innerHTML = current.toLocaleDateString('pl', dateOptions);

  hour.innerHTML = setValue(current.getHours());
  minute.innerHTML = setValue(current.getMinutes());
  second.innerHTML = setValue(current.getSeconds());
};

setTime();
setInterval(setTime, 1000);
