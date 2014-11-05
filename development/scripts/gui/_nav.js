Navigation = function (){
	this.settings= {
		links : $('.innerLinks'),
		azul_oscuro: '#0a152a',
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

		s.links.hover(function(){
			var color = $(this).find('.hoverColor');
			var text = $(this).find('p');
			color.stop().animate({height: '100%', top: 0}, 250,'easeOutCirc');
			text.stop().animate({top: -10}, 250,'easeOutCirc');
			text.css({color:'#fff'});
		},function(){
			var color = $(this).find('.hoverColor');
			var text = $(this).find('p');
			color.stop().animate({height: '0%', top: '100%'}, 250,'easeOutCirc');
			text.stop().animate({top: 0}, 250,'easeOutCirc');
			text.css({color: s.azul_oscuro});
		});
	
};

Navigation.prototype.animations = function( animacion ){
	var self = this,
		s = self.settings;

	switch( animacion ){
		case 'open-me':
			

			break;
		case 'close-me':
			
			break;
	};	

};