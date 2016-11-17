<!DOCTYPE html>
<html>
<title>Grid</title>
<meta name="viewport" content="width=device-width, initial-scale=1">
<link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.7/css/bootstrap.min.css" integrity="sha384-BVYiiSIFeK1dGmJRAkycuHAHRg32OmUcww7on3RYdg4Va+PmSTsz/K68vbdEjh4u" crossorigin="anonymous">
<meta charset="utf-8">
<link rel="stylesheet" href="css/w3.css">
 <script src="js/angular.min.js"></script>
 <script src="js/myScript.js"></script>
 <script src="js/girdDirective.js"></script>
 <script src="js/jquery.js"></script>
<style>
	.btnn{
		width : 48px;
	}
	.below {
  position: absolute;
  right: 0;
  bottom: 0;
  left: 0;
  padding: 1rem;
  background-color: #efefef;
  text-align: right;
}
td {
      border: 1px solid #ccc;
      padding: 5px;
    }
</style>
<body class="w3-sand" ng-app="myApp" ng-controller="myCtrl" >

	<header class="w3-container w3-teal w3-center">
  			<h1>Custom Grid Directive</h1> <br>  Assingment no 2.7 <br> Description
	</header>

			<grid-data  with-inline-editor resource="data/data.json"  ng-model="columns1">
				<!-- <grid-search> </grid-search> -->
		    <!--	<grid-columns>
				      <grid-column title="Name" field="name"></grid-column>
				      <grid-column title="Surname" field="surname"></grid-column>
				      <grid-column title="Fullname" field="fullname"></grid-column>
				      <grid-column title="Email" field="email"></grid-column>
		    	</grid-columns> -->

		  	</grid-data>
	<hr> <hr>

			<grid-data  withInlineEditor resource="data/data.json"  ng-model="columns2">


		  	</grid-data>
<footer class=" w3-teal"> Ajinkya Dhote</footer>
</body>
</html>
