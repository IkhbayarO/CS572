"use strict";
(function () {
    function regular() {
        const dns = require("dns");
        let domainToIP = function (host = "") {
            dns.resolve4(host, (err, address) =>
                err ? console.log("error") : address.forEach(x => console.log(x)));
        };
        domainToIP("www.mum.edu");
    }

    function promise() {
        const dns = require("dns");
        const {promisify} = require("util");
        let resultPromise = promisify(dns.resolve4);
        let domainToIP = function (host = "") {
            resultPromise(host).then(address => address.forEach(x => console.log(x))).catch(err => console.log("error"));
        }
        domainToIP("www.mum.edu");
    }

    function asyncAwait() {
        const dns = require("dns");
        const {promisify} = require("util");
        //
        let resultAsync = promisify(dns.resolve4);

        async function hostToIP(host = "") {
            try {
                const ip =await resultAsync(host);
                ip.forEach(x => console.log(x));
            } catch (e) {
                console.log("error");
            }
        }
        hostToIP("www.mum.edu");
    }

    regular();
    promise();
    asyncAwait();
})()