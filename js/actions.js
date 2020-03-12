import { BUTTON_PRESSED } from "./constants";

export function buttonPressed(payload) {
  return { type: BUTTON_PRESSED, payload }
};