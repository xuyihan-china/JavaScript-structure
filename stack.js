function Stack(elements) {
    this.items = []
    Stack.prototype.push = function (elements) {
        this.items.push(elements)
    }
    Stack.prototype.pop = function () {
        return this.items.pop()
    }
    Stack.prototype.peek = function () {
        return this.items[this.items.length - 1]
    }
    Stack.prototype.isEmpty = function () {
        return this.items.length == 0
    }
    Stack.prototype.size = function () {
        return this.items.length
    }
    Stack.prototype.toString = function () {
        let resultString = '';
        for (let i = 0; i < this.items.length; i++) {
            resultString += this.items[i] + ' '
        }
        return resultString
    }
}
//栈只可以在栈顶插入或者删除元素 所以收到限制 
let s = new Stack()
function Ten(number) {
    while (number >=1) {
        if (number % 2 == 0) {
            s.push(0)
        } else {
            s.push(1)
        }
        number = Math.floor(number/2)
    }
    return s
}
Ten(1000)
while(!s.isEmpty()){
    console.log(s.pop())
}
    
