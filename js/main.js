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
        father.setChildren(this)
    }

    getChildren(){
        return this.children;
    }

    setChildren(children){
        this.children = children;

        if(children != null){
            for (let child of this.children){
                child.father = this;
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
        return this.getData() == node.getData();
    }

    inArray(arr){
        for (let node of arr){
            if (this.equals(node)){
                return true;
            }
        }

        return false
    }
}

const dream = [
    [1, 3, 1],
    [1, 5, 1],
    [4, 2, 1],
]

const sortNodeArr = (nodeA, nodeB)=> nodeA ==  nodeB? 0: nodeA < nodeB? 1: -1;

const findBestPath = (start = [0, 0], end = [2, 2])=>{
    const visited = [];
    const noVisited = [];

    const startNode = new Node(start);
    startNode.setCost(dream[start[0]][start[1]])
    noVisited.push(startNode)

    solved = false;

    while(!solved && noVisited.length > 0){
        noVisited.sort(sortNodeArr)
        const node = noVisited.shift();
        visited.push(node);


        if(node.getData()[0] == end[0] && node.getData()[1] == end[1]){
            solved = true;
            return node;
        }

        //Obtener nodos hijos
        const arrPosition = node.getData();
        const children = []

        if(arrPosition[0] < dream.length - 1){
            const childNode = new Node([arrPosition[0] +1, arrPosition[1]]);
            children.push(childNode);
            childNode.setCost(node.getCost() + dream[arrPosition[0] + 1][arrPosition[1]]);

            if(!childNode.inArray(visited)){
                if(childNode.inArray(noVisited)){
                    for (let n of noVisited){
                        if (childNode.equals(n) && n.getCost() > childNode.getCost()){//Eliminar n si el costo de childNode es menor
                            noVisited.splice(noVisited.indexOf(n), 1, childNode);
                        }
                    }
                }else{
                    noVisited.push(childNode);
                }
            }
        }

        if(arrPosition[1] < dream[0].length -1){
            const childNode = new Node([arrPosition[0], arrPosition[1] + 1]);
            children.push(childNode);
            childNode.setCost(node.getCost() + dream[arrPosition[0]][arrPosition[1] + 1]);

            if(!childNode.inArray(visited)){
                if(childNode.inArray(noVisited)){
                    for (let n of noVisited){
                        if (childNode.equals(n) && n.getCost() > childNode.getCost()){//Eliminar n si el costo de childNode es menor
                            noVisited.splice(noVisited.indexOf(n), 1, childNode);
                        }
                    }
                }else{
                    noVisited.push(childNode);
                }
            }
        }

        node.setChildren(children)
    }
}

solution = findBestPath([0, 0], [2, 2]);

console.log(solution.getCost());

const steps = []

while(solution != null){
    steps.push(solution.getData());
    solution = solution.getFather();
}


console.log(steps);
