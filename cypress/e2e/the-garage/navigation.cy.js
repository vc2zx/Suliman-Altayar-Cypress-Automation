describe("The Garage navigation", () => {
  const garageUrl = Cypress.expose("garageUrl");

  it("loads the homepage with its main content", () => {
    cy.visit(garageUrl);
    cy.wait(1000);

    cy.location("hostname").should("eq", "thegarage.sa");
    cy.wait(1000);
    cy.contains("وجهة الشركات التقنية الناشئة").should("be.visible");
    cy.wait(1000);
    cy.contains("بوابتك نحو فرص واعدة").should("be.visible");
    cy.wait(1000);
  });

  it("opens Contact Us from the homepage", () => {
    cy.visit(garageUrl);
    cy.wait(1000);
    cy.get('a[href="/contact-us"]').click();
    cy.wait(1000);
    cy.location("pathname").should("eq", "/contact-us");
    cy.wait(1000);
    cy.contains("h2", "تواصل معنا").should("be.visible");
    cy.wait(1000);
    cy.contains("املأ نموذج الاتصال أدناه").should("be.visible");
    cy.wait(1000);
  });

  it("switches the homepage between Arabic and English", () => {
    cy.visit(garageUrl);
    cy.wait(1000);
    cy.get('button[aria-label="فتح القائمة"]').click();
    cy.wait(1000);
    cy.contains("button:visible", "EN").click();
    cy.wait(1000);

    cy.contains("Tech Startups Hub").should("be.visible");
    cy.wait(1000);
    cy.contains("Your gateway to promising opportunities").should("be.visible");
    cy.wait(1000);
    cy.contains("button:visible", "AR").click();
    cy.wait(1000);
    cy.contains("وجهة الشركات التقنية الناشئة").should("be.visible");
    cy.wait(1000);
  });
});
