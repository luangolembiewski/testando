const puppeteer = require('puppeteer');

const getTest = async(request,response)=>{
    console.log("teste")
    (async () => {
    const browser = await puppeteer.launch();
    const page = await browser.newPage();

    await page.goto('https://facebook.com/');
    await page.screenshot({path:'exemple.png'})

    await browser.close();
    })();
}

module.exports = {
    getTest
}