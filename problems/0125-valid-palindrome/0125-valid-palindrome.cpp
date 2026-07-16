class Solution {
    char toLowerCase(char ch) {
        if (ch >= 'A' && ch <= 'Z')
            return ch - 'A' + 'a';
        return ch;
    }

public:
    bool isPalindrome(string s) {
        int l = 0, r = s.size() - 1;

        while (l < r) {

            while (l < r && !isalnum(s[l]))
                l++;
            while (l < r && !isalnum(s[r]))
                r--;

            if (toLowerCase(s[l]) != toLowerCase(s[r]))
                return false;
            else {
                l++;
                r--;
            }
        }
        return true;
    }
};