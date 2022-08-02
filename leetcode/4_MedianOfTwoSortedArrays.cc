#include <vector>
#include <algorithm>
#include <iostream>
using std::vector;
class Solution
{
public:
    double findMedianSortedArrays(vector<int> &nums1, vector<int> &nums2)
    {
        if (nums1.size() == 0 && nums2.size() == 1)
        {
            return nums2.at(0);
        }
        if (nums1.size() == 1 && nums2.size() == 0)
        {
            return nums1.at(0);
        }
        size_t lenSum = nums1.size() + nums2.size();
        size_t midIndex = (lenSum % 2) ? lenSum / 2 + 1 : lenSum / 2;
        std::pair<int, int> midfind = recursionFindNumOfNandN1(nums1, nums2, 0, 0, midIndex);
        if (lenSum % 2 == 0)
        {
            return (double)(midfind.first + midfind.second) / 2;
        }
        return midfind.first;
    }

private:
    std::pair<int, int> recursionFindNumOfNandN1(vector<int> &nums1, vector<int> &nums2, size_t st1, size_t st2, size_t n)
    {
        if (st1 >= nums1.size())
        {
            return std::pair<int, int>(nums2.at(st2 + n - 1), nums2.at(st2 + n));
        }
        if (st2 >= nums2.size())
        {
            return std::pair<int, int>(nums1.at(st1 + n - 1), nums1.at(st1 + n));
        }
        if (n == 1)
        {
            bool OisFirst = nums1.at(st1) < nums2.at(st2);
            int FirstNum = std::min(nums1.at(st1), nums2.at(st2));
            int SecondNum;
            if (OisFirst)
            {
                if (st1 + 1 < nums1.size())
                {
                    SecondNum = std::min(nums1.at(st1 + 1), nums2.at(st2));
                }
                else
                {
                    SecondNum = nums2.at(st2);
                }
            }
            else
            {
                if (st2 + 1 < nums2.size())
                {
                    SecondNum = std::min(nums1.at(st1), nums2.at(st2 + 1));
                }
                else
                {
                    SecondNum = nums1.at(st1);
                }
            }
            return std::pair<int, int>(FirstNum, SecondNum);
        }
        size_t k = n / 2, t1, t2;
        if (nums1.size() - st1 < nums2.size() - st2)
        {
            t1 = (st1 + k - 1 < nums1.size()) ? k : nums1.size() - st1;
            t2 = 2 * k - t1;
        }
        else
        {
            t2=(st2+k-1<nums2.size())? k: nums2.size()-st2;
            t1=2*k-t2;
        }
        if (nums1.at(st1 + t1 - 1) < nums2.at(st2 + t2 - 1))
        {
            return recursionFindNumOfNandN1(nums1, nums2, st1 + t1, st2, n - t1);
        }
        return recursionFindNumOfNandN1(nums1, nums2, st1, st2 + t2, n - t2);
    }
};
int main()
{
    Solution s;
    // vector<int> st={};
    vector<int> ed = {1};
    vector<int> st = {2, 3, 4, 5, 6, 7};
    // vector<int> ed={2,3};
    std::cout << s.findMedianSortedArrays(st, ed) << std::endl;
    return 0;
}