//STHC Soothing Coin Shop Template v1.0 free
//WestnileOD for thepeoplesdesign
//Change what you want except where it says not to 
//If you want to redistribute altered versions then rebrand them! 
//...................
//DONT CHANGE THIS !!!
b = {
	c: {
	  i: 0}
}
//...................
//
//
//this is to update any info make sure to copy before making any changes!
//if you break it dont worry we have a copy!
//but you should get in the habit to edit a copy before you make any changes 
//only change info and leave all punctuation
//Website information
//edit in between "" change to "your info"
//
//The name of your website or shop here
var your_site_name = "your STHC shop"; 
//this is a tagline or catch phrase or you can make blank 
var tagline = "accepting Soothing Coin here";
//this is what shows in the tab for the browser
var tab0 = "STHC Template version 1.0";
//this is the icon that shows in tab for the browser 
// var ico1 = "coolicons.com/icons/12" 
//footer tag. this is usually your company or team
var fotn = "Cyber Mall STHC Shop Template";
//your referral code for Soothing Center
//this is just the ending  without the soothingcenter prefix 
var ref = "DFEBHROW";
//
//..............................................
//category1 
//This is the first category of items 
//name of this category 
var cat1name = "Category 1";
//this is a description of this category
var c1txt = "stuff about category 1";
//list your items here 
//edit in between "" change to "your info"
c1 = {
	 i1: {
		 //name of the first item in this category 
		 name:   "test product",
		 //short description for this item
		 text:   "just a test",
		 //price in Soothing Coin 
		 price:  "20",
		 //your product code from STHC Merchant List
		 code:    "wnyvfpsn/5",
		 //the full url to the image of the item
		 img:     ""},
    i2: {
		 //name of the first item in this category 
		 name:   "another item",
		 //short description for this item
		 text:   "more stuff",
		 //price in Soothing Coin 
		 price:  "20",
		 //your product code from STHC Merchant List
		 code:    "wnyvfpsn/5",
		 //the full url to the image of the item
		 img:     ""},
	 i3: {
		 //name of the first item in this category 
		 name:   "another item",
		 //short description for this item
		 text:   "more stuff",
		 //price in Soothing Coin 
		 price:  "20",
		 //your product code from STHC Merchant List
		 code:    "wnyvfpsn/5",
		 //the full url to the image of the item
		 img:     ""}
		 
}




//Adding another page...
//if you want to add another page you have to remove the // in the code below: 
//document.getElementById("c1name").innerHTML = cat1name
//document.getElementById("c1des").innerHTML = c1txt
//document.getElementById("11name").innerHTML = c1.i1.name
//document.getElementById("11txt").innerHTML = c1.i1.text
//document.getElementById("11price").innerHTML = c1.i1.price
var cat1p2name = "Category 1 page 2";
var c1p2txt = "stuff about category 1";
c1p2 = {
	 i1p2: {
		 //name of the first item in this category 
		 name:   "test product",
		 //short description for this item
		 text:   "just a test",
		 //price in Soothing Coin 
		 price:  "20",
		 //your product code from STHC Merchant List
		 code:    "wnyvfpsn/5",
		 //the full url to the image of the item
		 img:     ""},
    i2p2: {
		 //name of the first item in this category 
		 name:   "another item",
		 //short description for this item
		 text:   "more stuff",
		 //price in Soothing Coin 
		 price:  "20",
		 //your product code from STHC Merchant List
		 code:    "wnyvfpsn/5",
		 //the full url to the image of the item
		 img:     ""}
		 
}
//
//
//
//...........................end  
//
//
//****************************
//DONT CHANGE PAST THIS LINE ....................................
//don't change this unless you understand it can easily break!	
//........................................................
//
function update() {
document.getElementById("site").innerHTML = your_site_name
document.getElementById("tab").innerHTML = tab0
document.getElementById("tag").innerHTML = tagline
document.getElementById("foona").innerHTML = fotn
document.getElementById("c1name").innerHTML = cat1name
document.getElementById("c1des").innerHTML = c1txt
document.getElementById("11name").innerHTML = c1.i1.name
document.getElementById("11txt").innerHTML = c1.i1.text
document.getElementById("11price").innerHTML = c1.i1.price
document.getElementById("11pic").innerHTML = c1.i1.img
document.getElementById("c12des").innerHTML = cat2name
document.getElementById("12name").innerHTML = c1.i2.name
document.getElementById("12txt").innerHTML = c1.i2.text
document.getElementById("12price").innerHTML = c1.i2.price
}

function refLink() { 
	window.open("https://soothing.center/" + ref)
}
function buy() {
	if (b.c.i == 11){
	var a = c1.i1.code;}
	//else if (b.c.i. == 12){
	//var a = c1.i2.code; }
	//else if (b.c.i. == 13){
	//var a = c1.i3.code;}	  
window.open("https://soothing.center/add-to-cart/" + a);
}
 
 
