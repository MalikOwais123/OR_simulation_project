import { factorial } from "./basicComputations";

const generateRandomExponential = (u) => {
  const random = Math.random();
  return Math.floor(-u * Math.log(random));
};

const commulativeFrequency = (lamda, x) => {
  const e = 2.718281828;
  const ans = (Math.pow(e, -lamda) * Math.pow(lamda, x)) / factorial(x);
  return ans;
};

const interArrivalCol = (arr) => {
  const interArrivalArr = new Array(arr.length);
  for (let i = 0; i < arr.length; i++) {
    if (i === 0) {
      interArrivalArr[i] = 0;
    } else {
      const rand = Math.random();
      const a = arr.findIndex((x) => rand - x > 0);
      interArrivalArr[i] = a;
    }
  }
  return interArrivalArr;
};

const calculateServiceTimes = async (interArrivals, meanServiceTime) => {
  let serviceTimes = [];
  for (const eachArrival of interArrivals) {
    // Wait for some time before executing the next iteration
    await new Promise((resolve) => setTimeout(resolve, 200));
    let serviceValue = generateRandomExponential(meanServiceTime);
    while (serviceValue === 0) {
      serviceValue = generateRandomExponential(meanServiceTime);
    }
    serviceTimes.push(serviceValue);
  }
  return serviceTimes;
};

const commulativeFrequencyGenerate = (lamda) => {
  const comArr = [];
  let i = 0;
  let check = true;
  while (check) {
    if (i === 0) {
      comArr.push(commulativeFrequency(lamda, i));
    } else {
      comArr.push(commulativeFrequency(lamda, i) + comArr[i - 1]);
    }
    if (comArr[i] >= 1) {
      check = false;
    }
    i++;
  }
  const interArrivalArr = new Array(comArr.length);
  for (let j = 0; j < comArr.length; j++) {
    const rand = Math.random();
    interArrivalArr[j] = Math.floor(rand * (comArr.length - 1)) + 1;
  }

  interArrivalArr[0] = 0;
  return interArrivalArr;
};

const generateSimulation = (interArrivals, serviceTimes, NoOfServers) => {
  let arrivals = calculateArrivalsFromInterArrivals(interArrivals);
  let servers = new Array(NoOfServers).fill(0);
  let customers = new Array(interArrivals.length);
  for (let j = 0; j < arrivals.length; j++) {
    let serverNum = 0;
    for (let i = 0; i < servers.length - 1; i++) {
      if (servers[i] > servers[i + 1]) {
        serverNum = i + 1;
      }
    }
    let obj = {};
    obj.interArrival = interArrivals[j];
    obj.serviceTime = serviceTimes[j];
    obj.arrival = arrivals[j];
    obj.startTime =
      arrivals[j] < servers[serverNum] ? servers[serverNum] : arrivals[j];
    obj.endTime = obj.startTime + serviceTimes[j];
    obj.waitTime = obj.startTime - arrivals[j];
    obj.turnaroundTime = obj.endTime - arrivals[j];
    obj.server = serverNum + 1;
    servers[serverNum] += serviceTimes[j];
    customers[j] = obj;
  }
  return customers;
};

const calculateArrivalsFromInterArrivals = (interArrivals) => {
  let arrivals = new Array(interArrivals.length);
  for (let i = 0; i < interArrivals.length; i++) {
    if (i === 0) {
      arrivals[i] = interArrivals[i];
    } else {
      arrivals[i] = arrivals[i - 1] + interArrivals[i];
    }
  }
  return arrivals;
};

export const simulationFormulas = {
  generateRandomExponential,
  commulativeFrequency,
  calculateServiceTimes,
  interArrivalCol,
  commulativeFrequencyGenerate,
  generateSimulation,
  calculateArrivalsFromInterArrivals,
};
