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
    // indexOf 有没有这个元素
    // remove 删除
    // removeAt 删除指定节点
    // isEmpty 
    // size
    // get 指定节点的元素
    // update 修改某个位置的元素  
    }  
}
var list =new LinkedList();
list.append('ab')
list.append('fsd')
list.append('dfsf')
console.log(list.toString())