
yarn bf:$NODE_ENV
if [ ! -d "$PWD/dist/aaform" ]; then
  exit 0
fi
cd $PWD/dist/aaform
echo $(pwd)
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
echo $(pwd)
aws s3 sync . s3://scbd-components/$NODE_ENV/action-agenda/action-form/   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
cd ../..
cat $PWD

yarn vue-cli-service build  --mode production --target lib --formats umd-min --name actionFormPublicEmbed --dest dist/AAFormPublicEmbed src/widgets/AAFormPublic/index.js
cd $PWD/dist/AAFormPublicEmbed
echo $(pwd)
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
echo $(pwd)
aws s3 sync . s3://scbd-components/$NODE_ENV/action-agenda/action-form-public-embed/   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
cd ../..
cat $PWD

yarn vue-cli-service build  --mode production --target lib --formats umd-min --name actionFormPersonEmbed --dest dist/AAFormPersonEmbed src/widgets/AAFormPerson/index.js
cd $PWD/dist/AAFormPersonEmbed
echo $(pwd)
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
echo $(pwd)
aws s3 sync . s3://scbd-components/$NODE_ENV/action-agenda/action-form-person-embed/   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
cd ../..

yarn vue-cli-service build  --mode production --target lib --formats umd-min --name actionFormOrganizationEmbed --dest dist/AAFormOrganizationEmbed src/widgets/AAFormOrganization/index.js
cd $PWD/dist/AAFormOrganizationEmbed
echo $(pwd)
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
echo $(pwd)
aws s3 sync . s3://scbd-components/$NODE_ENV/action-agenda/action-form-organization-embed/   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
cd ../..


yarn vue-cli-service build  --mode production --target lib --formats umd-min --name actionPartyOrganizationEmbed --dest dist/AAFormPartyEmbed src/widgets/AAFormParty/index.js
cd $PWD/dist/AAFormPartyEmbed
echo $(pwd)
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
echo $(pwd)
aws s3 sync . s3://scbd-components/$NODE_ENV/action-agenda/action-form-Party-embed/   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
cd ../..