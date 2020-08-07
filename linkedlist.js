//对链表的封装  单向链表
function LinkedList(){
        //内部类
        function node(data){
            this.data = data
            this.next = null
        }

    this.length = 0;
    this.head = null



    // append 在尾部添加元素 会new 一个对象 this 就有了实际意义
    LinkedList.prototype.append = function(data){
        var newNode = new node(data)
        // 创建了 newNode.data next
        if(this.length ==0){
            this.head = newNode　
        }else{
            var current = this.head
            // 找到最后一个元素
            while(current.next){
                current = current.next
            }
            current.next =newNode
            
        }   
        this.length+=1

    //toString
    LinkedList.prototype.toString =function(){
        var current = this.head
        var listString = ""
        while(current){
            listString += "," + current.data // object's property
            current = current.next
        }
        return listString
    }
    // insert 特定位置
    LinkedList.prototype.insert = function(position,data){
        if(position<0 || position<this.length)
        return false
        var node = new Node(data)
        if(position == 0){
            newNode.next = this.head
            this.head = newNode
        }else{
            var index =0;
            var current = this.head
            var previous = null
            while(index++ < position){
            //获取超过一个
            previous = current
            current = current.next // 后面一个元素 
            //position =3
            //index = 0  current = this.head  1  previous  null
            //index = 1  current = node       2(讲的是元素第一个元素 第二个节点 )  previous   1
            //index = 2  current = node       3  previous   2
            //index = 3  current = node       4  previous   3
            // 
        }
        previous.next = newNode
        newNode.next = current
    // get 指定节点的元素
    LinkedList.prototype.get = function(position){
        if(position<0 || position>this.length-1) return false
        var index = 0
        while(index++ < position){
            current = current.next
        }
        return current.data
    }
    // indexOf 有没有这个元素
    LinkedList.prototype.indexOf = function(data){
        var current = this.head
        var position =0
        var flag = false
        for(let i = 0 ;i<this.length ;i++){
            if(current.data == data){
                flag = true
                break
            }else{
                current = current.next
                position++
            }
        }
        if(flag == true){
            return -1
        }else{
            return position
        }
    }
    // remove 删除
    LinkedList.prototype.remove = function(data){
        var position = this.indexOf(data)
        this.removeAt(position)
    }
    // removeAt 删除指定节点
    LinkedList.prototype.removeAt = function(position){
        if(position<0 || position>this.length-1) return null
        if(position == 0){
            let sec = this.head.next
            this.head = sec
        }else{
            var index =0
            var current = this.head
            while(index < position){
                previous = current
                current = current.next
                index++
            }
            previous.next = current.next
            
        }
        this.length --
    }
    // isEmpty 
    LinkedList.prototype.inEmpty = function(){
        if(this.length == 0){
            return true
        }else{
            return false
        }
    }
    // size
    LinkedList.prototype.size = function(){
        return this.length
    }
    // update 修改某个位置的元素  
    }  
}
var list =new LinkedList();
list.append('ab')
list.append('fsd')
list.append('dfsf')
console.log(list.toString())
    }
}