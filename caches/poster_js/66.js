function PCMSAD(PID) {
  this.ID        = PID;
  this.PosID  = 0; 
  this.ADID		  = 0;
  this.ADType	  = "";
  this.ADName	  = "";
  this.ADContent = "";
  this.PaddingLeft = 0;
  this.PaddingTop  = 0;
  this.Wspaceidth = 0;
  this.Height = 0;
  this.IsHitCount = "N";
  this.UploadFilePath = "";
  this.URL = "";
  this.SiteID = 0;
  this.ShowAD  = showADContent;
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
  var AD = eval('('+content+')');
  if (this.ADType == "images") {
	  if (AD.Images[0].imgADLinkUrl) str += "<a href='"+this.URL+'&a=poster_click&sitespaceid='+this.SiteID+"&id="+this.ADID+"&url="+AD.Images[0].imgADLinkUrl+"' target='_blank'>";
	  str += "<img title='"+AD.Images[0].imgADAlt+"' src='"+this.UploadFilePath+AD.Images[0].ImgPath+"' width='"+this.Width+"' height='"+this.Height+"' style='border:0px;'>";
	  if (AD.Images[0].imgADLinkUrl) str += "</a>";
  }else if(this.ADType == "flash"){
	  str += "<object classid='clsid:D27CDB6E-AE6D-11cf-96B8-444553540000' width='"+this.Width+"' height='"+this.Height+"' id='FlashAD_"+this.ADID+"' codebase='http://download.macromedia.com/pub/shockwave/cabs/flash/swflash.cab#version=8,0,0,0'>";
	  str += "<param name='movie' value='"+this.UploadFilePath+AD.Images[0].ImgPath+"' />"; 
      str += "<param name='quality' value='autohigh' />";
      str += "<param name='wmode' value='opaque'/>";
	  str += "<embed src='"+this.UploadFilePath+AD.Images[0].ImgPath+"' quality='autohigh' wmode='opaque' name='flashad' swliveconnect='TRUE' pluginspage='http://www.macromedia.com/shockwave/download/index.cgi?P1_Prod_Version=ShockwaveFlash' type='application/x-shockwave-flash' width='"+this.Width+"' height='"+this.Height+"'></embed>";
      str += "</object>";	  
  }
  str += "";
  document.write(str);
}
 
var cmsAD_66 = new PCMSAD('cmsAD_66'); 
cmsAD_66.PosID = 66; 
cmsAD_66.ADID = 66; 
cmsAD_66.ADType = "images"; 
cmsAD_66.ADName = "首页招聘下方广告4"; 
cmsAD_66.ADContent = "{'Images':[{'imgADLinkUrl':'http%3A%2F%2Fwww.cdylw.com','imgADAlt':' 绿色在线-成都园林网','ImgPath':'http://121.199.44.61/lszx/uploadfile/2014/0212/20140212021622413.jpg'}],'imgADLinkTarget':'New','Count':'1','showAlt':'Y'}"; 
cmsAD_66.URL = "http://www.cdylw.com/lszx/index.php?m=poster&c=index"; 
cmsAD_66.SiteID = 1; 
cmsAD_66.Width = 350; 
cmsAD_66.Height = 45; 
cmsAD_66.UploadFilePath = ''; 
cmsAD_66.ShowAD();

var isIE=!!window.ActiveXObject; 
if (isIE){

	if (document.readyState=="complete"){
		cmsAD_66.Stat();
	} else {
		document.onreadystatechange=function(){
			if(document.readyState=="complete") cmsAD_66.Stat();
		}
	}
} else {
	cmsAD_66.Stat();
}