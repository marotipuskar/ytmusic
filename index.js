// document.querySelector(".div1").addEventListener("click",function(){
//     // var audio=new Audio("Vitthal Majha Mi.mp3")
//     // audio.play();
// });

let InputSrch=document.querySelector(".inputSrch")
let NavLink=document.querySelector(".anc")
NavLink.addEventListener("click",function(){
    NavLink.classList.add("ancinpt")
    console.log("clicked me!.....")
    InputSrch.classList.remove("inputSrch")


})
// setInterval(()=>{})

// let MainBdy=document.querySelector(".naibBdy")
// MainBdy.addEventListener()

let S1=document.querySelector(".s1")
addEventListener("DOMContentLoaded",()=>{
    let Body=document.getElementsByTagName("body")
    S1.classList.remove("divAccept")
    // Body.classList.add("blrProp")

})

let J1=document.querySelectorAll(".j1");
let AcceptCls=document.querySelector(".acceptcls");
let RejectCls=document.querySelector(".rejectcls");
// J1.addEventListener("click",()=>{
    J1.forEach((btn)=>{
        btn.addEventListener("click",function(){
            S1.classList.add("divAccept")
        })
        

    })
    // S1.classList.add("divAccept");
    // document.querySelector(".s1").classList.add("divAccept")
    // AcceptCls.classList.add("divAccept");
    // RejectCls.classList.add("divAccept");

// })


var audio = new Audio("Vitthal.mp3");
document.querySelector(".playbuton").addEventListener("click",function(){
    audio.play();
    if (audio.play) {
        let pause2= document.querySelector(".playbuton");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio.pause();
                if (audio.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio.play();
                    pause2.addEventListener("click",function(){
                        audio.play();
                    })
                    
                    
                    
                    
                }
                else if (audio.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")
                    
                    
                }
            })
            pausingEvent;
            // audio.pause();
    
        },1000)
        
    } else if (audio.pause) {
        
        let pause2= document.querySelector(".playbuton").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }



}); 
// var audio = new Audio("Vitthal.mp3");
// document.querySelector(".pause").addEventListener("click",function(){
//     audio.pause();
// }); 



var audio1=new Audio("Achyutam Keshavam(PagalWorld.com.se).mp3");
document.querySelector(".playbuton2").addEventListener("click",function(){
    audio1.play();
    if (audio1.play) {
        let pause2= document.querySelector(".playbuton2");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio1.pause();
                if (audio1.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio1.play();
                    })}
                else if (audio1.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio1.pause) {
        
        let pause2= document.querySelector(".playbuton2").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }


});
// var audio1=new Audio("Achyutam Keshavam(PagalWorld.com.se).mp3");
// document.querySelector(".pause2").addEventListener("click",function(){
//     audio1.pause();
// });

var audio3=new Audio("yt1s.com - Hum Katha Sunaate Ram Sakal Gun Dhaam Ki.mp3");
document.querySelector(".playbuton3").addEventListener("click",function(){
    audio3.play();
if (audio3.play) {
    let pause2= document.querySelector(".playbuton3");
    pause2.classList.remove("fa-play")
    pause2.classList.add("fa-pause")
    
    console.log("song playing")

    // while (audio3.play) {
    //     console.log("song playing")
    //     pause2.addEventListener("click",function(){
    //         audio3.pause();
    //         pause2.classList.remove("fa-pause")
    //         pause2.classList.add("fa-play")
    //         console.log("Song Paused")
    //     })
        
    // }
    // pause2.addEventListener("click",function(){
    //     audio3.play();
    //     // pause2.classList.remove("fa-pause")
    //     // pause2.classList.add("fa-play")
    //     console.log("Song Playing 222")
    // })


    
    setTimeout(()=>{
        let pausingEvent =pause2.addEventListener("click",function(){
            audio3.pause();
            if (audio3.pause) {
                pause2.classList.remove("fa-pause");
                pause2.classList.add("fa-play")
                console.log("song paused")
                // audio3.play();
                pause2.addEventListener("click",function(){
                    audio3.play();
                })
                
                
                
                
            }
            else if (audio3.play) {
                pause2.classList.remove("fa-play")
                pause2.classList.add("fa-pause")
                
                
            }
        })
        pausingEvent;
        // audio3.pause();

    },1000)
    
} else if (audio3.pause) {
    
    let pause2= document.querySelector(".playbuton3").className="fa-play"
    pause2.classList.remove("fa-pause")
    pause2.classList.add("fa-play")
    console.log("song Pause")
}
});
// var audio3=new Audio("yt1s.com - Hum Katha Sunaate Ram Sakal Gun Dhaam Ki.mp3");
// document.querySelector(".pause3").addEventListener("click",function(){
//     audio3.pause();
// });

var audio4=new Audio("hanuman chalisa.mp3");
document.querySelector(".playbuton4").addEventListener("click",function(){
    audio4.play();

    if (audio4.play) {
        let pause2= document.querySelector(".playbuton4");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio4.pause();
                if (audio4.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio4.play();
                    })}
                else if (audio4.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio4.pause) {
        
        let pause2= document.querySelector(".playbuton4").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }




});
// var audio4=new Audio("hanuman chalisa.mp3");
// document.querySelector(".pause4").addEventListener("click",function(){
//     audio4.pause();
// });

var audio5=new Audio("yt1s.com - Har Har Shambhu Shiv Mahadeva feat Abhilipsa Panda.mp3");
document.querySelector(".playbuton5").addEventListener("click",function(){
    audio5.play();

    if (audio5.play) {
        let pause2= document.querySelector(".playbuton5");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio5.pause();
                if (audio5.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio5.play();
                    })}
                else if (audio5.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio5.pause) {
        
        let pause2= document.querySelector(".playbuton5").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }





});
// var audio5=new Audio("yt1s.com - Har Har Shambhu Shiv Mahadeva feat Abhilipsa Panda.mp3");
// document.querySelector(".pause5").addEventListener("click",function(){
//     audio5.pause();
// });

var audio6=new Audio("yt1s.com - Deva Ho Deva.mp3");
document.querySelector(".playbuton6").addEventListener("click",function(){
    audio6.play();

    if (audio6.play) {
        let pause2= document.querySelector(".playbuton6");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio6.pause();
                if (audio6.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio6.play();
                    })}
                else if (audio6.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio6.pause) {
        
        let pause2= document.querySelector(".playbuton6").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio6=new Audio("yt1s.com - Deva Ho Deva.mp3");
// document.querySelector(".pause6").addEventListener("click",function(){
//     audio6.pause();
// });

var audio7=new Audio("yt1s.com - Govinda Namam Full Song  Sri Venkatesham Manase Smarami.mp3");
document.querySelector(".playbuton7").addEventListener("click",function(){
    audio7.play();

    if (audio7.play) {
        let pause2= document.querySelector(".playbuton7");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio7.pause();
                if (audio7.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio7.play();
                    })}
                else if (audio7.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio7.pause) {
        
        let pause2= document.querySelector(".playbuton7").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio7=new Audio("yt1s.com - Govinda Namam Full Song  Sri Venkatesham Manase Smarami.mp3");
// document.querySelector(".pause7").addEventListener("click",function(){
//     audio7.pause();
// });



var audio8=new Audio("yt1s.com - Tujhe Na Dekhu Toh  Kumar Sanu  Alka Yagnik  Rang  1993.mp3");
document.querySelector(".playbuton8").addEventListener("click",function(){
    audio8.play();

    if (audio8.play) {
        let pause2= document.querySelector(".playbuton8");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio8.pause();
                if (audio8.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio8.play();
                    })}
                else if (audio8.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio8.pause) {
        
        let pause2= document.querySelector(".playbuton8").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio8=new Audio("yt1s.com - Tujhe Na Dekhu Toh  Kumar Sanu  Alka Yagnik  Rang  1993.mp3");
// document.querySelector(".pause8").addEventListener("click",function(){
//     audio8.pause();
// });

var audio9=new Audio("yt1s.com - Lyrical Hamein Tumse Hua Hai Pyar  Ab Tumhare Hawale Watan SathiyoAkshay KumarDivya Khosla Kumar.mp3");
document.querySelector(".playbuton9").addEventListener("click",function(){
    audio9.play();

    if (audio9.play) {
        let pause2= document.querySelector(".playbuton9");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio9.pause();
                if (audio9.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio9.play();
                    })}
                else if (audio9.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio9.pause) {
        
        let pause2= document.querySelector(".playbuton9").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio9=new Audio("yt1s.com - Lyrical Hamein Tumse Hua Hai Pyar  Ab Tumhare Hawale Watan SathiyoAkshay KumarDivya Khosla Kumar.mp3");
// document.querySelector(".pause9").addEventListener("click",function(){
//     audio9.pause();
// });

var audio10=new Audio("Jalte_Diye_-_Prem_Ratan_Dhan_Payo_128_Kbps.mp3");
document.querySelector(".playbuton10").addEventListener("click",function(){
    audio10.play();
    if (audio10.play) {
        let pause2= document.querySelector(".playbuton10");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio10.pause();
                if (audio10.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio10.play();
                    })}
                else if (audio10.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio10.pause) {
        
        let pause2= document.querySelector(".playbuton10").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio10=new Audio("yt1s.com - Ved Tujha  Official Song  Riteish Deshmukh  Jiya Shankar  Ajay  Atul  30th December.mp3");
// document.querySelector(".pause10").addEventListener("click",function(){
//     audio10.pause();
// });

var audio11=new Audio("yt1s.com - Jugraafiya  Full Video  Super 30  Hrithik Roshan  Mrunal Thakur  Udit Narayan  Shreya Ghoshal.mp3");
document.querySelector(".playbuton11").addEventListener("click",function(){
    audio11.play();
    if (audio11.play) {
        let pause2= document.querySelector(".playbuton11");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio11.pause();
                if (audio11.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio11.play();
                    })}
                else if (audio11.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio11.pause) {
        
        let pause2= document.querySelector(".playbuton11").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio11=new Audio("yt1s.com - Jugraafiya  Full Video  Super 30  Hrithik Roshan  Mrunal Thakur  Udit Narayan  Shreya Ghoshal.mp3");
// document.querySelector(".pause11").addEventListener("click",function(){
//     audio11.pause();
// });

var audio12=new Audio("yt1s.com - Kesariya From Brahmastra.mp3");
document.querySelector(".playbuton12").addEventListener("click",function(){
    audio12.play();
    if (audio12.play) {
        let pause2= document.querySelector(".playbuton12");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio12.pause();
                if (audio12.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio12.play();
                    })}
                else if (audio12.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio12.pause) {
        
        let pause2= document.querySelector(".playbuton12").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio12=new Audio("yt1s.com - Kesariya From Brahmastra.mp3");
// document.querySelector(".pause12").addEventListener("click",function(){
//     audio12.pause();
// });

var audio13=new Audio("yt1s.com - Tera Fitoor.mp3");
document.querySelector(".playbuton13").addEventListener("click",function(){
    audio13.play();
    if (audio13.play) {
        let pause2= document.querySelector(".playbuton13");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio13.pause();
                if (audio13.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio13.play();
                    })}
                else if (audio13.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio13.pause) {
        
        let pause2= document.querySelector(".playbuton13").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio13=new Audio("yt1s.com - Tera Fitoor.mp3");
// document.querySelector(".pause13").addEventListener("click",function(){
//     audio13.pause();
// });

var audio14=new Audio("yt1s.com - Pani Pani Shraddha Kapoor X Pani Pani Song   Edit Video.mp3");
document.querySelector(".playbuton14").addEventListener("click",function(){
    audio14.play();
    if (audio14.play) {
        let pause2= document.querySelector(".playbuton14");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio14.pause();
                if (audio14.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio14.play();
                    })}
                else if (audio14.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio14.pause) {
        
        let pause2= document.querySelector(".playbuton14").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio14=new Audio("yt1s.com - Pani Pani Shraddha Kapoor X Pani Pani Song   Edit Video.mp3");
// document.querySelector(".pause14").addEventListener("click",function(){
//     audio14.pause();
// });

// document.querySelector(".b2").addEventListener("click",function(){
//     alert("i got click ");
//      Have a favorite? 
//      Tell us which artists you like and we'll improve your recommendations 
// });  

var audio15=new Audio("Untitled.mp3");
document.querySelector(".playbuton15").addEventListener("click",function(){
    audio15.play();
    if (audio15.play) {
        let pause2= document.querySelector(".playbuton15");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio15.pause();
                if (audio15.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio15.play();
                    })}
                else if (audio15.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio15.pause) {
        
        let pause2= document.querySelector(".playbuton15").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio15=new Audio("Untitled.mp3");
// document.querySelector(".pause15").addEventListener("click",function(){
//     audio15.pause();
// });

var audio16=new Audio("WhatsApp Video 2023-01-02 at 17.21.29.mp3");
document.querySelector(".playbuton16").addEventListener("click",function(){
    audio16.play();
    if (audio16.play) {
        let pause2= document.querySelector(".playbuton16");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio16.pause();
                if (audio16.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio16.play();
                    })}
                else if (audio16.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio16.pause) {
        
        let pause2= document.querySelector(".playbuton16").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }
});
// var audio16=new Audio("WhatsApp Video 2023-01-02 at 17.21.29.mp3");
// document.querySelector(".pause16").addEventListener("click",function(){
//     audio16.pause();
// });

var audio17=new Audio("yt1s.com - Ae mere vatan ke logon jra aankh mai bharo ro paani.mp3");
document.querySelector(".playbuton17").addEventListener("click",function(){
    audio17.play(); 
    if (audio17.play) {
        let pause2= document.querySelector(".playbuton17");
        pause2.classList.remove("fa-play")
        pause2.classList.add("fa-pause")
        
        console.log("song playing")
        setTimeout(()=>{
            let pausingEvent =pause2.addEventListener("click",function(){
                audio17.pause();
                if (audio17.pause) {
                    pause2.classList.remove("fa-pause");
                    pause2.classList.add("fa-play")
                    console.log("song paused")
                    // audio3.play();
                    pause2.addEventListener("click",function(){
                        audio17.play();
                    })}
                else if (audio17.play) {
                    pause2.classList.remove("fa-play")
                    pause2.classList.add("fa-pause")   
                }
            })
            pausingEvent;
            // audio3.pause();
    
        },1000)
        
    } else if (audio17.pause) {
        
        let pause2= document.querySelector(".playbuton17").className="fa-play"
        pause2.classList.remove("fa-pause")
        pause2.classList.add("fa-play")
        console.log("song Pause")
    }

});
// var audio17=new Audio("yt1s.com - Ae mere vatan ke logon jra aankh mai bharo ro paani.mp3");
// document.querySelector(".pause17").addEventListener("click",function(){
//     audio17.pause(); 

// });




// var audio1=new Audio("yt1s.com - Ae mere vatan ke logon jra aankh mai bharo ro paani.mp3");
// document.querySelector(".pause1").addEventListener("click",function(){
//     audio1.pause(); 
    
// });
// var audio2=new Audio("yt1s.com - Ae mere vatan ke logon jra aankh mai bharo ro paani.mp3");
// document.querySelector(".pause2").addEventListener("click",function(){
//     audio2.pause(); 
    
// });

// var audio3=new Audio("yt1s.com - Ae mere vatan ke logon jra aankh mai bharo ro paani.mp3");
// document.querySelector(".pause3").addEventListener("click",function(){
//     audio3.pause(); 
    
// });
// var audio1=new Audio("yt1s.com - Ae mere vatan ke logon jra aankh mai bharo ro paani.mp3");
// document.querySelector(".pause1").addEventListener("click",function(){
//     audio1.pause(); 
    
// });







// var audio17=new Audio("yt1s.com - Ae mere vatan ke logon jra aankh mai bharo ro paani.mp3");
// document.querySelector(".pause17").addEventListener("click",function(){
//     audio17.pause(); 
    
// });


