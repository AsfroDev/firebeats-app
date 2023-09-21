const hours = new Date().getHours();
const isDayTime = hours > 6 && hours < 20;
let t = "";

if (isDayTime === true) {
  t = 1;
} else {
  t = 0;
}

export const changeTo = t;

//0 = DARK    1 = LIGHT
