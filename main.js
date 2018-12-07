var account={

	clientname:"Ali",
	clientbalance:1,
	curr:"pkrs",
	iban: "pkrs1234567"

};
function display()
{
	 document.getElementById("title").innerText= account.clientname;
	 document.getElementById("balance").innerText = account.clientbalance;
	
	  document.getElementById("currency").innerText= account.curr;
	   document.getElementById("IBAN").innerText= account.iban;

}

display();
var dep;
function deposit(x)
{
	var dep;
	if (e.key== "Enter") 
	{
		dep=document.getElementById("deposit").value;
		if (!isNan(dep)) 
		{
			document.getElementById("balance").innerText=account.clientbalance;


		}


	}
}