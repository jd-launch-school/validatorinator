const responses = [
  'Great idea! Thank you for sharing.', "I don't agree, but I appreciate you sharing.",
  "Your ideas are valid, it's just that I didn't ask for new ideas.",
  "You're smart for thinking of that. Thank you for sharing.",
  'I appreciate that thought, thank you.', "I appreciate you. I'll take your idea under consideration.",
  'You may be missing some things, but I can see your main point.', 'I hear you. Thank you for sharing.',
  "You're right. That's also a way I could have looked at the situation.",
  'OK, thank you.', 'I like that idea. Thanks for sharing.', "I'm not a fan of that idea, but I appreciate you sharing.",
  "That's interesting! I hadn't thought of it that way.",
  "Um, sorry, you missed my point. I appreciate your idea but also feel like you didn't listen to my point.",
  "That seems sound. I don't have any more time or energy to talk about this right now."
];

window.onload = function () {
  document.querySelector('textarea').value = '';
  document.querySelector('textarea').focus();
  const form = document.querySelector('form');
  const button = document.querySelector('button');

  form.addEventListener('submit', validatorinator, false);
  button.addEventListener('click', refresh, false);
};

async function validatorinator (event) {
  event.preventDefault();

  const idea = document.querySelector('#idea').value;
  const ideaText = document.querySelector('#idea-text');
  const responseText = document.querySelector('#response-text');
  const hiddenElements = document.querySelectorAll('.hidden');

  const randomNum = Math.floor(Math.random() * (responses.length));
  const response = responses[randomNum];

  ideaText.innerHTML = idea;
  hiddenElements[0].style.display = 'block';

  responseText.innerHTML = 'Thinking ...';
  await sleep(Math.floor(Math.random(6) * 5000));

  hiddenElements[1].style.display = 'block';
  responseText.innerHTML = response;
  hiddenElements[2].style.display = 'block';
}

function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

function refresh () {
  location.reload();
}
