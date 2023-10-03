
### Dev

`npm run dev`

Optimized files for production (gets called in docker build automatically), run Node server
`npm run build`
`npm run start`

Run in Docker locally:
`docker build -t next .`
`docker run --rm -e NEXTAUTH_SECRET=SECRET -e NEXTAUTH_URL="localhost:3000" -e "CUSTOM_CLIENT_NAME=123" -e "CUSTOM_CLIENT_SECRET=123" -e BACKEND_URL="https://calculator-k42qgew2la-uc.a.run.app/api" -p 3000:3000 next`



### Run on gcloud

Push image to google repository:
Authenticate
`docker build -t HOSTNAME .`
`docker push HOSTNAME`

Check folowwing link to get file from existing key or create ney one with a keyfile
https://cloud.google.com/iam/docs/keys-list-get#iam-service-account-keys-list-gcloud

tag the local docker image
`docker build -t europe-west6-docker.pkg.dev/trainrangenext/nextjs/next .`
`docker push europe-west6-docker.pkg.dev/trainrangenext/nextjs/next`

Log into gcloud, go to "cloud run"
 - elect latest image
 - set env variables (-e flags from above)
 - set max instance number to 1(!), deploy

URL frontend: https://next-k42qgew2la-oa.a.run.app
URL backend https://calculator-k42qgew2la-uc.a.run.app/api

### Todo

 - Move secrets from env variables to secrets on gcloud

 

