// code your solution here
function superbowlWin(arrayOfObjects) {
    // Use find() to locate the first object where result is "W"
    const winningYear = arrayOfObjects.find(function(obj) {
        return obj.result === "W";
    });
    
    // If we found a winning year, return the year, otherwise return undefined
    if (winningYear) {
        return winningYear.year;
    } else {
        return undefined;
    }
}
