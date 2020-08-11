
function hashTable(){
    this.storage  = []
    //当前存放了多少了个元素
    this.count = 0
    //loadFactor >0.75 数组扩容  <0.25 数组变小
    this.limit = 7
    //总长度
    hashTable.prototype.hasFunc=function(str,size){
        //长度为size的数组中
        //定义hashcode变量
        var hashCode =0
        //霍纳算法 设置code值
        //charCode 编码 计算出 字符串的Unicode编码
        for(var i=0 ;i<str.length;i++){
            //选择质数 让其随机分布
            hashCode =37*hashCode+str.charCodeAt(i)
        }
        var index = hashCode %size
        return index
    }

    hashTable.prototype.put = function(key,value){
        //1.根据key获取index
        var index = this.hasFunc(key,this.limit)
        //2.根据index 取出bucket
        var bucket = this.storage[index]
        //3.判断bucket是否为空
        if(bucket==null){
            bucket =[]
            this.storage[index] = bucket
        }
        //4.判断是否修改数据
        for(var i=0 ;i<bucket.length;i++){
            var tuple = bucket[i]
            if(tuple[0]==key){
                tuple[1]=value
                return 
            }
        }
        //进行添加操作
        bucket.push([key,value])
        this.count++
    }

    //获取操作
    hashTable.prototype.get = function(key){
        //根据key获取index
        var index = this.hasFunc(key,this.limit)
        //根据index获取 对应的bucket
        var bucket = this.storage[index]
        if(bucket== null){
            return null
        }else{
            
            for(var i=0;i<bucket.length;i++){
                var tuple = bucket[i]
                if(tuple[0]==value){
                    return tuple[1]
                }
            }
            return null
        }
    }
    hashTable.prototype.remove = function(key){
        var index = this.hasFunc(key,this.limit)
        var bucket = this.storage[index]
        if(bucket==undefined){
            return null
        }
        for (var i=0 ;i<bucket.length;i++){
            var tuple = bucket[i]
            if(tuple[0]==value){
                bucket.splice(i,1)
                this.count--
                if (this.limit > 7 && this.count / this.limit < this.minLoadFactor) {
                    this.resize(this.getPrime(Math.floor(this.limit / 2)));
                }
                return tuple
        }
    }
    }
    hashTable.prototype.isEmpty= function(){
        return this.count==0
    }
    hashTable.prototype.size = function(){
        return this.count 
    }
    //数组的扩容
    
}