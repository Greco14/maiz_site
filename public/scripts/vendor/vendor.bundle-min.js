Navigation=function(){this.settings={links:$(".innerLinks"),azul_oscuro:"#0a152a"},this.tlOpenInfo=new TimelineLite,this.tlCloseInfo=new TimelineLite},Navigation.prototype.init=function(){var t=this;t.bind()},Navigation.prototype.bind=function(){var t=this,i=t.settings;i.links.hover(function(){var t=$(this).find(".hoverColor"),i=$(this).find("p");t.stop().animate({height:"100%",top:0},250,"easeOutCirc"),i.stop().animate({top:-10},250,"easeOutCirc"),i.css({color:"#fff"})},function(){var t=$(this).find(".hoverColor"),e=$(this).find("p");t.stop().animate({height:"0%",top:"100%"},250,"easeOutCirc"),e.stop().animate({top:0},250,"easeOutCirc"),e.css({color:i.azul_oscuro})})},Navigation.prototype.animations=function(t){var i=this,e=i.settings;switch(t){case"open-me":break;case"close-me":}},Btns_grid=function(){this.settings={is_animating:!1,btn_grid:$(".holderBtn"),top_line:$(".squareHold").find(".top-line"),bottom_line:$(".squareHold").find(".bottom-line"),left_line:$(".squareHold").find(".left-line"),right_line:$(".squareHold").find(".right-line")},this.tlShowHover=new TimelineLite,this.tlHideHover=new TimelineLite},Btns_grid.prototype.init=function(){var t=this;t.bind()},Btns_grid.prototype.bind=function(){var t=this,i=t.settings;$(".tercios").mouseenter(function(){var t=$(this).attr("id"),i=100,e="easeOutCubic",n=$(this).find("h3");n.css({color:"#ec6e05"}),$(".left-line").css({height:0}),$(".right-line").css({height:0}),$(".top-line").css({width:0}),$(".bottom-line").css({width:0}),$("#"+t+"-square >.left-line").stop().animate({height:"100%"},i,e,function(){$("#"+t+"-square > .bottom-line").stop().animate({width:"100%"},i,e,function(){$("#"+t+"-square > .right-line").stop().animate({height:"100%"},i,e,function(){$("#"+t+"-square > .top-line").stop().animate({width:"100%"},i,e)})})}),$("#"+t+"-hover").stop().animate({opacity:1},250,"easeOutCubic")}),$(".tercios").mouseleave(function(){var t=$(this).attr("id"),i=100,e="easeOutCubic",n=$(this).find("h3");n.css({color:"#fff"}),$("#"+t+"-square > .top-line").stop().animate({width:"0%"},i,e,function(){$("#"+t+"-square > .right-line").stop().animate({height:"0%"},i,e,function(){$("#"+t+"-square > .bottom-line").stop().animate({width:"0%"},i,e,function(){$("#"+t+"-square > .left-line").stop().animate({height:"0%"},i,e,function(){})})})}),$("#"+t+"-hover").stop().animate({opacity:0},250,"easeOutCubic")}),$(".top-hold a >.medios").mouseenter(function(){var t=$(this).attr("id"),i=200,e=300,n="easeInOutQuad",o=$(this).find(".hold_visible"),a=$(this).find(".hold_hover"),s=$(this).find(".topInfo > h3"),r=$(this).find(".extractInfo > p");o.stop().animate({opacity:0,bottom:40},i,n),a.stop().animate({opacity:1},i,n,function(){s.stop().animate({top:0,opacity:1},e,n),setTimeout(function(){r.stop().animate({top:0,opacity:1},e,n)},100)})}),$(".top-hold a >.medios").mouseleave(function(){var t=$(this).attr("id"),i=300,e=200,n="easeInOutQuad",o=$(this).find(".hold_visible"),a=$(this).find(".hold_hover"),s=$(this).find(".topInfo > h3"),r=$(this).find(".extractInfo > p");o.stop().animate({opacity:1,bottom:50},i,n),s.stop().animate({top:10,opacity:0},e,n),setTimeout(function(){r.stop().animate({top:10,opacity:0},e,n)},100),a.stop().animate({opacity:0},i,n)})},Btns_grid.prototype.animations=function(t,i){var e=this,n=e.settings,o=.1;switch(t){case"show":return n.is_animating?!1:(e.tlShowHover.to($("#"+i+"-square > .left-line"),o,{height:"100%",ease:Cubic.easeOut,onComplete:function(){e.tlShowHover.to($("#"+i+"-square > .bottom-line"),o,{width:"100%",ease:Cubic.easeOut,onComplete:function(){e.tlShowHover.to($("#"+i+"-square > .right-line"),o,{height:"100%",ease:Cubic.easeOut,onComplete:function(){e.tlShowHover.to($("#"+i+"-square > .top-line"),o,{width:"100%",ease:Cubic.easeOut,onComplete:function(){return n.is_animating=!1,n.is_animating}})}})}})}}),$("#"+i+"-hover").animate({opacity:1},250,"easeOutCubic"),n.is_animating=!0,n.is_animating);break;case"hide":return n.is_animating?!1:(e.tlHideHover.to($("#"+i+"-square > .top-line"),o,{width:0,ease:Cubic.easeOut,onComplete:function(){e.tlHideHover.to($("#"+i+"-square > .right-line"),o,{height:0,ease:Cubic.easeOut,onComplete:function(){e.tlHideHover.to($("#"+i+"-square > .bottom-line"),o,{width:0,ease:Cubic.easeOut,onComplete:function(){e.tlHideHover.to($("#"+i+"-square > .left-line"),o,{height:0,ease:Cubic.easeOut,onComplete:function(){return n.is_animating=!1,n.is_animating}})}})}})}}),$("#"+i+"-hover").animate({opacity:0},250,"easeOutCubic"),n.is_animating=!0,n.is_animating)}};