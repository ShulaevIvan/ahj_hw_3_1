import Goblin from '../components/goblin/goblin';

window.addEventListener('DOMContentLoaded', () => {
  const goblin = new Goblin('.game_wrap', '.hole');
  goblin.addPositions();
  goblin.addInterval();
});