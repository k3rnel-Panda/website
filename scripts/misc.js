function randomInteger(max, min) {
  return Math.floor((Math.random() * max) + min);
}

const frontWords = [
  'Front',
  'Fall',
  'Free',
  'For',
  'Fallout',
  'Forever'
];

const endWords = [
  'End',
  'Everest',
  'Ever',
  'Evil',
  'Ernesto',
  'Event'
];

function findTitle(front, end) {
  return `learn${front[randomInteger(front.length - 1, 0)]}${end[randomInteger(end.length - 1, 0)]}`;
}

(function(){
  const title = document.getElementById('title');
  title.innerText = findTitle(frontWords, endWords);
})();
