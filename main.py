from tree import Node

dream = [
  [1, 3, 1],
  [1, 5, 1],
  [4, 2, 1],
]

start = [0, 0]

def compare(x):
    return x.getCost()


def getBestPath(start, end):
    visited = []
    noVisited = []

    solved = False

    startNode = Node(start)
    startNode.setCost(dream[start[0]] [start[1]])
    noVisited.append(startNode)

    while not solved and len(noVisited) > 0:
        noVisited.sort(key= compare)

        node = noVisited.pop(0)
        visited.append(node)

        if node.getData() == end:
            solved = True
            return node

        #Añadir nodos hijos

        arrPosicion = node.getData()

        children = []

        if arrPosicion[0] < len(dream) - 1:
            childNode = Node([arrPosicion[0] + 1, arrPosicion[1]])
            childNode.setCost(node.getCost() + dream[arrPosicion[0] + 1][arrPosicion[1]])

            children.append(childNode)

            if not childNode.inArray(visited):
                if childNode.inArray(noVisited):
                    for n in noVisited:
                        if childNode.equals(n) and n.getCost() > childNode.getCost():
                            noVisited.remove(n)
                            noVisited.append(childNode)
                else:
                    noVisited.append(childNode)

        if arrPosicion[1] < len(dream[0]) - 1:
            childNode = Node([arrPosicion[0], arrPosicion[1] +1])
            childNode.setCost(node. getCost() + dream[arrPosicion[0]][arrPosicion[1] + 1])

            children.append(childNode)

            if not childNode.inArray(visited):
                if childNode.inArray(noVisited):
                    for n in noVisited:
                        if childNode.equals(n) and n.getCost() > childNode.getCost():
                            noVisited.remove(n)
                            noVisited.append(childNode)
                else:
                    noVisited.append(childNode)

        node.setChildren(children)


solucion = getBestPath([0, 0], [2, 2])
print(solucion.getCost())

steps = []

while solucion != None:
    steps.append(solucion.getData())
    solucion = solucion.getFather()

steps.reverse()

print(steps)
