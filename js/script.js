$(function(){
	if (window.console) {
		console.info(">>Join us? Email：psd2html@qq.com");
	}		
	
	/*触屏*/
		$(".slider .inner").bind("swipeleft",function(){
 			
		});
		
		$(".slider .inner").bind("swiperight",function(){
 			
		});
		
		if($('.hslide').size()>0){
			var glide = $('.hslide').glide({
	
				//autoplay:true,//是否自动播放 默认值 true如果不需要就设置此值
	
				animationTime:500, //动画过度效果，只有当浏览器支持CSS3的时候生效
	
				arrows:true, //是否显示左右导航器
				//arrowsWrapperClass: "arrowsWrapper",//滑块箭头导航器外部DIV类名
				//arrowMainClass: "slider-arrow",//滑块箭头公共类名
				//arrowRightClass:"slider-arrow--right",//滑块右箭头类名
				//arrowLeftClass:"slider-arrow--left",//滑块左箭头类名
				arrowRightText:"",//定义左右导航器文字或者符号也可以是类
				arrowLeftText:"",
	
				nav:true, //主导航器也就是本例中显示的小方块
				navCenter:true, //主导航器位置是否居中
				navClass:"slider-nav",//主导航器外部div类名
				navItemClass:"slider-nav__item", //本例中小方块的样式
				navCurrentItemClass:"slider-nav__item--current" //被选中后的样式
				
				//
			});
		}
		
		
	    //寻找优质供应商
		$('.h_supplier .logos td').hover(function(){
			var n = $(this).parent().index()*3 + $(this).index();	
			$('.h_supplier .logos td').removeClass('selected');
				$(this).addClass('selected');
			$('.h_supplier .txts').eq(n).show().siblings('.txts').hide();	
		})

    
})