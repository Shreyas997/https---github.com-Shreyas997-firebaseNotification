npm run build
az storage blob upload-batch --account-name ariyaveltassadevstr -s ./build -d '$web' 
