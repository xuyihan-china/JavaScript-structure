/*
 * @Author: your name
 * @Date: 2020-08-08 10:54:54
 * @LastEditTime: 2020-08-08 21:13:13
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit 
 * @FilePath: \数据结构和算法\DoubleLinkedList.js
 */
function DoubleLinkedList() {
    this.head = null
    this.tail = null
    this.length = 0
    function Node(data) {
        this.head = null
        this.tail = null
        this.data = data
    }
    DoubleLinkedList.prototype.append = function (data) {
        var newNode = new Node(data)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            newNode.prev = this.tail
            this.tail.next = newNode
            this.tail = newNode
        }
        this.length += 1
    }

    DoubleLinkedList.prototype.BackwardString = function () {
        var current = this.head
        var res = ' '
        while (current) {
            res += current.data + " "
            current = current.next
        }
        return res
    }

    DoubleLinkedList.prototype.ForwardString = function () {
        var current = this.tail
        var res = ' '
        while (current) {
            res += current.data + ' '
            current = current.prev
        }
        return res
    }

    DoubleLinkedList.prototype.toString = function () {
        return this.BackwardString()
    }

    DoubleLinkedList.prototype.insert = function (position, data) {
        if (position < 0 || position > this.length) return false
        var newNode = new Node(data)
        if (this.length == 0) {
            this.head = newNode
            this.tail = newNode
        } else {
            if (position = 0) {
                this.head.prev = newNode
                newNode.next = this.head
                this.tail = newNode
            } else if (position == this.length) {
                newNode.prev = this.tail
                this.tail.next = newNode
                this.tail = newNode
            } else {
                var index = 0
                var current = this.head
                var previous = null
                while (index++ < position) {
                    previous = current
                    console.log(previous)
                    current = current.next
                }
                //双向链表是可以用prev 来表示前一个节点 所以不用previous这个变量
                // current.prev = newNode
                // newNode.next = current
                // previous.next = newNode
                // newNode.prev = previous
            }
            this.length++
            return true
        }
    }
    DoubleLinkedList.prototype.get = function (position) {
        if (position < 0 || position > this.length - 1) return null
        let index = 0
        let current = this.head
        while (index++ < position) {
            current = current.next
        }
        return current.data
        //可以使用二分查找
    }
    DoubleLinkedList.prototype.indexOf = function (data) {
        let index = 0
        let current = this.head
        let flag = false
        let position = null
        while (index++ < this.length) {
            if (data == current.data) {
                flag = true
                position = index
            } else {
                current = current.next
            }
        }
        if (flag = true) {
            return position
        } else {
            return -1
        }
    }
    DoubleLinkedList.prototype.update = function (position, data) {
        let index = 0
        let current = this.head
        while (index++ < position) {
            current = current.next
        }
        current.data = data
    }
    DoubleLinkedList.prototype.removeAt = function (position) {
        if (position < 0 || position > this.length) return null
        let index = 0
        let current = this.head
        while (index++ < position) {
            current = current.next
        }
        if (position == 0) {
            this.head = current.next
            current.next.prev = this.head
        } else if (position == this.length-1) {
            this.tail = current.prev
            current.prev.next = null
        } else {
            current.prev.next = current.next
            current.next.prev = current.prev
        }
        this.length--
    }
    DoubleLinkedList.prototype.remove = function(data){
        let position =this.indexOf(data)-1
        this.removeAt(position)
        this.length--
    }
    DoubleLinkedList.prototype.size= function(){
        return this.length
    }
    DoubleLinkedList.prototype.isEmpty = function(){
        return this.length==0
    }
    DoubleLinkedList.prototype.getFirst = function(){
        return this.head
    }
    DoubleLinkedList.prototype.getTail = function(){
        return this.tail
    }
}

var dl = new DoubleLinkedList()
dl.append("1")
dl.append("apple")
dl.append("tree")

dl.update(1, "yuy")
console.log(dl.toString())
dl.remove('tree')
console.log(dl.length)
console.log(dl.toString())