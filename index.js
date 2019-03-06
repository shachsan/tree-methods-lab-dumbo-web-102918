class Node{
    constructor(data){
        this.data=data;
        this.left=null;
        this.right=null;
    }
}

class BinaryTree{
    constructor(node){
        this.rootNode=node;
    }

    addToTree(node, rNode=this.rootNode){
        
        if(node.data>=rNode.data){
            if(rNode.right!==null){
                let newRootNode=rNode.right;
                return this.addToTree(node, newRootNode)
            }else{
                rNode.right=node;
            }
        }else{
            if(rNode.left!==null){
                newRootNode=rNode.left;
                return this.addToTree(node, newRootNode)
            }else{
                rNode.left=node;
            }
        }
    }
}

node5=new Node(5);
node7=new Node(7);
node9=new Node(9);
node6=new Node(6)

bTree=new BinaryTree(node5);

bTree.addToTree(node7);
bTree.addToTree(node9);
bTree.addToTree(node6)

console.log(bTree);

