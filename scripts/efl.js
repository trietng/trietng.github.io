import fs from 'fs';

function main() {
    let withKey = false;
    if (process.argv.length === 3 && (process.argv[2] === '--with-key' || process.argv[2] === '-wk')) {
        withKey = true;
    }
    // list all files in the resources/encrypted directory
    const files = fs.readdirSync('public/resources/encrypted');
    let paths = files.map((file) => {
        let filename = file.split('/').pop();
        if (!filename) {
            return;
        }
        const parts = filename.match(/(.+)\.([^\.]+)\.enc/);
        if (!parts || parts.length < 3) {
            return;
        }
        const resource = parts[1];
        const iv = parts[2];
        let newPath = `https://trietng.github.io/decrypt/${iv}/${resource}`;
        if (withKey) {
            let key = fs.readFileSync('keys/file.txt', 'utf-8');
            key = key.split(/\r*\n/)[0];
            newPath = newPath.concat(`?key=${key}`);
        }
        return newPath
    });
    paths = paths.filter((path) => path);
    console.log(paths);
}

main()