#!/usr/bin/node

// ['C is fun', 'Python is cool', 'JavaScript is amazing'].forEach((e) => console.log(e));

const msg = ['C is fun', 'Python is cool', 'JavaScript is amazing'];
for (const msgs in msg) {
	console.log(msg[msgs]);
}
