/**
 * Created by Administrator on 2015/7/8.
 */
;(function(){
    //闭包的概念 函数嵌套函数
    function aaa(a){
        var b=5;
        return function(){
            console.log(a);
            console.log(b);
        };

    }
    aaa(5)();// 5 5
})();