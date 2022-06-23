import chai from "chai";
import { calculateScore } from "../src/bowling.js";

const assert = chai.assert;

// first unit test
describe("Scoring Bowling", function() {
    // if all rolls are gutter balls the calculateScore function should return 0.
    it("All gutter balls -> 0", function() {
        const rolls = Array(20).fill(0);
        const result = calculateScore(rolls);
        const expected = 0;
        assert.equal(result, expected);
    })
    // if the player only hits 1 ball per roll the function should return 20. (20 total rolls)
    it("Only 1 pin hit per roll -> 20", function() {
        const rolls = Array(20).fill(1);
        const result = calculateScore(rolls);
        const expected = 20;
        assert.equal(result, expected);
    })
    // if the player spares (all 10 pins) a frame, they are awarded bonus points from the next throw
    it("If player spares, they are awarded bonus points from next throw", function() {
        const rolls = [5,5,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // case: spare first frame
        const result = calculateScore(rolls);
        const expected = 17;
        assert.equal(result, expected);
    })
    // if the palyer throws a spare in the final frame, they are awarded an extra throw and the function returns a new total
    it("Spare in final frame counts bonus throw", function() {
        const rolls = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,7,3,8]; // case: spare last frame
        const result = calculateScore(rolls);
        const expected = 18;
        assert.equal(result, expected);
    })
    // if the player throws a strike (10 pins with 1 roll) they are awarded bonus points from the next two throws
    it("If player strikes, they are awarded bonus points from next two throws", function() {
        // Note: if player strikes, the total amount of throws is no longer 20.
        const rolls = [10,2,3,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]; // case: spare last frame
        const result = calculateScore(rolls);
        const expected = 20;
        assert.equal(result, expected);
    })
    // if player throws strike in final frame, they are awarded two extra frames, bonus points from those frames, function returns new score
    it("If player throws strike on last frame, they are awarded two extra frames and bonus points", function() {
        const rolls = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,10,10,1]; // case: spare first frame
        const result = calculateScore(rolls);
        const expected = 21;
        assert.equal(result, expected);
    })
    // if player throws a perfect game (strike with every throw) the function should return a score of 300.
    it("All gutter balls -> 0", function() {
        const rolls = Array(12).fill(10); // max amount of throws for an all strikes game is 12 throws
        const result = calculateScore(rolls);
        const expected = 300;
        assert.equal(result, expected);
    })
})