$(function(){
    $("header span").click(function(){
        history.back();
    });
    let sstitle=localStorage.sstitle;
    let sspic=localStorage.sspic;
    let sscontent=localStorage.sscontent;
    let sssrc=localStorage.sssrc;
    let sstime=localStorage.sstime;
    console.log($("main .title"));
    console.log($("main .content"));
    $("main .title").html(sstitle);
    $("main .content").html(sscontent);
    // $("main .picture").html(sspic);
    $("main .time").html(sstime);
    $("main .src").html(sssrc);



});