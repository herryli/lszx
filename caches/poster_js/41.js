function PCMSAD(PID) {
  this.ID        = PID;
  this.PosID  = 0; 
  this.ADID		  = 0;
  this.ADType	  = "";
  this.ADName	  = "";
  this.ADContent = "";
  this.PaddingLeft = 0;
  this.PaddingTop  = 0;
  this.Width = 0;
  this.Height = 0;
  this.IsHitCount = "Y";
  this.Scroll = "N";
  this.UploadFilePath = "";
  this.URL = "";
  this.SiteID = 0;
  this.ShowAD  = showADContent;
  this.Start   = doStart;
  this.Stat = statAD;
}

function statAD() {
	var new_element = document.createElement("script"); 
	new_element.type = "text/javascript";
	new_element.src="http://www.cdylw.com/lszx/index.php?m=poster&c=index&a=show&siteid="+this.SiteID+"&spaceid="+this.ADID+"&id="+this.PosID; 
	document.body.appendChild(new_element);
}

function showADContent() {
  var content = this.ADContent;
  var str = "";
  var align = "";
  var x   = "";
  var y   = "";
  var AD = eval('('+content+')');
  if (this.ADType == "images") {
	  for(var i=0;i<AD.Count;i++) {
		  str = "";
		  align = "";
		  if(i%2==0){
			  x = this.PaddingLeft;
			  align_b = "right";
			  align = "left";
		  }else{
			  x = this.PaddingLeft;
			  align_b = "left";
			  align = "right";
		  }
		  y = this.PaddingTop;
		  str += "<div id='PCMSAD_"+this.PosID+"_"+i+"' style='"+align_b+":"+x+"px;top:"+y+"px;width:"+this.Width+"px; height:"+this.Height+"px; position: absolute;z-index:888888;'>";
		  if (AD.Images[i].imgADLinkUrl) str += "<a href='"+this.URL+"&a=poster_click&siteid="+this.SiteID+"&id="+this.ADID+"&url="+AD.Images[i].imgADLinkUrl+"' target='_blank'>";
	  	  str += "<img title='"+AD.Images[i].imgADAlt+"' src='"+this.UploadFilePath+AD.Images[i].ImgPath+"' width='"+this.Width+"' height='"+this.Height+"' style='border:0px;'>";
	  	  if (AD.Images[i].imgADLinkUrl) str += "</a>";
		  str += "<div style='text-align:"+align+"'><a href='#;' onclick='javascript:document.getElementById(\"PCMSAD_"+this.PosID+"_"+i+"\").style.display=\"none\"'>关闭</a></div>";
		  str += "</div>";
  		  document.write(str);
	  }
  }else if(this.ADType == "flash"){
	  for(var i=0;i<AD.Count;i++) {
		  str = "";
		  align = "";
		  if(i%2==0){
			  x = this.PaddingLeft;
			  align_b = "right";
			  align = "left";
		  }else{
			  x = this.PaddingLeft;
			  align_b = "left";
			  align = "right";
		  }
		  y = this.PaddingTop;
		  str += "<div id='PCMSAD_"+this.PosID+"_"+i+"' style='"+align_b+":"+x+"px;top:"+y+"px;width:"+this.Width+"px; height:"+this.Height+"px; position: absolute;z-index:888888;'>";
		  str += "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='"+this.Width+"' height='"+this.Height+"' id='FlashAD_"+this.PosID+"' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0'>";
		  str += "<param name='movie' value='"+this.UploadFilePath+AD.Images[i].ImgPath+"' />"; 
		  str += "<param name='quality' value='autohigh' />";
		  str += "<param name='wmode' value='opaque'/>";
		  str += "<embed wmode='opaque' src='"+this.UploadFilePath+AD.Images[i].ImgPath+"' quality='autohigh' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash' width='"+this.Width+"' height='"+this.Height+"'></embed>";
		  str += "</object>";
		  str += "<div style='text-align:"+align+"'><a href='#;' onclick='javascript:document.getElementById(\"PCMSAD_"+this.PosID+"_"+i+"\").style.display=\"none\"'>关闭</a></div>";
		  str += "</div>";
		  document.write(str);
	  }	  
  }
}

var lastScrollY=0;
function heartBeat(Scroll){ 
	var diffY;
	if (document.documentElement && document.documentElement.scrollTop)
		diffY = document.documentElement.scrollTop;
	else if (document.body)
		diffY = document.body.scrollTop;
	else
	{/*Netscape stuff*/}
	percent=.1*(diffY-lastScrollY); 
	if (percent>0) percent = Math.ceil(percent); 
	else percent = Math.floor(percent); 
	document.getElementById("PCMSAD_"+Scroll+"_0").style.top=parseInt(document.getElementById
	("PCMSAD_"+Scroll+"_0").style.top)+percent+"px";
	document.getElementById("PCMSAD_"+Scroll+"_1").style.top=parseInt(document.getElementById
	("PCMSAD_"+Scroll+"_1").style.top)+percent+"px";
	lastScrollY=lastScrollY+percent; 
}

function doStart() {
	if (cmsAD_41.Scroll=='Y') {
		setInterval("heartBeat(\""+cmsAD_41.PosID+"\")",10);
	}
}

var cmsAD_41 = new PCMSAD('cmsAD_41'); 
cmsAD_41.PosID = 41; 
cmsAD_41.ADID = 36; 
cmsAD_41.ADType = "images"; 
cmsAD_41.ADName = "首页对联广告1"; 
cmsAD_41.ADContent = "{'Images':[ {'imgADLinkUrl':'','imgADAlt':'','ImgPath':'http://121.199.44.61/lszx/uploadfile/2014/0105/20140105054828741.gif'}, {'imgADLinkUrl':'http%3A%2F%2Fqtyy.cdylw.com','imgADAlt':'','ImgPath':'http://121.199.44.61/lszx/uploadfile/2014/0105/20140105054836714.gif'},],'imgADLinkTarget':'New','Count':'2','showAlt':'Y'}"; 
cmsAD_41.URL = "http://www.cdylw.com/lszx/index.php?m=poster&c=index"; 
cmsAD_41.SiteID = 1; 
cmsAD_41.PaddingLeft = 0; 
cmsAD_41.PaddingTop =  25 ; 
cmsAD_41.Scroll = 'Y'; 
cmsAD_41.Width = 100; 
cmsAD_41.Height = 100; 
cmsAD_41.UploadFilePath = ""; 
cmsAD_41.ShowAD();

var isIE=!!window.ActiveXObject; 
if (isIE){
	if (document.readyState=="complete"){
		cmsAD_41.Stat();
	} else {
		document.onreadystatechange=function(){
			if(document.readyState=="complete") cmsAD_41.Stat();
		}
	}
} else {
	cmsAD_41.Stat();
}
cmsAD_41.Start();
