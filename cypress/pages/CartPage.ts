class CartPage {
    verifyProductInCart(productName: string): void {
        cy.contains(".cart_item", productName).should("be.visible");
    }

    removeProductFromCart(productName: string): void {
        cy.contains(".cart_item", productName)
            .should("be.visible")
            .within(() => {
                cy.contains("button", "Remove").click();
            });
    }

    verifyCartIsEmpty(): void {
        cy.get(".cart_item").should("not.exist");
    }
}

export default CartPage;