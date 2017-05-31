$(document).ready(function(){
	var gridSize = 4;
	var newSize = (600/gridSize);
	
	for(var i=0; i < gridSize; i++){
		for (var x=0; x < gridSize; x++){
			$('.grid').append('<div class="square"></div>');
			$('.square').css("height", newSize);
			$('.square').css("width", newSize);
		};
	};

	//Default colour change
	$(".square").mouseenter(function(){
		$(this).css("background", "red");
	});

	
	//New grid
	$('.new').click(function(){
		gridSize = prompt("Please confirm the size of the grid.");
		$('.grid').empty();
		var newSize = (600/gridSize);
		for(var i=0; i < gridSize; i++){
			for (var x=0; x < gridSize; x++){
				$('.grid').append('<div class="square"></div>');
				$('.square').css("height", newSize);
				$('.square').css("width", newSize);
			};
		};
		$(".square").mouseenter(function(){
			$(this).css("background", "red");
		});
	});

	//Clear
	$('.clear').click(function(){
		$('.grid').empty();
		var newSize = (600/gridSize);
		for(var i=0; i < gridSize; i++){
			for (var x=0; x < gridSize; x++){
				$('.grid').append('<div class="square"></div>');
				$('.square').css("height", newSize);
				$('.square').css("width", newSize);
			};
		};
		$(".square").mouseenter(function(){
			$(this).css("background", "red");
		});
	});
});