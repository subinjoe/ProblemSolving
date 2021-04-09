var twoSum = function(nums, target) {
    let n = nums.length;
    // for (i=0; i<=n; i++){
    //     for (j=i+1; j<=n; j++){
    //         if (nums[j]==(target - nums[i])){
    //             //console.log (i,j);
    //             let output = [i,j];
    //             return output;
    //         }
    //     }
    // }


    let i = 0;
    while (i<=n){
        let j = i+1;
        while ((j<=n)){
            if (nums[j]==(target - nums[i])){
                console.log (i,j);
                let output = [i,j];
                return output;
            }
            j++
        }
        i++
        }

    };

    var result = twoSum([2,4,3,6],5);
    console.log(result);

