import { BasicFormulas, calculatePO } from "./basicComputations";
import { LQ_MMC } from "./MMCComputations";

const lqWqGGC = (p, lambda, meu, variance_s, variance_a, n) => {
  const po = calculatePO(p, n);
  const mmcLQ = LQ_MMC(p, lambda, meu, po, n);
  const mmcWQ = BasicFormulas.calculateWQ(mmcLQ, lambda);
  const Ca = variance_a / Math.pow(1 / lambda, 2);
  const Cs = variance_s / Math.pow(1 / meu, 2);
  const wq = mmcWQ * (Ca + Cs / 2);
  const lq = wq * lambda;
  return { lq, wq };
};

export const GGCComputations = (minIAT, maxIAT, minS, maxS, c) => {
  const lambda = 1 / ((minIAT + maxIAT) / 2);
  const meu = 1 / ((minS + maxS) / 2);
  const variance_a = BasicFormulas.calculateVariance(minIAT, maxIAT);
  const variance_s = BasicFormulas.calculateVariance(minS, maxS);
  const p = lambda / (meu * c);
  const { lq, wq } = lqWqGGC(p, lambda, meu, variance_s, variance_a, c);
  const w = BasicFormulas.calculateW(wq, meu);
  const l = BasicFormulas.calculateL(w, lambda);
  const idle = BasicFormulas.calculateIdleProbability(p);
  const result = {
    lq,
    wq,
    w,
    l,
    idle,
  };
  return result;
};
