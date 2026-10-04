describe("The Garage programs", () => {
  const garageUrl = Cypress.expose("garageUrl");

  function openPrograms() {
    cy.visit(garageUrl);
    cy.wait(1000);
    cy.get('button[aria-label="فتح القائمة"]').click();
    cy.wait(1000);
    cy.get('a[href="/programs"]').filter(":visible").click();
    cy.wait(1000);
    cy.location("pathname").should("eq", "/programs");
    cy.wait(1000);
  }

  function openAccelerator() {
    openPrograms();
    cy.contains("h3", "المسرعة")
      .closest("div.border")
      .contains("button", "سجل الآن")
      .click();
      cy.wait(1000);
      cy.location("pathname").should("eq", "/programs/accelerator");
      cy.wait(1000);
      cy.contains("h1", "المسرعة").should("be.visible");
      cy.wait(1000);
  }

  it("discovers the available programs", () => {
    openPrograms();

    cy.contains("h1", "البرامج").should("be.visible");
    cy.wait(1000);
    cy.contains("h3", "الجسر").should("be.visible");
    cy.wait(1000);
    cy.contains("h3", "المسرعة").should("be.visible");
    cy.wait(1000);
    cy.contains("h3", "الحاضنة").should("be.visible");
    cy.wait(1000);
  });

  it("opens the accelerator details", () => {
    openAccelerator();

    cy.location("pathname").should("eq", "/programs/accelerator");
    cy.wait(1000);
    cy.contains("h1", "المسرعة").should("be.visible");
    cy.wait(1000);
    cy.contains("كل ما تحتاجه شركتك الناشئة").should("be.visible");
    cy.wait(1000);
  });

  it("opens the registration destination", () => {
    openAccelerator();
    cy.contains("button", "سجل الآن").click();
    cy.wait(1000);

    cy.location("pathname").should("eq", "/login");
    cy.wait(1000);
    cy.contains("h1", "تسجيل الدخول").should("be.visible");
    cy.wait(1000);
    cy.get("#email").should("be.visible");
    cy.wait(1000);
  });
});
