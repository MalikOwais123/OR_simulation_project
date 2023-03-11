import { BasicFormulas } from "./basicComputations";

function lqMG1(p, lamda, variance_s) {
  let lq = Math.pow(lamda, 2) * variance_s + Math.pow(p, 2) / (2 * (1 - p));
  return lq;
}

export const MG1Computations = (lamda, minS, maxS, c = 1) => {
  lamda = 1 / lamda;
  let meu = 1 / ((minS + maxS) / 2);
  let variance_s = BasicFormulas.calculateVariance(minS, maxS);
  let p = lamda / (meu * c);
  let lq = lqMG1(p, lamda, variance_s);
  let wq = BasicFormulas.calculateWQ(lq, lamda);
  let w = BasicFormulas.calculateW(wq, meu);
  let l = BasicFormulas.calculateL(w, lamda);
  let idle = BasicFormulas.calculateIdleProbability(p);
  const result = {
    lq,
    wq,
    w,
    l,
    idle,
  };
  return result;
};
