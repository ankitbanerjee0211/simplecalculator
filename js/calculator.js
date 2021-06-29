
//  ONMOUSEOVER AND ONMOUSEOUT STYLING

function mouse_over(x)
{
	x.style.backgroundColor = "#696969";
	x.style.border = "4.2px solid orange";
}

function mouse_outtd(x)
{
	x.style.backgroundColor = "#424242";
	x.style.border = "4.2px solid #dddddd";
}

function mouse_outth(x)
{
	x.style.backgroundColor = "black";
	x.style.border = "4.2px solid #dddddd";
}

function mouse_overequal(x)
{
	x.style.backgroundColor = "#FF9C00";
	x.style.border = "4.2px solid #DDEB00";
}

function mouse_outequal(x)
{
	x.style.backgroundColor = "#9E550E";
	x.style.border = "4.2px solid #dddddd";
}

//  CALCULATION SECTION

//  PUTS VALUE

function dis(val) 
{ 
	document.getElementById("result").value += val;
}

//  DELETE 1 DIGIT FROM RIGHT WHEN DEL IS PRESSED

function del() 
{	if((document.getElementById("result").value) % 1 == 0)
	{
 		document.getElementById("result").value = (document.getElementById("result").value - (document.getElementById("result").value)%10)/10;
	}
	else
	{
		var numDec = (document.getElementById("result").value).split(".")[1].length;
		document.getElementById("result").value = (document.getElementById("result").value) * Math.pow(10 , numDec);
		document.getElementById("result").value = (document.getElementById("result").value - (document.getElementById("result").value)%10)/(Math.pow(10, numDec));
	}
}

//  CLEAR SCREEN WHEN C IS CLICKED

function clr() 
{ 
    document.getElementById("result").value = "";
}

//  VARIOUS KEY ACTIONS i.e. % , Inverse , Square , Square Root , +/- , ^

function percent()
{
	solve();
	document.getElementById("result").value = document.getElementById("result").value / 100;
}

function inverse()
{
	document.getElementById("result").value = 1 / (document.getElementById("result").value);
}

function square()
{
	document.getElementById("result").value = Math.pow(document.getElementById("result").value , 2);
}

function root()
{
	document.getElementById("result").value = Math.sqrt(document.getElementById("result").value);
}

function sign()
{
	document.getElementById("result").value = -document.getElementById("result").value;
}

function pi()
{
	document.getElementById("result").value += Math.PI;
}




//  FUNCTION THAT EVALUATES THE DIGIT AND RETURN RESULT

function solve() 
{ 
	let x = document.getElementById("result").value;
 	let y = eval(x);
 	document.getElementById("result").value = y;
}

// TRIGGERING ENTER KEY TO SHOW RESULT (i.e. RUN SOLVE())

document.addEventListener("keyup", function(event)
{
		if (event.keyCode === 13)
		{
		event.preventDefault();
		document.getElementById("equals").click();
		}
});