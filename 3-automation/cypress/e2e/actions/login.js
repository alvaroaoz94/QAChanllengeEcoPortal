import { LOGIN_LINK, USERNAME_INPUT, PASSWORD_INPUT, LOGIN_BUTTON } from '../elements/elements';

export function loginAs(username, password) {
    cy.get(LOGIN_LINK).click();
    cy.get(USERNAME_INPUT).type(username);
    cy.get(PASSWORD_INPUT).type(password);
    cy.get(LOGIN_BUTTON).click();
}
