const gameApp={}
gameApp.parentClass=[]
gameApp.i=0
gameApp.choice=[]
gameApp.init=function(){
    gameApp.randOrder()
    gameApp.click()
}

gameApp.randOrder=function(){
$('li').css('order',function(){
    return Math.floor(Math.random()*16)
})}
gameApp.click=function(){
$('div').on('click', function(){

    gameApp.i++ // counter to count number of clicks 
    // console.log(gameApp.i)
    gameApp.choice[gameApp.i]=$(this) //
   $(this).removeClass('hidden')
    $(this).addClass('unhidden')
    gameApp.parentClass[gameApp.i] = $(this).parent()['0']['className']
    if(gameApp.i==2){
   
        setTimeout(gameApp.hiddenUnhidden, 1000,gameApp.i)
    }
})
}
gameApp.hiddenUnhidden=function(j){
    
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
            icon: "success",
            button: "I am done!"
          });
    }
}
$(document).ready(function(){
    gameApp.init();
})
// To be further completed by unsplash API