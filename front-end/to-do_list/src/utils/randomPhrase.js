const randomPhrases = [
  'Feed the dog',
  'Go to the supermarket',
  'Wash the dishes',
  'Call mom',
  'Learn React',
  'Find a job',
  'Drink a glass of wine',
  'Be the best version of yourself',
];

function getRandomPhrase() {
  return randomPhrases[Math.floor(Math.random() * randomPhrases.length)];
};

export default getRandomPhrase;