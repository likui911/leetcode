class Solution {
public:
  vector<int> sortedSquares(vector<int> &A) {
    vector<int> vec(A.size());
    int len = A.size() - 1;
    int i = 0, j = len;
    while (i <= j) {
      if (abs(A[i]) < abs(A[j])) {
        vec[len--] = A[j] * A[j];
        j--;
      } else {
        vec[len--] = A[i] * A[i];
        i++;
      }
    }
    return vec;
  }
};