#!/bin/bash
# encrypt file
node scripts/ef.js keys/file.txt $1 public/resources/encrypted
node scripts/efl.js -wk