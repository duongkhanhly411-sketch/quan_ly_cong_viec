document.addEventListener("DOMContentLoaded", function() {
    // --- 1. XỬ LÝ DROPDOWN HEADER ---
    const notiBtn = document.getElementById("noti-btn");
    const notiDropdown = document.getElementById("noti-dropdown");
    const profileBtn = document.getElementById("profile-btn");
    const profileDropdown = document.getElementById("profile-dropdown");

    notiBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        notiDropdown.classList.toggle("show");
        profileDropdown.classList.remove("show");
    });

    profileBtn.addEventListener("click", function(e) {
        e.stopPropagation();
        profileDropdown.classList.toggle("show");
        notiDropdown.classList.remove("show");
    });

    document.addEventListener("click", function(e) {
        if (!notiDropdown.contains(e.target) && e.target !== notiBtn) notiDropdown.classList.remove("show");
        if (!profileDropdown.contains(e.target) && e.target !== profileBtn) profileDropdown.classList.remove("show");
    });


    // --- 2. XỬ LÝ CHUYỂN TRANG (TAB NAVIGATOR) ---
    const navOverview = document.getElementById("nav-overview");
    const navTask = document.getElementById("nav-task");
    
    const viewOverview = document.getElementById("view-overview");
    const viewTask = document.getElementById("view-task");

    // Khi click vào menu "Overview"
    navOverview.addEventListener("click", function(e) {
        e.preventDefault(); // Ngăn trình duyệt nhảy trang
        
        // Đổi màu menu active
        navOverview.classList.add("active");
        navTask.classList.remove("active");
        
        // Hiện nội dung Overview, Ẩn nội dung Task
        viewOverview.classList.add("active-view");
        viewTask.classList.remove("active-view");
    });

    // Khi click vào menu "Task"
    navTask.addEventListener("click", function(e) {
        e.preventDefault();
        
        // Đổi màu menu active
        navTask.classList.add("active");
        navOverview.classList.remove("active");
        
        // Hiện nội dung Task, Ẩn nội dung Overview
        viewTask.classList.add("active-view");
        viewOverview.classList.remove("active-view");
    });
});
