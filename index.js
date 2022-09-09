function Get(yourUrl){
  var Httpreq = new XMLHttpRequest(); 
  Httpreq.open("GET",yourUrl,false);
  Httpreq.send(null);
  return Httpreq.responseText;          
}

yourUrl = 'http://soundcloud.com/oembed?url=http%3A//soundcloud.com/forss/flickermood&format=json';
var json_obj = JSON.parse(Get(yourUrl));


console.log(json_obj);