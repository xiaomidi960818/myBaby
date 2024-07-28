// 回溯法
function findLetter(target) {
    const letters = [
        ['a', 'b', 'c'], // 0
        ['d', 'e', 'f'], // 1
        ['g', 'h', 'i'], // 2
        ['j', 'k', 'l'], // 3
        ['m', 'n', 'o'], // 4
        ['p', 'q', 'r', 's'], // 5
        ['t', 'u', 'v'], // 6
        ['w', 'x', 'y', 'z'] // 7
    ];
    const answer = [];
    let s = [];
    let targetAry = target.split(',');
    function backTrack(digits, index) {
        if(index === digits.length) {
            answer.push(s.join(','));
            return;
        }
        let digit = digits[index];
        let lets = letters[digit];
        lets.forEach(item => {
            s.push(item);
            backTrack(digits, index + 1);
            s.pop();
        })
    }
    backTrack(targetAry, 0);
    return answer;
}

console.log(findLetter('1,4,5'));