const puppeteer=require('puppeteer')
const _ = require('lodash')
const globalVariables= _.pick(global,[
    'browser',
    'puppeteer'
])

before(async () => {
    try {
        const browserLaunchOptions = {
            headless: false,
            slowMo: 10,
            devtools: false,
            timeout: 60000,
            defaultViewport: null,
            viewport: "1920,870",
            setViewportSize:  "1920,870",
            args: [
                '--start-maximized',
                '--no-sandbox',
                '--disable-setuid-sandbox',
                '--disable-dev-shm-usage',
                `--window-size=1920,870`,
            ],
        }

        global.browser=await puppeteer.launch(browserLaunchOptions)
    } catch (error) {
        console.log(`Before Hook, ${error}`)
    }
})

after(async () => {
    try {
		//await global.browser.close()
    } catch (error) {
        console.log(`After Hook, ${error}`)
	}
})