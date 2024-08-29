document.getElementById("attach_button").addEventListener("click", function () {
  document.getElementById("file_input").click()
})

document.querySelectorAll(".conversation").forEach((conversation) => {
  conversation.addEventListener("click", function () {
    document.querySelector(".main_content_default").style.display = "none"

    // Show the main content
    document.querySelector(".main-content").style.display = "flex"

    if (window.innerWidth <= 768) {
      document.querySelector(".sidebar").style.display = "none"
    }
  })
})

document.getElementById("close").addEventListener("click", function () {
  document.querySelector(".main-content").style.display = "none"
  document.querySelector(".main_content_default").style.display = "flex"

  if (window.innerWidth <= 768) {
    document.querySelector(".main_content_default").style.display = "none"
    document.querySelector(".sidebar").style.display = "block"
  }
})

window.addEventListener("resize", function () {
    const mainContent = document.querySelector(".main-content");
    const mainContentDefault = document.querySelector(".main_content_default");
    const sidebar = document.querySelector(".sidebar");
  
    if (window.innerWidth <= 768) {
      if (getComputedStyle(mainContent).display === "flex") {
        sidebar.style.display = "none"; // Hide sidebar
      } else {
        sidebar.style.display = "block"; // Show sidebar
        mainContentDefault.style.display = "none"; 
      }
    } else {
      sidebar.style.display = "block"; // Always show sidebar on larger screens
  
      if (getComputedStyle(mainContent).display === "flex") {
        mainContentDefault.style.display = "none";
      } else {
        mainContentDefault.style.display = "flex"; // Show default main content
      }
    }
  });
  
