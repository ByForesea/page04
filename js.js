window.addEventListener('load', () =>{
    const preload=document.querySelector('.preload');
    preload.classList.add('preload-finish');
  
  });
  
  var prevScrollpos = window.pageYOffset;
          window.onscroll = function() {
  
          var mybutton = document.getElementById("myBtn");
          if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
              mybutton.style.display = "block";
          } else {
              mybutton.style.display = "none";
          }
  
          }
          
          var modal = document.getElementById("myModal");

          // Get the button that opens the modal
          var btn = document.getElementById("plat_btn");
          
          // Get the <span> element that closes the modal
          var span = document.getElementsByClassName("close")[0];
          
          // When the user clicks on the button, open the modal
          plat_btn.onclick = function() {
            modal.style.display = "block";
          }
          
          // When the user clicks on <span> (x), close the modal
          span.onclick = function() {
            modal.style.display = "none";
          }
          
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == modal) {
              modal.style.display = "none";
            }
          }
  

          var modal2 = document.getElementById("myModal2");

          // Get the button that opens the modal
          var btn2 = document.getElementById("btn2");
          
          // Get the <span> element that closes the modal
          var span2 = document.getElementsByClassName("close2")[0];
          
          // When the user clicks on the button, open the modal
          btn2.onclick = function() {
            modal2.style.display = "block";
          }
          
          // When the user clicks on <span> (x), close the modal
          span2.onclick = function() {
            modal2.style.display = "none";
          }
          
          // When the user clicks anywhere outside of the modal, close it
          window.onclick = function(event) {
            if (event.target == modal2) {
              modal2.style.display = "none";
            }
          }
        
  
  // When the user clicks on the button, scroll to the top of the document
          function topFunction() {
          document.body.scrollTop = 0;
          document.documentElement.scrollTop = 0;
          }
  
  
          function openNav() {
          document.getElementById("myNav").style.width = "100%";
          }
  
          function closeNav() {
          document.getElementById("myNav").style.width = "0%";
          }
  
          function closeNav() {
          document.getElementById("myNav").style.width = "0%";
          }
  
         
          gsap.registerPlugin(ScrollTrigger);
  
          // gsap.to(".whale-right",{
        
          //   scrollTrigger: {
          //       trigger: ".main2-2",
          //        // pin the trigger element while active
          //       start: "top top", // when the top of the trigger hits the top of the viewport
          //       end: "top 20%", // end after scrolling 500px beyond the start
          //       scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          //       pin: true,
          //       markers: true,
          //     },
          //     x:450,
          //     opacity: 1,
          //     ease:"none",
          //     duration:1000,
              
          //   });

          //   gsap.to(".whale-left",{
        
          //       scrollTrigger: {
          //           trigger: ".main2-2",
          //            // pin the trigger element while active
          //           start: "top top", // when the top of the trigger hits the top of the viewport
          //           end: "top 20%", // end after scrolling 500px beyond the start
          //           scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
          //           pin: true,
          //           markers: true,
          //         },
          //         x:-450,
          //         opacity: 1,
          //         ease:"none",
          //         duration:1000,
                  
          //       });


                gsap.to(".dinner",{
        
                  scrollTrigger: {
                      trigger: ".main2-2",
                       // pin the trigger element while active
                      start: "top 30%", // when the top of the trigger hits the top of the viewport
                      end: "+=1px", // end after scrolling 500px beyond the start
                      scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                      // pin: true,
                      // markers: true,
                    },
                    opacity: 1,
                    ease:"none",
                    duration:1000,
                    
                  });


                  gsap.to(".dinner2",{
        
                    scrollTrigger: {
                        trigger: ".main2-2",
                         // pin the trigger element while active
                        start: "top 30%", // when the top of the trigger hits the top of the viewport
                        end: "+=1px", // end after scrolling 500px beyond the start
                        scrub: 1, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                        // pin: true,
                        // markers: true,
                      },
                      opacity: 1,
                      ease:"none",
                      duration:1000,
                      
                    });

            gsap.to(".main5-whale",{
        
                    scrollTrigger: {
                        trigger: ".main5block",
                        pin: true,
                         // pin the trigger element while active
                        start: "center center", // when the top of the trigger hits the top of the viewport
                        end: "+=350px", // end after scrolling 500px beyond the start
                        scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                        //markers: true,
                      },
                      x:-682,
                      y:-100,
                      opacity: 1,
                      ease:"none",
                      duration:(1000),
                      
                    });

                    gsap.to(".main5-whale2",{
        
                        scrollTrigger: {
                            trigger: ".sea",
                             // pin the trigger element while active
                            start: "top 20%", // when the top of the trigger hits the top of the viewport
                            end: "+=1px", // end after scrolling 500px beyond the start
                            scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                            // pin: true,
                            // markers: true,
                          },
                          opacity: 1,
                          ease:"none",
                          duration:1000,
                          
                        });

                        gsap.to(".main5-noisy",{
        
                          scrollTrigger: {
                              trigger: ".sea",
                               // pin the trigger element while active
                              start: "top 20%", // when the top of the trigger hits the top of the viewport
                              end: "+=1px", // end after scrolling 500px beyond the start
                              scrub: 0, // smooth scrubbing, takes 1 second to "catch up" to the scrollbar
                              // pin: true,
                              // markers: true,
                            },
                            rotate:15,
                            opacity: 1,
                            ease:"none",
                            duration:1000,
                            
                          });



  
      $(window).mousemove(function(evt){
          var pagex=evt.pageX;
          var pagey=evt.pageY;

          $(".whale-left").css("transform","translateX("+(pagex/-40+50)+"px)")
          $(".whale-right").css("transform","translateX("+(pagex/-40+50)+"px)")

          // $(".main4-text1").css("transform","translateX("+(pagex/-40+20)+"px)")
      })
  
