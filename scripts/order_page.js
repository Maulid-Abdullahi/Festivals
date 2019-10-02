//JavaScript for order page
function order()//function to remove form and replace with text after submiting
{
//Change the text of the html after removing form	
document.getElementById("frmOrder").innerHTML=
"<h3>Your order request has been sent, you shall receive a response.<h3>Ticket no.0839</h3></h3><p>You will be redirected shortly</p>";
//Time function to redirect user to another webpage after submiting
	setTimeout(page_direct, 7000);
}

function page_direct()//function to redirect user to shop page
{
	location.href="product.html";
}