//优惠券遮罩部分
{
    const tds = document.querySelectorAll(".one-right td");
    const masks = document.querySelectorAll(".one-right .mask");
    tds.forEach(function (ele,index) {
        ele.onmouseover=function(){
            masks[index].classList.add("active1");
        }
        ele.onmouseout=function(){
            masks[index].classList.remove("active1");
        }
    })
}

//左边小轮播图部分
{
    const small = document.querySelectorAll(".one-left-middle ul li");
    const masks = document.querySelectorAll(".one-left-middle ul li .mask");
    const big = document.querySelectorAll(".one-left-top li");
    const mao = document.querySelectorAll(".one-left-middle ul li .mask img");
    const ulinner=document.querySelector(".sbannerinner");
    const prev=document.querySelector(".sbannerinner .prev");
    const next=document.querySelector(".sbannerinner .next");

    small.forEach(function (ele,index) {
        ele.onmouseover=function(){

            // 不显示所有的mask
            masks.forEach(function (ele,index) {
                masks[index].classList.remove("active2");
            });
            // 显示当前的mask
            masks[index].classList.add("active2");

            big.forEach(function (ele, index) {
                big[index].classList.remove("show");
            });
            big[index].classList.add("show");

            mao.forEach(function (ele, index) {
                mao[index].classList.remove("show");
            });
            mao[index].classList.add("show");
        }

    });

    let num=0;
    let st=setInterval(function () {
        if(num==6){
            num=0;
        }
        masks.forEach(function (ele,index) {
            masks[index].classList.remove("active2");
        });
        masks[num].classList.add("active2");

        big.forEach(function (ele, index) {
            big[index].classList.remove("show");
        });
        big[num].classList.add("show");

        mao.forEach(function (ele, index) {
            mao[index].classList.remove("show");
        });
        mao[num].classList.add("show");

        // ulinner.style.marginLeft=0;
        if(num>=3){
            ulinner.style.marginLeft="-488px";
            next.style.opacity="0";
            prev.style.opacity="1";
        }else{
            next.style.opacity="1";
            prev.style.opacity="0";
            ulinner.style.marginLeft="0";
        }
        num++;

    },2000);

    
    next.onclick=(function () {
        next.style.opacity="0";
        prev.style.opacity="1";
        ulinner.style.marginLeft="-488px";
        clearInterval(st);
    });
    prev.onclick=(function () {
        next.style.opacity="1";
        prev.style.opacity="0";
        ulinner.style.marginLeft="0";
        clearInterval(st);
    });

}

//轮播图
{
    const bannerList=document.querySelectorAll(".banner li");
    const dianList=document.querySelectorAll(".dianbox li");
    const bannerbg=document.querySelector(".banner-bg");

    var colorarr=["#e8e8e8","#e8e8e8","#2ab9ff","#f4dadd","#1f92ef","#174883"];

    dianList.forEach(function (ele, index) {
        ele.onmouseover=function () {
            dianList.forEach(function (ele, index) {
                ele.classList.remove("active");
                bannerList[index].classList.remove("active");
            });
            ele.classList.add("active");
            bannerList[index].classList.add("active");
            bannerbg.style.background=colorarr[index];
            num=index;
        }

    });

    var num=0;
    function fn() {
        num++;
        if(num==dianList.length){
            num=0;
        }
        dianList.forEach(function (ele, index) {
            ele.classList.remove("active");
            bannerList[index].classList.remove("active");
        });
        dianList[num].classList.add("active");
        bannerList[num].classList.add("active");
        bannerbg.style.background=colorarr[num];
    }

    var st=setInterval(fn,2000);

    bannerbg.onmouseover=function () {
        clearInterval(st);
    }
    bannerbg.onmouseout=function () {
        st=setInterval(fn,2000);
    }

}

//文字轮播
{
    const wList=document.querySelector(".w-banner-inner");
    // console.dir(wList);
    let num=0;
    let r=setInterval(function(){
        num++;
        if(num>=4){
            num=0;
        }
        wList.style.marginTop=-num*40+"px";
    },3000);
}

{
    const wlist=document.querySelector(".slide-inner");
    console.dir(wlist);

    let num=0;
    let st=setInterval(function(){
        num++;
        wlist.style.transition="all 1s";
        wlist.style.marginTop=-num*30+"px";
    },3000);

    wlist.addEventListener("transitionend",function () {
        if(num==3){
            wlist.style.transition="none";
            wlist.style.marginTop=0;
            num=0;
        }
    });
}

//回到顶部
{
    const totop=document.querySelector(".totop");
    const lfTotop=document.querySelector(".left-totop");

    let move=function(){
        let obj=document.body.scrollTop==0?document.documentElement:document.body;
        let time=500;
        let speed=obj.scrollTop/time*30;
        let st=setInterval(function () {
            obj.scrollTop-=speed;
            if(obj.scrollTop<=0){
                obj.scrollTop=0;
                clearInterval(st);
            }
        },30);
    }

    totop.onclick=move;
    lfTotop.onclick=move;
}

//顶部搜索框
{
    const topBox=document.querySelector(".top-search-box");

    window.onscroll=function () {
        let obj=document.body.scrollTop==0?document.documentElement:document.body;
        let height=window.innerHeight;
        if(obj.scrollTop>=height){
            topBox.style.marginTop=0;
        }
        if(obj.scrollTop<=height){
            topBox.style.marginTop="-50px";
        }
    }

}

// 左侧按钮对应内容
{
    const leftbar=document.querySelector(".left-mulu");
    const btns=document.querySelectorAll(".left-mulu .btn");
    const boxs=document.querySelectorAll(".three-box");
    const colorArr=["#EA5F8D","#0AA6E8","#64C333","#F15453","#19C8A9","#F7A945","#FF0036"];

    let obj;

//      页面滚动到一定高度出现消失
    window.addEventListener("scroll",function () {
        obj=document.body.scrollTop==0?document.documentElement:document.body;
        let tHeight=window.innerHeight;
        if(obj.scrollTop>=tHeight){
            leftbar.style.cssText="width:35px;height:332px";
        }else{
            leftbar.style.cssText="width:0;height:0";
        }
    });


//      点击左边按钮跳转到对应层级
    btns.forEach(function(ele,index){
        ele.onclick=function(){
            let height=boxs[index].offsetTop-70;
            animate(obj,{scrollTop:height},500);
        }
    });


//      滚动时颜色对应变化
    window.addEventListener("scroll",function () {

        btns.forEach(function(ele){
            ele.style.background="";
        });

        let st=obj.scrollTop;
        for(var i=0;i<boxs.length;i++){
            if(st>=boxs[i].offsetTop-70){
                btns.forEach(function(ele){
                    ele.style.background="";
                });
                btns[i].style.background=colorArr[i];
            }
        }
    });
}





















