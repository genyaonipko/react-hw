/* eslint-disable no-param-reassign */

export const getAvailableHeroes = (allHeroes, filter) =>
  allHeroes.filter(item => item.name.toLowerCase().includes(filter));

export const getSquadHeroes = (allHeroes, squadIds) =>
  allHeroes.filter(item => squadIds.includes(item.id));

export const getSquadStats = heroes =>
  heroes.reduce(
    (total, hero) => {
      total.strength += hero.strength;
      total.intelligence += hero.intelligence;
      total.speed += hero.speed;

      return total;
    },
    { strength: 0, intelligence: 0, speed: 0 },
  );
