class Node{
    constructor (data){
        this.data = data;
        this.father = null;
        this.children = null;
        this.cost = 0;
    }

    getData(){
        return this.data;
    }

    getFather(){
        return this.father;
    }

    setFather(father){
        this.fahter = father;
    }

    getChildren(){
        return this.children;
    }

    setChildren(children){
        this.children = children;

        if(children != null){
            for (let child in children){
                child.setFather(this);
            }   
        }
    }

    getCost(){
        return this.cost;
    }

    setCost(cost){
        this.cost = cost
    }

    equals(node){
        return node.getData() == this.getData();
    }

    inArray(arr){
        for (let node in arr){
            if (node.equals(this)){
                return true;
            }
        }

        return false
    }
}

export default Node