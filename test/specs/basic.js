import allureReporter from '@wdio/allure-reporter'
console.log("hello world")
describe('My first test', () => {
    it('should have the right title', () => {
        browser.url('https://www.google.com')
        const title = browser.getTitle()
        allureReporter.addFeature('Login Feature')
        allureReporter.addStory('Valid Login')
        // expect(title).toBe('Google')
        allureReporter.addAttachment(
    'Screenshot',
    async () => await browser.takeScreenshot(),
    'image/png'
)
    })
})