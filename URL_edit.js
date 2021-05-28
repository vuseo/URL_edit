/*
Käyttämällä try catch funktiota, että jokainen avain ja arvo luetaan.
IN Javascript
*/

//Ensin haetaan kyseiset parametrit (avain ja arvo) ja tuodaan ne esille.
try {
//var url_string = window.prompt("Enter URL: ");       // jos käyttäjä lisää itse URL:n
var url_string = "https://elisaltr.crm4.dynamics.com/main.aspx?appid=2042a9b3-6490-eb11-b1ac-000d3adcb5ed&forceUCI=1&pagetype=entitylist&etn=account&viewType=1039";
var url = new URL(url_string);
var urlEntered = console.log("URL Entered: " + url_string);
var avain = url.searchParams.get("appid");
var avain2 = url.searchParams.get("forceUCI");
var avain3 = url.searchParams.get("pagetype");
var avain4 = url.searchParams.get("etn");
var avain5 = url.searchParams.get("viewType");
        console.log("avain:appid     arvo:" + avain+ "\n avain:forceUCI  " + "arvo:" + avain2+ "\n avain:pagetype  " + "arvo:" +avain3 + "\n avain:etn       " + "arvo:" + avain4 + "\n avain:viewType  " + "arvo:" + avain5);
} catch (err) {
console.log("Issues with URL Parameter - " + err);
}
//Tarkastaa, jos pagetype löytyy vai ei.
if (avain3 != null ) {
 console.log("pagetype found, it is " + avain3);  }
 else{
   console.log("pagetype not found.");
 }
     
      //jos url on tyhjä.
if (url_string == null){
 console.log("Page not found ");  }