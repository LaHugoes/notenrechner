let eingabeFelder = ['tfNote1','tfNote2','tfNote3','tfNote4','tfNote5', 'tfNote6', ]
let noten = [];
let summe = 0;
let anzahlNoten = 0;
let ergebnis;
let aktuelleEingabe;

//ließt textfelder aus und brechnet den durchschnitt nach eingabenüberprüfung

function tfAuslesen() {

    summe = 0;
    anzahlNoten = 0;
    ergebnis = 0;

    //überprüft, dass keine werte davor stehen, mit 0 starten

    for (let i = 0; i < eingabeFelder.length; i = i + 1) {
        aktuelleEingabe = parseInt(document.getElementById(eingabeFelder[i]).value);
        eingabeUeberpruefen(aktuelleEingabe);

        //überprüfung + dass i variable ist

    }

    ergebnis = summe / anzahlNoten;

    document.getElementById("ausgabe").innerHTML = ergebnis;
// bei ausgabe wird ergebnis angezeigt

    if (ergebnis < 5) {
        document.getElementById("ausgabe").style.color = "red"
    } else {
        if (ergebnis < 10) {
            document.getElementById("ausgabe").style.color = "purple"
        } else {

            if (ergebnis > 10) {
                document.getElementById("ausgabe").style.color = "green"
            }
        }
    }//anzeigen der farben bei bestimmten intervall
}
    function eingabeUeberpruefen(punkte) {
        if (isNaN(punkte)) {
            console.log("Keine Zahl");
        } else {
            anzahlNoten = anzahlNoten + 1;
            summe = summe + punkte;
        }
    }
//überprüfung, ob zahl, wenn eine durchschnitt rechnen