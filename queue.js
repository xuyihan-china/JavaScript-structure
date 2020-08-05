// 队列是一种受限制的线性结构 可以在队列 队列首部（左） 删除 在队列尾部添加 （右）
//队列和栈
//删除： 左队右栈 添加 都是右侧 first in last out  FIFO 应用 打印队列 和 多线程队列
function Queue(){
    this.items = []
    Queue.prototype.enqueue = function(element){
        this.items.push(element)
    }
    Queue.prototype.dequeue = function(){
        return this.items.shift()
    }
    Queue.prototype.front =function(){
        return this.items[0]
    }
    Queue.prototype.isEmpty = function(){
        return this.items.length == 0
    }
    Queue.prototype.size =function(){
        return this.items.length
    }
    Queue.prototype.toString = function(){
        let resString = ''
        for(let i=0 ;i<this.items.length;i++){
            resString += this.items[i] + ' '
        }
        return resString
    }
}
var q = new Queue()
q.enqueue('jd')
q.enqueue('fdslkfj')
console.log(q.size())
console.log(q.toString())
q.dequeue()
console.log(q)