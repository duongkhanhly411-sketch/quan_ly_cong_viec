document.addEventListener("DOMContentLoaded", function() {
    const notiBtn = document.getElementById("noti-btn");
    const notiDropdown = document.getElementById("noti-dropdown");
    
    const profileBtn = document.getElementById("profile-btn");
    const profileDropdown = document.getElementById("profile-dropdown");

    // Bật/tắt menu thông báo
    notiBtn.addEventListener("click", function(e) {
        e.stopPropagation(); // Ngăn sự kiện click lan ra ngoài
        notiDropdown.classList.toggle("show");
        profileDropdown.classList.remove("show"); // Đóng menu profile nếu đang mở
    });

    // Bật/tắt menu profile
    profileBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle("show");
        notiDropdown.classList.remove("show"); // Đóng menu thông báo nếu đang mở
    });

    // Đóng các dropdown khi click ra ngoài vùng trống của trang
    document.addEventListener("click", function(e) {
        if (!notiDropdown.contains(e.target) && e.target !== notiBtn) {
            notiDropdown.classList.remove("show");
        }
        if (!profileDropdown.contains(e.target) && e.target !== profileBtn) {
            profileDropdown.classList.remove("show");
        }
    });
});
