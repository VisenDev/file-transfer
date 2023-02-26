const { exec, spawn } = require('child_process');
const path = require('path');

function upload(file, username, server, destination, password){

  console.log("Beginning upload of " + file);
  try {

    const script = path.join(__dirname, 'upload.expect');
    const expect = path.join(__dirname, 'expect');

    console.log(script);
    console.log(expect);
    const scp = exec(`${expect} ${script} ${file} ${username} ${server} '${destination}' ${password}`);
    console.log("Upload Success!");

  } catch (err) {
    console.log(err);
  }  
};

document.getElementById("submit").addEventListener('click', ()=> {

  if(document.getElementById("upload-or-download").textContent = "upload"){

    let fileInput = document.getElementById('u-files');
    let user = document.getElementById('username').value;
    let host = document.getElementById('server').value;
    let destination = document.getElementById('u-destination').value;
    let password = document.getElementById('password').value;

    for(let t = 0; t< fileInput.files.length; ++t){
      upload(fileInput.files[t].path, user, host, destination, password);
    }
  }

});

//upload("./test.txt", "rburnett5", "csunix.angelo.edu", "'~/'", "JohnSmith_8080");






/*
document.getElementById('submit').onclick = function () {

  if(true){

    console.log(mode);

    const fileInput = document.getElementById('u-files');

    for(let t = 0; t < fileInput.files.length; ++t){
      var options = {
        file: fileInput.files[t].path,
        user: document.getElementById('username').value,
        host: document.getElementById('server').value,
        port: '22',
        path:  document.getElementById('u-destination').value
      };

      console.log("beginning upload");

      scp.send(options, function (err) {
        if (err) console.log(err);
        else console.log('File transferred.');
      });
      
    }
  }
};

var options = {
  file: "./test.txt",
  user: rburnett5,
  host: document.getElementById('server').value,
  port: '22',
  path:  document.getElementById('u-destination').value
};

console.log("beginning upload");

scp.send(options, function (err) {
  if (err) console.log(err);
  else console.log('File transferred.');
});*/