const moodSelect = document.getElementById('mood');
const activitySuggestions = document.getElementById('activity-suggestions');
const suggestions = {
    happy: [
        "Spend time in nature: Spending time outdoors can be calming and rejuvenating. Take a hike, go for a bike ride, or simply sit outside and enjoy the fresh air.",
        "Get creative: Engage in a creative activity, such as painting, writing, or playing music.",
        "Try some new activity: Take a cooking class, learn a new language, or try a new hobby.",
        "Relax and unwind: Take a bubble bath, read a book, or watch a movie.",
    ],
    sad: [
        "Listen to your favorite music.",
        "Practice self-care: Take a warm bath, get a massage, or do something else that makes you feel relaxed and pampered.",
        "Exercise: Physical activity can help release endorphins, which are natural mood boosters. Go for a walk, run, or do some yoga.",
        "Connect with others: Reach out to a friend or family member and talk about how you're feeling. Social support can be a powerful tool in improving mood.",
        "Engage in a hobby: Do something you enjoy, such as painting, playing music, or reading a book.",
        "Practice mindfulness: Try meditation or deep breathing exercises to help calm your mind and reduce stress.",
        "Volunteer: Helping others can be a great way to boost your mood and feel a sense of purpose.",
        "Get outside: Spending time in nature can be calming and rejuvenating. Take a hike, go for a bike ride, or simply sit outside and enjoy the fresh air."
    ],
    anxious: [
        "Practice deep breathing: Take slow, deep breaths in through your nose and out through your mouth. This can help slow down your heart rate and reduce feelings of anxiety.",
        "Write in a journal: Writing down your thoughts and feelings can help you process them and gain perspective.",
        "Listen to calming music: Listening to soothing music can help reduce feelings of anxiety and promote relaxation.",
        "Get organized: Create a to-do list or organize your space to help reduce feelings of overwhelm and promote a sense of control.",
    ],
    angry: [
        "Take a break: If possible, remove yourself from the situation that is causing your anger. Take a walk, go for a drive, or simply step outside for some fresh air.",
        "Use positive self-talk: Remind yourself that it's okay to feel angry, but that you have the power to control your emotions and respond in a healthy way.",
        "Talk to someone: Reach out to a friend or family member and talk about how you're feeling. Social support can be a powerful tool in managing anger.",
        "Writing down your thoughts and feelings can help you process them and gain perspective.",
    ],
    stressed: [
        "Practice deep breathing: Take slow, deep breaths in through your nose and out through your mouth. This can help calm your mind and reduce feelings of stress.",
        "Connect with others: Reach out to a friend or family member and talk about how you're feeling. Social support can be a powerful tool in reducing stress.",
    ],
    tired: [
        "Take a nap: If possible, take a short nap to help you feel more rested and refreshed.",
        "Listen to upbeat music: Listening to music with a fast tempo can help boost your energy levels and improve your mood.",
        "Take a break: If possible, take a break from work or other responsibilities to give yourself time to rest and recharge.",
    ],
    excited: [
        "Take a dance class or join a dance group",
        "Try a new adventure sport like bungee jumping or skydiving.",
        "Attend a concert or festival",
        "Plan a trip or vacation.",
    ],
    content: [
        "Spend time in nature: Spending time outdoors can be calming and rejuvenating. Take a hike, go for a bike ride, or simply sit outside and enjoy the fresh air.",
        "Get creative: Engage in a creative activity, such as painting, writing, or playing music.",
        "Volunteer for a cause you care about.",
        "Spend time with loved ones, like having a picnic or game night",
    ],
    other: [
        "If you're feeling overwhelmed, try making a to-do list or breaking down tasks into smaller, manageable steps.",
    ],
};

moodSelect.addEventListener('change', () => {
  const mood = moodSelect.value;
  let suggestion = '';

  switch (mood) {
    case 'happy':
      suggestion = suggestions.happy;
      break;
    case 'sad':
      suggestion = suggestions.sad;
      break;
    case 'anxious':
      suggestion = suggestions.anxious;
      break;
    case 'angry':
      suggestion = suggestions.angry;
      break;
    case 'stressed':
      suggestion = suggestions.stressed;
      break;
    case 'tired':
      suggestion = suggestions.tired;
      break;
    case 'excited':
      suggestion = suggestions.excited;
      break;
    case 'content':
      suggestion = suggestions.content;
      break;
    case 'other':
      suggestion = suggestions.other;
      break;
  }
console.log(suggestion)
const suggestionOptions = suggestions[mood];

let suggestionList = '<ul class="list-disc pl-4">';

suggestionOptions.forEach((option) => {
  suggestionList += `<li class="text-white">${option}</li>`;
});

suggestionList += '</ul>';

const activitySuggestions = document.getElementById('activity-suggestions');
activitySuggestions.innerHTML = `<p class="text-gray-700 font-bold mb-2">Activities Suggestion:</p>${suggestionList}`;
});

const saveButton = document.querySelector('button[type="submit"]');
saveButton.addEventListener('click', (event) => {
  event.preventDefault();

  const mood = moodSelect.value;

  localStorage.setItem('mood', mood);

});
