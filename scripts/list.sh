yarn version --patch
yarn build:list:$NODE_ENV

if [ ! -d "$PWD/dist/aalist" ]; then
  exit 0
fi
cd $PWD/dist/aalist
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
aws s3 sync . s3://scbd-components/$NODE_ENV/action-agenda/action-list/  --exclude "css" --exclude ".*" --content-encoding "gzip"  --cache-control "86400" --acl "public-read"
cd ../..
cat $PWD


yarn vue-cli-service build  --mode production --target lib --formats umd-min --name actionListEmbed --dest dist/AAListEmbed src/widgets/AAList/index.js
if [ ! -d "$PWD/dist/aaListEmbed" ]; then
  exit 0
fi
cd $PWD/dist/AAListEmbed
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
aws s3 sync . s3://scbd-components/$NODE_ENV/action-agenda/action-list-embed/   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
cd ../..