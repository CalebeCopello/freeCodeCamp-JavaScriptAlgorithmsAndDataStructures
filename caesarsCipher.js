function rot13(str) {
    let answer = ''
    let abc = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

    for (let i = 0; i < str.length; i++) {
        if (abc.indexOf(str[i]) >= 13) {
            answer += abc[abc.indexOf(str[i]) - 13]
        } else if (abc.indexOf(str[i]) < 13 && abc.indexOf(str[i]) > -1) {
            answer += abc[abc.indexOf(str[i]) + 13] 
        }  else {
            answer += str[i]
        }
    }
    return answer
}

rot13("SERR PBQR PNZC")