document.addEventListener('DOMContentLoaded', () => {
    const searchInput = document.getElementById('stockSearch');
    const searchButton = document.getElementById('searchBtn');

    function handleSearch() {
        if (!searchInput) return;
        const query = searchInput.value.trim().toUpperCase();
        if (query === "") {
            alert("กรุณากรอกชื่อหุ้นที่ต้องการค้นหา");
            return;
        }
        window.location.href = `stock-detail.html?symbol=${query}`;
    }

    if (searchButton) {
        searchButton.addEventListener('click', handleSearch);
    }
    if (searchInput) {
        searchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') handleSearch();
        });
    }

    // ฟังก์ชันเสริมสำหรับจำลองคลิกที่การ์ดหุ้นในหน้าแรกเพื่อไปหน้าดีเทล
    const stockCards = document.querySelectorAll('.stock-card');
    stockCards.forEach(card => {
        card.addEventListener('click', () => {
            const symbol = card.querySelector('.stock-symbol').innerText;
            window.location.href = `stock-detail.html?symbol=${symbol}`;
        });
    });
});