/**
 * 时钟显示
 * Created by Administrator on 2017/3/28 0028.
 * source from siwuxie095
 */
const canvas = document.getElementById('ClockElement')
const context = canvas.getContext('2d')
const height = context.canvas.height
const width = context.canvas.width
const r = width / 2
const rem = width / 200

//时钟背景
function drawBackground() {
  context.save()
  context.translate(r, r)
  context.beginPath()
  context.lineWidth = 8 * rem
  context.strokeStyle = '#000'
  context.arc(0, 0, r - 5 * rem, 0, 2 * Math.PI, false)
  context.stroke()
  context.closePath()
  //遍历小时数
  const houseNumble = [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 1, 2]

  let rad
  let x
  let y

  houseNumble.forEach(function(number, i) {
    context.textAlign = 'center'
    context.textBaseline = 'middle'
    context.font = 18 * rem + 'px Arial'
    rad = ((2 * Math.PI) / 12) * i
    x = Math.cos(rad) * (r - 30 * rem)
    y = Math.sin(rad) * (r - 30 * rem)
    context.fillText(number, x, y)
  })
  //定义刻度
  for (let i = 0; i < 60; i++) {
    rad = ((2 * Math.PI) / 60) * i
    x = Math.cos(rad) * (r - 18 * rem)
    y = Math.sin(rad) * (r - 18 * rem)
    context.beginPath()
    if (i % 5 == 0) {
      context.fillStyle = '#000'
      context.arc(x, y, 2 * rem, 0, 2 * Math.PI)
    } else {
      context.fillStyle = '#ccc'
      context.arc(x, y, 2 * rem, 0, 2 * Math.PI)
    }

    context.fill()
    context.closePath()
  }
}
//定义时针
function drawHour(hour, minute) {
  context.save()
  context.beginPath()
  context.lineWidth = 6 * rem
  context.lineCap = 'round'
  const rad = ((2 * Math.PI) / 12) * hour
  const mrad = ((2 * Math.PI) / 12 / 60) * minute
  context.rotate(rad + mrad)
  context.moveTo(0, 10 * rem)
  context.lineTo(0, -r / 2)
  context.stroke()
  context.restore()
}
//定义分针
function drawMinute(minute) {
  context.save()
  context.beginPath()
  context.lineWidth = 3 * rem
  context.lineCap = 'round'
  const rad = ((2 * Math.PI) / 60) * minute
  context.rotate(rad)
  context.moveTo(0, 15 * rem)
  context.lineTo(0, -r + 34)
  context.stroke()
  context.restore()
}
//定义秒钟
function drawSecond(second) {
  context.save()
  context.beginPath()
  context.lineWidth = 2 * rem
  context.lineCap = 'round'
  context.fillStyle = 'red'
  const rad = ((2 * Math.PI) / 60) * second
  context.rotate(rad)
  context.moveTo(-2, 20)
  context.lineTo(2, 20)
  context.lineTo(1, -r + 18)
  context.lineTo(-1, -r + 18)
  context.fill()
  context.restore()
}
//画中心点
function drawDot() {
  context.beginPath()
  context.fillStyle = '#fff'
  context.arc(0, 0, 4 * rem, 0, 2 * Math.PI, false)
  context.fill()
}
//时间函数，让时钟根据当前时间跳动
function Draw() {
  context.clearRect(0, 0, width, height)
  const time = new Date()
  const hour = time.getHours()
  const minute = time.getMinutes()
  const second = time.getSeconds()
  drawBackground()
  drawHour(hour, minute)
  drawMinute(minute)
  drawSecond(second)
  drawDot()
  context.restore()
}

export function startClock() {
  Draw()
  setInterval(Draw, 1000)
}
