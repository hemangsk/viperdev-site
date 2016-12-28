---
layout: page
title: "HOW IT WORKS"
order: 2
---
<section>
  <div class="container">

      <div class="card">
      <ul class="tabs tabs-fixed-width">
      <li class="tab"><a class="attrtab1" href="#attrtab1">1</a></li>

      <li class="tab disabled"><a class="attrtab2" href="#attrtab2">2</a></li>

      <li class="tab disabled"><a class="attrtab3" href="#attrtab3">3</a></li>

      <li class="tab disabled"><a class="attrtab4" href="#attrtab4">4</a></li>

      <li class="tab disabled"><a class="attrtab5" href="#attrtab5">5</a></li>

      <li class="tab disabled"><a class="attrtab6" href="#attrtab6">6</a></li>

      <li class="tab disabled"><a class="attrtab7" href="#attrtab7">7</a></li>

      <li class="tab disabled"><a class="attrtab8" href="#attrtab8">8</a></li>

      <li class="tab disabled"><a class="attrtab9" href="#attrtab9">HOORAY!</a></li>


      </ul>

<div class="card-action">
  

 <div class="stage" id="attrtab1">
 <center>
 <div class="stage-title">You give us messy code</div>
 <div class="row">
   <div class="col-md-12">
   <img class="responsive-img" src="/viperdev-site/assets/images/messy.png">
   </div>
 </div>
  </div>
   <div class="stage" id="attrtab2">
   
  </div>
   <div class="stage" id="attrtab3">
  </div>
   <div  class="stage" id="attrtab4">
  </div>
   <div class="stage" id="attrtab5">
  </div>
   <div class="stage" id="attrtab6">
  </div>
   <div class="stage" id="attrtab7">
  </div>
   <div class="stage" id="attrtab8">
  </div>
   <div class="stage" id="attrtab9">
  </div>
</div>

      </div>

</div>
<div class="container">
<div class="col-md-12"><center><a class="nextScene waves-effect btn">NEXT</a></div>
  </div>
</section>

<script type="text/javascript">

    $(document).ready(function(){

    story = {}
    story.length = 9;
    $('ul.tabs').tabs();

       $('.nextScene').on("click", function(){
                
                var attribute =   $('.tab').find('.active').attr('href');
                var regex = /(\d+)/g;
                var cur = (attribute.match(regex));  

                if(cur >= story.length){
                    cur = 1;
                }

                else if(cur < story.length){
                   
                    
                    $('.' + 'attrtab' + cur.toString()).parent().next().removeClass('disabled');
                   console.log(cur);
                     cur++;
                }
                
                $('ul.tabs').tabs('select_tab', 'attrtab' + cur.toString());
           
            });
  });
</script>

<style type="text/css">
  .scene{
    padding: 0.5em;
    font-family: "Roboto";
    text-align: center;
    font-size: 1.3em;
  }

  .scene-content{
   
  }

  .stage{
    height: 20em;
  }

.nextScene{
  width: 100%
}
  .hr-line{
    height: 3em;
    border-bottom: 2px solid;
  }

  .side-title{
    margin-bottom: 0.8em;
  }

  .stage-title{
        font-size: 4em;
    font-family: BlinkMacSystemFont;
    font-weight: 100;
    padding: 0.5em;
  }
</style>