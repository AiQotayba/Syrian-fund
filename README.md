# Syrian fund landing page

# setup in server
```bash
git clone https://github.com/AiQotayba/Syrian-fund.git
cd Syrian-fund
npm install
npm run build
npm i -g pm2
pm2 start npm --name "syrian-fund" -- start
pm2 save
pm2 startup
```