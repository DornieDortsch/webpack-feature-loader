describe('Feature initialization example.', () => {

    // helper function to create and load html page on the fly
    // taken from https://github.com/GoogleChrome/puppeteer/issues/728
    const load = async (page, content) => {
        const html = '<html>'
                        + '<head><meta charset="UTF-8"></head>'
                        + '<body>'
                            + content
                            + '<script type="text/javascript" src="http://localhost:5000/index.js"></script>'
                        + '</body>'
                    + '</html>'

        await page.goto(`data:text/html;charset=UTF-8,${html}`, { waitUntil: 'networkidle0' });
    }
    
    test('initialize hello world feater', async () => {
        // Given
        const content = '<div class="js-load" data-hr-hello=\'{"name":"World"}\'>Feature loading...</div>'
                        
        // When
        await load(page, content)

        // Then
        await expect(page).toMatchElement('div', { text: 'Hello World!' })
    })

    test('initialize zepto feater', async () => {
        // Given
        const content = '<div class="js-load" data-hr-zepto=\'{"text":"Text added by zepto!"}\'>Feature loading...</div>'
                        
        // When
        await load(page, content)

        // Then
        await expect(page).toMatchElement('div', { text: 'Text added by zepto!' })
    })

    test('initialize zepto2 feater', async () => {
        // Given
        const content = '<div class="js-load" data-hr-zepto-sub=\'{"text":"Text added by zepto subfeature!"}\'>Feature loading...</div>'
                        
        // When
        await load(page, content)

        // Then
        await expect(page).toMatchElement('div', { text: 'Text added by zepto subfeature!' })
    })
})