set -e

npm run build
git add .
git commit -m 'deploy'
git subtree push --prefix build origin gh-pages
