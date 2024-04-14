const messageInput = document.getElementById('message');
const sendButton = document.getElementById('send-btn');
const chatHistory = document.querySelector('.chat-history');


sendButton.addEventListener('click', sendMessage);

function sendMessage() {
  const message = messageInput.value.trim();
  if (message) {
    var answer;

    switch (message.toLowerCase()) { 
      case "hi":
      case "hello":
        answer = "Hi there! How can I help you today?";
        break;
      case"sallem aala amen":
        answer = "yeblagh sahbi lbehi";
        break;
      case"i wish to request paid time off, how should i proceed?":
        answer = "To request paid time off, you need to fill out a leave request form and send it to your hierarchical supervisor. You can find the leave request form on the company's website, in the section dedicated to leaves and absences.";
        break;
      case"chbih amir?":
        answer = "yestakhef b kodoratek ah sahbi";
        break;
      case"i'd like to develop my skills. does the company offer professional development programs for employees?":
        answer = "Yes, employee training is a priority for the company! We offer a variety of professional development programs, including online training, workshops, and conferences. You can find the list of ongoing programs on the company's intranet, under the 'Professional Development' section. Additionally, your supervisor can help you identify relevant programs based on your career goals.";
        break;
      case"i noticed that a company sports challenge is coming up soon. are there any benefits to participating?":
        answer = "Good observation! Indeed, the company promotes a healthy lifestyle and offers benefits for participating in the sports challenge. These benefits may vary depending on the challenge, but they often include gift vouchers, discounts on gym memberships, or even additional paid time off. You can find more details about the specific benefits of the challenge on your personal dashboard where you'll find the registration link and your earned points and badges.";
        break;
      case"what health insurance plan does the company offer?":
        answer = "The company offers a comprehensive health insurance plan that covers a wide range of medical and hospital services. The plan includes coverage for preventive care, outpatient care, hospital care, prescription drugs, and much more. You can find more information about the company's health insurance plan in your employment contract or on the company's website, in the section dedicated to employee benefits.";
        break;
      case"thank you":
      case"thanks":
        answer="You're welcome! If you have any more questions or need further assistance, feel free to ask.";
        break;
      default:
        answer = "I'm sorry, I didn't understand that. How can I help you?";
    }
    const userMessage = document.createElement('div');
    userMessage.classList.add('chat-message', 'user-message');
    userMessage.innerHTML = `<i class="fas fa-user"></i> ${message}`; 
    chatHistory.appendChild(userMessage);
    messageInput.value = '';
    
    
    setTimeout(() => {
      const botMessage = document.createElement('div');
      botMessage.classList.add('chat-message', 'bot-message');
      botMessage.innerHTML = `<i class="fas fa-robot"></i> ${answer}`; 
      chatHistory.appendChild(botMessage);
      chatHistory.scrollTo({ top: chatHistory.scrollHeight, behavior: 'smooth' });
    }, 1000);
  }
}
