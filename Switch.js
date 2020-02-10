 // this prompts the user to fill out the following three questions
var name = prompt("Enter your first name: ")
var state = prompt("Enter your states 2 letter abbreviation: ")
var temp = prompt("Enter the current outside temperature(F): ")

// this capitalizes the state abbreviation if the user did not do that 
var upperCaseState = state.toUpperCase();
console.log(upperCaseState)

// this capitalizes the first name of the user if the user did not do that 
var upperCaseName = name.charAt(0).toUpperCase() + name.charAt(1) + name.charAt(2)+ name.charAt(3)+ name.charAt(4)+ name.charAt(5)+ name.charAt(6)+ name.charAt(7)+ name.charAt(8)+ name.charAt(9)+ name.charAt(10)+ name.charAt(11)+ name.charAt(12)+ name.charAt(13)+ name.charAt(15)+ name.charAt(16)+ name.charAt(17)+ name.charAt(18)+ name.charAt(19)+ name.charAt(20)
console.log(upperCaseName)

// this logs the array and assigns a location to each variable
var userArray = [upperCaseName,upperCaseState,temp]
console.log(userArray)

//This displays a message if the user if from nebraska and the temperature is less then 32
switch(true) {
case (userArray[1] == "NE" && userArray[2] < 32) :
  NSB.MsgBox(`Wear a warm coat, hat, scarf and gloves.`)
break}
  
//This displays a message if the user if from nebraska and the temperature is between 32 and 50
switch(true) {
case (userArray[1] == "NE" && userArray[2] > 32 && userArray[2] < 50) :
  NSB.MsgBox(`Wear a warm coat but you won't need a hat, scarf or gloves.`)
break}
  
//This displays a message if the user if from Florida and the temperature is between 32 and 50
  switch(true) {
case (userArray[1] == "FL" && userArray[2] > 32 && userArray[2] < 50) :
  NSB.MsgBox(`Wear your warmest coat, a warm hat, a scarf, and warm gloves.`)
break}
  
//This displays a message if the user if from FLorida and the temperature is between 50 and 70
  switch(true) {
case (userArray[1] == "FL" && userArray[2] > 50 && userArray[2] < 70) :
  NSB.MsgBox(`wear a warm coat, hat and gloves. Maybe a scarf too.`)
break}
