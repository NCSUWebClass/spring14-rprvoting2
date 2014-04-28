<?php

$candidate = $_GET["candidate"];
$filename = sprintf("xml/%s.xml", $candidate);
$xml = simplexml_load_file($filename);

echo '<div id="hiddendiv_' . $candidate . '" style="display:none; position:absolute; background:white; border:solid; padding:20px;">';
echo '<table>';
echo '<tr>';
echo '<td>';
echo '<a href="images/' . $xml->image . '">';
echo '<img src="images/' . $xml->image . '" width="165" height="300">';
echo '</a>';
echo '</td>';
echo '<td>';
echo '<strong>' . $xml->name . '</strong><br>';
echo 'Party: ' . $xml->party . '<br>';

if(strlen($xml->twitter))
	echo '<a href="' . $xml->twitter . '" target="_blank">Twitter</a><br>';

if(strlen($xml->facebook))
	echo '<a href="' . $xml->facebook . '" target="_blank">Facebook</a><br>';

if(strlen($xml->website))
	echo '<a href="' . $xml->website . '" target="_blank">Website</a><br>';

if(strlen($xml->age))
	echo 'Age: ' . $xml->age . '<br>';

if(strlen($xml->occupation))
	echo 'Occupation: ' . $xml->occupation . '<br>';

if(strlen($xml->city))
	echo 'City: ' . $xml->city . '<br>';

if(strlen($xml->incumbent))
	echo 'Incumbent: ' . $xml->incumbent;
echo '</td>';
echo '</tr>';
echo '</table>';
echo '</div>';

?>
