(function ($) {
	// body...
	/*Drupal.behaviors.mainMenuToggle = {
		attach: function($context, $settings){
			('.region-menu .navigation').before('<a href="#" class="menu-toggle" title="Toggle Menu"')
		}
	};*/
	Drupal.behaviors.mainMenuToggle = {
    attach: function(context, settings) {            
      $('.region-menu .navigation').before('<a href="#" class="menu-toggle" title="Toggle Menu"><span class="line first-line first"></span><span class="line"></span><span class="line"></span><span class="line last-line last"></span><span class="toggle-help">Menu</span></a>');
      $('.navigation .primary-menu h2, .navigation .second-menu h2').removeClass('element-invisible');
      
      $('.region-menu .menu-toggle').click(function(){
        $('.navigation').slideToggle();
      });
    }
  };

	
})(JQuery);