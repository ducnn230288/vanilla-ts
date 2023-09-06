import './index.less'
import './css/style.css'
// vanilla-lazyload 17
new LazyLoad({ callback_error: (el: any) => (el.src = 'https://via.placeholder.com/440x560/?text=Error') });

// gsap 3
import { animationSlide } from "./gasp.ts";

// swiper 10
new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 0,
  slidesPerView: 1,
  effect: 'fade',
  pagination: {
    el: ".swiper-pagination",
  },
  navigation: {
    nextEl: "#home-right",
    prevEl: "#home-left",
  },
  on: {
    init: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
    slideChangeTransitionEnd: (el: any) => animationSlide(el.slides[el.activeIndex], 0),
  },
});

// glightbox 3
GLightbox({});

// echarts 5
const myChart = echarts.init(document.getElementById('echarts'), null, {
  renderer: 'svg',
  useDirtyRect: false
});
myChart.setOption({
  tooltip: {
    trigger: 'axis',
  },
  grid: {
    top: '40px',
    left: '90px',
    bottom: '30px',
    right: '50px',
  },
  legend: { show: false },
  xAxis: {
    type: 'category',
    boundaryGap: true,
    axisLabel: {
      show: true,
    },
    axisLine: {
      show: true,
      lineStyle: {
        color: '#000000',
      },
    },
    splitLine: {
      show: false,
    },
    axisTick: {
      show: true,
      lineStyle: {
        color: '#000000',
      },
    },
    data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
  },
  yAxis: {
    show: true,
    type: 'value',
    axisLine: {
      show: true,
      lineStyle: {
        color: '#000000',
      },
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: '#e5e7eb',
      },
    },
  },
  series: [
    {
      data: [120, 200, 150, 80, 70, 110, 130],
      type: 'bar',
      showBackground: true,
      backgroundStyle: {
        color: 'rgba(180, 180, 180, 0.2)'
      }
    }
  ]
});
window.addEventListener('resize', myChart.resize);

// inputmask 5
Inputmask().mask(document.querySelectorAll("input"));


// sweetalert2 11
import { Message } from './message.ts'
document.getElementById('success')!.addEventListener('click', () => Message.success({ text: 'Success' }))
document.getElementById('warning')!.addEventListener('click', () => Message.warning({ text: 'Warning' }))
document.getElementById('confirm')!.addEventListener('click', () => Message.confirm({ text: 'Confirm' }))
document.getElementById('error')!.addEventListener('click', () => Message.error({ text: 'Error' }))


import { setupCounter } from './counter.ts'
setupCounter(document.querySelector<HTMLButtonElement>('#counter')!)
