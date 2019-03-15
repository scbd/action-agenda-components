yarn bf
cd $PWD/dist/aaform
echo $(pwd)
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
cd css
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
cd ..
echo $(pwd)
aws s3 sync . s3://scbd-components/action-agenda/action-form/   --exclude ".*" --content-encoding "gzip" --acl "public-read"


yarn bl
cd ../aalist
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
aws s3 sync . s3://scbd-components/action-agenda/action-list/  --exclude "css" --exclude ".*" --content-encoding "gzip" --acl "public-read"

yarn bv
cd ../aaview
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
aws s3 sync . s3://scbd-components/action-agenda/action-view/  --exclude "css" --exclude ".*" --content-encoding "gzip" --acl "public-read"

