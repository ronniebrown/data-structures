var Queue = function(){
  var someInstance = {};

  // Use an object with numeric keys to store values
  var qCount = 0;

  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[qCount] = value;
    qCount += 1;
  };

  someInstance.dequeue = function(){
    if(qCount) {
      qCount -= 1;
    }
    var result = storage[0];
    delete storage[qCount];
    return result;
  };

  someInstance.size = function(){    
    return qCount;
  };

  return someInstance;
};

// enqueue(a) -> 0 (qCount = 1)
// enqueue(b) -> 1 (qCount = 2)
// dequeue() -> a (0)
// enqueue(c) -> 1
