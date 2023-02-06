# 动态规划
一只青蛙一次可以跳上1级台阶，也可以跳上2级台阶。求该青蛙跳上一个 20 级的台阶总共有多少种跳法。

### 解：
要想跳到第10级台阶，要么是先跳到第9级，然后再跳1级台阶上去;要么是先跳到第8级，然后一次迈2级台阶上去。即通用公式为: f(n) = f(n-1) + f(n-2)

动态规划有几个典型特征，最优子结构、状态转移方程、边界、重叠子问题。
- f(n-1)和f(n-2) 称为 f(n) 的最优子结构
- f(n)= f（n-1）+f（n-2）就称为状态转移方程
- f(1) = 1, f(2) = 2 就是边界啦
- 比如f(10)= f(9)+f(8),f(9) = f(8) + f(7) ,f(8)就是重叠子问题。

```
const numWays = (n) => {
  if (n <= 1) {
    return 1;
  }
  if (n == 2) {
    return 2;
  }
  let a = 1;
  let b = 2;
  let temp = 0;
  for (let i = 3; i <= n; i++) {
    temp = a + b;
    a = b;
    b = temp;
  }
  return temp;
};
console.log(numWays(20));  //10946
```

# 最长递增子序列

vue3的diff采用的是对比最长递增子序列，接下来了解一下动态规划的思路解法

```
const lengthOfLIS = (nums)=>{
  if (nums.length == 0) {
    return 0;
  }
  const dp = new Array(nums.length)
  //初始化就是边界情况
  dp[0] = 1;
  let maxans = 1;
  //自底向上遍历
  for (let i = 1; i < nums.length; i++) {
      dp[i] = 1;
      //从下标0到i遍历
      for (let j = 0; j < i; j++) {
          //找到前面比nums[i]小的数nums[j],即有dp[i]= dp[j]+1
          if (nums[j] < nums[i]) {
              //因为会有多个小于nums[i]的数，也就是会存在多种组合了嘛，我们就取最大放到dp[i]
              dp[i] = Math.max(dp[i], dp[j] + 1);
          }
      }
      //求出dp[i]后，dp最大那个就是nums的最长递增子序列啦
      maxans = Math.max(maxans, dp[i]);
  }

  return maxans;
}

console.log(lengthOfLIS([8,4,66,5,7,8,965,4,3,2,134,35])); //5
```