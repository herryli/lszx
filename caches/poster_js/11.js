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
  this.IsHitCount = "N";
  this.UploadFilePath = "";
  
  this.Step = 1;
  this.Delay= 20;
  this.WindowHeight = 0;
  this.WindowWidth = 0;
  this.Yon = 0;
  this.Xon = 0;
  this.Pause = true;
  this.Interval = null;
  this.URL = "";
  this.SiteID = 0;
  
  this.ShowAD  = showADContent;
  this.Start   = doStart;
  this.Stat = statAD;
}

function statAD() {
	var new_element = document.createElement("script"); 
	new_element.type = "text/javascript";
	new_element.src="http://42.121.1.90/lszx/index.php?m=poster&c=index&a=show&siteid="+this.SiteID+"&spaceid="+this.ADID+"&id="+this.PosID;
	document.body.appendChild(new_element);
}

function showADContent() {
  var content = this.ADContent;
  var str = "<div id='PCMSAD_"+this.PosID+"' style='left:"+this.PaddingLeft+"px;top:"+this.PaddingTop+"px;width:"+this.Width+"px; height:"+this.Height+"px; position: absolute;visibility: visible;z-index:999999;' onMouseOver='"+this.ID+"_pause_resume();' onMouseOut='"+this.ID+"_pause_resume();'>";
  var AD = eval('('+content+')');
  if (this.ADType == "images") {
	  if (AD.Images[0].imgADLinkUrl) str += "<a href='"+this.URL+"?m=poster&c=index&a=poster_click&siteid="+this.SiteID+"&id="+this.ADID+"&url="+AD.Images[0].imgADLinkUrl+"' target='_blank'>";
	  str += "<img title='"+AD.Images[0].imgADAlt+"' src='"+this.UploadFilePath+AD.Images[0].ImgPath+"' width='"+this.Width+"' height='"+this.Height+"' style='border:0px;'>";
	  if (AD.Images[0].imgADLinkUrl) str += "</a>";
  }else if(this.ADType == "flash"){
	  str += "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='"+this.Width+"' height='"+this.Height+"' id='FlashAD_"+this.PosID+"' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0'>";
	  str += "<param name='movie' value='"+this.UploadFilePath+AD.Images[0].ImgPath+"' />"; 
      str += "<param name='quality' value='autohigh' />";
      str += "<param name='wmode' value='opaque'/>";
	  str += "<embed wmode='opaque' src='"+this.UploadFilePath+AD.Images[0].ImgPath+"' quality='autohigh' name='flashad' swliveconnect='TRUE' pluginspage='http://www.macromedia.com/go/getflashplayer' type='application/x-shockwave-flash' width='"+this.Width+"' height='"+this.Height+"'></embed>";
      str += "</object>";	  
  }
  str += "<div style='text-align:right;'><a href='#;' onclick='javascript:document.getElementById(\"PCMSAD_"+this.PosID+"\").style.display=\"none\"'>关闭</a></div>";
  str += "</div>";
  document.write(str);
}

function changePos(float) {	
	float.WindowWidth  = document.compatMode == "BackCompat" ? document.body.clientWidth : document.documentElement.clientWidth;
	float.WindowHeight = document.compatMode == "BackCompat" ? document.body.clientHeight : document.documentElement.clientHeight;
	document.getElementById("PCMSAD_"+float.PosID).style.left = (float.PaddingLeft + (Math.max(document.documentElement.scrollLeft, document.body.scrollLeft)))+"px";
	document.getElementById("PCMSAD_"+float.PosID).style.top = (float.PaddingTop + (Math.max(document.documentElement.scrollTop, document.body.scrollTop)))+"px";
	if (float.Yon){
		float.PaddingTop = float.PaddingTop + float.Step;
	}else{
		float.PaddingTop = float.PaddingTop - float.Step;
	}
	if (float.PaddingTop < 0){
		float.Yon = 1;
		float.PaddingTop = 0;
	}
	if (float.PaddingTop >= (float.WindowHeight - float.Height)){
		float.Yon = 0;float.PaddingTop = (float.WindowHeight - float.Height);
	}
	if (float.Xon){
		float.PaddingLeft = float.PaddingLeft + float.Step;
	}else{
		float.PaddingLeft = float.PaddingLeft - float.Step;
	}
	if (float.PaddingLeft < 0){
		float.Xon = 1;
		float.PaddingLeft = 0;
	}
	if (float.PaddingLeft >= (float.WindowWidth - float.Width)){
		float.Xon = 0;
		float.PaddingLeft = (float.WindowWidth - float.Width);   
	}
}
	
function doStart(float){
	return function(){
        changePos(float);
    }
}
 
function cmsAD_11_pause_resume(){if(cmsAD_11.Pause){clearInterval(cmsAD_11.Interval);cmsAD_11.Pause = false;}else {cmsAD_11.Interval = setInterval(cmsAD_11.Start(cmsAD_11),cmsAD_11.Delay);cmsAD_11.Pause = true;}} 
var cmsAD_11 = new PCMSAD('cmsAD_11'); 
cmsAD_11.PosID = 11; 
cmsAD_11.ADID = 14; 
cmsAD_11.ADType = "images"; 
cmsAD_11.ADName = "漂浮付费"; 
cmsAD_11.ADContent = "{'Images':[{'imgADLinkUrl':'http%3A%2F%2F42.121.1.90%2Flszx%2F','imgADAlt':'三点多','ImgPath':'http://42.121.1.90/lszx/uploadfile/2013/0105/20130105010402743.gif'}],'imgADLinkTarget':'New','Count':'1','showAlt':'Y'}"; 
cmsAD_11.URL = "http://42.121.1.90/lszx/index.php?m=poster&c=index"; 
cmsAD_11.SiteID = 1; 
cmsAD_11.PaddingLeft =  10 ; 
cmsAD_11.PaddingTop =  10 ; 
cmsAD_11.Width = 150; 
cmsAD_11.Height = 100; 
cmsAD_11.UploadFilePath = ""; 
cmsAD_11.ShowAD();

var isIE=!!window.ActiveXObject; 
if (isIE){

	if (document.readyState=="complete"){
		cmsAD_11.Stat();
	} else {
		document.onreadystatechange=function(){
			if(document.readyState=="complete") cmsAD_11.Stat();
		}
	}
} else {
	cmsAD_11.Stat();
}
document.getElementById('PCMSAD_11').visibility = 'visible';
cmsAD_11.Interval = setInterval(cmsAD_11.Start(cmsAD_11),cmsAD_11.Delay);