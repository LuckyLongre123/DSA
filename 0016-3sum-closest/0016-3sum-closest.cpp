class Solution {
public:
    int threeSumClosest(vector<int>& nums, int target) {
        int ans_sum = 0;
        int min_diff = INT_MAX;
        int n = nums.size();

        sort(nums.begin(),nums.end());
        
        for (int i = 0; i < n - 2; i++) {
            int l = i + 1;
            int r = n - 1;

            while (l < r) {
                int sum = nums[i] + nums[l] + nums[r];
                int diff = abs(sum - target);
                if (sum == target)
                    return sum;
                if (sum < target) {
                    if (diff < min_diff) {
                        min_diff = diff;
                        ans_sum = sum;
                    }
                    l++;

                } else {
                    if (diff < min_diff) {
                        min_diff = diff;
                        ans_sum = sum;
                    }
                    r--;
                }
            }
        }
        return ans_sum;
    }
};