$('.field').on('change', function(){
  
    var $this = $(this)
    var $option = $this.find('option:selected');
    $('.label').text($option.text());
    
    $this.blur();
    
    
  });