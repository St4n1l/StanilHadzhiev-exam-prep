const assert = require('assert');
const fetch = require('node-fetch');

suite('About page', function() {
  test('Page title', async function() {
    let res = await fetch("http://localhost:8080/about");
    let body = await res.text();
    assert.ok(body.includes("<h1>About</h1>"));
    assert.ok(body.includes("<p>This is the Regular exam for Software Engineering and DevOps course @ SoftUni</p>"));
  });
});