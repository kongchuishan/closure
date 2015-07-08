/**
 * Created by Administrator on 2015/7/8.
 */
function aaa(){
    console.log(1);
}
aaa();


;(function(){
    console.log(1);
})();


var aaa=(function(){
    var a=1;
    return function(){
        a++;
        console.log(a);
    }
})();
aaa(); //2
aaa(); //3