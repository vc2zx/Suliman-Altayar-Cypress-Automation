describe("Satr search and sign-in validation", () => {
  const satrUrl = Cypress.expose("satrUrl");

  it("finds learning content for a visible keyword", () => {
    cy.visit(satrUrl + "/educational-content");
    cy.wait(1000);
    cy.get('input[name="search"]').type("الروبوت{enter}");
    cy.wait(1000);
    cy.location("search").should("include", "q=");
    cy.wait(1000);
    cy.contains("h2", /نتائج/).should("be.visible");
    cy.wait(1000);
    cy.get('a[href="/path/irQHmdAUDj/view"]')
      .should("be.visible")
      .and("contain.text", "الروبوتات");
    cy.wait(1000);  
  });


  it("shows an empty state for a query with no matching content", () => {
    cy.visit(satrUrl + "/educational-content");
    cy.wait(1000);
    cy.get('input[name="search"]')
      .type("qazwsxedcrfvtgbyhnujmikolp{enter}");
    cy.wait(1000);
    cy.location("search").should("include", "q=");
    cy.wait(1000);
    cy.contains("h4", "لا توجد نتائج").should("be.visible");
    cy.wait(1000);
    cy.contains("لم يتم العثور على نتائج للتصنيفات المدخلة")
      .should("be.visible");
    cy.wait(1000);  
  });


  it("shows required-field errors for an empty sign-in form", () => {
  cy.origin("https://sso.tuwaiq.edu.sa", () => {
    cy.wait(1000);
    cy.on("uncaught:exception", (err) => {
      if (
        err.message.includes(
          "The tag name provided (' script') is not a valid name"
        )
      ) {
        return false;
      }
    });
  });

  cy.visit(satrUrl);
  cy.wait(1000);
  cy.get(".w-10").click();
  cy.wait(1000);

  cy.contains("button", "تسجيل الدخول").click();
  cy.wait(1000);

  cy.origin("https://sso.tuwaiq.edu.sa", () => {
    cy.wait(1000);
    cy.get("#username").should("be.visible");
    cy.wait(1000);
    cy.get("#password").should("be.visible");
    cy.wait(1000);
    cy.get("#kc-login").click();
    cy.wait(1000);
    cy.get(".error-message")
      .should("have.length", 2)
      .each(($message) => {
        expect($message.text().trim()).to.eq("لا يمكن تركه فارغًا");
      });
    cy.wait(1000);
  });
});
});
