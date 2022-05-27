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

    function rr(m){
        if(m == -2)
        {
            return 'itog 1/a^2+2ab+b^2'
        }
        var n= Math.abs(m);

        let itog="";
        let c=1;
        let a=[];
        let g=[];
        for (i=0;i<n+1;i++)
        {
            for (z=1;z<n+1;z++)
            {
                c=c*z;
            }
            for (z=1;z<n-i+1;z++)
            {
                c=c/z;
            }
            for (z=1;z<i+1;z++)
            {
                c=c/z;
            }
            a[i]=c;
            c=1;
        }
        for (i=0;i<n+1;i++)
        {
            g[i]=n-i;
        }
        for (i=0;i<n+1;i++)
        {
            if (i==0)
            {
                itog=itog+"a^"+g[i]+"+";
            }
            else if (i==1)
            {
                itog=itog+a[i]+"a^"+g[i]+"b"+"+";
            }
            else if (i==n-1)
            {
                itog=itog+a[i]+"a"+"b^"+g[n-i]+"+";
            }
            else if (i==n)
            {
                itog=itog+"b^"+g[n-i];
            }
            else
            {
                itog=itog+a[i]+"a^"+g[i]+"b^"+g[n-i]+"+";
            }
        }
        if(m==0)
        {
            return '1';
        }
        else if(m==1)
        {
            return 'a+b'
        }
        else if(m==2)
        {
            return "a^2+2ab+b^2"
        }
        else if(m<0)
        {
            return "itog 1/ " + itog
        }
        else
        {
            return "itog "+itog
        }
    }

    fs.writeFile(output, rr(parseInt(content)), function (err) {
        if (err) return console.log(err);
        console.log('#TASK 1. The result was written to file.');
    });
});

