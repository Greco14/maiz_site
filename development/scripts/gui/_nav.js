Navigation = function (){
	this.settings= {
		naver : $('nav'),
		link_hold : $('.links'),
		links : $('.innerLinks'),
		btn_open : $('.openMe'),
	};
	this.tlOpenInfo = new TimelineLite();
	this.tlCloseInfo = new TimelineLite();
};

Navigation.prototype.init = function(){
	var self = this;
	self.bind();
};

Navigation.prototype.bind = function(){
	var self = this,
		s = self.settings;
	s.btn_open.on('click', function(){
		self.animations('open-me');
	});
	s.links.on('click', function(){
		self.animations('close-me');
	});
	
};

Navigation.prototype.animations = function( animacion ){
	var self = this,
		s = self.settings;

	switch( animacion ){
		case 'open-me':
			s.btn_open.animate({opacity: 0}, 250, 'easeInOutQuad', function(){
				$(this).css('display', 'none');
			});
			s.link_hold.css('display', 'block');
			self.tlOpenInfo.to(s.naver, 0.75,{
				width: '100%',
				ease: Cubic.easeOut,
				onComplete: function(){
					$.each(s.links, function(){
						$(this).animate({left: 0, opacity: 1}, 250, 'easeInOutQuad');

					});
				}
			})
			break;
		case 'close-me':
			s.btn_open.animate({opacity: 0}, 250, 'easeInOutQuad', function(){
				$(this).css('display', 'none');
			});
			s.links.animate({left: -10, opacity: 0}, 250, 'easeInOutQuad', function(){
				self.tlCloseInfo.to(s.naver, 0.75,{
					width: '190px',
					ease: Cubic.easeOut,
					onComplete: function(){
						s.btn_open.css('display', 'block');
						s.link_hold.css('display', 'none');
						s.btn_open.animate({opacity: 1}, 250, 'easeInOutQuad');
					}
				});
			});
			
			break;
	};	

};