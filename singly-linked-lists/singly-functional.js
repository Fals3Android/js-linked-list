var linkedList = { head: null, nodes: 0 };

/**
 * Simple add function to sequentially 
 * insert new nodes to our linked list
 */
function add(value) {
	var node = { data: value, next: null };
	var current = null;

	if(!linkedList.head) {
		linkedList.head = node; // add the first node
	} else {
		current = linkedList.head // reference the first node
		// iterate through each pointer in the list until we reach the end of the list
		while(current.next) {
			current = current.next; 
			linkedList.nodes++;
		}
		current.next = node; // Set the last pointer of the list
		linkedList.nodes++;
	}
}

add({ foo: 'bar' });
add({ foo: 'baz' });
add({ foo: 'bag' });

/**
 * Insert a value after a matched data value
 * by modifying the new nodes pointer to equal
 * the matched nodes pointer and then re-assigning 
 * the new node to the matched nodes pointer
 */
function insertAfter(node, newNode) {
	var current = linkedList.head;
	while(current.next) {
		if(current.data = node.data) {
			// assign the matched nodes pointer to the new nodes pointer
			newNode.next = current.next;
			// reassign the matched nodes pointer to the newly modified node
			current.next = newNode;
			linkedList.nodes++;
			break;
		}
	}
}

insertAfter(
	{ data: { foo: 'bar' }, next: null }, 
	{ data: { foo: 'xxx' }, next: null }
);

console.log(linkedList.nodes);