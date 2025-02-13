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