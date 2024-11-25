import { home } from "../support/pages/home";

describe("Login in leniolabs", () => {
  it("login orange HRM", () => {
    home.register();
    home.fillField();
    home.login();
  });
});
