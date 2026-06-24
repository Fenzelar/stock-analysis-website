document.addEventListener('DOMContentLoaded', () => {
    // ตรวจสอบ Parameter ชื่อหุ้นจาก URL เช่น stock-detail.html?symbol=AAPL
    const urlParams = new URLSearchParams(window.location.search);
    const stockSymbol = urlParams.get('symbol');

    if (stockSymbol) {
        document.getElementById('stockSymbolDisplay').innerText = stockSymbol.toUpperCase();
        document.getElementById('stockNameDisplay').innerText = `ข้อมูลและสถิติล่าสุดของบริษัท ${stockSymbol.toUpperCase()}`;
    }

    const watchBtn = document.getElementById('addWatchlistBtn');
    watchBtn.addEventListener('click', () => {
        alert(`เพิ่มหุ้นเข้าไปยังรายการเฝ้าดู (Watchlist) เรียบร้อยแล้ว!`);
        window.location.href = 'watchlist.html';
    });
});