<?php

if(!$_POST['name']) {
	echo '<form action="create.php" method="post" enctype="multipart/form-data">';
	echo 'Name: <input type="text" name="name"><br>';
	echo 'Image: <input type="file" name="image"><br>';
	echo 'Party: <input type="text" name="party"><br>';
	echo 'Twitter: <input type="text" name="twitter"><br>';
	echo 'Facebook: <input type="text" name="facebook"><br>';
	echo 'Website: <input type="text" name="website"><br>';
	echo 'Age: <input type="text" name="age"><br>';
	echo 'Occupation: <input type="text" name="occupation"><br>';
	echo 'City: <input type="text" name="city"><br>';
	echo 'Incumbent: <input type="text" name="incumbent"><br>';
	echo '<input type="submit">';
	echo '</form>';
} else {
	$name = $_POST['name'];
	$filename = str_replace(' ', '', $name);
	//$filename = lcfirst($filename);
	$filename = strtolower(substr($filename, 0, 1)) . substr($filename, 1);
	$image = $_FILES["image"]["name"];
	$party = $_POST['party'];
	$twitter = $_POST['twitter'];
	$facebook = $_POST['facebook'];
	$website = $_POST['website'];
	$age = $_POST['age'];
	$occupation = $_POST['occupation'];
	$city = $_POST['city'];
	$incumbent = $_POST['incumbent'];

	$text = sprintf('<candidate><name>%s</name><image>%s</image><party>%s</party><twitter>%s</twitter><facebook>%s</facebook><website>%s</website><age>%s</age><occupation>%s</occupation><city>%s</city><incumbent>%s</incumbent></candidate>', $name, $image, $party, $twitter, $facebook, $website, $age, $occupation, $city, $incumbent);
	$filename = sprintf("xml/%s.xml", $filename);
	$file = fopen($filename, "w");
	fwrite($file, $text);
	fclose($file);

	move_uploaded_file($_FILES["image"]["tmp_name"], 'images/' . $_FILES["image"]["name"]);
}

?>
	