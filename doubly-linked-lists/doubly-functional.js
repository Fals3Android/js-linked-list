var linkedList = { head: null, nodes: 0 };

/**
 * Add a node to a doubly linked list any nodes
 * that come after the first node will be able 
 * to reference all previous nodes
 */
function add(value) {
	var node = { data: value, next: null, back: null };

	if(!linkedList.head) {
		linkedList.head = node;
		linkedList.nodes++;
	}else {
		var current = linkedList.head,
			back = linkedList.head;
		while(current.next) {
			back = current;
			current = current.next;
			linkedList.nodes++;
		}
		current.next = { data: value, next: null, back: back };
		linkedList.nodes++;
	}
}
