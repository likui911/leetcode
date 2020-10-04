class Solution {
public:
  void merge(vector<int> &nums1, int m, vector<int> &nums2, int n) {
    int l = m - 1;
    int s = n - 1;
    int k = m + n - 1;

    while (s >= 0 && l >= 0) {
      if (nums2[s] > nums1[l]) {
        nums1[k--] = nums2[s--];
      } else {
        nums1[k--] = nums1[l--];
      }
    }
    while (s >= 0) {
      nums1[k--] = nums2[s--];
    }
  }
};