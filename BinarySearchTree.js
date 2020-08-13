function BinarySearchTree(){
    function Node(key){
        this.key =key
        this.left = null
        this.right = null
    }
    this.root = null
    BinarySearchTree.prototype.insert = function(key){
        var newNode = new Node(key)
        if(this.root == null){
            //把现有的节点设置为根节点
            this.root = newNode
            this.insertNode(this.root ,newNode)
        }else{
            //调用的时候就已经创建好了节点
            this.insertNode(this.root ,newNode)
        }
    }
    BinarySearchTree.prototype.insertNode = function(node,newNode){
        if(newNode.key<node.key){
            //向左边插入数据
            if(node.left== null){
                node.left = newNode
            }else{
                //递归放入合适的位置
                this.insertNode(node.left,newNode)
            }
        }else{
            if(newNode.key>node.key){
                if(node.right== null){
                    node.right = newNode
                }else{
                    this.insertNode(node.right,newNode)
                }
            }
        }
    }
    BinarySearchTree.prototype.preOrderTraversal = function (handler) {
        this.preOrderTraversalNode(this.root, handler)
    }
    BinarySearchTree.prototype.preOrderTraversalNode = function (node, handler) {
        if (node !== null) {
            this.preOrderTraversalNode(node.left, handler)
            // 1.打印当前经过的节点
            handler(node.key)
            // 2.遍历所有的左子树
            
            // 3.遍历所有的右子树
            this.preOrderTraversalNode(node.right, handler)
        }
    }
    BinarySearchTree.prototype.min = function(){
        var node = this.root
        while(node.left !== null){
            node = node.left
        }
        return node.key
    }
    BinarySearchTree.prototype.max = function(){
        var node = this.root
        while(node.right !== null){
            node = node.right
        }
        return node.key
    }
    BinarySearchTree.prototype.search = function(key){
        return this.searchNode(key ,this.root)
    }
    BinarySearchTree.prototype.searchNode = function(key ,node){
    
        if(this.node == null){
            return false
        }
        if(node.key > key){
            return this.searchNode(key,node.left)
        }else if(node.key <key){
            return this.searchNode(key,node.right)
        }else{
            return true
        }
    }
}
var bst = new BinarySearchTree()
bst.insert(10)
bst.insert(12)
bst.insert(11)
bst.insert(145)
bst.insert(156)
bst.insert(178)
bst.insert(18)
bst.insert(19)
bst.insert(189)
bst.insert(3)
bst.insert(1)
// bst.insert(6)
console.log(bst)
var resultString = ""
bst.preOrderTraversal(function(key){
    resultString += key + " "
})
console.log(resultString)
//根组件 创建
console.log(bst.max())
console.log(bst.search(1844))

