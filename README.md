
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

grant permissions (we need roles/artifactregistry.writer)
`gcloud projects add-iam-policy-binding PROJECT --member=PRINCPAL --role=ROLE`

activate auth for project
`gcloud auth activate-service-account GACCOUNT --key-file=GKEYFILE`

activate auth for docker
`gcloud auth configure-docker HOSTNAME`

tag the local docker image
`docker tag SOURCE-IMAGE LOCATION-docker.pkg.dev/PROJECT-ID/REPOSITORY/IMAGE:TAG`

finally push the image -> docs say project id, there I get permission denied!
`docker push LOCATION-docker.pkg.dev/PROJECT-NAME/REPOSITORY/IMAGE

zb
`europe-west1-docker.pkg.dev/trainrangenext/repo1/next`

Log into gcloud, go to "cloud run" select latest image, set env variables (use .env as template), set max instance number to 1(!), deploy


### Todo

 - Get data from backend
 - Clean up readme

 - Test auth and backend post calls

