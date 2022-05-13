window.onload = function()
{
    var img2 = document.getElementById("img2") ;
    var p1=document.getElementById("p1");
    p1.style.display='none';
    img2.style.display = "none" ;
    var page = document.getElementById("page");
    page.style.display = 'none';
    window.onbeforeunload = function(){
        parent("1123")
    }

    window.onbeforeunload = function () {
        if(!flag){
            console.log('关闭操作');
        }
        else{
            console.log('刷新操作');
        }
    };
    setTimeout(
        function()
        {
            img2.style.opacity = '0'
            img2.style.display='block';
            for(i=1;i<=10;i++)
            {
                setTimeout(function(){
                    img2.style.opacity=i+1 ;
                } , 100)
            }
            var img = document.getElementById("img") ;
            console.log("start a new img")
            img.style.width = "80%";
            img.style.height = '1000px';
            img.style.backgroundRepeat='no-repeat';
            img.style.backgroundSize='cover';
            img.style.backgroundImage = 'url(../img/bg1.jpg)';
            for(i = 1 ; i<=10;i++)
            {
                function imgrun()
                {
                    setTimeout(function()
                    {
                        img.style.backgroundImage = 'url(img/bg2.jpg)';
                        setTimeout(function(){
                            img.style.backgroundImage = 'url(img/bg3.jpg)';
                            setTimeout(function()
                            {
                                img.style.backgroundImage ='url(img/bg4.jpg)'
                                setTimeout(function() {
                                    img.style.backgroundImage ='url(img/bg5.jpg)';
                                }, 2000);
                            }
                            )
                        } , 2000)
                    } , 2000)
                }
                imgrun()
            }
        } , 300
    )
    var time=document.getElementById("time");
    console.log(Date())
    time.innerHTML = Date()
    for(i=1 ; i<=1 ; i++)
    {
        console.log("start image run")
        for(i = 1 ; i<=10;i++)
        {
            setTimeout(function()
            {
                console.log("Auther:LinWinCloud")
            })
        }
        for(i = 1 ; i <= 1 ; i++)
        {
            setTimeout(function()
            {
                img.innerHTML = "<br/><br/><br/><br/><br/><h3>天地和你一个都不能少，请你别在我离不开你的时候离开我，哪怕你离开我视线一小会，街边的每个身影都像极了你。</h3>"
            } , 4200)
        }
    }

}