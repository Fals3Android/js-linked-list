var linkedList = { head: null, nodes: 0 };

/**
 * Simple add function to sequentially 
 * insert new nodes to our linked list
 * add a node if the list is empty otherwise
 * find the next null pointer to append a node
 */
function add(value) {
	var node = { data: value, next: null };
	var current = null;

	if(!linkedList.head) {
		linkedList.head = node; 
    linkedList.nodes++;
	} else {
		current = linkedList.head 
		while(current.next) {
			current = current.next; 
			linkedList.nodes++;
		}
		current.next = node; 
		linkedList.nodes++;
	}
}

/**
 * Insert a value after a matched data value
 * by modifying the new nodes pointer to equal
 * the matched nodes pointer and then re-assigning 
 * the new node to the matched nodes pointer
 */
function insertAfter(node, newNode) {
	var current = linkedList.head;
	while(current.next) {
		if(current.data === node.data) {
			newNode.next = current.next;
			current.next = newNode;
			linkedList.nodes++;
			break;
		}
		current = current.next;
	}
}

/**
 * Insert a new node at the beginning of a list,
 * make that new node equal the first node in the list
 * and return the new list
 */
function insertBeginning(list, newNode) {
		newNode.next = list.head;
		list.head = newNode;
		list.nodes++;
		return list;
}

/**
 * Remove a node after the specified node
 */
function removeAfter(node) {
	var current = linkedList.head;
	while(current.next) {
		if(current.data === node.data) {
			current.next = current.next.next;
			linkedList.nodes--;
			break;
		}	
		current = current.next;
	}
} 

/**
 * Remove a node from the beginning of the list
 */
function removeBeginning(list) {
	list.head = list.head.next;
	list.nodes--;
	return list;
}

module.exports = {
  add,
  insertAfter,
  insertBeginning,
  removeAfter,
  removeBeginning,
  linkedList
}