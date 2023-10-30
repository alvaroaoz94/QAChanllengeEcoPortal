import { searchFor } from '../actions/search';
import { loginAs } from '../actions/login';
import { ERROR_MESSAGE } from '../elements/elements';

describe('Test cases for arstechnica Web Page', () => {

    beforeEach(() => {
        cy.visit('https://arstechnica.com/');
    });

    it('Should search for a post about Elon Musk', () => {
        searchFor('Elon Musk wants your “entire financial life” on X by 2024');

        cy.get('[id="resInfo-0"]').should('be.visible');
        cy.get('[data-uri="391e465ec250a80cc8f75f0a7dda8065"]').invoke('removeAttr', 'target').eq(0).click();
        cy.url().should('eq', 'https://arstechnica.com/tech-policy/2023/10/elon-musk-wants-your-entire-financial-life-on-x-by-2024/');
    });

    it('Should show an error message for invalid login', () => {
        loginAs('TestAutomation', 'TestAutomation');

        cy.get(ERROR_MESSAGE).should('be.visible').invoke('text').then((text) => {
            expect(text.trim()).to.equal(`The requested user 'TestAutomation' could not be found.`);
        });
    });
});
