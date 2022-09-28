const vegetables = [
  {
    submitter: "Old Man Franklin",
    redness: 10,
    plumpness: 5,
  },
  {
    submitter: "Sally Tomato-Grower",
    redness: 2,
    plumpness: 8,
  },
  {
    submitter: "Hamid Hamidson",
    redness: 4,
    plumpness: 3,
  },
];

const judgeVegetable = function (vegetables, metric) {
  let winner = vegetables[0];
  for (let i = 1; i < vegetables.length; i++) {
    let judge = vegetables[i];
    if (judge[metric] > winner[metric]) {
      winner = judge;
    }
  }
  return winner.submitter;
};

const metric = "plumpness";

judgeVegetable(vegetables, metric);
