function Set (){
    this.items ={}
    Set.prototype.add =function(value){
        if(this.has(value)){
            return false
        }
        this.items[value]= value//可能是字符串 可能是数字
        return true
    }
    Set.prototype.has = function(value){
        return this.hasOwnProperty(value)
    }
    Set.prototype.remove = function(value){
        if(!this.has(value)){
            return false
        }
        delete  this.items[value]
        return true
    }
    Set.prototype.clear = function(){
        this.items = {}
    }
    Set.prototype.size = function(){
        return Object.keys(this.items).length
    }
    Set.prototype.values = function(){
        return  Object.keys(this.items)
    }   
    Set.prototype.union = function(otherSet){
        var unionSet = new Set()
        var values = this.values()
        for(var i=0 ;i<values.length;i++){
            unionSet.add(values[i])
        }
        values = otherSet.values()
        for(var i=0 ;i<values.lengthl;i++){
            unionSet.add(values[i])
        }
        return unionSet
    }
    Set.prototype.intersection =function(otherSet){
        var intersection = new Set()
        var values = this.values()
        for(var i=0 ;i<values.length;i++){
            var item = values[i]
            if(otherSet.has(item)){
                intersection.add(item)
            }
        }
        return IntersectionSet
    }
    Set.prototype.difference = function(otherSet){
        var differenceSet = new Set()
        var values = this.values()
        for(var i=0 ;i<values.length;i++){
            var item= values[i]
            if(!otherSet.has(item)){
                differenceSet.add(item)
            }
        }
        return differenceSet
    }
    Set.prototype.subset =function(otherSet){
        var values = this.values()
        for(var i=0;i<values.length;i++){
            var item = values[i]
            if(!otherSet.has(item)){
                return false
            }
        }
        return true
    }
}
var set = new Set()
set.add('xuyihan')
set.add('xyh')
set.add('mouse')
var st = new Set()
st.add('wy')
st.add('yu')
st.add('ui')
st.add('y')
console.log(st.union(Set))
