
var d = new Date();

document.addEventListener('DOMContentLoaded', () =>
  requestAnimationFrame(updateTime)
)
var week = new Array('일', '월', '화', '수', '목', '금', '토');

function updateTime() {
  document.documentElement.style.setProperty('--timer-day', "'" + moment().format(week[d.getDay()]) + "'");
  document.documentElement.style.setProperty('--timer-hours', "'" + moment().format("k") + "'");
  document.documentElement.style.setProperty('--timer-minutes', "'" + moment().format("mm") + "'");
  document.documentElement.style.setProperty('--timer-seconds', "'" + moment().format("ss") + "'");
  requestAnimationFrame(updateTime);
}