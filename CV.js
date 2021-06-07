
var Name = "";
// var FathName = "";
var Address = "";
// var DOB = "";
var Mobile = "";
// var MyNIC = "";
// var Gender = "";
// var Status = "";
var nationality ="";
var email ="";


function PersSave(){

event.preventDefault()

    if(document.getElementById("name").value!="")
    {
        Name = document.getElementById("name").value;        
    }
    else{
        alert("Please Enter  >> Name <<")
    }
    
if( document.getElementById("mobil").value!=""){

    Mobile = document.getElementById("mobil").value;
}
else{
    alert("Please Enter >>Mobile number<<")
}
if( document.getElementById("addres").value!=""){

    Address = document.getElementById("addres").value;
}
else{
    alert("Please Enter >>Address<<")
}
if(document.getElementById("dateb").value!=""){

    DOB = document.getElementById("dateb").value;
}
else{
    alert("Please Enter >>Date Of Birth<<")
}
if(document.getElementById("number").value!=""){

    MyNIC = document.getElementById("number").value;

}
else{
    alert("Please Enter >>N.I.C<<")
}
if(document.getElementById("nationality").value!=""){

    nationality = document.getElementById("nationality").value;
}
else{
    alert("Please Enter >>nationality<<")
}
if(document.getElementById("email").value!=""){

    email = document.getElementById("email").value;
}
else{
    alert("Please Enter >>Email<<")
}


    if(document.getElementById('male').checked){
       Gender = document.getElementById('male').value
    }
    else if(document.getElementById('female').checked){
        Gender = document.getElementById('female').value
    }
    else{
        alert("Please Select Your >> Gender <<")
    }

if(document.getElementById("Married").checked){
    Status = document.getElementById("Married").value

}
else if(document.getElementById("UnMarried").checked){
    Status = document.getElementById("UnMarried").value
}

















    
}
    


function AddSkill() {


    var myskill = document.getElementById("MySkills").value
    Skills.push(myskill)
    console.log(myskill)
    var node = document.createElement("li");                 // Create a <li> node
    var texnode = document.createTextNode(myskill);         // Create a text node
    node.appendChild(texnode);                              // Append the text to <li>
    document.getElementById("Skills").appendChild(node);
}


function AddExp() {

    var myExp = document.getElementById("Exper").value
    Exp.push(myExp)
    console.log(myExp)
    var node = document.createElement("li");
    var textnode = document.createTextNode(myExp);         // Create a text node
    node.appendChild(textnode);                              // Append the text to <li>
    document.getElementById("Exp").appendChild(node);
    // var nod = document.createElement("h3");                 // Create a <li> node

    // var myExp = document.getElementById("Exper").value
    // var texnode = document.createTextNode(myExp);         // Create a text node

}
function AddQual() {
    var myQual = document.getElementById("qual").value
    Qual.push(myQual)
    console.log(myQual)
    var node = document.createElement("li");
    var textnode = document.createTextNode(myQual);         // Create a text node
    node.appendChild(textnode);
    document.getElementById("Qual").appendChild(node);

    //         var node = document.createElement("h4")
    //         var textnode = document.createTextNode(myQual)
    //         node.appendChild(textnode);                              
    // document.getElementById("Qual").appendChild(node);
}

function addOther(){
    var mycourse = document.getElementById("course").value
    Courses.push(mycourse)
console.log(mycourse)
var node = document.createElement("li");
var textnode = document.createTextNode(mycourse);        
node.appendChild(textnode);
document.getElementById("cour").appendChild(node);

}


var Skills = [];
var Exp = [];
var Qual = [];
var Courses = [];






function showCV() {   



    console.log(document.getElementById("mobilePrint"))


    document.getElementById('Main').style.display = 'block';
    document.getElementById('PickData').style.display = 'none';
    document.getElementById("namePrint").innerText = Name;
    document.getElementById("addressprint").innerText = Address;
    document.getElementById("national").innerText = nationality;
    document.getElementById("mobilePrint").innerText = Name;



        // document.getElementById("father").innerText = FathName;
        // document.getElementById("birth").innerText = DOB;
        // document.getElementById("NIC").innerText = MyNIC;
        // document.getElementById("mail").innerText = email;
        // document.getElementById("ShowGender").innerText = Gender;
        // document.getElementById("ShowStatus").innerText = Status;


    for (var i = 0; Skills.length > i; i++) {
        var Node = document.createElement("li");
        var textnode = document.createTextNode(Skills[i]);
        Node.appendChild(textnode);
        document.getElementById("ShowSkill").appendChild(Node);
    }
    for (var a = 0; Exp.length > a; a++) {
        var node = document.createElement("li");
        var textnode = document.createTextNode(Exp[a])
        node.appendChild(textnode)
        document.getElementById("showexp").appendChild(node)
    }
    for (var h = 0; Qual.length > h; h++) {
        var nod = document.createElement("li");
        var textnod = document.createTextNode(Qual[h])
        nod.appendChild(textnod)
        document.getElementById("Showqual").appendChild(nod)
    }
for (var s =0; Courses.length > s;  s++){
    var node = document.createElement("li");
    var textnode = document.createTextNode(Courses[s])
    node.appendChild(textnode)
    document.getElementById("showCOURSES").appendChild(node)

}



}

function Printme() {

    document.getElementById("print").style.display = "none";
    document.getElementById("btndiv").style.display = "none";
    window.print()
    document.getElementById("print").style.display = "block";
    document.getElementById("btndiv").style.display = "block";


    //  window.close()
    // window.print()

}



















