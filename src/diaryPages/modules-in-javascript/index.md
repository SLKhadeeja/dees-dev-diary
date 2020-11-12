---
id: "2"
coverImage: "modules-in-javascript.jpeg"
title: "Modules in JavaScript"
author: "DeeDee"
date: "10 Jul, 2020"
description: "A beginners guide to modules in JavaScript"
---

JavaScript started very small needing only few lines of codes. As we advanced the scripts became extremely long and splitting became necessary. Though alot of JavaScript frameworks supported module usage, the good news is you can now use modules with vanilla JS.

**What is a module?**

A module is a small unit of reusable code that can be used as building blocks to avoid creating trivial applications. 
I know we've all "borrowed code" 😉somewhere. (🙌🏽 Yay!!! Open source 😁). So imagine you have a code so good you want to use it else where. What do you do? You copy and paste; Perfect!  But what if you decide to change something in that code? You will need to go to every instance of that code and change it 😳. Do not fear, modules are here🦸🏾‍♀️.

With Modules, reusing code is so easy and any form of editing or change will only be done once 😌. Modules offer ease of maintenance, this also makes debugging much easier because you do not need to wade through a mountain of code.

Modules have also solved the issue of "namespace pollution". What is namespace pollution you ask? This is a situation where completely *unrelated code* share a global variable. Sharing of global variables by unrelated code  is *not* desired. Modules prevent this by creating a private location/space for variables.

**Awesome 🤯, so how do I start?**

Quite easy, Let's take an example,
So we want to display

```
Hello Jane, You are using a module
```

We have alot of files that will use this but we don't want to keep copying and pasting. So what do we do? Write a Module for it of course!!!

Modules are just JavaScript functions with finnesse. _for this example, we'll assume every file to be in a single folder_

So we'll have our hello.js script like so

```
export function hi (name) {
    return `Hello, ${name}, You are using a module `;
    }
```

If you have multiple functions and want to export them all in one go, you can have it like this

```
function hi (name) {
    return `Hello, ${name}, You are using a module `;
    }

/* Some more functions */

export { hi, /*any other function*/ };
``` 

**Usage**

To use a module, you import it from _the path_ where it is kept. Because Modules use special functions, you will need to let the browser know to treat your script as a module using ''' type = "module" ''' as an attribute in your script tag.

Your index.html should look like this

```
<!doctype html>
<script type="module">
  import { hi } from './hello.js';
  document.body.innerHTML = hi('Jane');
  </script>
```

If you like to use external files like me, then you can have a file greet.js

```
import { hi } from './hello.js';
document.body.innerHTML = hi('Jane');
```

Then index.html will look like this

```
<!doctype html>
<script type="module" src= './greet.js' ></script>
```

And you have used a module. Yay you!!!🥳

**Things to remember**

Always use ``` export ``` for any function you wish to reuse.
Remember to ```import``` your module before using it in another file/script.
Also, I used ``` .js ``` here but it is possible to see ``` .mjs ``` being used. ``` .mjs ``` is generally used for clarity and to ensure that the files are parsed as modules by runtimes like node.