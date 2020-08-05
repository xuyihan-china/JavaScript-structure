function priorityQueue(){
    function priorityElement(element,priority){
        this.element = element
        this.priority = priority
    }
    this.items = []
    priorityQueue.prototype.enqueue = function(element,priority){
        var queueElement = new priorityElement(element,priority)
        if(this.items.length==0){
            this.items.push(queueElement)
        }else{
            var added = false
            for(var i=0;i<this.items.length;i++){
                if(queueElement.priority<this.items[i].priority){
                    this.items.splice(i,0,queueElement)
                    added = true
                    break
                }
            }
            if(added == false){
                this.items.push(queueElement)
            }

        }
    }
}
var pq = new priorityQueue()