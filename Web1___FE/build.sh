# # get new code
# git checkout main
# git pull
npm i

# build
NODE_OPTIONS="--max_old_space_size=4096" npm run build
mv build/static/* build
rm build/static -rf
rm build/robots.txt

# Handle templates folder
rm ../Back_End/src/templates -rf
mkdir ../Back_End/src/templates
mv build/index.html ../Back_End/src/templates/index.html

# Handle web folder
rm ../Back_End/src/web -rf
mv build ../Back_End/src/web