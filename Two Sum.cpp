/*****************Scroll down to see Java Python code also*********************/

/*

    Leetcode Link        : https://leetcode.com/problems/two-sum/description/
*/

/******************************** C++ *************************************/

//Brute force approach
//T.C  : O(n^2)
//S.C  : O(1)

class Solution {
public:
    vector<int> twoSum(vector<int>& arr, int target) {
        
        //brute force approach
        int n = arr.size();
        
        for(int i = 0; i < n; i++)
        {
            for(int j = i+1; j < n; j++)
            {
                if(arr[i]+ arr[j] == target)
                {
                    return {i,j};
                }
            }
        }

        return {};
    }
};

//Optimized approach
//T.C  : O(n)
//S.C  : O(1)

class Solution {
public:
    vector<int> twoSum(vector<int>& arr, int target) {
        
        //optimized approach
        int n = arr.size();
        unordered_map<int, int> mpp;

        for(int i = 0; i < n; i++)
        {
            int remain = target - arr[i];

            if(mpp.find(remain) != mpp.end())
            {
                return {mpp[remain], i};
            }

            mpp[arr[i]] = i;
        }

        return {};
    }
};


/************************************** Java **************************************/

//T.C   : O(n)
//S.C   : O(1)

class Solution {
    public int[] twoSum(int[] nums, int target) {
        int n = nums.length;

        Map<Integer, Integer> mpp = new HashMap<>();

        for(int i = 0; i < n; i++)
        {
            int remaining = target - nums[i];

            if(mpp.containsKey(remaining)){
                return new int[]{mpp.get(remaining), i};
            }

            mpp.put(nums[i], i);
        }

        return new int[]{};
    }
}


/************************************** Python *******************************************/

//T.C     : O(n)
//S.C     : O(1)

class Solution:
    def twoSum(self, nums, target):
        n = len(nums)
        mpp = {}

        for i in range(n):
            remaining = target - nums[i]

            if remaining in mpp:
                return [mpp[remaining], i]

            mpp[nums[i]] = i

    return []