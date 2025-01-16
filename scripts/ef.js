import fs from 'fs/promises';
const crypto = globalThis.crypto;

async function encryptFile(file, key) {
    const iv = crypto.getRandomValues(new Uint8Array(12));
    const algorithm = { name: 'AES-GCM', iv };
    const keyBytes = Uint8Array.from(String(key).match(/.{1,2}/g).map((byte) => parseInt(byte, 16)));
    const cryptoKey = await crypto.subtle.importKey('raw', keyBytes, 'AES-GCM', false, ['encrypt']);
    const encrypted = await crypto.subtle.encrypt(algorithm, cryptoKey, file);
    return { encrypted, iv };
}

async function main() {
    let [,, keyFile, inputFile, outputDirectory] = process.argv;
    if (!keyFile || !inputFile || !outputDirectory) {
        console.error('Usage: node encrypt-file.js <keyFile> <inputFile> <outputDirectory>');
        process.exit(1);
    }
    // replace backslashes with forward slashes
    inputFile = inputFile.replace(/\\/g, '/');
    let input = await fs.readFile(inputFile);
    const key = (await fs.readFile(keyFile, 'utf-8')).split(/\r*\n/)[0];
    const { encrypted, iv } = await encryptFile(input, Buffer.from(key));
    // get filename of input file
    const inputFileParts = inputFile.split('/');
    const inputFilename = inputFileParts[inputFileParts.length - 1];
    const outputFile = `${outputDirectory}/${inputFilename}.${Buffer.from(iv).toString('hex')}.enc`;
    await fs.mkdir(outputDirectory, { recursive: true });
    await fs.writeFile(outputFile, new Uint8Array(encrypted), { flag: 'wx' });
}

main().catch(console.error);