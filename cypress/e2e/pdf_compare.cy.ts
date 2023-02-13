import { simplePdfText, incorrectPftText, complexPdfText } from 'cypress/e2e/helper'
describe('comparing pdfs to fixture which contains pdf text', () => {
  it('check pdf context with fixture- should be equal', () => {

    cy.task('readPdf', 'cypress/downloads/simple.pdf')
      // yields the text from the PDF file
      .should('equal', simplePdfText)
  })

  it('check pdf context with fixture- should be not equal', () => {

    cy.task('readPdf', 'cypress/downloads/simple.pdf')
      // yields the text from the PDF file
      .should('not.be.equal', incorrectPftText)
  })

  it('check pdf context with fixture- should be equal more complicated example', () => {

    cy.task('readPdf', 'cypress/downloads/complex.pdf')
      // yields the text from the PDF file
      .should('equal', complexPdfText)
  })

  it('compare fixture with diffrent pdf - its fails on purpose to show its working', () => {
    // its failing on purpose to show its comparing content, probably if i had more time i would find solution to compare this pdf to pdf, but maybe thats enough :D
    cy.task('readPdf', 'cypress/downloads/simple.pdf')
      // yields the text from the PDF file
      .should('equal', complexPdfText)
  })
})
