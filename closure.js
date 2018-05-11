// see this:
// https://www.w3schools.com/js/js_function_closures.asp
/*
* This is meant to be a very simple example of basic closure in javascript
* There are three function. They are all basically the same function.
* The only difference between them is parentheses syntax
*
* The function has two console.logs, a count variable, and an inner function.
*
* Visit the page at w3 schools above and then fiddle with the code here.
*
* A closure is when an inner function has persistent access to the variables
* in the outer function. Meaning, once the function is executed, it stays in memory,
* standing ready to execute the inner function on demand.
*
* In these examples the closure functions are self-invoking. Note that all the function
* calls at the bottom of the file are commented out. Yet there are logs in the console
* from both closure functions. Stop and ponder on that. It is really important and will
* help you understand what is happening.
*
* When you start to grasp what is happening, uncomment the function calls at the bottom
* and reload the page.
*
* */


// This will always reset count to zero
var noClosure = function () {
  console.log('no closure - logs every time, but does not count');
  var counter = 0;

  return function () {
    console.log('noClosure - inner function', counter);
    counter++;
  }
}; // <-- note the absence of parentheses - add them and this will become a closure


// the only real syntactical difference is the addition of parentheses at the end
var closure = function () {
  console.log('**************** with closure - logs once');
  var counter = 0;

  return function () {
    console.log('with closure - inner function', counter);
    counter++;
  }
}(); // <--- Note the parentheses, this syntax makes it work



// This is just like the one above, except it has an additional set of parentheses surrounding
// the whole outer function. It seems to work the same with or without the outer parentheses
var alsoClosure = (function () {
  console.log('**************** also closure - logs once');
  var counter = 0;

  return function () {
    console.log('alsoClosure - inner function', counter);
    counter++;
  }
})();



/* *********************
 There are TWO sets of 'noClosure' calls
 Uncomment these calls first
 Run them separately or you will get an error.
 **********************/
// noClosure()();  // <-- to access the inner function without closure, you have to add parentheses when you call it
// noClosure()();
// noClosure()();


/* *********************
 Leave these 'noClosure' calls commented out for now.
 Make sure to comment out the other ones before you run these
 **********************/
// noClosure(); //<--- Add parentheses to the original function, then uncomment these. Voila! Closure!
// noClosure();
// noClosure();


/*
  Run these all at once, concurrently with each separate set of 'noClosure' calls
* */
// closure();  // <--- no need to add a second set of parentheses here because they are added to the function declaration
// closure();
// closure();
// alsoClosure();
// alsoClosure();
// alsoClosure();
