const ideaResponses = [
  'Great idea! Thank you for sharing.',
  "I don't agree, but I appreciate you sharing.",
  "Your ideas are valid, but I didn't ask for your ideas.",
  "You're smart for thinking of that. Thank you for sharing.",
  'I appreciate that thought, thank you.',
  "I appreciate you. I'll take your idea under consideration.",
  'You may be missing some things, but I can see your main point.',
  'I hear you. Thank you for sharing.',
  "You're right. That's also a way I could have looked at the situation.",
  'OK, thank you.',
  'I like that idea. Thanks for sharing.',
  "I'm not a fan of that idea, but I appreciate you sharing.",
  "That's interesting! I hadn't thought of it that way.",
  "Um, sorry, you missed my point. I appreciate your idea but also feel like you didn't listen to me.",
  "That seems sound. I don't have any more time or energy to talk about this right now.",
  "Appreciate that. I'm mostly venting, so I don't want to talk about this that deeply.",
  "Sure, that too. It's fine to have that view. I don't want to talk more right now because I feel like I'm being attacked.",
  "That sounds right. I'm busy with other things right now so can we talk about this later?",
  'Thanks. I appreciate you sharing. However, I already know about this.',
  "That sounds right and I appreciate your willingness to help. However, I feel like you're mansplaining because I'm already aware of most of what you're saying.",
  'Thank you. I appreciate that. It really could be anything, so no worries.'
];

feelingResponses = [
  "I'm sorry you feel that way. That's not my intention.",
  "Thank you for sharing. I'm not doing this intentionally. I also feel that way about you.",
  'Your feelings are valid and important. I think you may be misunderstanding the situation. Can I help get us on the same page?',
  'Thanks for sharing. I love you and I will do what I can to help.',
  "I understand that you feel this way. I believe you. However, it feels like you're attacking me so I need to take a break to think about this.",
];

// TODO - add emojis and positive stuff
// TODO - All good? button or system
// TODO - Pick a different response?

window.onload = function () {
  document.querySelector('textarea').value = '';
  document.querySelector('textarea').focus();
  const form = document.querySelector('form');
  const button = document.querySelector('#reset');
  // const themeButton = document.querySelector('#theme');

  form.addEventListener('submit', validatorinator, false);
  button.addEventListener('click', refresh, false);
  // themeButton.addEventListener('click', toggleTheme, false);
};

async function validatorinator (event) {
  event.preventDefault();

  const form = document.querySelector('form');
  const idea = document.querySelector('#idea').value;
  const ideaText = document.querySelector('#idea-text');
  // const responseText = document.querySelector('#response-text');
  const hiddenElements = document.querySelectorAll('.hidden');
  const responseSection = document.querySelector('#response-section');
  
  const feelingWords = ['I feel', "I'm feeling", 'makes me feel'];
  const feelingInIdeaText = feelingWords.some(word => ideaText.includes(word));
  
  if (feelingInIdeaText) {
    randomNum = Math.floor(Math.random() * (feelingResponses.length));
    response = feelingResponses[randomNum];
  } else {
    const randomNum = Math.floor(Math.random() * (ideaResponses.length));
    response = ideaResponses[randomNum];
  }

  form.style.display = 'none';

  ideaText.innerHTML = idea.split('\n').join('<br>');
  hiddenElements[0].style.display = 'block';

  hiddenElements[1].style.display = 'block';
  responseSection.innerHTML = '<h2>Thinking ...</h2>';

  await sleep(Math.floor(Math.random(6) * 5000));

  responseSection.innerHTML = response;
  hiddenElements[2].style.display = 'block';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function refresh () {
  location.reload();
}

// function toggleTheme () {
//   const body = document.body;
//   const button = document.querySelector('#theme');

//   if (body.hasAttribute('class', 'dark-mode')) {
//     body.removeAttribute('class', 'dark-mode');
//     button.textContent = '🏙️';
//   } else {
//     button.textContent = '🌃';
//     body.setAttribute('class', 'dark-mode');
//   }
// }
