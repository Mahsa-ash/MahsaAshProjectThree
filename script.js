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
gameApp.hiddenUnhidden=function(j){
    
        if (gameApp.parentClass[j - 1] == gameApp.parentClass[j]) {
            // console.log("score")
            gameApp.i=0;
        }
        else {
            // console.log('nope')
            gameApp.choice[j].removeClass('unhidden');
            gameApp.choice[j].addClass('hidden');
            gameApp.choice[j - 1].removeClass('unhidden');
            gameApp.choice[j - 1].addClass('hidden')
            gameApp.i=0;
        }
    
}

gameApp.click=function(){
$('div').on('click', function(){

    gameApp.i++ // counter to count number of clicks 
    // console.log(gameApp.i)
    gameApp.choice[gameApp.i]=$(this) //
   $(this).removeClass('hidden')
    $(this).addClass('unhidden')
    gameApp.parentClass[gameApp.i] = $(this).parent()['0']['className']

    // console.log(gameApp.parentClass)
    // console.log(gameApp.choice)
    if(gameApp.i==2){
   
        setTimeout(gameApp.hiddenUnhidden, 1000,gameApp.i)
    }
})
}