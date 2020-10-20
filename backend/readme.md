 (1) npm install pm2 -g


 (2) pm2 start index.js


 (3) commands -> [
  pm2 list
  pm2 monit
  pm2 ls <- this will list all runnig apps


 ]

 (4) pm2 stop index.js  <- to stop but not remove list pm2
 (5) we can restart it using   -> pm2 restart app


 (6) if want to delete from list and stop   -> pm2 delete index.js

 (7) pm2 monit