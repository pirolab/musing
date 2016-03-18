controllersmodule.controller('ConcertiCtrl', function($scope, User) {
	$scope.concerti = [
    { 
	title: 'Defrag', 
	id: 1 ,
	dataEvento:'03\/05\/2016',
	oraEvento:'22:00',
	image:'img/defrag.jpg',
	city:'Roma',
	typeOfevento:'Rock',
	costo:'3€',
	fase:'promozione'
	},
	{ 
	title: 'Le Mura', 
	id: 2 ,
	dataEvento:'03\/05\/2016',
	oraEvento:'22:00',
	image:'img/le_mura.jpg',
	city:'Roma',
	typeOfevento:'Rock',
	costo:'3€',
	fase:'scelta'
	},
	{ 
	title: 'Defrag', 
	id: 3 ,
	dataEvento:'03\/05\/2016',
	oraEvento:'22:00',
	image:'img/defrag.jpg',
	city:'Roma',
	typeOfevento:'Rock',
	costo:'3€',
	fase:'ingaggio'
	},
	{ 
	title: 'Le Mura', 
	id: 4 ,
	dataEvento:'03\/05\/2016',
	oraEvento:'22:00',
	image:'img/le_mura.jpg',
	city:'Roma',
	typeOfevento:'Rock',
	costo:'3€',
	fase:'candidatura'
	},
  ];
});
