const puppeteer = require('puppeteer');

const getTest = async(request,response)=>{
    try{
        (async () => {
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        await page.goto('https://facebook.com/');
        await page.screenshot({path:'exemple.png'})

        await browser.close();
        })();
        return response.status(200).json({teste:"true"});
    }catch(e){
        return response.status(500).json({teste:"false"});
    }
}

module.exports = {
    getTest
}