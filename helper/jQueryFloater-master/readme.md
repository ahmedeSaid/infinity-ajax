# Jquery Floater 0.6

##  How to get (and contribute) Floater

  1.  Start a new project in git.
  2.  Fork http://github.com/piotrfalba/jquery-floater
  3.  Add jquery-floater as submodules of your project...
           git submodule add git@github.com:_YOU_/jquery-floater.git jquery-floater
  4.  Learn a little more about submodules ...
           http://johnleach.co.uk/words/archives/2008/10/12/323/git-submodules-in-n-easy-steps
  5.  Make changes in Floater, and push them back to your fork.
  6.  Make a pull request to your fork.
 
  
## Getting Started with Floater

	$("#container").floater({
		duration : 400,				- duration of animation
		minimumMargin: 20,			- minimum margin between floating boxes
		maximumMargin: 40,			- maximum margin between floating boxes
		easing : 'linear',			- easing
		boxClass : '.box',			- floating box selector
		fluidHeight : false,		- give true for fluid container height
		callback : function() {
			...						- your callback function
		}
	});