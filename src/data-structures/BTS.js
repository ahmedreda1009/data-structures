import Queue from './Queue.js';

class Node {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BinarySearchTree {
    constructor() {
        this.root = null;
    }

    //                  4
    //       2C                      6
    // 1           3         5              7
    // gpt recusion
    insert(value, current = this.root) {
        // If the tree is empty, create a new node and set it as the root
        if (!current) {
            this.root = new Node(value);
            return this.root;
        }

        if (value < current.value) {
            // If the value is less than the current node's value, go left
            if (!current.left) {
                current.left = new Node(value);
                return current.left;
            } else {
                // Recursively insert on the left subtree
                return this.insert(value, current.left);
            }
        } else if (value > current.value) {
            // If the value is greater than the current node's value, go right
            if (!current.right) {
                current.right = new Node(value);
                return current.right;
            } else {
                // Recursively insert on the right subtree
                return this.insert(value, current.right);
            }
        }

        // If the value is equal to the current node's value, do nothing (no duplicates allowed)
        return current;
    }
    // my recursion XXXXXX -> NOT WORKING
    // insert(value, current = this.root) {
    //     if (!current) {
    //         console.log('base case');
    //         let newNode = new Node(value);
    //         // current = newNode;
    //         console.log(current);
    //         return newNode;
    //     }

    //     if (value < current.value) {
    //         console.log('left side');
    //         current.left = this.insert(value, current.left);
    //     } else if (value > current.value) {
    //         console.log('right side');
    //         current.right = this.insert(value, current.right);
    //     }

    //     return current;
    // }

    // without recursion
    // insert(value) {
    //     let newNode = new Node(value);

    //     if (!this.root) {
    //         this.root = newNode;
    //         return this;
    //     }

    //     let current = this.root;

    //     while (true) {
    //         if (value === current.value) return undefined;

    //         if (value < current?.value) {
    //             if (!current.left) {
    //                 current.left = newNode;
    //                 return this;
    //             }

    //             current = current.left;
    //         } else if (value > current?.value) {
    //             if (!current.right) {
    //                 current.right = newNode;
    //                 return this;
    //             }

    //             current = current.right;
    //         }
    //     }

    // }


    //                  4
    //       2C                      6
    // 1           3         5              7
    find(value, current = this.root) {
        if (!current) return 'Not found in the Tree';

        if (value === current.value) {
            return current.value;
        } else if (value < current.value) {
            return this.find(value, current.left);
        } else {
            return this.find(value, current.right);
        }
    }

    // insert(value, current = this.root) {
    //     if (!current) {
    //         let newNode = new Node(value);

    //         if (!this.root) {
    //             this.root = newNode;
    //         }

    //         return newNode;
    //     }

    //     if (value < current.value) {
    //         return this.insert(value, current.left);
    //     } else if (value > current.value) {
    //         return this.insert(value, current.right);
    //     }
    // }

    //         10
    //   6          15
    // 3   8            20
    // queue: []
    // visited: [10, 6, 15, 3, 8, 20]
    /*
    ////////////////// pseudo code:
    1. make current (root at beginning)
    2. add current to the quque
    3. check if there is element in the queue
        a. remove the first element from queue and add it to the visited
            and let it be the current.
        c. if there is left to the current add it to the queue
        d. if there is right to the current add it to the queue
    4. check again if there is element in the queue

    note: here we check for the left and right of every current first
            and add those left and right to the queue because we do it breadth first.
    */
    // breadth first search (traverse)
    BFS() {
        // let queue = new Queue();
        // let visited = new Queue();

        let queue = [], visited = [];

        let current = this.root;

        // if (current) {
        // queue.enqueue(current);
        queue.unshift(current);
        // console.log(queue);
        // }

        while (queue.length) {
            // current = queue.dequeue();
            current = queue.shift();
            // visited.enqueue(current);
            visited.push(current.value);

            if (current.left) {
                // queue.enqueue(current.left);
                queue.push(current.left);
            }

            if (current.right) {
                // queue.enqueue(current.right);
                queue.push(current.right);
            }
        }

        return visited;
    }
    //         10
    //   6          15
    // 3   8            20
    // visited: [10, 6, 3, 8, 15, 20]
    // we visit all the left nodes first and then we visit the right ones.
    // depth first search (pre order)
    DFSPreOrder() {
        let visited = [];
        let current = this.root;

        function helper(current) {
            visited.push(current.value);
            console.log(current.value);
            // if (current.left) helper(current.left);
            // if (current.right) helper(current.right);

            // equal to if conditions
            current.left && helper(current.left);
            current.right && helper(current.right);
        }

        helper(current);

        return visited;
    }

    // GPT
    // DFSPreOrder() {
    //     let visited = [];
    //     let current = this.root;

    //     function helper(node) {
    //         if (node) {
    //             visited.push(node.value);
    //             console.log(node.value);
    //             helper(node.left);
    //             helper(node.right);
    //         }
    //     }

    //     helper(current);

    //     return visited;
    // }


    // DFSPreOrder(n = this.root) {
    //     if (!n) return []; // it's more readable than ternary
    //     return [n.val, ...this.DFSPreOrder(n.left), ...this.DFSPreOrder(n.right)];
    // }

    //         10
    //   6          15
    // 3   8            20
    // visited: [10, 6, 3, 8, 15, 20]
    DFSPreOrder(current = this.root) {
        if (!current) return [];

        // return [current.value, ...this.DFSPreOrder(current.left), ...this.DFSPreOrder(current.right)];

        // if (current.left) return [current.value].concat(this.DFSPreOrder(current.left));
        // if (current.right) return [current.value].concat(this.DFSPreOrder(current.right));

        let leftSide = this.DFSPreOrder(current.left);
        let rightSide = this.DFSPreOrder(current.right);

        return [current.value].concat(...leftSide, ...rightSide);
    }
    //         10
    //   6          15
    // 3   8            20
    // visited: [3, 8, 6, 20, 15, 10]
    DFSPostOrder(current = this.root) {
        if (!current) return [];

        let leftSide = this.DFSPostOrder(current.left);
        let rightSide = this.DFSPostOrder(current.right);

        // return [...leftSide].concat(...rightSide, current.value);
        return [...leftSide, ...rightSide, current.value];
    }

    //         10
    //   6          15
    // 3   8            20
    // visited: [3, 6, 8, 10, 15, 20]
    DFSInOrder(current = this.root) {
        if (!current) return [];

        // let leftSide = this.DFSInOrder(current.left);
        // leftSide = [...leftSide].concat(current.value);
        // let rightSide = this.DFSInOrder(current.right);

        let leftSide = [...this.DFSInOrder(current.left)].concat(current.value);
        let rightSide = this.DFSInOrder(current.right);

        return [...leftSide, ...rightSide];
    }
}

let bts = new BinarySearchTree();
// console.log(bts.insert(10, bts.root));
console.log('####################################');
console.log('############# INSERT ###############');
console.log('####################################');
console.log(bts.insert(10));
console.log(bts.insert(6));
console.log(bts.insert(15));
console.log(bts.insert(3));
console.log(bts.insert(8));
console.log(bts.insert(20));
// console.log(bts.insert(7));
// console.log(bts.insert(3));
console.log(bts);
console.log('###################################');
console.log('############# FIND ################');
console.log('###################################');

console.log(bts.find(1));
console.log(bts.find(20));
console.log(bts.find(5));
console.log('###################################');
console.log('############# BFS #################');
console.log('###################################');
console.log(bts.BFS());
console.log('###################################');
console.log('############# DFS (pre order) #####');
console.log('###################################');
console.log(bts.DFSPreOrder());
console.log('###################################');
console.log('############# DFS (post order) ####');
console.log('###################################');
console.log(bts.DFSPostOrder());
console.log('###################################');
console.log('############# DFS (in order) ######');
console.log('###################################');
console.log(bts.DFSInOrder());