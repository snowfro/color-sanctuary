const express = require('express')
const app = express()
const port = process.env.PORT || 8080;
const puppeteer = require('puppeteer');
const path = require('path');
const fs = require('fs');
var cors = require('cors')



let pathToHtml = path.join(__dirname, 'index1.html');



app.use(cors());
app.get("/:sketch", async (request, response) => {
  var usaTime = new Date().toLocaleString("en-US", {timeZone: "America/New_York"});
  console.log('Image Request: '+ (new Date(usaTime)).toISOString())
  let paramString = request.params.sketch.charAt(0);
  //console.log(paramString);
  if (paramString==="a"){
    //console.log('yeah-a');
  pathToHtml = path.join(__dirname, 'index1.html');
} else if (paramString==="b"){
  pathToHtml = path.join(__dirname, 'index2.html');
} else if (paramString==="c"){
  pathToHtml = path.join(__dirname, 'index3.html');
}  else if (paramString==="d"){
  pathToHtml = path.join(__dirname, 'index4.html');
}




  try {

    const browser = await puppeteer.launch({
      args: ['--no-sandbox']
     //headless: false
    });
    const page = await browser.newPage();
    await page.setViewport({
    width: 800,
    height: 800,
    deviceScaleFactor: 1,
  });

  if(paramString==="e"){
    await page.goto(`file:${path.join(__dirname, 'index'+Math.ceil(Math.random()*4)+'.html')}`);
  } else {
  await page.goto(`file:${pathToHtml}`);
}

/*
    const pdf = await page.pdf({
      path:'example.pdf',
      height: 2000,
      width: 2000,
      scale: 1,
      printBackground: true,
      margin: {top: 0, left: 0, right: 0, bottom: 0},
      pageRanges: '1-1'
   });
   */


    const image = await page.screenshot();
    await browser.close();
    response.set('Content-Type', 'image/png');
    response.send(image);
  } catch (error) {
    console.log(error);
  }
});





  //await page.screenshot({path: 'example'+i+'.png'});

/*
  const pdf = await page.pdf({
    path:'example'+i+'.pdf',
    height: 2000,
    width: 2000,
    scale: 1,
    printBackground: true,
    margin: {top: 0, left: 0, right: 0, bottom: 0},
    pageRanges: '1-1'
 });
 */


  //const pdf = await page.pdf({ path: 'example.pdf', width:"5000px", height:"5000px" });




app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))
