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
	var pdata=document.querySelector('.parent');//class ientified at htmlsaved pdata
	var heading=document.createElement('h1');//h1 tag created
	heading.textContent="haio This is Da Man...! ";//h1 text load to var heading
	pdata.appendChild(heading);//adding h1 to mani parent class div
	var div=document.createElement('div');//div tag created
    div.classList.add('col-10','p-4')//<div class="cl1" </div>
   
    for (i in raw){
	    var img=document.createElement('img');//creating <img>
	    img.src=raw[i].img;//<img src="img">
	    img.classList.add('col-3')
	    
	    div.appendChild(img)//adding <img> in the <div class=cl1>
	    pdata.appendChild(div)//finally the <div><img> adding in the parent class div
	    var loc=document.createElement('h2')
	    loc.textContent=raw[i].location;
	    div.appendChild(loc)
	    pdata.appendChild(div)
	    var dlrs=document.createElement('h2')
	    dlrs.textContent=raw[i].price;
	    div.appendChild(dlrs)
	    pdata.appendChild(div)
	    var btn=document.createElement('button')
	    btn.textContent=raw[i].button;
	    div.appendChild(btn)
	    pdata.appendChild(div)

    	}
}
function foot(){
 var footer=document.querySelector('.foot');
 const foot=document.createElement('h1')
 foot.textContent="All copy Rights Reviced @ jeneral man";
 footer.appendChild(foot)

}

