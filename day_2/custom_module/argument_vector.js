
const input = process.argv

const add=(a,b)=>{
    return (parseInt(a)+parseInt(b))
}
const sub=(a,b)=>{
    return (parseInt(a)-parseInt(b))
}
const mul=(a,b)=>{
    return (parseInt(a)*parseInt(b))
}
const div=(a,b)=>{
    return (parseInt(a)/parseInt(b))
}
const sin=(deg)=>{
    const radians = (Math.PI / 180) * parseInt(deg);
  	return Math.sin(radians);
}
const cos=(deg)=>{
    const radians = (Math.PI / 180) * parseInt(deg);
  	return Math.cos(radians);
}
const tan=(deg)=>{
    const radians = (Math.PI / 180) * parseInt(deg);
  	return Math.tan(radians);
}
const random=()=>{
    return Math.random()*10
}

// console.log(sin(30))


switch(input[2]){
    case "add":
        console.log(add(input[3],input[4]))
        break;
    case "sub":
        console.log(sub(input[3],input[4]))
        break;
    case "mul":
        console.log(mul(input[3],input[4]))
        break;
    case "div":
        console.log(div(input[3],input[4]))
        break;
    case "sin":
        console.log(sin(30), "deg")
        break;
    case "cos":
        console.log(cos(30), "deg")
        break;
    case "tan":
        console.log(tan(30), "deg")
        break;
    case "random":
        console.log(random())
        break;

}

