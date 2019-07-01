$(document).ready(function () {
  
    //ripples
    $("#header, .info").ripples({
        dropRadius: 15,
        perturbance: 0.02
    });
    $('.parent-container').magnificPopup({
        delegate: 'a', // child items selector, by clicking on it popup will open
        type: 'image',
       
        gallery: {
            enabled: true
        }
  // other options
    });
    
});