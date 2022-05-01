
  $(document).on("click","#radio",function(){
        
     var doc = document.querySelector('#radio')
     doc.lastElementChild.setAttribute('id', 'all')
     console.log(doc.children[0])

     for (var i = 0, len = doc.children.length; i < len-1; i++) {
      doc.children[i].setAttribute('id', 'single')}  
        
  })

 $(document).on("click","#all",function(){
        $('#months-slider').addClass("hidden")
        $('#quarters-slider').removeClass( "hidden" )
     });

 $(document).on("click","#single",function(){
        $('#quarters-slider').addClass("hidden")
        $('#months-slider').removeClass("hidden" )
     });


