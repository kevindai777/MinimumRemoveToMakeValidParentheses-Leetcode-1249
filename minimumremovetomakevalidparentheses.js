//Objective is to find the least number of parentheses to be removed to make a 
//string valid. Then return the valid string.

let s = "lee(t(c)o)de)"


//O(n) solution taht uses a stack.

let indexesToRemove = new Set()
let stack = []

//If we pass an opening parentheses, add the index of it into the set
//If we pass a closing parentheses, either add it's index to the set
//if the stack is empty ELSE pop from the stack
for (let i = 0; i < s.length; i++) {
    if (s.charAt(i) == '(') {
        stack.push(i)
    } else if (s.charAt(i) == ')') {
        if (stack.length == 0) {
            indexesToRemove.add(i)
        } else {
            stack.pop()
        }
    }
}

//If the stack still has anything, push them into the set
while (stack.length > 0) {
    indexesToRemove.push(stack.pop())
}

let result = ''

//Add everything not in the set into the answer
for (let i = 0; i < s.length; i++) {
    if (!indexesToRemove.has(i)) {
        result += s.charAt(i)
    }
}

return result