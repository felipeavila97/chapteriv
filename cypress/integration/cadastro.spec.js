/// <reference types="cypress" />

var Chance = require('chance')
var chance = new Chance()


// Mocha - Test Runner

// describe, context, it

describe('Cadastro', () => {
    it('Quando eu informo os dados e finalizar, então o cadastro deve ser efetuado', () => {
       cy.visit('https://form-agilizei.netlify.app')
       
       // Inputs de texto / textarea / email => type
       cy.get('input[name=firstName]').type(chance.first())
       cy.get('input[name=lastName]').type(chance.last())
       cy.get('textarea[name=adress]').type(chance.address())
       cy.get('input[name=emailAdress]').type(chance.email())
       
       // Inputs radio / checkboxes => check
       cy.get('input[value=n]').check()
       cy.get('input[type=checkbox]').check('Netflix')
       cy.get('input[type=checkbox]').check('Dormir')

       // inputs do tipo combobox / select => select
       cy.get('select#countries').select('Dinamarca', {force: true})
       cy.get('select#years').select('1998', {force: true})
       cy.get('select#months').select('Abril', {force: true})
       cy.get('select#days').select('26', {force: true})
       
       // Inputs de senha => type
       cy.get('input#firstpassword').type('Senh@do1998')
       cy.get('input#secondpassword').type('Senh@do1998')

       // Inputs do tipo button
       cy.contains('Finalizar cadastro').click()

       // espero que a minha aplicação seja direcionada para a listagem
       // url
       // deve conter listagem
       // should contain listagem
       cy.url().should('contain', 'listagem')

       // input#firstpassword
       // input#secondpassword

       // select#countries
       // select#years
       // select#months
       // select#days


       // input[value=n]


       // input[type=checkbox]
       
       // input[name=firstName]
       // input[name=lastName]
       // textarea[name=adress]
       // input[name=emailAdress]
    
    });
});