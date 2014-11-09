Btns_grid = function () {
	this.settings={
		is_animating: false,
		btn_grid: $('.holderBtn'),
		top_line: $('.squareHold').find('.top-line'),
		bottom_line: $('.squareHold').find('.bottom-line'),
		left_line: $('.squareHold').find('.left-line'),
		right_line: $('.squareHold').find('.right-line'),
	};

	this.tlShowHover = new TimelineLite();
	this.tlHideHover = new TimelineLite();
};
Btns_grid.prototype.init = function() {
	var self = this;
	self.bind();
};
Btns_grid.prototype.bind = function() {
	var self = this,
		s = self.settings;
	$('.bottom-hold> a >.tercios').mouseenter(function(){
		var el_id= $(this).attr('id');
		var duracion = 100;
		var elEse = 'easeOutCubic';
		var txt= $(this).find('h3');

		txt.css({color:'#ec6e05'});
		$('#'+el_id+'-square >.left-line').stop().animate({height: '100%'}, duracion, elEse, function(){
			$('#'+el_id+'-square > .bottom-line').stop().animate({width: '100%'}, duracion, elEse, function(){
				$('#'+el_id+'-square > .right-line').stop().animate({height: '100%'}, duracion, elEse, function(){
					$('#'+el_id+'-square > .top-line').stop().animate({width: '100%'}, duracion, elEse);
				});
			});
		});
		$('#'+el_id+'-hover').stop().animate({opacity: 1}, 250, 'easeOutCubic');
	});

	$('.bottom-hold> a >.tercios').mouseleave(function(){
		var el_id= $(this).attr('id');
		var duracion = 100;
		var elEse = 'easeOutCubic';
		var txt= $(this).find('h3');

		txt.css({color:'#fff'});
		$('#'+el_id+'-square > .top-line').stop().animate({width: '0%'}, duracion, elEse, function(){
			$('#'+el_id+'-square > .right-line').stop().animate({height: '0%'}, duracion, elEse, function(){
				$('#'+el_id+'-square > .bottom-line').stop().animate({width: '0%'}, duracion, elEse, function(){
					$('#'+el_id+'-square > .left-line').stop().animate({height: '0%'}, duracion, elEse, function(){
						$('.left-line').css({height:0});
						$('.right-line').css({height:0});
						$('.top-line').css({width:0});
						$('.bottom-line').css({width:0});
					});
				});
			});
		});
		$('#'+el_id+'-hover').stop().animate({opacity: 0}, 250, 'easeOutCubic');
	});

	$('.top-hold a >.medios').mouseenter(function(){
		var el_id= $(this).attr('id');
		var duracion = 200;
		var seconDur = 300;
		var elEse = 'easeInOutQuad';
		var first_txt = $(this).find('.hold_visible');
		var hover_txt = $(this).find('.hold_hover');

		var titles = $(this).find('.topInfo > h3');
		var info_txt = $(this).find('.extractInfo > p');

		first_txt.stop().animate({opacity: 0, bottom: 40}, duracion, elEse);
		hover_txt.stop().animate({opacity: 1}, duracion, elEse,function(){
			titles.stop().animate({top: 0, opacity: 1}, seconDur, elEse);
			setTimeout(function(){
				info_txt.stop().animate({top: 0, opacity: 1}, seconDur, elEse);
			},100);
		});

	});

	$('.top-hold a >.medios').mouseleave(function(){
		var el_id= $(this).attr('id');
		var duracion =300;
		var seconDur = 200;
		var elEse = 'easeInOutQuad';
		var first_txt = $(this).find('.hold_visible');
		var hover_txt = $(this).find('.hold_hover');

		var titles = $(this).find('.topInfo > h3');
		var info_txt = $(this).find('.extractInfo > p');

		first_txt.stop().animate({opacity: 1, bottom: 50}, duracion, elEse);
		titles.stop().animate({top: 10, opacity: 0}, seconDur, elEse);
			setTimeout(function(){
				info_txt.stop().animate({top: 10, opacity: 0}, seconDur, elEse);
			},100);
		hover_txt.stop().animate({opacity: 0}, duracion, elEse);

	});


};

Btns_grid.prototype.animations = function(actions, este) {
	var self = this,
		s = self.settings;
	var duration = 0.1

		switch(actions){
			case 'show':
				if(s.is_animating){
					return false;
				}
				self.tlShowHover.to( $('#'+este+'-square > .left-line') , duration,{
					height: '100%',
					ease: Cubic.easeOut,
					onComplete: function(){
						self.tlShowHover.to($('#'+este+'-square > .bottom-line'), duration,{
							width: '100%',
							ease:Cubic.easeOut,
							onComplete: function(){
								self.tlShowHover.to($('#'+este+'-square > .right-line'),duration,{
									height: '100%',
									ease: Cubic.easeOut,
									onComplete: function(){
										self.tlShowHover.to($('#'+este+'-square > .top-line'),duration,{
											width: '100%',
											ease:Cubic.easeOut,
											onComplete: function(){
												s.is_animating = false;
												return s.is_animating;
											}
										});
									}
								});
							}
						});
					}
				});
				$('#'+este+'-hover').animate({opacity: 1}, 250, 'easeOutCubic');

				s.is_animating = true;
				return s.is_animating;

				break;
			case 'hide':
				if(s.is_animating){
					return false;
				}
				self.tlHideHover.to($('#'+este+'-square > .top-line'), duration,{
					width: 0,
					ease: Cubic.easeOut,
					onComplete: function(){
						self.tlHideHover.to($('#'+este+'-square > .right-line'), duration,{
							height: 0,
							ease: Cubic.easeOut,
							onComplete: function(){
								self.tlHideHover.to($('#'+este+'-square > .bottom-line'), duration,{
									width: 0,
									ease: Cubic.easeOut,
									onComplete: function(){
										self.tlHideHover.to($('#'+este+'-square > .left-line'), duration,{
											height: 0,
											ease: Cubic.easeOut,
											onComplete: function(){
												s.is_animating = false;
												return s.is_animating;
											}
										});
									}
								});
							}
						});
					}
				});
				$('#'+este+'-hover').animate({opacity: 0}, 250, 'easeOutCubic');

				s.is_animating = true;
				return s.is_animating;
				break;
		};
};



