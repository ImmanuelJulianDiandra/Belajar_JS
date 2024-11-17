function submitData() {
    var angka1 = parseInt(document.getElementById("angka1").value);
    var angka2 = parseInt(document.getElementById("angka2").value);
    var angka3 = parseInt(document.getElementById("angka3").value);

    if (angka1 >= angka2 && angka1 >= angka3) {
        alert(angka1 + " merupakan angka yang paling besar dari " + angka2 + " dan " + angka3);
    } else if (angka2 >= angka1 && angka2 >= angka3) {
        alert(angka2 + " merupakan angka yang paling besar dari " + angka1 + " dan " + angka3);
    } else if (angka3 >= angka1 && angka3 >= angka2) {
        alert(angka3 + " merupakan angka yang paling besar dari " + angka1 + " dan " + angka2);
    } else {
        alert("Semua angka sama");
    }
}
