
Java.perform(function(){
    var X=Java.use("com.jiubang.go.music.ad.DailyRecommendActivity$2");
    
	Java.scheduleOnMainThread(function(){
        var b=X.$new();
        b.a();
        console.log('');
	})
})


//frida-trace -U -f com.ziipin.softkeyboard.uzbekistan --runtime=v8 -j '*!*'