describe('sandbox for integration test.', () => {

    beforeAll(async () => {
        await page.goto('http://localhost:5000')
    })

    it('match Zepto feature', async () => {
        await expect(page).toMatchElement('p', { text: 'Zepto feature' })
    })
})