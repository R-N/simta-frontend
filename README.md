# simta-frontend
Made with Vue 2. By default runs on http://localhost:8080 .

Needs backend: https://github.com/R-N/simta-backend

Sample deployment: https://simta-frontend.vercel.app/

This frontend app by default uses http://localhost:5000 for the backend address.
Set VUE_APP_BACKEND_ADDRESS environment variable to change it.

Requirement:
- node & npm
- yarn
- vue cli

Prototype figma: https://www.figma.com/proto/yHQZTSQ6zMPzECd3RONrCe/Tugas-PPS-2?node-id=52701%3A25393&scaling=contain&page-id=52696%3A23854&starting-point-node-id=52701%3A25393
 
Executing / running:
```
cd simta
yarn config set ignore-engines true
npm install
npm run serve
```

When diploying this, you need to set the project root to the simta folder.
