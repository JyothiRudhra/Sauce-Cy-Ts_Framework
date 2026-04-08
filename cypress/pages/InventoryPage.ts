class InventoryPage {
    private pageTitle = '[data-test="title"]';
    private cartLink = ".shopping_cart_link";

    verifyInventoryPageDisplayed(): void {
        cy.url().should("include", "/inventory.html");
        cy.get(this.pageTitle).should("be.visible").and("contain.text", "Products");
    }

    addProductToCart(productName: string): void {
        cy.contains(".inventory_item", productName)
            .should("be.visible")
            .within(() => {
                cy.contains("button", "Add to cart").click();
            });
    }

    openCart(): void {
        cy.get(this.cartLink).should("be.visible").click();
    }
}

export default InventoryPage;