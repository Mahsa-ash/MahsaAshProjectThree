const gameApp={}
gameApp.parentClass=[]
gameApp.i=0
gameApp.k=0
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
    $('.startGame').on('click',function(){
        let start=0
        setInterval(function() {
        start++
        $('.timer span').text(start)
    }, 1000);
    }) 
}
gameApp.click=function(){
    let movesCounter=0;
        $('div').on('click', function(){
            if(gameApp.i<2){
            movesCounter++
            $('.movesCounter span').text(movesCounter)
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
