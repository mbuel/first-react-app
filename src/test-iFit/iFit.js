console.log();

function jumps(flagHeight, bigJump) {
    // Write your code here
    return (flagHeight % bigJump) + (flagHeight / flagHeight);
}

console.log("jumps: " + jumps(8, 3));

console.log("jumps: " + jumps(3, 1));

console.log("jumps: " + jumps(10, 4))