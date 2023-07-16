export function isMobile() {
  let res = false;
  if (document.documentElement.clientWidth < 576) {
    res = true;
  }

  return res;
}
