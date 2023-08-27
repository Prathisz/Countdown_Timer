// console.log(newyear);
// console.log(curdate);
// 1000ms=1sec
// 60sec=1min
// 60min=1hr
// 24hr=1day
// console.log(day);
// console.log(hr);
// console.log(min);
// console.log(sec);

const days=document.getElementById("days");
const Hours=document.getElementById("Hours");
const Minutes=document.getElementById("Minutes");
const Seconds=document.getElementById("Seconds");

function time(){
    const curyear=new Date().getFullYear();//create date obj(in build method)
    const newyear=new Date(`January 1 ${curyear+1}`);//targeting next year(target for timer)
    const curdate=new Date();
    const diff=newyear-curdate;//difference btw current date minus target date(new year)
    const day=Math.floor(diff/1000/60/60/24);
    const hr=Math.floor((diff/1000/60/60)%24);
    const min=Math.floor((diff/1000/60)%60);
    const sec=Math.floor((diff/1000)%60);
  //  console.log(day+" "+hr+" "+min+" "+sec);
  days.innerHTML=day<10?"0"+day:day;
  Hours.innerHTML=hr<10?"0"+hr:hr;
  Minutes.innerHTML=min<10?"0"+min:min;
  Seconds.innerHTML=sec<10?"0"+sec:sec;
}
setInterval(time,1000);


