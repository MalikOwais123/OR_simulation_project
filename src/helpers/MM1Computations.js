import { BasicFormulas } from "./basicComputations";

const calculateLqMM1 = (p) => {
  return (p * p) / (1 - p);
};

export const MM1Computations = (lambda, mu) => {
  lambda = 1 / lambda;
  mu = 1 / mu;
  let p = lambda / mu;
  let lq = calculateLqMM1(p);
  let wq = BasicFormulas.calculateWQ(lq, lambda);
  let w = BasicFormulas.calculateW(wq, mu);
  let l = BasicFormulas.calculateL(lambda, w);
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
