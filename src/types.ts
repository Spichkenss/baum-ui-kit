export type WithAfterAndBeforeElements = {
  before?: React.ReactNode;
  after?: React.ReactNode;
}

export type KeyboardKey =
  | "Backspace" | "Tab" | "Enter" | "Shift" | "Control" | "Alt" | "Pause"
  | "CapsLock" | "Escape" | "Space" | "PageUp" | "PageDown" | "End" | "Home"
  | "ArrowLeft" | "ArrowUp" | "ArrowRight" | "ArrowDown"
  | "PrintScreen" | "Insert" | "Delete"
  | "0" | "1" | "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9"
  | "a" | "b" | "c" | "d" | "e" | "f" | "g" | "h" | "i" | "j" | "k" | "l"
  | "m" | "n" | "o" | "p" | "q" | "r" | "s" | "t" | "u" | "v" | "w" | "x"
  | "y" | "z"
  | "F1" | "F2" | "F3" | "F4" | "F5" | "F6" | "F7" | "F8" | "F9" | "F10"
  | "F11" | "F12"
  | "NumLock" | "ScrollLock"
  | "AudioVolumeMute" | "AudioVolumeDown" | "AudioVolumeUp"
  | "MediaTrackNext" | "MediaTrackPrevious" | "MediaStop" | "MediaPlayPause"
  | "Meta"
  | "ContextMenu"
  | "Numpad0" | "Numpad1" | "Numpad2" | "Numpad3" | "Numpad4" | "Numpad5"
  | "Numpad6" | "Numpad7" | "Numpad8" | "Numpad9" | "NumpadAdd"
  | "NumpadSubtract" | "NumpadMultiply" | "NumpadDivide" | "NumpadDecimal";


export type Breakpoint =
  | "2xs"
  | "xs"
  | "sm"
  | "md"
  | "lg"
  | "xl"
  | "2xl"
  | "3xl"
  | "4xl";
