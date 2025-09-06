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
        //espiona a requisição
        //cy.intercept('POST', '**').as('login')
        cy.dataTest('botao-enviar').click()
        cy.wait('@login').its('response.statusCode').should('eq', 1000)
        cy.location('pathname').should('eq', '/home')
        cy.contains('p', 'Olá, Neilton Seguins').should('be.visible')
    })

    it("Não deve permitir um email inválido", () => {
        cy.dataTest('email-input').type('test@alura')
        cy.dataTest('senha-input').type('123456')
        cy.dataTest('botao-enviar').click()
        cy.dataTest('mensagem-erro').should('exist').and('have.text', 'O email digitado é inválido')
    })

    it("Não deve permitir um email em branco", () => {
        cy.dataTest('senha-input').type('123456')
        cy.dataTest('botao-enviar').click()
        cy.dataTest('mensagem-erro').should('exist').and('have.text', 'O campo email é obrigatório')
    })

    it("Deve informar quando senha e email estiver errado", () => {
      //cy.dataTest('botao-login').click()
      cy.dataTest('email-input').type('csblaytions@gmail.com')
      cy.dataTest('senha-input').type('senha')
      cy.dataTest('botao-enviar').click()
      cy.get('.ModalLoginUsuario_modal__container__8SNth').contains('E-mail ou senha incorretos')
    })
})