function fibonacci(num){
    let nums = [0, 1]
    for (let c = 0; c <= num - 3; c++){
        nums.push(nums[c] + nums[c + 1])
    }
    console.log(nums)
}

fibonacci(10)