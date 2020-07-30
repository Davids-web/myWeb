function actresData(file,callback) {
	var result=new XMLHttpRequest();
	result.overrideMimeType('json');
	result.open('GET',file,true);
	result.onreadystatechange=function(){
		if (result.readyState == 4 && result.status =='200') 
			{ callback(result.responseText);}
	}
	result.send();

}
actresData('data.json',function(text){
	var read=JSON.parse(text)
	console.log(read)
getdata(read.web);
foot();})

function getdata(raw){
	var pdata=document.querySelector('.parent');
	var heading=document.createElement('h1');
	heading.textContent="this is JS dom & BS4 stlyle with json";
	pdata.appendChild(heading);
	var mdiv=document.createElement('div');
    mdiv.classList.add('container-fluid','bg-info','p-2','row')
    pdata.appendChild(mdiv);
    for (i in raw){
	    var actdiv=document.createElement('div')
	    actdiv.classList.add('my-3','p-2')
	    var img=document.createElement('img');
	    img.src=raw[i].img;
	    img.classList.add('img-thumbnail')
	    img.alt="photo";
	    
	    actdiv.appendChild(img)
	    mdiv.appendChild(actdiv)
	    var loc=document.createElement('h3')
	    loc.textContent=raw[i].location;
	    actdiv.appendChild(loc)
	    mdiv.appendChild(actdiv)
	    var dlrs=document.createElement('h3')
	    dlrs.textContent="$. "+raw[i].price;
	    actdiv.appendChild(dlrs)
	    mdiv.appendChild(actdiv)
	    var btn=document.createElement('button')
	    btn.textContent=raw[i].button;
	    actdiv.appendChild(btn)
	    mdiv.appendChild(actdiv)

    	}
}
function foot(){
 var footer=document.querySelector('.foot');
 const foot=document.createElement('h1')
 foot.textContent="copy rights not reqired @ jeneral man";
 footer.appendChild(foot)

}

