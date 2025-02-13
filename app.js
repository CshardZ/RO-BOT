const SUN_FILLED_ICON = `<path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path></svg>`
const SUN_OUTLINE_ICON = `<path d="M12 18C8.68629 18 6 15.3137 6 12C6 8.68629 8.68629 6 12 6C15.3137 6 18 8.68629 18 12C18 15.3137 15.3137 18 12 18ZM12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16ZM11 1H13V4H11V1ZM11 20H13V23H11V20ZM3.51472 4.92893L4.92893 3.51472L7.05025 5.63604L5.63604 7.05025L3.51472 4.92893ZM16.9497 18.364L18.364 16.9497L20.4853 19.0711L19.0711 20.4853L16.9497 18.364ZM19.0711 3.51472L20.4853 4.92893L18.364 7.05025L16.9497 5.63604L19.0711 3.51472ZM5.63604 16.9497L7.05025 18.364L4.92893 20.4853L3.51472 19.0711L5.63604 16.9497ZM23 11V13H20V11H23ZM4 11V13H1V11H4Z"></path>`
const MOON_FILLED_ICON = `<path d="M11.3807 2.01886C9.91573 3.38768 9 5.3369 9 7.49999C9 11.6421 12.3579 15 16.5 15C18.6631 15 20.6123 14.0843 21.9811 12.6193C21.6613 17.8537 17.3149 22 12 22C6.47715 22 2 17.5228 2 12C2 6.68514 6.14629 2.33869 11.3807 2.01886Z"></path>`
const MOON_OUTLINE_ICON = `<path d="M10 7C10 10.866 13.134 14 17 14C18.9584 14 20.729 13.1957 21.9995 11.8995C22 11.933 22 11.9665 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C12.0335 2 12.067 2 12.1005 2.00049C10.8043 3.27098 10 5.04157 10 7ZM4 12C4 16.4183 7.58172 20 12 20C15.0583 20 17.7158 18.2839 19.062 15.7621C18.3945 15.9187 17.7035 16 17 16C12.0294 16 8 11.9706 8 7C8 6.29648 8.08133 5.60547 8.2379 4.938C5.71611 6.28423 4 8.9417 4 12Z"></path>`
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

// =============================================================================

let userInputText;
let textArea = document.getElementById('text-area');
textArea.addEventListener('keydown', function(event) {
    if(event.key === "Enter" && !event.shiftKey) {
        event.preventDefault();

        sendUserInput();
    }
})

function sendUserInput() {
    userInputText = textArea.value;
    textArea.value = "";
    if (userInputText.trim()) {
        
        let messageBlock = document.createElement('div');
        messageBlock.classList.add('message-block');

        let userInput = document.createElement('p');
        userInput.id = 'user-input';
        userInput.textContent = userInputText;

        let hr = document.createElement('hr');

        messageBlock.appendChild(userInput);
        messageBlock.appendChild(hr);

        let allMessages = document.getElementById('all-messages');
        allMessages.appendChild(messageBlock);
    }
}

// =============================================================================

function toggleTheme(currentButton) {
    let activeButton = currentButton.parentElement.querySelector('.active-theme');
    let activeButtonSvg;
    let currentButtonSvg;

    if (activeButton) {
        activeButton.classList.remove('active-theme');
        activeButtonSvg = activeButton.querySelector('svg');
    }
    
    currentButton.classList.add('active-theme');
    currentButtonSvg = currentButton.querySelector('svg');

    if(currentButton.innerText.includes("Light")) {
        currentButtonSvg.innerHTML = SUN_FILLED_ICON;
        activeButtonSvg.innerHTML = MOON_OUTLINE_ICON;
    } else {
        currentButtonSvg.innerHTML = MOON_FILLED_ICON;
        activeButtonSvg.innerHTML = SUN_OUTLINE_ICON;
    }

}
