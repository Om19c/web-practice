
// console.info('connected!');
// let a=2;
// console.log(a);
// console.info(a);
// console.warn(a);

// let username=prompt("your name");
// alert ("hello "+ username);

// let age=prompt('enter age');
// console.log(age+5);
// let msg= "i love sherians";
// console.log(msg.slice(2,6));
// let a=5 ,b=10;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);

// let age=prompt("enter age");
// if(age>18){
//     console.log("adult");
// }
// else console.log('minor');

// let temp=prompt("enter tempreture");
// temp>30?console.log('hot'):console.log('cold');

// let age=prompt ('your age');
// if(age.trim() ==='')console.error('not blank');
// else if(age === null)console.error('press cancle');
// else if(age>=18){
//     console.log('eligible for vote');
// }else console.log('not eligible');

// for (let i=1;i<=10;i++){
//     console.log(`5 x ${i} = ${5*i}`);
// }

// let count = 0;
// for(let i=1;i<16;i++){
//     if(i>8)count++;
// }
// console.log(count);

// let password='om';
// let count=0;
// let pass=prompt('enter password');
// count++;
// while(pass!==password && count<3 && pass!==''  && pass!== null){
//     pass=prompt('enter password');
//     count++;
// }
// if (pass.trim()==='')console.log('not blank');
// else if(pass === null)console.log('press cancle');
// else if(pass===password)console.log('correct password');
// else console.error('account locked');

// let stop='stop';
// let yes='yes';
// count=0;
// //alert ('to stop write "stop",count toatal yes words');
// let msg=prompt('enter word');
// if (msg===yes)count++;
// while(msg!==stop){
//     msg=prompt('enter word');
//     if (msg=== yes)count++;
// }
// console.log(count);


// var btn=document.querySelector('button')
// var box=document.querySelector('#box')
// var p=document.querySelector('p')
// var arr=['hello','om','welcome','html','css']
// btn.addEventListener('click',function(){
//    var c1=Math.floor(Math.random()*256)
//     var c2=Math.floor(Math.random()*256)
//     var c3=Math.floor(Math.random()*256)
//     box.style.backgroundColor=`rgb(${c1},${c2},${c3})`
//     p.style.color=`rgb(${c3},${c1},${c2})`
//     var w=Math.floor(Math.random()*arr.length)
//     p.innerText=arr[w];
    // var v1=document.createElement(`p`);
    // v1.innerHTML=`hello`;
    // var main=document.querySelector(`main`);
    // main.appendChild(v1);

// })

var btn=document.querySelector(`button`);
var main=document.querySelector(`main`);
btn.addEventListener(`click`,function(){
    var x=Math.random()*100;
    var y=Math.random()*100;
    var r=Math.random()*360;
    var c1=Math.floor(Math.random()*256)
    var c2=Math.floor(Math.random()*256)
    var c3=Math.floor(Math.random()*256)
    var div=document.createElement(`div`);
    div.style.height=`50px`;
      div.style.width=`50px`;
      div.style.backgroundColor=`rgb(${c1},${c2},${c3})`;
      div.style.position=`absolute`;
      div.style.left=x+`%`;
      div.style.top=y+`%`;
      div.style.rotate=r+`deg`;
      
      main.appendChild(div)
})