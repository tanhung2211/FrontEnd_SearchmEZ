echo "Switching to branch master"
git checkout master
git pull origin master
echo "Building app"
npm install
npm run build

echo "Deploying files to server"

echo "Deployment complete"
