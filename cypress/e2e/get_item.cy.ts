import { simplePdfText, incorrectPftText, complexPdfText } from 'cypress/e2e/helper'
describe('login and add item', () => {
    context('Cookies', () => {
        before(() => {
            cy.visit('/')
            cy.intercept("POST", "https://api.demoblaze.com/addtocart").as("addToCart")
        })
        it('check pdf context with fixture- should be equal', () => {
            // i dont think i should have to wait on elements, its just temp because of limited time
            //missing clear data or should be launched localy 
            // login should be moved to api login or just make fake login on local
            cy.get('#login2').click();
            cy.wait(1000)
            cy.get('#loginusername').type('automatedUser26@example.com')
            cy.get('#loginpassword').type('4r4nd0mp4ssw0rd')
            cy.get('#logInModal > .modal-dialog > .modal-content > .modal-footer > .btn-primary').click()
            //for some reason detached from dom
            //cy.get('#itemc').click({ timeout: 10000 })
            cy.wait(1000)
            cy.get('#tbodyid').contains('Sony xperia z5').click()
            cy.wait(1000)
            cy.get('.col-sm-12 > .btn').click()
            cy.wait('@addToCart').then(({ request }) => {
                expect(request.body.prod_id).to.eq(6)
            })
        })
    })

})
