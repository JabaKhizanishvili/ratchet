let msg = document.getElementById('msg');
var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(e) {
    console.log("Connection established!");
};

conn.onmessage = (e)=>{
    // let msg = JSON.parse(e.data);
    // console.log(msg);
    console.log(e);
  }


  window.onload = ()=>{
    msg.addEventListener('keyup', (e)=>{
        if(e.keyCode == 13){
            let message = e.target.value;
            conn.send(message);
        }
    })
  }



