/** eslint-disable */
/// <reference types="cypress" />
import {faker} from "@faker-js/faker"

describe("Register form", () => {

  beforeEach(() => {
    cy.visit('/')
    cy.dataTest('botao-login').click();
  })  

    it("Deve realizar login com sucesso", () => {
        cy.dataTest('email-input').type('neilton@alura.com')
        cy.dataTest('senha-input').type('123456')
        cy.dataTest('botao-enviar').click()
        cy.location('pathname').should('eq', '/home')
        cy.contains('p', 'Olá Neilton Seguins').should('be.visible')
    })

    it("Não deve permitir um email inválido", () => {

    })

    it("Não deve permitir um email em branco", () => {

    })

    it("Deve informar quando senha e email estiver errado", () => {

    })
})