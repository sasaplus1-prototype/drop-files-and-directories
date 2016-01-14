(function(){

  'use strict';

  $(function(){

    var events = 'dragstart drag dragenter dragleave dragover dragend drop';

    $('.drop-area').on(events, function(event) {
      event.stopPropagation();
      event.preventDefault();

      console.log(event);
    });

  });

}());
