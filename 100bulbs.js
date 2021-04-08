// var i, j, n, count

// n = 100
// count = 0

// for (i = 1; i <= n; i++) {
//     for (j = 1; j <= n; j++) {
//         if ((i * j == i * i) && (i * j <= 100)) {
//             console.log(i * i + "bulb is on")
//             count++
//         }
//     }
// }
// console.log("Number of bulbs which were on " + count);


var bulbSwitch = function (n) {
    let count = 0
    if (n === 0) {
        // console.log("No bulbs were on"); 
        return count;
    } else if (n > 0) {
        let i = 1;
        while ((i * i) <= n) {
            //console.log(i*i + "bulb is on");
            i++;
            count++;
        }
    }
    //console.log("Number of bulbs which were on " + count);
    return count;

};


let count = bulbSwitch(100);
console.log ("Number of bulbs which were ON ", count)

