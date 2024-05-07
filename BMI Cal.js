<!--HS/2019/0541 N.K.H.M.Nanayakkara-->
<html>
<head>
<style type="text/css">
.div{
 border:3px solid black;
 width:800;
}
.wid{
width:170;
}
a{
color:blue;
}
</style>
<script type="text/javascript">
 function submit1()
{
 var answer = confirm("This is medical data.Do you wish to continue adding your data to the database?
\nIf 'yes' press OK");
 if (answer)
 { 
 notification= "Database updated successfully!";
 document.getElementById("category").style.display='none';
 }
 else
{
 notification= " ";
}
 document.getElementById("notification").textContent = notification;
 } 
 function bmi()
 {
 var bmi;
var category;
 var result = document.getElementById("result");
 var height = (document.getElementById("height").value);
 var weight = (document.getElementById("weight").value);
var db =(document.getElementById("db").value);
 bmi = (weight / Math.pow( (height), 2 )).toFixed(15);
 document.getElementById("BMI").value = bmi;
 if(bmi > 30 && db=="yes"){
 category = "You need to have an immediate medical checkup";
 }
else if(bmi < 30){
 category = "You do not need to have a medical checkup immediately";
 }
document.getElementById("category").textContent = category;
 }
</script>
</head>
<body>
<center>
<div class="div">
<h2>BMI Calculator</h2>
<form>
<label>What is your Height(m)?</label> <input class="wid" id="height" type="float" name="height" 
size="8"><br><br><br>
<label>What is your Weight(kg)?</label> <input class="wid" id="weight" type="float" name="weight" 
size="8"><br><br><br>
<label>Do you suffer with prediabetes?</label> <input class="wid" id="db" type="text" 
name="diabetes" size="3"><br><br>
<a href="#BMI" onclick="bmi()">Do I need to have a medical checkup?</a><br><br>
<label>Your BMI value:</label> <input class="wid" type="float" id="BMI" name="bmi" size="5" 
onfocus="bmi()"><br>
<div>
 <p id="category"></p>
 <p id="notification"></p>
</div>
<input type="submit" name="smt" value="Update the database with my Data" onclick="submit1()">
</form></center></div>
</body>
</html>
