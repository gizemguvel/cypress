describe('Eylem Metotlari - selectFile() Metodu', () => {
    it('selectFile() Metodunun Kullanimi', () => {
        cy.visit('https://www.webdriveruniversity.com/File-Upload/index.html');

        // Dosya Sec butonu ile ekleme yapma
        // cy.get('#myFile').selectFile('package.json')

        // Surukle-Birak ile ekleme yapma
        cy.get('#myFile').selectFile('package.json', {action:"drag-drop"})

    });
});