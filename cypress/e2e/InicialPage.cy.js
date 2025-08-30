/// <reference types="cypress"/>

describe('Home Page', () => {
  beforeEach(() => {
    cy.visit('/')
  })  

  it('deve renderizar o titulo pricipal', () => {
    cy.dataTest('titulo-principal').contains("Experimente mais liberdade no controle da sua vida financeira. Crie sua conta com a gente!")
  })

  it('deve renderizar os cards', () => {
    cy.contains('h3', 'Conta e cartão gratuitos').should('be.visible');
    cy.contains('h3', 'Saques sem custo').should('be.visible');
    cy.contains('h3', 'Programa de pontos').should('be.visible');
    cy.contains('h3', 'Seguro Dispositivos').should('be.visible');
  }) 

  describe("Botão da pagina inicial", () => {
    it("Deve renderizar os botões", () => {
      cy.dataTest('botao-cadastro').contains("Abrir minha conta").should('be.visible')
      cy.dataTest('botao-login').contains("Já tenho conta").should('be.visible')
    })
  })
})