function toggleSideBar() {
    let sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('close')
}

function setActivePage(clickedElement) {
    console.log("UPO");
    let allActiveItems = document.querySelectorAll("ul li");
    allActiveItems.forEach(li => li.classList.remove('active'));

    clickedElement.parentElement.classList.add("active")
}