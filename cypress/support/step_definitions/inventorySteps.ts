import { When, Then, DataTable } from "@badeball/cypress-cucumber-preprocessor";
import InventoryPage from "../../pages/InventoryPage";
import CartPage from "../../pages/CartPage";

const inventoryPage = new InventoryPage();
const cartPage = new CartPage();

When("the user adds the following products to the cart:", (dataTable: DataTable) => {
    const products = dataTable.hashes();

    products.forEach((row) => {
        inventoryPage.addProductToCart(row.productName);
    });
});

When("the user opens the cart", () => {
    inventoryPage.openCart();
});

Then("the cart should contain the following products:", (dataTable: DataTable) => {
    const products = dataTable.hashes();

    products.forEach((row) => {
        cartPage.verifyProductInCart(row.productName);
    });
});

When("the user adds product {string} to the cart", (productName: string) => {
    inventoryPage.addProductToCart(productName);
});

When("the user removes product {string} from the cart", (productName: string) => {
    cartPage.removeProductFromCart(productName);
});

Then("the cart should be empty", () => {
    cartPage.verifyCartIsEmpty();
});