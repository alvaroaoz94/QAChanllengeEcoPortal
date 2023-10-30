import { SEARCH_ICON, SEARCH_INPUT } from '../elements/elements';

export function searchFor(term) {
    cy.get(SEARCH_ICON).click();
    cy.get(SEARCH_INPUT).type(`${term}{enter}`);
}
