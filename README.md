# Using Test Driven Development to calculate 10 Pin Bowling Scores
#### (Frontend interface coming soon)

This was a great oppportunity to make use of mocha, chai, and unit tests to develop a calculator function for bowling scores.

I first wrote failing tests for each functionality requirement, then updated my code logic to pass the test before moving on to the next functionality requirement. After each requirement was fulfilled, I ran regression tests to ensure any new code had not adversely affected previously written logic, and end-to-end tests to ensure that the function as a whole behaved as expected. After all tests passed, I refactored.

I noticed that test coverage under TDD is much higher compared to the conventional development models. This is because the TDD focuses on creating tests for each functionality right from the beginning. It enhances the productivity of the developer and leads to the development of a codebase that is flexible and easy to maintain.

## How to run:
Have npm installed and accessible in your terminal or command line.
Download the code from this repository or run this command in your terminal:
```
git clone https://github.com/NickMezacapa/Scoring-10-Pin-Bowling-using-Test-Driven-Development/
```
Once you have access to the codebase, from the root of the project run 
```
`npm install`
```
This will bring in mocha and chai, which are required to run the tests.
From there, to run the unit tests, run
```
npm test
```

## Original codewars kata:
https://www.codewars.com/kata/5531abe4855bcc8d1f00004c

## Helpful links:
1. https://www.ibm.com/garage/method/practices/code/practice_test_driven_development/
2. http://agiledata.org/essays/tdd.html
3. https://developer.ibm.com/articles/5-steps-of-test-driven-development/
