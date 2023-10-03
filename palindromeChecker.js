function palindrome(str) {
    str = str.replace(/\W|_/g, '').toLowerCase()
    var reversed = str.split('').reverse().join('')
    if (reversed === str) return true
    return false
}

palindrome('eye')