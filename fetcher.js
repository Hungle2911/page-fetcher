const request = require('request')
const URL = process.argv[2]
const localPath = process.argv[3]
const fs = require('fs');
if (!URL || !localPath) {
  console.log('Please provide a valid URL and a valid local file path');
  process.exit(1)
}
request(URL, (error, response, body) => {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  fs.writeFile(localPath, body, (err) => {
    if (err) {
      console.error(`Error writing to file: ${err}`);
      process.exit(1);
    }
    console.log(`Downloaded and saved ${body.length} bytes to ${localPath}`);
  });
});