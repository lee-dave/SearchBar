## To Start:
npm i (not sure why but it took 3 mins for me to install when testing)
npm run dev

My solution was to use a trie, it changes the 1 million dataset to an array of about 970. Because of the node structure of the data structure its lookup time is very fast. My dataset is not accurate because I am reusing and copying the same data over but the trie approach will definitely cut the size down because the word 'hel' would live within the nodes of 'hello' saving space.