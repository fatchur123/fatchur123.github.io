var x = 1;
function formInput() {
    var namadepan =     document.forms['bio']['nama depan'].value;
    var namabelakang =  document.forms['bio']['namabelakang'].value;
    var email =         document.forms['bio']['email'].value;
    var password =      document.forms['bio']['password'].value;
    var birthdate =     document.forms['bio']['birthdate'].value;
    var jeniskelamin =  document.forms['bio']['jenkel'].value;
    var d = [namadepan,namabelakang,email,password,birthdate,jeniskelamin];
    if(namadepan==null || namadepan=="" || namabelakang==null || namabelakang=="" || email==null || password=="" || password==null || password=="" || birthdate==null || birthdate=="" || jeniskelamin==null || jeniskelamin=="") 
    {
      alert("data tidak boleh kosong!!!");  }
    if(namadepan!=null && namadepan!="" && namabelakang!=null && namabelakang!="" && email!=null && password!="" && password!=null && password!="" && birthdate!=null && birthdate!="" && jeniskelamin!=null && jeniskelamin!="") 
    {
        var row = document.getElementById("output").insertRow(x);
        var i;
        for (i=0; i < d.length; i++) {
            var cell = row.insertCell(i);
            cell.innerHTML = d[i];
        }
        x++;
        alert("data berhasil di entry");
        } 
    }
var display_data = false;
function look_data() {
    if (display_data) {
        display_data = false;
        document.getElementById("output").style.display = "none";
        document.getElementById("detail").innerHTML = "Lihat Data";
    }
    else {
        display_data = true;
        document.getElementById("output").style.display = "inline";
        document.getElementById("detail").innerHTML = "Tutup Data";
    }
}
