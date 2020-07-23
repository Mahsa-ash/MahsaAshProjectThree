const gameApp={}
gameApp.parentClass=[]
gameApp.i=0
gameApp.movesCounter=0;
gameApp.choice=[]
gameApp.init=function(){
    gameApp.randOrder()
    gameApp.click()
    gameApp.timer()
}

gameApp.randOrder=function(){
$('li').css('order',function(){
    return Math.floor(Math.random()*16)
})}
gameApp.timer=function(){
    let start=0;
    let intervalID;
    // on click, if the start variable is zero, start the timer with setInterval, else alert "game in progress". If user selects yes!, then the previous setInterval is cleared with clearInterval and a new one starts. Also, the movesCounter variable is reset to zero.
    $('.startGame').on('click',function(){ 
        if (start == 0){
            intervalID=setInterval(function() {
                start++
                $('.timer span').text(`${start} s` )
            }, 1000) 
        }
        else{
            swal({
                title: "Game in progress!",
                text: "Do you want to restart?",
                icon: "success",
                buttons: ["No!", "Yes!"]
              }).then(function(val){
                  if(val){
                    clearInterval(intervalID)
                    start=0;
                    intervalID=setInterval(function() {
                        start++
                        $('.timer span').text(`${start} s` )
                    }, 1000) 
                    gameApp.movesCounter=0;
                    location.reload()
                  }
              })
        };
    }) 
}
gameApp.click=function(){
        $('div').on('click', function(){
            if(gameApp.i<2){
            gameApp.movesCounter++
            $('.movesCounter span').text(gameApp.movesCounter)
            gameApp.i++ // counter to count number of clicks 
            gameApp.choice[gameApp.i]=$(this) //storing the clicked item in the choice array
            $(this).removeClass('hidden')
            $(this).addClass('unhidden')
            gameApp.parentClass[gameApp.i] = $(this).parent()['0']['className']
            if(gameApp.i==2){
                setTimeout(gameApp.hiddenUnhidden, 1000,gameApp.i)
            }
    }
    })
}
gameApp.hiddenUnhidden=function(j){
    // if the parentClass of the two clicked items are the same they remain unhidden else they will hide again
    if (gameApp.parentClass[j - 1] == gameApp.parentClass[j]) {
        gameApp.i=0;
        gameApp.winAlert()
    }
    else {
        gameApp.choice[j].removeClass('unhidden');
        gameApp.choice[j].addClass('hidden');
        gameApp.choice[j - 1].removeClass('unhidden');
        gameApp.choice[j - 1].addClass('hidden')
        gameApp.i=0;
        gameApp.winAlert()
    }

}
gameApp.winAlert=function(){
    let liList=$('.unhidden')
    if(liList.length==12){
        swal({
        title: "Good job!",
        text: "Do you want to continue?",
        icon: "success",
        buttons: ["Oh noez!", "Aww yiss!"]
      }).then(function(val){ 
          if(val){
          location.reload()
        }
          else{
              swal("Bye")
          }
      
    })
}}
$(document).ready(function(){
    gameApp.init();
})
