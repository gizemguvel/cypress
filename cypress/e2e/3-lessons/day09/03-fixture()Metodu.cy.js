const { faker } = require("@faker-js/faker");
describe('fixture() Metodu', () => {
    it('Kitap Yurdu - fixture() Metodunun Kullanimi', () => {
        cy.visit('https://www.kitapyurdu.com/');

        cy.fixture('kitapyurdu').then((veriDosyasi) => {
            cy.get('#search-input').type(veriDosyasi.kelime)
            cy.get('.button-search').click();

            cy.get('.product-list').find('.name').each(($urunAdi) => {
                cy.wrap($urunAdi).invoke('text').then((listedekiBaslik) => {
                    expect(listedekiBaslik.toLowerCase()).to.include(veriDosyasi.kelime)
                })
            })
        })
    });

    it('Tool Shop - Gecerli verilerle siteye kayit olunabilmeli', () => {
        cy.visit('https://practicesoftwaretesting.com/');

        let jsonData = {
            email: faker.internet.email(),
            password: faker.internet.password()
        }

        cy.writeFile('cypress/fixtures/toolshop.json', jsonData)


        cy.get('[data-test="nav-sign-in"]').click();
        cy.get('[data-test="register-link"]').click();

        cy.get('[data-test="register-form"]').within(() => {
            cy.get('#first_name').type(faker.person.firstName())
            cy.get('#last_name').type(faker.person.lastName())
            cy.get('#dob').type('1980-12-12')
            cy.get('#address').type(faker.location.streetAddress())
            cy.get('#postcode').type(faker.location.zipCode())
            cy.get('#city').type(faker.location.city())
            cy.get('#state').type(faker.location.state())
            cy.get('#country').select(faker.number.int({ min: 0, max: 150 }))
            cy.get('#phone').type(faker.number.int({ min: 10, max: 12 }))
            cy.get('#email').type(jsonData.email)
            cy.get('#password').type(jsonData.password)
            cy.get('button').click();
        })

        cy.get('h3').should('have.text', 'Login')
    });

    it.only('Tool Shop - fixture() Metodu ile Login Olma', () => {
        cy.visit('https://practicesoftwaretesting.com/#/');

        cy.get('[data-test="nav-sign-in"]').click();

        cy.fixture('toolshop').then((veriDosyasi) => {
            cy.get('#email').type(veriDosyasi.email)
            cy.get('#password').type(veriDosyasi.password)
        })

        cy.get('[value="Login"]').click();

    });
});