var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
  if (list.head === null) {
    list.tail = Node(value);
    list.head = list.tail;
  } else {
    list.tail.next = Node(value);
    list.tail = list.tail.next;
  }
  };

  list.removeHead = function(){
    var temp = list.head;
    list.head = temp.next;
    return temp.value;
  };

  list.contains = function(target){
    var current = list.head;
    while (current !== null) {
      if (current.value === target) {
        return true;
      } 
      current = current.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 addToTail = 0(1);
 removeHead = 0(1);
 contains = 0(n);
 */
