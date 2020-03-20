yarn build:view:$NODE_ENV

if [ ! -d "$PWD/dist/aaview" ]; then
  exit 0
fi
cd $PWD/dist/aaview
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
aws s3 sync --profile=scbd . s3://scbd-components/$NODE_ENV/action-agenda/action-view/  --exclude "css" --exclude ".*" --content-encoding "gzip"  --cache-control "86400" --acl "public-read"
cd ../..
echo $PWD


yarn vue-cli-service build  --mode production --target lib --formats umd-min --name actionViewEmbed --dest dist/AAViewEmbed src/widgets/AAView/index.js
if [ ! -d "$PWD/dist/AAViewEmbed" ]; then
  exit 0
fi
cd $PWD/dist/AAViewEmbed
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
aws s3 sync  --profile=scbd . s3://scbd-components/$NODE_ENV/action-agenda/action-view-embed/   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
cd ../..
echo $PWD