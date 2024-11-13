class Node():
    def __init__(self, data):
        self.data = data
        self.father = None
        self.children = None
        self.cost = 0

    
    def getData(self):
        return self.data
    
    def getCost(self):
        return self.cost
    
    def setCost(self, cost):
        self.cost = cost

    def getFather(self):
        return self.father

    def setFather(self, father):
        self.father = father
        father.setChildren(self)

    def getChildren(self):
        return self.children
    
    def setChildren(self, children):
        self.children= children

        if self.children!= None:
            for i in self.children:
                i.father= self

    def equals(self, node):
        return self.data == node.data
    
    def inArray(self, arr):
        for i in arr:
            if self.equals(i):
                return True
        return False