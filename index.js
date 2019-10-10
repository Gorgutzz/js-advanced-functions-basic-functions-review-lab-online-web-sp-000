// Your code here
function saturdayFun(activity = "roller-skate"){
  return `This Saturday, I want to ${activity}!`
}

function mondayWork(activity = "go to the office"){
  return `This Monday, I will ${activity}.`
}

function wrapAdjective(asterix = "*"){
  return function (param = "special") {
    return `You are ${asterix}${param}${asterix}!`
  }
}

const Calculator = {
  add: () => {
    return 1 + 3
  },
  subtract: () => 1-3,
  multiply: () => 1 * 3,
  divide: () => 10 / 5
}
