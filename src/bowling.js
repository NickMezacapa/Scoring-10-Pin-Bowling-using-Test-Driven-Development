const calculateScore = (rolls) => {
    let score = 0;
    let frameIndex = 0;
    // loop through 10 frames
    for (let frame = 0; frame < 10; frame++) {
        // get the first and second roll for each frame
        const firstRoll = rolls[frameIndex];
        if (firstRoll === 10) {
            // strike
            // if user strikes, they are awarded 10 points plus the total of their next two throws
            score += 10 + rolls[frameIndex +1] + rolls[frameIndex +2];
            frameIndex++;
        } else {
            const secondRoll = rolls[frameIndex + 1];
            score += firstRoll + secondRoll;
            if (firstRoll + secondRoll === 10) score += rolls[frameIndex + 2]; // spare, user is awarded 10 plus their next throw
            // update frame index
            frameIndex = frameIndex + 2;
        }
    }
    return score;
}

export { calculateScore };



