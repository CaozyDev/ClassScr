function updateClock() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    //const seconds = String(now.getSeconds()).padStart(2, '0');

    document.getElementById('clock').textContent = `${hours}:${minutes}`;
}

// 每秒更新一次时钟
setInterval(updateClock, 1000);

// 页面加载完成后立即更新一次时钟
window.onload = updateClock;