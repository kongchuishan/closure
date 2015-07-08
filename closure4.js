/**
 * Created by Administrator on 2015/7/8.
 */
;(function(){
    var aaa=(function(){
        var a=1;
        function bbb(){
            a++;
            console.log(a);
        }
        function ccc(){
            a++;
            console.log(a);
        }
        return {
            b:bbb,
            c:ccc
        }
    })();
    aaa.b();//2
    aaa.c();//3

})();