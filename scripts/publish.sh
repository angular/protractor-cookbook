EXEC_BRANCH=$(git rev-parse --abbrev-ref HEAD)

git branch -D gh-pages
git checkout -b gh-pages

git reset --hard
for file in $(ls .); do
  if [ "$file" != "testapp" ]; then
      rm -rf $file
  fi
done

cp -r testapp/* .
rm -rf testapp
rm -rf node_modules
rm package.json
rm index.js
git add -A
git commit -m "chore(website): update testapp"

git checkout "${EXEC_BRANCH}"
