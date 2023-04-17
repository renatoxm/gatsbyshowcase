/// <reference types="Cypress" />

describe(`Logo is present`, () => {
  beforeEach(() => {
    cy.visit(`/`).get(`main`)
  })
  it(`Header was rendered`, () => {
    cy.get(`#header-wrapper`).should(`exist`)
  })
})
