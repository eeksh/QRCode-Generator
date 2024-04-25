# QRCode-Generator
The QR Code Generator is a Node.js command-line utility designed to effortlessly transform user-supplied URLs into scannable QR code images, streamlining the creation process for URLs to QR code conversion.

### Setup
1.Initialize nodejs project and create package.json file
```npm init -y```<br>
2.To install the required Node.js packages (Express, qrcode, and nodemon), you can use the following command:```npm i express qrcode nodemon```<br>
3.To start the server ```npm start```<br>
### Use Thunder Client extention <br>
Set the request method to GET.<br>
Enter the URL as http://localhost:3000/qr?text=YOUR_TEXT_HERE replacing YOUR_TEXT_HERE with the string you want to encode into a QR code.<br>
If your server is running on a different port than 3000, adjust the URL accordingly.
