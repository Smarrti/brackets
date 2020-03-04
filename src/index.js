module.exports = function check(str, bracketsConfig) {
    let answer = true;
    bracketsConfig.map(el => {
        let open = str.indexOf(el[0]);
        if (open == -1) {
            answer = false;
        }
        let close = str.indexOf(el[1], open);
        if (close == -1) {
            answer = false;
        }
        for (let i = open + 1; i < close; i++) {
            if ((str[i] == '}') || (str[i] == ')') || (str[i] == ']')) {
                answer = false;
            } else {
                if ((close - open) % 2 == 0) {
                    answer = false;
                    break
                }
                if ((str[i] == '{') || (str[i] == '(') || (str[i] == ']')) {
                    break;
                }
            }
        }
        str = str.substr(0, close) + str.substr(close + 1);
        str = str.substr(0, open) + str.substr(open + 1);
    })
    if ((str[0] == '}') || (str[0] == ')') || (str[0] == ']')) {
        answer = false;
    }
    if (str.length % 2 != 0) {
        answer = false;
    }
    return answer;

}
