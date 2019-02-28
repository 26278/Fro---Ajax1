<?php
	$firstName = $_GET['firstName'];
	$lastName = $_GET['lastName'];
	$age = $_GET['age'];
	$email = $_GET['email'];
	$date = date("d/m/Y");
	$time = date("H:i:s");


	echo "<h2>Responsive Demo Form</h2><h3>";
	echo "You submitted the following information<br><ul>";

	echo "<li>Name: <strong> $firstName  $lastName</strong></li>";
	echo "<li>Age: $age</li>";
	echo "<li>e-mail adres: $email</li>";
	echo "</ul></h3>";
	echo "<span>Form received at:<br>" . $date . "<br>Time: " . $time;
	echo "</span>";
 ?>