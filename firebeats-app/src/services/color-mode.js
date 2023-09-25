import { changeTo } from "./time-service";

export let setColorTo;

if (changeTo < 1) {
  setColorTo = 1;
} else {
  setColorTo = 0;
}

export function ToogleColorMode() {
  if (setColorTo < 1) {
    setColorTo++;
  } else {
    setColorTo--;
  }

  console.log(setColorTo)
}

//0 = DARK    1 = LIGHT
