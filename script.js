
function insert(num){
        document.form.textview.value=document.form.textview.value+num
     }
   function resulta(){
        var eq= document.form.textview.value
        if(eq)
          {
              document.form.textview.value=eval(eq)
          } 
    } 
   function cancel(){
             document.form.textview.value=""
    }
   function back(){
      var eq = document.form.textview.value
      if(eq)
         {
             document.form.textview.value= eq.substring(0,eq.length-1);
         }
    }
    function fcos(){
      var eq= document.form.textview.value 
      document.form.textview.value=Math.cos(eq)

    }
    function fsin(){
      var eq= document.form.textview.value 
      document.form.textview.value=Math.sin(eq)

    }
    function ftan(){
      var eq= document.form.textview.value 
      document.form.textview.value=Math.tan(eq)

    }
    function Racin(){
      var eq= document.form.textview.value 
      document.form.textview.value=Math.sqrt(eq)
    }
    function fln(){
      var eq= document.form1.textview.value 
      document.form.textview.value=Math.log(eq)
    }
    function fexp(){
      var eq= document.form1.textview.value 
      document.form.textview.value=Math.exp(eq)
    }
    function carre(){
      var eq= document.form.textview.value 
      document.form.textview.value=eval(eq)*eval(eq)
    }
    // function fprt(){
    //   var eq= document.form.textview.value 
    //   document.form.textview.value=(eval(eq))/100
    // }
    // function fdiv(){
    //   var eq= document.form.textview.value 
    //   document.form.textview.value=1/(eval(eq))
    // }
    function fn(){
      var eq= document.form.textview.value 
       
      if(eq<2)
        {document.form.textview.value=1}
      else
         {

          document.form.textview.value=(eval(eq)*(eval(eq)+1))/2
         }  

    }