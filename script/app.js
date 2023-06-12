let msg = document.getElementById('msg');
var conn = new WebSocket('ws://localhost:8080');
conn.onopen = function(e) {
};

conn.onmessage = (e)=>{
    
  }


  window.onload = ()=>{

    msg.addEventListener('keyup', (e)=>{
        if(e.keyCode == 13){
            let message = e.target.value;

const data = {
  userid: 1,
  text: message,
  status: 1,
};


  fetch('http://localhost/msg', {
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify(data)
})
  .then(response => {
    if (response.ok) {
      return response.text(); // Access the response body as text
    } else {
      throw new Error('Request failed with status ' + response.status);
    }
  })
  .then(data => {
    // Handle the response data
    console.log(data);
  })
  .catch(error => {
    // Handle any errors
    console.error(error);
  });



        }
    })
  }







