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

	return linkedList;
}

add({ foo: 'bar' });
add({ foo: 'baz' });
add({ foo: 'bag' });

console.log(linkedList);