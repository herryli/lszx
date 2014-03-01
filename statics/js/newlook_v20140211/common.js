/*tab search*/
$(function(){
	$("#siteSearch").find(".tab a").click(function(){
		 $(this).addClass("on")
		 $(this).parent("li").siblings().children("a").removeClass("on")
		 return false
	})
})
$(function(){
     var len  = $(".smallImg > li").length;	 
	 var index = 0;
	 var adTimer;
	 $(".smallImg li").mouseover(function(){
		index  =   $(".smallImg li").index(this);
		showImg(index);
	 }).eq(0).mouseover();	

	 $('.bigImg').hover(function(){
			 clearInterval(adTimer);
		 },function(){
			 adTimer = setInterval(function(){
			    showImg(index)
				index++;
				if(index==len){index=0;}
			  } , 3000);
	 }).trigger("mouseleave");
	 
//记住密码	 
	 $("#recode").click(function(){
		   $(this).toggleClass("on")
	  })
	 
	 
})
function showImg(index){      
        var adHeight = $(".bannerImg").height();
		$(".slider").stop(true,false).css({top: -adHeight*index,opacity: 1},1000);	
		$(".smallImg li").removeClass("on")
			.eq(index).addClass("on");
}

/*新闻滚动*/
$(function(){
        var $this = $("#notice");
		var scrollTimer;
		$this.hover(function(){
			  clearInterval(scrollTimer);
		 },function(){
		   scrollTimer = setInterval(function(){
						 scrollNews( $this );
					}, 3000 );
		}).trigger("mouseleave");
});
function scrollNews(obj){
   var $self = obj.find("ul:first"); 
   var lineHeight = $self.find("li:first").height(); 
   $self.animate({ "marginTop" : -lineHeight +"px" }, 600 , function(){
         $self.css({marginTop:0}).find("li:first").appendTo($self); 
   })
}


$(function(){
	    var $div_li =$("div.tab_menu ul li");
	    $div_li.click(function(){
			$(this).addClass("selected")          
				   .siblings().removeClass("selected");  
            var index =  $div_li.index(this); 
			$("div.tab_box > div")   	
					.eq(index).show()   
					.siblings().hide(); 
		}).hover(function(){
			$(this).addClass("hover");
		},function(){
			$(this).removeClass("hover");
		})
})
/*show 展开*/
$(function(){ 
      var $toggleBtn = $(".show_d")
	  $(".category").each(function(){
		  if($(this).height() > 24){
		   $(this).height(24)
		   $(this).siblings("span").show()
	       }
	  })
	  $toggleBtn.click(function(){
		      var $category = $(this).siblings("dl")
		      if($category.height() > 24){
					$category.css("height","24px");                   		
					$(this).removeClass("s_up").text("展开") 		
			  }else{
					$category.css("height","auto");                   		
					$(this).addClass("s_up").text("隐藏")                 
							
			  }			      
		})
	  
	  
						   
		/*var $category = $(".category").find("dd:gt(8)");     	  	
		var $toggleBtn = $(".show_d");            
		$toggleBtn.click(function(){
		      if($category.is(":visible")){
					$(this).siblings("dl").children("dd:gt(8)").hide();                   		
					$(this).removeClass("s_up").text("展开") 		
			  }else{
					$(this).siblings("dl").children("dd").show();                   		
					$(this).addClass("s_up").text("隐藏")                 
							
			  }			      
		})*/
})
