const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-btn');
const chatHistory = document.querySelector('.chat-history');


sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user-message');
    userMessage.innerHTML = `<i class="fas fa-user"></i> ${message}`; 
    chatHistory.appendChild(userMessage);
    messageInput.value = '';
    
    
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('chat-message', 'bot-message');
      botMessage.innerHTML = `<i class="fas fa-robot"></i> Hi there! How can I help you today?`; 
      chatHistory.appendChild(botMessage);
      chatHistory.scrollTo({ top: chatHistory.scrollHeight, behavior: 'smooth' });
    }, 1000);
  }
}
