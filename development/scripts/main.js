Main = {
	init: function(){
		navigation = new Navigation();
		navigation.init();
		btns_grid = new Btns_grid();
		btns_grid.init();
	},
};
$(function(){
	Main.init();
});