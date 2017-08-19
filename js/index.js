$(function () {
    //首页菜单动态渲染

    //首页菜单动态渲染
    getIndexMenu();
    //首页折扣动态渲染
    getDissale();
    //菜单获取更多
    getMore();
    //回到顶部
    backTop();
});

//首页菜单动态渲染
function getIndexMenu () {
    $.ajax({
        url : url + "api/getindexmenu",
        success : function (result) {
            //绑定数据和模板
            var indexMenuHtml = template("indexMenuTpl",result);
            $("#menu .row").html(indexMenuHtml);
        }
    })
}

//首页折扣动态渲染
function getDissale () {
    $.ajax({
        url : url + "api/getmoneyctrl",
        success : function (data) {
            //准备模板
            //绑定数据和模板
            var indexDissaleHtml = template("indexDissaleTpl",{data:data.result});
            $("#dissale .dissaleList").html(indexDissaleHtml);
    }
    })
}


//菜单获取更多
function getMore () {
    $("#menu .row").on("click", $(".row:nth-child(8)") ,function () {
        $(".item:nth-last-child(-n+4)").toggle();
    });
}


//回到顶部
    function backTop () {
    $("#footer .b2t").on("click",function () {
        $("html body").animate({scrollTop: 0},200);
        return false;
    });
}

