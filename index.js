const single = require("./singly-linked-lists/singly-functional");

single.add("hello");
single.add("everyone!");
single.insertAfter({data: "hello"}, {data: "world"});
single.insertBeginning(single.linkedList, {data: "Here's My Example, "});

console.info(JSON.stringify(single.linkedList, null, 2));