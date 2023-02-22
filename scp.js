const fs = require('fs');
const {Client} = require('node-scp');

console.log(Client);

async function uploadFiles(filepath, remoteFilepath, remoteServer, username, password) {
  try {
    const client = await Client({
      host: remoteServer,
      port: 22,
      username: username,
      password: password,
      // privateKey: fs.readFileSync('./key.pem'),
      // passphrase: 'your key passphrase',
    })
    await client.uploadFile(
      filepath,
      remoteFilepath,
      // options?: TransferOptions
    )
    // you can perform upload multiple times
    //await client.uploadFile('./test.txt', '~/');
    console.log("success");
    client.close() // remember to close connection after you finish
  } catch (e) {
    console.log(e)
  }
}

document.getElementById('submit').onclick = function () {
  // Example usage:
  const fileInput = document.getElementById('u-files');
  let filepaths = fileInput.files[0].path;

  if (fileInput.files.length > 1) {
    filepaths = Array.from(fileInput.files)
      .map((file) => file.path)
      .join(' ');
  }

  const remoteDirectory = document.getElementById('u-destination').value;
  const remoteServer = document.getElementById('u-server').value;
  const username = document.getElementById('u-username').value;
  const password = document.getElementById('u-password').value;

  uploadFiles(filepaths, remoteDirectory, remoteServer, username, password);
};


uploadFiles('./test.txt', 'test.txt', 'csunix.angelo.edu', 'rburnett5', 'JohnSmith_8080');



