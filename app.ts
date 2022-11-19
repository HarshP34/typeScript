var num1Element=document.getElementById('num1') as HTMLInputElement;
var num2Element=document.getElementById('num2') as HTMLInputElement;
var buttonElement=document.querySelector('button')!;

type NumOrString=number|string;
type Result={val:number,timestamp:Date};

function Add(num1:NumOrString,num2:NumOrString){
    if(typeof num1==='number' && typeof num2==='number')
    return num1 + num2;
    else if(typeof num1==='string' && typeof num2==='string')
    return num1 +' '+num2;
    return +num1 + +num2;
}

const numResults:Array<number>=[];
const textResults:string[]=[];

function printResult(resultObj:Result){
    console.log(resultObj.val);
    console.log(resultObj.timestamp);
    
    
}

buttonElement.addEventListener('click',()=>{
    const num1=num1Element.value
    const num2=num2Element.value
    const result=Add(+num1,+num2);
    const stringResult=Add(num1,num2);
    numResults.push(result as number)
    textResults.push(stringResult as string)
    console.log(result);
    console.log(stringResult);
    printResult({val:result as number,timestamp:new Date()})
    console.log(numResults);
    console.log(textResults);
})

const myPromise=new Promise<string>((resolve,reject)=>{
    setTimeout(()=>{
   resolve('It worked');
    },1000)
})

myPromise.then((result)=>{
    console.log(result.split('w'));
})