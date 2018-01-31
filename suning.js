/**
 * Created by Admin on 2018/1/27.
 */
window.onload=function () {
    //banner
    let div=document.querySelector('.banner_img');
    let img=document.querySelectorAll('.b_img li');
    let left=document.querySelector('.jiantou_left');
    let right=document.querySelector('.jiantou_right');
    let circle=document.querySelectorAll('.lunbodian li')
    let n=0;
    function move() {
        n++;
        if(n==img.length){
            n=0;
        }
        img.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        img[n].classList.add('active');
        circle[n].classList.add('act');
    }
    let time=setInterval(move,2000);
    div.onmouseover=function () {
        clearInterval(time);
    }
    div.onmouseout=function () {
        time=setInterval(move,2000);
    }
    right.onclick=function () {
        move()
    }
    left.onclick=function () {
        n--;
        if(n<0){
            n=img.length-1;
        }
        img.forEach(function (value,index) {
            value.classList.remove('active');
            circle[index].classList.remove('act');
        })
        img[n].classList.add('active');
        circle[n].classList.add('act');
    }
    circle.forEach(function (value,index) {
        value.onclick=function () {
            circle.forEach(function (val,ind) {
                val.classList.remove('act');
                img[ind].classList.remove('active');
            })
            this.classList.add('act');
            img[index].classList.add('active');
        }
    })


    //change
    let chose=document.querySelectorAll('.dajuhui_top a.dajuhui_top_center');
    let main=document.querySelectorAll('.dajuhui div.dajuhui_bottom');
    chose.forEach(function (value,index) {
        value.onmouseover=function () {
            chose.forEach(function (val,ind) {
                val.classList.remove('active_');
                main[ind].classList.remove('mainactive_');
            })
            this.classList.add('active_');
            main[index].classList.add('mainactive_');
        }
    })

    //floor hidden_,somewhere_,
    function Floor(floor_,asides_,aside_,back_,a,b) {
        let floor=document.querySelectorAll(floor_);//楼层
        let wh=document.documentElement.clientHeight;//窗口高度
        let asides=document.querySelector(asides_);//侧导航
        let aside=document.querySelectorAll(aside_);//侧导航中的每一个导航
        let back=document.querySelector(back_);//返回顶部
        // let hidden=document.querySelector(hidden_);//滚动后出现的搜索框
        // let somewhere=document.querySelector(somewhere_);//在banner的位置出现搜索框
        let flag=true;
        let out=true;
        let comein=false;
        window.onscroll=function () {
            let tops=document.body.scrollTop?document.body.scrollTop:document.documentElement.scrollTop;
            // if(tops>somewhere.offsetTop+300){
            //     if(out){
            //         out=false;
            //         animate(hidden,{top:0},function () {
            //             comein=true;
            //         });
            //     }
            // }
            // else {
            //     if(comein){
            //         comein=false;
            //         animate(hidden,{top:-50},function () {
            //             out=true;
            //         });
            //     }
            // }
            if(!flag){
                return;
            }
            floor.forEach(function (val,ind) {
                if(tops>=val.offsetTop+200-wh){
                    asides.classList.add(a);//将含有display:block的类名赋给侧导航，侧导航出现
                    aside.forEach(function (value) {
                        value.classList.remove(b);
                    })
                    aside[ind].classList.add(b);//将含有颜色的类名赋给导航
                }
                if(tops<=floor[0].offsetTop+200-wh){
                    asides.classList.remove(a);
                }
            })
            aside.forEach(function (value,index) {
                value.onclick=function () {
                    flag=false;
                    animate(document.body,{scrollTop:floor[index].offsetTop},200,function () {
                        flag=true;
                    });
                    animate(document.documentElement,{scrollTop:floor[index].offsetTop},200,function () {
                        flag=true;
                    });
                    aside.forEach(function (val) {
                        val.classList.remove(b);
                    })
                    this.classList.add(b);
                }
            })
        }
        back.onclick=function () {
            if(!flag){
                return;
            }
            flag=false;
            animate(document.body,{scrollTop:0},1000,function () {
                flag=true;
            });
            animate( document.documentElement,{scrollTop:0},1000,function () {
                flag=true;
            });
        }
    }
    Floor('div.floor','.gd_left','.gd_left ul .gd_list','.gd_left ul .backtop','appear','change');













}