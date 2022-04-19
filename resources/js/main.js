// TODO: Reset w/out reload
// TODO: Add shortcut icons
// TODO: Add Val wording
// TODO: Move responses to YAML
// TODO: Add light theme
// TODO: Add About overlay
// TODO: Add Spanish, Mandarin, others

const IDEA_RESPONSES = [
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

const FEELING_RESPONSES = [
  "I'm sorry you feel that way. That's not my intention.",
  "Thank you for sharing. I'm not doing this intentionally. I also feel that way about you.",
  'Your feelings are valid and important. I think you may be misunderstanding the situation. Can I help get us on the same page?',
  'Thanks for sharing. I love you and I will do what I can to help.',
  "I understand that you feel this way. I believe you. However, it feels like you're attacking me so I need to take a break to think about this.",
  "OK, that makes sense. I'm sorry if I caused that feeling for you.",
  'I feel that way too. Sharing this with me is helpful. Thank you.',
  "When I feel that way, I don't have anyone to talk to. Maybe we can talk to one another about this feeling?",
  "I'm sorry. I didn't mean to cause that feeling.",
  "I'm glad you're sharing your feelings with me. I don't understand the feeling in this context, but I'm still supportive of you feeling that way.",
  "Feeling this way is not fun. I'm sorry you have to go through this. Is there anything I can do?",
  "Thank you for sharing.",
  "Aww. I'm sorry you feel that. What can I do to help?",
  "I hear how you feel. I believe you. However, it feels to me like you're trying to change the subject and make yourself the victim here.",
  "Your feelings are valid. I appreciate you for sharing them. I'd like to focus on my feelings first since your actions were questionable or strange."
];

window.onload = function () {
  copyright();
  
  document.querySelector('textarea').value = '';
  document.querySelector('textarea').focus();
  const form = document.querySelector('form');
  const resetButton = document.querySelector('#reset');
  const anotherResponseButton = document.querySelector('#another-response');
  // const themeButton = document.querySelector('#theme');

  form.addEventListener('submit', validatorinator, false);
  resetButton.addEventListener('click', refresh, false);
  // themeButton.addEventListener('click', toggleTheme, false);
  anotherResponseButton.addEventListener('click', validatorinator, false);
};

async function validatorinator (event) {
  event.preventDefault();

  const form = document.querySelector('form');
  const idea = document.querySelector('#idea').value;
  const ideaText = document.querySelector('#idea-text');
  const hiddenElements = document.querySelectorAll('.hidden');
  const responseSection = document.querySelector('#response-section');
  const response = getResponse(idea);

  form.style.display = 'none';

  ideaText.innerText = idea;
  hiddenElements[0].style.display = 'block';

  hiddenElements[1].style.display = 'block';
  responseSection.innerHTML = '<h2>I\'m thinking <span class="pulsate-css">...</span></h2>';

  if (hiddenElements[3].style.display !== 'block') {
    toggleHidden(hiddenElements);
  }

  await sleep(Math.floor(Math.random(6) * 5000));

  responseSection.innerHTML = response;
  
  if (hiddenElements[3].style.display !== 'block') {
    toggleHidden(hiddenElements);
  }
}

function toggleHidden (hiddenElements) {
  for (let index = 2; index < hiddenElements.length; index += 1) {
    if (hiddenElements[index].style.display === 'block') {
      hiddenElements[index].style.display = 'none';
    } else {
      hiddenElements[index].style.display = 'block';
    }
  }
}

function copyright () {
  const copyrightElement = document.querySelector('.copyright');
  const date = new Date();
  const currentYear = date.getFullYear();
  copyrightElement.innerHTML = `&copy;${currentYear} @jd-launch-school`;
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function refresh () {
  const hiddenElements = document.querySelectorAll('.hidden');
  const form = document.querySelector('form');
  hiddenElements[0].style.display = 'none';
  hiddenElements[1].style.display = 'none';
  toggleHidden(hiddenElements);
  form.style.display = 'block';
  document.querySelector('#idea').value = '';
  // location.reload();
}

function getResponse (idea) {
  const feelingWords = ['I feel', "I'm feeling", 'makes me feel', 'I felt'];
  const feelingInIdea = feelingWords.some(word => idea.match(word));
  const responses = feelingInIdea ? FEELING_RESPONSES : IDEA_RESPONSES;

  const randomNum = Math.floor(Math.random() * (responses.length));
  return responses[randomNum];
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
