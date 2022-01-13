const { Browser } = require("puppeteer");
const test_setup=require("./test_setup")
describe("Jantzen Automaion", async()=>{
    let page;

    before(async()=>{
        try{
            page= await browser.newPage();
        }catch(error){
            console.log("can't create page")
        }
    })

    after(async()=>{
        try {
            console.log("end after test")
        } catch (error) {
            console.log(error)
        }
    })

    it("login", async()=>{
        try {
            await page.goto("https://testcrm.jantzen.com.my/#/pages/login",{ timeout: 180000 })
            await page.waitForSelector('input[placeholder="Login"]')
            const input = await page.$('input[placeholder="Login"]');
            await input.type('amna');

        } catch (error) {
            console.log(error)
        }
        
    })
})