class Solution {
public:
    vector<int> findSubstring(string s, vector<string>& words) {
        vector<int> ans;
        if (words.empty())
            return ans;

        int wordLen = words[0].size();
        int totalWords = words.size();
        int totalLen = wordLen * totalWords;

        if (s.size() < totalLen)
            return ans;

        unordered_map<string, int> wordCount;
        for (auto& w : words)
            wordCount[w]++;

        for (int i = 0; i < wordLen; i++) {
            int left = i;
            int count = 0;
            unordered_map<string, int> seen;

            for (int right = i; right + wordLen <= s.size(); right += wordLen) {
                string part = s.substr(right, wordLen);

                if (wordCount.count(part)) {
                    seen[part]++;
                    count++;

                    while (seen[part] > wordCount[part]) {
                        string leftPart = s.substr(left, wordLen);
                        seen[leftPart]--;
                        left += wordLen;
                        count--;
                    }

                    if (count == totalWords) {
                        ans.push_back(left);

                        string leftPart = s.substr(left, wordLen);
                        seen[leftPart]--;
                        left += wordLen;
                        count--;
                    }
                } else {
                    seen.clear();
                    count = 0;
                    left = right + wordLen;
                }
            }
        }
        return ans;
    }
};