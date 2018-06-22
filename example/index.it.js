describe('Feature initialization example.', () => {

	// Given
	const url = 'http://localhost:5000/index.html'
    
    test('initialize hello world feature', async () => {
        // When
        await page.goto(url);

        // Then
        await expect(page).toMatchElement('div', { text: 'Hello World!' })
    })

    test('initialize zepto feature', async () => {

        // When
        await page.goto(url);

        // Then
        await expect(page).toMatchElement('div', { text: 'Text added by zepto!' })
    })

    test('initialize zepto subfeature', async () => {
        // When
        await page.goto(url);

        // Then
        await expect(page).toMatchElement('div', { text: 'Text added by zepto subfeature!' })
    })
})