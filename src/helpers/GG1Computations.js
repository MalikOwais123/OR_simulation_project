import { BasicFormulas } from "./basicComputations";

const LQ_GG1 = (p, lamda, meu, variance_s, variance_a) => {
  let Ca = variance_a / Math.pow(1 / lamda, 2);
  let Cs = variance_s / Math.pow(1 / meu, 2);
  let rho_sq = Math.pow(p, 2);
  let lq =
    (rho_sq * (1 + Cs) * (Ca + rho_sq * Cs)) /
    (2 * (1 - p) * (1 + rho_sq * Cs));
  return lq;
};

export const GG1Computations = (minS, maxS, minIAT, maxIAT, c = 1) => {
  let lambda = 1 / (minIAT + maxIAT) / 2;
  let meu = 1 / (minS + maxS) / 2;
  let variance_a = BasicFormulas.calculateVariance(minIAT, maxIAT);
  let variance_s = BasicFormulas.calculateVariance(minS, maxS);
  let p = lambda / (meu * c);
  let lq = LQ_GG1(p, lambda, meu, variance_s, variance_a);
  let wq = BasicFormulas.calculateWQ(lq, lambda);
  let w = BasicFormulas.calculateW(wq, meu);
  let l = BasicFormulas.calculateL(w, lambda);
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
