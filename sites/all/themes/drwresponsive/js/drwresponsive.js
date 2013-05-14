(function ($) {
	Drupal.behaviors.menuToggle = {
    attach: function(context) {
      $('body', context).once('accordionmenu', function () {
        $('body').bind('responsivelayout', function (e, d) {        
         
        //Define your drupal menu id (only works with core menu block)
          var menuid = "#block-system-main-menu";
          // Add Class parent for each li and add icon trough style
          $(menuid+" li a").each(function() {
            if ($(this).next().length > 0) {
                $(this).addClass("parent");
            };
          })        
         
        //This condition will act under the 'mobile' size, and will not be executed on ie6 and ie7
          if (d.to == 'mobile' && !$('html').hasClass('ie6') && !$('html').hasClass('ie7')) {       

            // Add menuToggle Link
            $(menuid).before('<a href="#" class="menu-toggle"><span class="line first-line first"></span><span class="line"></span><span class="line"></span><span class="line last-line last"></span><span class="toggle-help">Menu</span></a>');
            // Hide main-menu
            $(menuid).css('display','none');
            $('.menu-toggle').click(function(){
                $(menuid).slideToggle();
            });
           
             //Remove the ´hover´ event in the dropdown menu scrip below              
             $(menuid+' li').unbind();
              
             //Add a span tag that will aft as the expand button, you can change the output of that button here
             $(menuid+" ul.menu li.expanded").prepend( $("<span class='over' href='#'>&darr;</span>") );     
                      
             //Create an open/close action on the accordion after clicking on the expand element         
             $(menuid+' ul.menu span.over').click(function (event) {     
                 event.preventDefault();
                 if ($(this).siblings('ul').is( ":visible" )){
                 $(this).siblings('ul').slideUp('fast');  
                 } else {           
                 $(this).siblings('ul').slideDown('fast');  
             }                       
             });             
          }               
          //this condition will work for all sizes exept mobile, but will act on ie6 and ie7 browsers     
          if (d.to != 'mobile' | $('html').hasClass('ie7') ) {   
             //$(menuid+" ul.menu li.expanded a").append( $("<span class='list' href='#'>&raquo;</span>") );             
             //remove the expand elements from the accordion menu             
             $(menuid+" span.over").remove();    
             //hide the open accordion items removing the display block style
             $(menuid+" ul li ul").removeAttr("style");  
             //Simple hide/show event for the dropdown menus 
             $(menuid+' li').hover(
                 function(){
                 $('ul:first', $(this)).show();
                 },
                 function(){
                 $('ul', $(this)).hide();
                 }
              );
          }             
     
        });
      });
    }
  }     	
})(jQuery);