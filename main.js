var clockElement = document.getElementById('clock');
var dateElement = document.getElementById('date');

// 在字符串开头补齐字符
function padStart(str, length, char) {
    while (str.length < length) {
        str = char + str;
    }
    return str;
}

function updateClock() {
    var now = new Date();
    var hours = padStart(String(now.getHours()), 2, '0');
    var minutes = padStart(String(now.getMinutes()), 2, '0');

    clockElement.textContent = hours + ':' + minutes;
}
function updateDate() {
    var now = new Date();
    var month = now.getMonth() + 1;     // 月份从0开始，所以需要加1
    var day = now.getDate();
    var weekDays = ['日', '一', '二', '三', '四', '五', '六'];
    var weekDay = weekDays[now.getDay()];

    var formattedDate = month + ' 月 ' + day + ' 日 周' + weekDay;
    dateElement.innerText = formattedDate;
}


setInterval(updateClock, 1000);         // 每秒更新一次时钟
setInterval(updateDate, 60 * 1000);     // 每分钟更新一次日期
window.onload = updateClock;            // 页面加载完成后立即更新一次时钟
updateDate();                           // 初始化显示

// 背景图片
var images = [
    'url("start.png")', // 开学大合影
    'url("sport.png")', // 秋季运动会
    'url("train.png")', // 军训掠影
]
var colors = [
    '#38577B',          // 深蓝
    '#703434',          // 深红
    '#556558',          // 深绿
]

var currentIndex = 0;   // 当前图片和颜色的索引

// 切换背景图片和文字颜色
function changeBackground() {
    currentIndex %= images.length;
    document.body.style.backgroundImage = images[currentIndex];
    clockElement.style.color = colors[currentIndex];
    dateElement.style.color = colors[currentIndex];
    currentIndex++;
}

// 每5秒切换一次背景图片
setInterval(changeBackground, 5000);

// 初始化背景图片
changeBackground();


// 备用函数，在无法自动更新时调用
function change() {
    changeBackground();
    updateClock();
    updateDate();
}