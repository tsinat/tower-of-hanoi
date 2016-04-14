(function($){
	var firstContTop, secondContTop, thirdTop;
	var numClick = 0;
	var holder ;
    init();
    function init(){
    	$('.container').click(checkSelected);
    }
    function checkSelected(e){
    	if($(e.target).hasClass('selected')){
    		$(e.target).removeClass('selected');
    		numClick--;
    	}
    	else if($('.selected').length == 0){
    		$(e.target).addClass('selected');
    		holder = $(e.target)
    		numClick++;
    		//get the top element
    		//add attribute
    	}
    	else{
    		//get the clicked element and play the game 
    		//var first = $(holder).find.first()
    		var first = $(holder).first()
    		var temp = $(e.target).first();
    		checkAnswer(this,temp, first);
    		//removed = '';     		
    	}
    	
    }
    function checkAnswer(target, temp, first){
    	console.log(first.width(), temp.first().width());
    	// console.log(first.width(),temp.width());
    	if(first.width()< temp.width()){
    		$(target).prepend(holder);
    		$($(holder)).removeClass('selected');
    		checkGame();	
    	}
    	
    }
    function checkGame(){
    	if($('.third').children().length == 3)
    		var mess =$('message').textContent = 'you have won the game';
   }
})($);

//click on on of the container divs
//check if there is other selected container
//if there is no selected container  select the clicked container and add class selected and attributes


//check if the clicked tower has child elements
//pick to element on the top of the stack on the selected container
//put to on temp

//if the player clicked on the selected container for second time remove the select class

//if user clicked on the other container divs 
//check if the container div is empty
//stack the element on the temp on the empty container

//if the clicked container has previous element on it 
//compare if it is smaller that the one we are holding on the temp

//if it is smaller than the previous element stack it on the top of that container 
//check if he has won the game
//if not tell the user it is illegal move

