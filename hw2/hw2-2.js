'use strict';
(function () {
    Array.prototype.even = function () {
        const initArr = this;
        setTimeout(function () {
            const evenArr = initArr.filter(x => x % 2 === 0);
            console.log(evenArr);
        }, 10);
    };

    Array.prototype.odd = function () {
        const initArr = this;
        setTimeout(function () {
            const oddArray = initArr.filter(x => x % 2 === 1);
            console.log(oddArray);
        }, 15);
    };

    console.log("start");
    [1, 2, 3, 4, 5, 6, 7, 8].even();
    [1, 2, 3, 4, 5, 6, 7, 8].odd();
    console.log("end");
})()
