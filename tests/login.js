const fetch = require('node-fetch');

const login = async ()=>{
    const tokenResponse = await fetch('https://dev.stedi.me/login',{
  method: 'POST',
  body:JSON.stringify({
    userName: "britishshrimp@gmail.com",
    password:"Stedi47!!"
  })
});

};

export {login};