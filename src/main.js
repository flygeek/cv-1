let html = document.querySelector('#html');
let style = document.querySelector('#style')
let string = `
/*你好，我是一名前端新人
* 接下来我要加样式了
* 我要加的样式是
* 字体变成红色*/
body{
    color: red;
}
/*我叫tom
* 接下来
* 我展示一下我的前端功底
* 首先我要准备一个div*/
#div1{
    width: 200px;
    height: 200px;
    border: 1px solid red;
}
/*接下来，我把 div 变成一个八卦图
* 注意看好了
* 首先，把 div 变成一个圆*/
#div1{
    border-radius: 50%;
    box-shadow: 0 0 3px rgba(0,0,0,0.5);
    border: none;
} 
/*八卦是阴阳形成了
* 一黑一白*/
#div1{
    background: linear-gradient(90deg, rgba(255,255,255,1) 50%, rgba(0,0,0,1) 50%);
}
/*再加上两个神秘的小球
* 也是一黑一白*/
#div1::before{
    width: 100px;
    height: 100px;
    top: 0;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #000;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(255,255,255,1) 25%, rgba(0,0,0,1) 25%);
}
#div1::after{
    width: 100px;
    height: 100px;
    bottom: 0;
    left: 0;
    left: 50%;
    transform: translateX(-50%);
    background: #fff;
    border-radius: 50%;
    background: radial-gradient(circle, rgba(0,0,0,1) 25%, rgba(255,255,255,1) 25%);
}
`;

let string2 = '';
let n = -1;

let step = () => {
    setTimeout(() => {
        n += 1;
        if(string[n] === '\n'){
            string2 += '<br>'
        }else if(string[n] === ' '){
            string2 += '&nbsp'
        } else{
            string2 += string[n]
        }
        // string[n]==='\n' ? string2+='<br>' : string2+=string[n]  上面是优化写法，不要看不懂
        html.innerHTML = string2
        style.innerHTML = string.substring(0, n)   //这里不能用string2了，因为这里修改的是css，不能有br换行的标签
        window.scroll(0, 99999)     //自动滚动
        html.scroll(0, 99999)
        if (n + 1 < string.length) {
            step()
        } else {
        }
    }, 40)
};
step()

//下面进行style


