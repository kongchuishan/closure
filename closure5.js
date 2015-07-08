/**
 * Created by Administrator on 2015/7/8.
 */
window.onload=function(){;
    var aDiv=document.getElementsByTagName('div');
    for(var i=0;i<aDiv.length;i++){
        ;(function(index){
            aDiv[i].onclick=function(){
                alert(index);
            };
        })(i);
    }
};
