import { toggleClassList } from './menu-mobile';

export const setupHover = (myClass: string, arChildClass: string[], arClassToggle: string[]) => {
  [...document.getElementsByClassName(myClass)].forEach((el) => {
    arChildClass.forEach((childClass) => {
      el.addEventListener('mouseover', (e) => {
        e.preventDefault()
        toggleClassList(el.querySelector(`.${childClass}`), arClassToggle);
      });
      el.addEventListener('mouseout', (e) => {
        e.preventDefault()
        toggleClassList(el.querySelector(`.${childClass}`), arClassToggle);
      });
    });
  });
};
