const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-btn');
const chatHistory = document.querySelector('.chat-history');

sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    // Display user message
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user-message');
    userMessage.textContent = message;
    chatHistory.appendChild(userMessage);
    messageInput.value = '';
    
    // Simulate bot response (replace with your logic)
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('chat-message', 'bot-message');
      botMessage.textContent = "Hi there! How can I help you today?";
      chatHistory.appendChild(botMessage);
      chatHistory.scrollTo({ top: chatHistory.scrollHeight, behavior: 'smooth' });
    }, 1000);
  }
}
