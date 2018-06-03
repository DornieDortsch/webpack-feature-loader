describe('sandbox for unit test', () => {

    test('usage of jdom', () => {
        document.body.innerHTML = '<div class="js-load"></div>'
        
        const count = document.querySelectorAll('.js-load').length;

        expect(count).toBe(1)
    })

    describe('scope', () => {
        const b = clb => {
            console.log('b')
            clb()
        }

        describe('nested', () => {
            test('call b', () => {
                b(() => console.log('clb'))
            })
        })
    })

})
