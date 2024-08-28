function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.createElement('div');
    overlay.className = 'overlay';

    // Toggle sidebar visibility
    sidebar.classList.toggle('active');

    // If sidebar is active, add overlay
    if (sidebar.classList.contains('active')) {
        document.body.appendChild(overlay);
        overlay.classList.add('active');
        overlay.addEventListener('click', toggleSidebar); // Close sidebar when overlay is clicked
    } else {
        document.querySelector('.overlay').remove();
    }
}


