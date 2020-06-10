const getEditDistance = (word, compareWord) => {
    if (word.length == 0) return compareWord.length;
    if (compareWord.length == 0) return word.length;

    var matrix = [];

    //config
    var substitutionConfig = 1;
    var insertionConfig = 1;
    var deletionConfig = 1;

    // increment along the first column of each row
    var i;
    for (i = 0; i <= compareWord.length; i++) {
        matrix[i] = [i];
    }

    // increment each column in the first row
    var j;
    for (j = 0; j <= word.length; j++) {
        matrix[0][j] = j;
    }

    // Fill in the rest of the matrix
    for (i = 1; i <= compareWord.length; i++) {
        for (j = 1; j <= word.length; j++) {
            if (compareWord.charAt(i - 1) == word.charAt(j - 1)) {
                matrix[i][j] = matrix[i - 1][j - 1];
            } else {
                matrix[i][j] = Math.min(matrix[i - 1][j - 1] + substitutionConfig, // substitution
                    Math.min(matrix[i][j - 1] + insertionConfig, // insertion
                        matrix[i - 1][j] + deletionConfig)); // deletion
            }
        }
    }

    return matrix[compareWord.length][word.length];
}

export default getEditDistance