const decimal = [1000,900,500,400,100,90,50,40,10,9,5,4,1];
const roman = ["M","CM","D","CD","C","XC","L","XL","X","IX","V","IV","I"];
let i=0;
let romanNumber = "";
let value = 990;

if(value==0 || value>1000) //checking for the boundaries
{
    console.log("out of order"); //printing out of order if value is out of boundary
}
else if(typeof(value) == "string" || typeof(value) == "float")
{
    console.log("enter valid number")
}

else 
{
    
    while(value>0 && value <=1000) // checking if the value is in the boundary provided
    {
    if(value-decimal[i] >= 0)  // subtracts the value from the nearest digit in decimal array so as to get a positive number  or 0
        {
            romanNumber += roman[i]; // concatenates the respective roman number from the array to romanNumber variable
            value = value-decimal[i]; //calculate the value again till reaches 0
        }
        else
        {
            i++; // increment the value of i 
        }
        
    }
console.log(romanNumber+ " "); // print the roamn number
}