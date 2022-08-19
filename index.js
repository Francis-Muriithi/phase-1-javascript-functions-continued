// code your solution here
// let activity = "roller-skate"
function saturdayFun(activity = "roller-skate"){
   return (`This Saturday, I want to ${activity}!`);
}

function mondayWork(activity= "go to the office"){
    return (`This Monday, I will ${activity}.`);
}

function wrapAdjective(highlight= "*"){
    return function(myAdjective ="a dedicated programmer"){
        return (`You are ${highlight}${myAdjective}${highlight}!`);
    }
}