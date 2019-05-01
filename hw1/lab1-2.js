"use strict";
(function () {
    function ecma6() {
        String.prototype.filterWords = function (input) {
            let str = this;
            input.forEach(s => str = str.replace(s, "***"));
            return str;

        }

        console.log("This house is nice!".filterWords(["house", "nice"]));
    }

    function promise() {
        String.prototype.filterWords = function (input) {
            let str = this;
            input.forEach(x => str = str.replace(x, "***"));
            return new Promise(function (resolve, reject) {
                if (str) {
                    resolve(str);
                } else {
                    reject("Error");
                }
            });
        }
        let result = function (str = "", arr = []) {
            str.filterWords(arr).then(function (str) {
                console.log(str);
            }).catch(function (err) {
                console.log(err);
            });
        }
        result("This house is nice!", ["house", "nice"]);
    }
    function asyncaw8() {
        String.prototype.filterWords=function (input) {
            let str=this;
            input.forEach(x=>str=str.replace(x, "***"));
            return new Promise(function (resolve, reject) {
                str? resolve(str): reject("error");
            });
        }
        async function filter(str="", arr=[]) {
            try{
                let result=await str.filterWords(arr);
                console.log(result);
            }catch (e) {
                console.log(e);
            }
        }
        filter("This house is nice!", ["house", "nice"]);
    }
    function observable() {
        const {from}=require("rxjs");
        String.prototype.filterWords=function (input) {
            let str=this;
            input.map(x=>str=str.replace(x,"***"));
            let filterPromise=new Promise(function (resolve, reject) {
                str? resolve(str) : reject("error");
            });
            const obs$=from(filterPromise);
            return obs$;
        }
        const filter=function (str="", arr=[]) {
            str.filterWords(arr).subscribe(
                (x)=>console.log(x),
                ()=>console.log("error"),
                // ()=>console.info("done")
            );
        };
        filter("This house is nice!", ["house", "nice"]);
    }
    ecma6();
    promise();
    asyncaw8();
    observable();
})();


