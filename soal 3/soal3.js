function hitungLuasPersegiPanjang(panjang, lebar) {
    luas = panjang * lebar;
    document.write("Panjang : " + panjang + "<br/>")
    document.write("Lebar : " + lebar + "<br/>" + "<br>" + "<br>")
    document.write("Luas Persegi Panjang : " + luas + "<br/>")
}

panjang = prompt("Panjang?")
lebar = prompt("Lebar?")
hitungLuasPersegiPanjang(panjang, lebar)