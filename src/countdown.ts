export const setupCountdown = (elDealCountdown: HTMLCollectionOf<Element>) => {
  const dealCountdownAr = [...elDealCountdown];

  dealCountdownAr.forEach((item) => {
    const check = setInterval(() => {
      const dataTimeStr: string | undefined = (item as HTMLElement).dataset.time;
      const now: number = new Date().getTime();
      const endTime: number = new Date(`${dataTimeStr} 00:00:00`).getTime();
      const timeLeft: number = endTime - now;

      const days = String(Math.floor(timeLeft / 86400000));
      const hours = String(Math.floor(timeLeft / 3600000) % 24);
      const minutes = String(Math.floor(timeLeft / 60000) % 60);
      const seconds = String(Math.floor(timeLeft / 1000) % 60);

      const elCountdownDay = item.querySelector('.countdown-day') as Element;
      const elCountdownHours = item.querySelector('.countdown-hours') as Element;
      const elCountdownMinutes = item.querySelector('.countdown-minutes') as Element;
      const elCountdownSeconds = item.querySelector('.countdown-seconds') as Element;

      // elCountdownDay.addEventListener('mouseover', () => {
        // elCountdownDay.classList.toggle('-translate-y-[10px]');
      // });

      elCountdownDay.innerHTML = days;
      elCountdownHours.innerHTML = hours;
      elCountdownMinutes.innerHTML = minutes;
      elCountdownSeconds.innerHTML = seconds;

      if (!timeLeft) {
        clearInterval(check);
      }
    }, 1000);
  });
};
