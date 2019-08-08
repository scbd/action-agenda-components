yarn demo
cd $PWD/dist/
gzip -9 *
for i in *.gz; do mv -i $i `basename $i .gz`; done
aws s3 sync . s3://scbd-components/$NODE_ENV/action-agenda/demo   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
aws cloudfront create-invalidation --distribution-id EGB0GY0FB8LLX --paths /