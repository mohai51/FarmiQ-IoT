
    // Auto Mode Toggle
const toggle = document.getElementById('autoToggle');
toggle.addEventListener('click', () => {
  toggle.classList.toggle('active');
});

    // Counter Animation
    let temp = document.getElementById('temp');
    let hum = document.getElementById('hum');
    let mos = document.getElementById('mos');

    let tempVal = 30;
    let humVal = 70;
    let mosVal = 56;

    let t = 0, h = 0, m = 0;

    let interval = setInterval(() => {
      if (t < tempVal) {
        t++;
        temp.innerText = `${t}°C`;
      }
      if (h < humVal) {
        h++;
        hum.innerText = `${h}%`;
      }
      if (m < mosVal) {
        m++;
        mos.innerText = `${m}%`;
      }

      if (t === tempVal && h === humVal && m === mosVal) {
        clearInterval(interval);
      }
    },20);
// Fan switch control
const fanOn = document.getElementById('fanOn');
const fanOff = document.getElementById('fanOff');
fanOn.addEventListener('click', () => {
  fanOn.classList.add('active');
  fanOff.classList.remove('active');
});
fanOff.addEventListener('click', () => {
  fanOff.classList.add('active');
  fanOn.classList.remove('active');
});

// Light switch control
const lightOn = document.getElementById('lightOn');
const lightOff = document.getElementById('lightOff');
lightOn.addEventListener('click', () => {
  lightOn.classList.add('active');
  lightOff.classList.remove('active');
});
lightOff.addEventListener('click', () => {
  lightOff.classList.add('active');
  lightOn.classList.remove('active');
});

