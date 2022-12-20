# simta-frontend
Made with Vue 2. By default runs on http://localhost:8080 .

Needs backend: https://github.com/R-N/simta-backend

Sample deployment: 
- https://simta-frontend.vercel.app
- https://simta-frontend-xstinky12-gmailcom.vercel.app
- https://simta-frontend-git-main-xstinky12-gmailcom.vercel.app/
- https://simta-frontend-6tr2uzkt1-xstinky12-gmailcom.vercel.app

Requirement:
- node & npm
- yarn
- vue cli
 
Executing / running:
```
cd simta
yarn config set ignore-engines true
npm install
npm run serve
```

If install still errors due to engine node > 17, try "yarn install --ignore-engines" instead
```
cd simta
yarn install --ignore-engines
npm run serve
```

This frontend app by default uses http://localhost:5000 for the backend address.
Set VUE_APP_BACKEND_ADDRESS environment variable to change it.

When diploying this, you need to set the project root to the simta folder.

Prototype figma: https://www.figma.com/proto/yHQZTSQ6zMPzECd3RONrCe/Tugas-PPS-2?node-id=52701%3A25393&scaling=contain&page-id=52696%3A23854&starting-point-node-id=52701%3A25393
