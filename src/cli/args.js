import { argv } from "node:process";

const parseArgs = () => {
  const allArguments = argv.slice(2);

  const arrOfNames = [];
  const arrOfValues = [];
  const result = [];

  allArguments.forEach((item) => {
    item.includes('--') ? arrOfNames.push(item.slice(2)) : arrOfValues.push(item);
  });
  
  for (let i = 0; i < arrOfNames.length; i++) {
    result.push(`${arrOfNames[i]} is ${arrOfValues[i]}`);
  }
  console.log(result.join(', '));
};

parseArgs();
