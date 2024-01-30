const { faker } = require("@faker-js/faker");

describe('Uygulama-06', () => {
    
    it('Tool Shop - Gecerli verilerle siteye kayit olunabilmeli', () => {
        cy.visit('https://practicesoftwaretesting.com/');
        let email = faker.internet.email()
        let sifre = faker.internet.password()
        cy.writeFile('dosyalar/email.txt', email)
        cy.writeFile('dosyalar/sifre.txt', sifre)

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
            cy.get('#email').type(email)
            cy.get('#password').type(sifre)
            cy.get('button').click();
        })

        cy.get('h3').should('have.text', 'Login')
    });

    it('Tool Shop - 6 dan az karakterli bir şifre ile kayıt olunamamali', () => {
        cy.visit('https://practicesoftwaretesting.com/');
        let email = faker.internet.email()

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
            cy.get('#email').type(email)
            cy.get('#password').type('12345')
            cy.get('button').click();
        })

        cy.get('[data-test="password-error"] > div')
            .should('be.visible')
            .and('have.text', ' Password must be minimal 6 characters long. ')
    });

    it('Tool Shop - Aynı eposta adresi ile tekrar kayit olunamamali', () => {
        cy.visit('https://practicesoftwaretesting.com/');

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
            cy.readFile('dosyalar/email.txt').then((email) => {
                cy.get('#email').type(email)
            })
            cy.get('#password').type('123456')
            cy.get('button').click();
        })

        cy.get('.help-block')
            .should('be.visible')
            .and('have.text', 'A customer with this email address already exists.')
    });


    it('Tool Shop - Gecerli verilerle siteye giris yapilabilmeli', () => {
        cy.visit('https://practicesoftwaretesting.com/');

        cy.get('[data-test="nav-sign-in"]').click();

        cy.readFile('dosyalar/email.txt').then((email) => {
            cy.get('#email').type(email)
        })

        cy.readFile('dosyalar/sifre.txt').then((sifre) => {
            cy.get('#password').type(sifre)
        })

        cy.get('[value="Login"]').click();

    });


    it('Favorilere bir urun eklenmediginde Favorites sayfasinda mesaj gorunmeli', () => {
        cy.visit('https://practicesoftwaretesting.com/');
        cy.get('[data-test="nav-sign-in"]').click();

        cy.readFile('dosyalar/email.txt').then((email) => {
            cy.get('#email').type(email)
        })

        cy.readFile('dosyalar/sifre.txt').then((sifre) => {
            cy.get('#password').type(sifre)
        })

        cy.get('[value="Login"]').click();
        
        cy.get('[data-test="nav-favorites"]').click();

        cy.get('.col').should('exist').and('contain', 'There are no favorites yet.')

    });

    it('Favorilere bir urun eklendiginde Favorites sayfasinda urun gorunmeli', () => {
        cy.visit('https://practicesoftwaretesting.com/');
        cy.get('[data-test="nav-sign-in"]').click();

        cy.readFile('dosyalar/email.txt').then((email) => {
            cy.get('#email').type(email)
        })

        cy.readFile('dosyalar/sifre.txt').then((sifre) => {
            cy.get('#password').type(sifre)
        })

        cy.get('[value="Login"]').click();
        
        cy.get('[data-test="nav-favorites"]').click();

        cy.get('[data-test^="favorite"]').should('exist').and('contain', 'Combination Pliers')

    });


});