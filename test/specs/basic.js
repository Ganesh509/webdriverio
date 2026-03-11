console.log("hello world")
describe('My first test', () => {
    it('should have the right title', () => {
        browser.url('https://www.google.com')
        const title = browser.getTitle()
        // expect(title).toBe('Google')
    })
})