#!/usr/bin/env bash
set -e

git init

git add .
git commit -m "JAUP Unified Platform"
git branch -M main
git remote add origin https://github.com/realjayroc215/Jaupcommandcenter.git
git push -u origin main
