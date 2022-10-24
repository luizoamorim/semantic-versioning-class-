import { describe, it } from "mocha";
import chai from "chai";
describe("A Simple test", () => {
    it("should run a simple test", () => {
        chai.expect(10).to.equal(10);
    });
});
