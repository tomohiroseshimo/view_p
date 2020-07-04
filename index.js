document.getElementById("btn1").onclick = function onclick() {
  let date = new Date();
  let yaer = date.getFullYear();
  let month = date.getMonth()+1;
  let day = date.getDate();
  let message = `今日は${yaer}年${month}月${day}日です`;

  console.log("成功！");
  let demo = document.getElementById("tbox");
  demo.innerHTML = message;
}