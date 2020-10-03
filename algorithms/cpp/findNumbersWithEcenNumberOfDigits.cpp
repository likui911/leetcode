class Solution {
public:
  int findNumbers(vector<int> &nums) {
    int cnt = 0;
    for (int num : nums) {
      if (numLength(num) % 2 == 0) {
        cnt++;
      }
    }
    return cnt;
  }
  int numLength(int num) {
    int cnt = 0;
    while (num / 10 != 0) {
      num = num / 10;
      cnt++;
    }
    cnt = cnt + 1;
    return cnt;
  }
};