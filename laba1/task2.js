const commander = require('commander');
const program = new commander.Command();
const fs = require('fs')
const prompt = require("prompt-sync")({ sigint: true });

program
    .option('-i, --input <string>', 'Specify input file')
    .option('-o, --output <string>', 'Specify output file');

program.parse();

let opts = program.opts();

let input = opts.input;

if (input === undefined || input === '') {
    input = prompt("Specify input file: ");
}

let output = opts.output;

if (output === undefined || input === '') {
    output = prompt("Specify output file: ");
}

fs.readFile(input, 'utf8', function (err, content) {
    if (err) return console.log(err);

    function res (arr) {
        var sum_arr =0;
        var sum=0;
        var a=0;
        var mini_num_number;
        for(let i=0;i<arr.length;i++){
            sum  += arr[i];
            sum_arr +=arr[i];
        }
        /*   : nextPrime*/
        for (let nn=0;nn<sum;sum++) {
            for (i = 1; sum >= i; i++) {

                if (sum % i == 0) {

                    a = a + 1;

                }
            }
            if (a > 2) {

            } else {

                break;
            }
            a=0
        }
        return sum - sum_arr;
    }

    let a = JSON.parse(content);

    fs.writeFile(output, res(a).toString(), function (err) {
        if (err) return console.log(err);
        console.log('#TASK 2. The result was written to file.');
    });
});
