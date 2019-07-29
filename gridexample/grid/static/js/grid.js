
     function show1()

     {

     var panel_button1 = document.createElement("BUTTON");
     panel_button1.innerHTML="OK";
     panel_button1.classList.add("panelbutton1");
     panel_button1.id='panelbutton1';

     panel_button1.onclick = copy1;


     document.getElementById('panel_button1').appendChild(panel_button1);
     document.getElementById('demo1').innerHTML = "<p>  Panel 1  </p>";


     document.getElementById("show").disabled = true;


     }



 function copy1(){

     var btn1 = document.createElement("BUTTON");
     btn1.innerHTML="edit";

     var description1 = document.createElement("P");
     description1.innerText = "Panel 1 was selected";

     document.getElementById('copy1').appendChild(description1);
     //document.getElementById('copy1').appendChild(btn1);

     document.getElementById("panelbutton1").disabled = true;

 };




function show2()
     {


     var panel_button2 = document.createElement("BUTTON");
     panel_button2.innerHTML="OK";
     panel_button2.classList.add("panelbutton2");
     panel_button2.id='panelbutton2';

     panel_button2.onclick = copy2;

     document.getElementById('panel_button2').appendChild(panel_button2);
     document.getElementById('demo2').innerHTML = "<p>  Panel 2  </p>";

     document.getElementById("showw").disabled = true;

     }



 function copy2()
     {

     var btn2 = document.createElement("BUTTON");
     btn2.innerHTML="edit";

     var description2 = document.createElement("P");
     description2.innerText = "Panel 2 was selected";

     document.getElementById('copy2').appendChild(description2);
     //document.getElementById('copy2').appendChild(btn2);

     document.getElementById("panelbutton2").disabled = true;



     }


        function show3()
     {
     var panel_button3 = document.createElement("BUTTON");
     panel_button3.innerHTML="OK";
     panel_button3.classList.add("panelbutton3");
     panel_button3.id='panelbutton3';

     panel_button3.onclick = copy3;


     document.getElementById('panel_button3').appendChild(panel_button3);
     document.getElementById('demo3').innerHTML = "<p>  Panel 3  </p>";

     document.getElementById("showww").disabled = true;



     };



function copy3()
     {

     var btn3 = document.createElement("BUTTON");
     btn3.innerHTML="edit";


     var description3 = document.createElement("P");
     description3.innerText = "Panel 3 was selected";

     document.getElementById('copy3').appendChild(description3);
  // document.getElementById('copy3').appendChild(btn3);

   document.getElementById("panelbutton3").disabled = true;



     }

