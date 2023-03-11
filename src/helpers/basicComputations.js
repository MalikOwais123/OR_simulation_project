const calculateWQ = (lq, lambda) => {
  return lq / lambda;
};

const calculateW = (wq, mu) => {
  return wq + 1 / mu;
};

const calculateL = (w, lambda) => {
  return w * lambda;
};

const calculateIdleProbability = (probability) => {
  return 1 - probability;
};

const calculateVariance = (min, max) => {
  return Math.pow(max - min, 2) / 12;
};

export const factorial = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorial(num - 1);
  }
};

export const calculatePO = (rho, c) => {
  let summation_value = 0;
  for (let i = 0; i < c; i++) {
    summation_value += Math.pow(rho * c, i) / factorial(i);
  }
  let po =
    1 / (summation_value + Math.pow(rho * c, c) / (factorial(c) * (1 - rho)));
  return po;
};

export const BasicFormulas = {
  calculateWQ,
  calculateW,
  calculateL,
  calculateIdleProbability,
  calculateVariance,
};
