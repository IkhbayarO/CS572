const os=require("os");
const {Observable}=require("rxjs");

let numOfCPU=os.cpus().length;
let ramSize=os.totalmem()/(1024*1024*1024);
let checkSystem=function () {
    return Observable.create((observer)=>{
        observer.next({
            numOfCPU,
            ramSize
        });
    });
};
checkSystem().subscribe(val=>{
    console.log("Checking system...");
    if(val.numOfCPU<2){
        console.log("Processor is not supported");
    }else if(val.ramSize<4){
        console.log("This app needs at least 4gb of RAM");
    }else{
        console.log("System is checked successfully");
    }
});