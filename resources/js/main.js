const responses = [
  'Great idea! Thank you for sharing.', "I don't agree, but I appreciate you sharing.",
  "Your ideas are valid, but I didn't ask for your ideas.",
  "You're smart for thinking of that. Thank you for sharing.",
  'I appreciate that thought, thank you.', "I appreciate you. I'll take your idea under consideration.",
  'You may be missing some things, but I can see your main point.', 'I hear you. Thank you for sharing.',
  "You're right. That's also a way I could have looked at the situation.",
  'OK, thank you.', 'I like that idea. Thanks for sharing.', "I'm not a fan of that idea, but I appreciate you sharing.",
  "That's interesting! I hadn't thought of it that way.",
  "Um, sorry, you missed my point. I appreciate your idea but also feel like you didn't listen to me.",
  "That seems sound. I don't have any more time or energy to talk about this right now.",
  "Appreciate that. I'm mostly venting, so I don't want to talk about this that deep.",
  "Sure, that too. It's fine to have that view. I don't want to talk more right now because I feel like I'm being attacked."
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

  const form = document.querySelector('form');
  const idea = document.querySelector('#idea').value;
  const ideaText = document.querySelector('#idea-text');
  const responseText = document.querySelector('#response-text');
  const hiddenElements = document.querySelectorAll('.hidden');
  const responseSection = document.querySelector('#response-section');

  const randomNum = Math.floor(Math.random() * (responses.length));
  const response = responses[randomNum];

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
