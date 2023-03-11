import { BasicFormulas, calculatePO, factorial } from "./basicComputations";

// p --> probability of a customer being in the system
// lambda --> arrival rate
// meu --> service rate
// po --> probability of 0 customers in the system
// n ---> number of servers
export const LQ_MMC = (p, lambda, meu, po, n) => {
  let lq =
    (po * (Math.pow(lambda / meu, n) * p)) /
    (factorial(n) * Math.pow(1 - p, 2));
  return lq;
};

export const MMCComputations = (lambda, meu, c) => {
  lambda = 1 / lambda;
  meu = 1 / meu;
  let p = lambda / (meu * c);
  let po = calculatePO(p, c);
  let lq_mmc = LQ_MMC(p, lambda, meu, po, c);
  let wq_mmc = BasicFormulas.calculateWQ(lq_mmc, lambda);
  let w = BasicFormulas.calculateW(wq_mmc, meu);
  let l = BasicFormulas.calculateL(w, lambda);
  let idle = BasicFormulas.calculateIdleProbability(p);
  const result = {
    lq: lq_mmc,
    wq: wq_mmc,
    w,
    l,
    idle,
  };
  return result;
};
