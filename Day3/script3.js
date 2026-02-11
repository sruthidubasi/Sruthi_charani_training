// Assignment: between 1 and 10 --> numbers resulting sum 10

outer:
for (var i = 1; i <= 10; i++) {

    for (var j = 1; j <= 10; j++) {

        if (i + j === 10) {
            console.log(i, j);
        }

    }

}
