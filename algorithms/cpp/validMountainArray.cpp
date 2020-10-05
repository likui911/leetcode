class Solution {
public:
  bool validMountainArray(vector<int> &A) {
    if (A.size() < 3) {
      return false;
    }
    auto it1 = adjacent_find(A.begin(), A.end(), greater_equal<int>());
    auto it2 = adjacent_find(A.rbegin(), A.rend(), greater_equal<int>());

    if (&*it1 != &*it2) {
      return false;
    }
    return true;
  }
};