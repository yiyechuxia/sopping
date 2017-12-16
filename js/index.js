$(function(){
  $('#fullpage').fullpage({
    verticalCentered : false,
    navigation : true,
    afterLoad : function(anchorLink,index){
        if(index == 2){
          $(".s2_sreach").animate({
              right : "50%",
              marginRight : -111
          },1200 , "easeOutBack" ,function(){
            $(".s2_sf").fadeIn(200,function(){
              $(".s2_sreach,.s2_sf").hide();

              $(".s2_ssf").show().animate({
                    height : 30,
                    top : "39.7%",
                    right : "37%",

              },1000,function(){
                  $(".next").fadeIn(500);
              });
              $(".s2_sfs").show().animate({ width:441},1000);
                $(".s2_publack").fadeOut(1000);
                $(".s2_pubai").fadeIn(1000);

            })
          })
        }

        if(index == 7){
            $(".s7_star").show().animate({
                width: "129px"
            },800,function(){
                $(".s7_good").show(function(){
                    $(".next").fadeIn(500);
                });
            })
        }


    },
      onLeave : function(index,nextIndex,direction){

          if(direction == "up"){
              $(".next").fadeOut(500);
          }else{
              $(".next").fadeOut(500);
          }



        if(index==2&&nextIndex==3){
            $(".wrap").show();
            $(".s3_sf").show().animate({
                width:"207px",
                left:"26.2%",
                bottom: "30%",
            },1500,function(){
                $(".s3_item").fadeOut(500);
                $(".s3_item-active").fadeIn(500);
                $(".s3_buy").fadeOut(500);
                $(".s3_buy_active").fadeIn(500,function(){
                    $(".next").fadeIn(500);
                });
            });

        }
          if(index==3&&nextIndex==4){
              $(".s3_sf").hide();
              $(".s4_xsf").show().animate({
                  bottom: "50%",
                  left: "60%"
              },2000,function(){
                  $(".s4_bbcar").animate({
                      left: "2000px"
                  },2000,"easeInElastic",function(){
                      $(".s4_text").fadeOut();
                      $(".s4_text_active").fadeIn();
                      $(".s4_computer").fadeIn();
                      $(".s4_dizhi").fadeIn(function(){
                          $(".next").fadeIn(500);
                      });
                  })
              })
          }

          if(index==4&&nextIndex==5){
              $(".s5_hand").animate({
                  bottom: "-21px"
              },2000,function(){
                  $(".s5_mouse").hide();
                  $(".s5_mouse_active").show();
                  $(".s5_sf").animate({
                      bottom: "14%"
                  },800,function(){
                    $(".s5_bankcard").animate({
                        bottom :"54%"
                    },200,function(){
                        $(".s5_text").fadeIn(800).addClass("s5_text_a")
                        $(".next").fadeIn(500);
                    })
                  })
              })
          }

          //第五屏到第六屏
          if(index==5 && nextIndex == 6){
             $(".s6_box").animate({
                 left : "33%",
             },1000)
              $(".s5_sf").hide();
             $(".s6_sf").show().animate({
                 width:70,
                 bottom : "64%",
                 left : "35%",
             },1000,function(){
                 $(".s6_sf").hide();
                 $(".s6_box").animate({
                     bottom : "4%",
                     left : "33%",
                 },1000,function(){
                     $(".section-6").animate({
                         backgroundPositionX: "100%",
                     },3000);
                     $(".s6_text_car").show();
                     $(".s6_text").animate({
                         left :"19%"
                     },3000,"easeOutElastic",function(){
                         $(".s6_man").show().animate({
                             width:"252px",
                             bottom:"14.5%",
                             left:"25%"
                         },1000,function(){
                             $(".s6_man").animate({
                                 left:"55%",
                             },1000,function(){
                                 $(".s6_opendoor").fadeIn();
                                 $(".s6_buyman").show().animate({
                                     width:"87px",
                                     right:"7%",
                                 },1000,function(){
                                     $(".s6_shouhuo").show(function(){
                                         $(".next").fadeIn(500);
                                     });
                                 })
                             })
                         })
                     })
                 })

             })
          }




      }
  });



    $(".section-8").on("mousemove",function(e){
          var mX = e.clientX - ($(".section-8").width() - $(".section_content").width())/2 - 70;
          var mY = e.clientY;
        var maxY =$(".section-8").height() - 449 -10;
        if(mY < maxY){

            mY = maxY;
        }
        $(".s8_hand").css({
            top :mY + 10,
            left: mX,
        })

    })

    $(".s8_agin").on("click",function(){
        //moveTo(section, slide)
        $.fn.fullpage.moveTo(1);
        $(".section *").attr("style"," ");
        $(".section-6").css("backgroundPositionX","25%");
    })

    $(".next").on("click",function(){
        $.fn.fullpage.moveSectionDown();
        $(".next").fadeOut(200);
    })
});







