/**
 * @todo
 */

(function($) {
  /**
   * This is needed for a little extra flexibility in defining our default active menu item
   * if Drupal isn't by default. If nothing is labeled as active, then we'll make the first link 
   * active (which is usually the home link
   */
  Drupal.behaviors.respondActiveMenu = {
    /*tach: function (context) {
      var activeMenu = $('nav ul.main-menu li.active, nav ul.main-menu li.active-trail').size();
      console.log(activeMenu);
      if (activeMenu == '0') {
        'nav ul.main-menu li:first-child').addClass('active').children('a:first-child').addClass('active');
      }
    }*/
  };
  Drupal.behaviors.menuToggle = {
    attach: function (context, settings){
      $('nav').before('<a href="#"><spam class="menuToggle">Menu</spam></a>');
      $('.menuToggle').click(function(){
        $('nav').slideToggle();        
      });      
    }
  }
})(jQuery);