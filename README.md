# Getting Started with Fletch Test

This repo contains a pivot table that can be used to look at the byte transfer traffic of different IP address from a Splunk exported file. This app was built using create-react-app and uses AWS and Github Actions for deployment and CI/CD.

## Spin Up Locally

1. Pull down or clone this repo
2. Run `npm i` to install all dependencies
3. Run `npm start` to launch up the web server
4. Go to `localhost:3000` in your web browser of choice
5. You are now ready to use the site!!

## Deploy

1. In `./.github/workflows/development.yml`, `./.github/workflows/production.yml` and `./template.yml` change all occurrences of `fletch-test.carsonkey.dev` and `dev-fletch-test.carsonkey.dev` to match your new domain/subdomain
2. Push code to either production or development branch (depending on what environment you are working in)
3. Github Actions will start the deployment process!
   1. If this is the first deployment complete the Amazon Certificate Manager validation process
      1. Once Cloudformation starts the ACM creation process go to ACM in AWS
      2. Go to the new pending ACM
      3. copy the CNAME name and CNAME value and make a new DNS record in your domain providers portal
      4. Tutorials for popular domain providers: [GoDaddy](https://www.godaddy.com/help/add-a-cname-record-19236) and [Google Domains](https://support.google.com/a/answer/47283?hl=en)
4. Once Cloudformation is done the site is live!!