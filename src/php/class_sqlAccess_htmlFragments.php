<?php

//Aufgabe für Luisa:
//  1. Füge oben ein Kommentar ein, was diese Klasse tut
//  2. Schreibe eine Methode, welche die Verbindung zur Datenbank aufbaut
//  3. Füge eine Methode zur Klasse hinzu, welche einen Datensatz aus unserer Tabelle liest (SELECT), die WHERE-Bedingung soll die Felder
//     "page" und "content_area" beinhalten. Dazu soll die Methode zwei Parameter mit diesem Namen übergeben bekommen, welche dann
//     in der WHERE-Bedingung verwendet werden. Die Methode liest dann den Datensatz aus und gibt ihn zurück.

// Keine Ahnung, was diese Klasse tut

class HTMLFragmentsAccess{

    function connect(){
        $servername = "localhost";
        $username   = "root";
        $pw         = "";
        $db         = "mindlimitDB";

        // Verbindug herstellen
        $conn = new mysqli ($servername, $username, $pw, $db);

        // Verbindung prüfen
        if($conn->connect_error) {
            die("Verbindung fehlgeschlagen:". $conn->connect_error);
        }
        echo "Verbindung erfolgreich";
    }

    // Auslesen der Tabelle
    function select($page, $ca){
        $select = "SELECT content FROM mindlimitDB WHERE page = $page AND content_area = $ca";
        $result = $conn->query($select);

        if($result->num_rows > 0) {
            $row = $result->fetch_assoc();
            return $row["content"];
        }

    }

}

?>