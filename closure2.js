/**
 * Created by Administrator on 2015/7/8.
 */
;(function(){
    //闭包的好处
    //1.希望一个变量长期驻扎在内存当中。
    //2.避免全局变量的污染
    //3.私有成员的存在
    //1.
    var a=1;
    function aaa(){
        a++;
        console.log(a);
    }
    aaa();//2
    aaa();//3
    console.log(a);//3

    //2.
    var a1=1;
    function bbb(){
        var a1=1;
        a1++;
        console.log(a1);
    }
    bbb();//2
    bbb();//2
    console.log(a1);//1

    //3.
    function ccc(){
        var a2=1;
        return function(){
            a2++;
            console.log(a2);
        }
    }
    var b=ccc();
    b();//2
    b();//3
})();