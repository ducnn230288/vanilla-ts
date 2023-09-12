export function setupMenuMobile(collectionElementsByClass: HTMLCollectionOf<Element>) {
  Array.from(collectionElementsByClass).forEach((el) => el.addEventListener('click', () => {
    toggleClassList(document.getElementById('hamburger'), ['body-menu-opened']);
    toggleClassList(document.getElementById('bg-menu'), ['opacity-0', '-right-full', 'opacity-50', 'right-0']);
    toggleClassList(document.getElementById('menu'), ['-right-80', 'right-0']);
    toggleClassList(document.getElementById('list-menu'), ['top-0', 'opacity-100', 'top-10', 'opacity-0']);
  }));
  const toggleClassList = (element: HTMLElement| null, classList: string[]) => element && classList.forEach((e) => element.classList.toggle(e))
}
