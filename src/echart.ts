export const setupEchart = () => {

  const myChart = echarts.init(document.getElementById('echarts'), null, {
    renderer: 'svg',
    useDirtyRect: false
  });

  myChart.setOption({
    tooltip: {
      trigger: '',
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
        data: [1,2,3,4,5,6],
        type: 'bar',
        showBackground: true,
        backgroundStyle: {
          color: 'rgba(180, 180, 180, 0.2)'
        }
      }
    ]
  });
  window.addEventListener('resize', myChart.resize);
};
