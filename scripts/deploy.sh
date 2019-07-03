# yarn bf
# cd $PWD/dist/aaform
# echo $(pwd)
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done
# cd css
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done
# cd ..
# echo $(pwd)
# aws s3 sync . s3://scbd-components/action-agenda/action-form/   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"


#yarn bl
# cd ../dist/aalist
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done
# aws s3 sync . s3://scbd-components/action-agenda/action-list/  --exclude "css" --exclude ".*" --content-encoding "gzip" --acl "public-read"

# yarn bv
# cd ../aaview
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done
# aws s3 sync . s3://scbd-components/action-agenda/action-view/  --exclude "css" --exclude ".*" --content-encoding "gzip" --acl "public-read"

#  <base href="http://scbd-components.s3-website-us-east-1.amazonaws.com/action-agenda/demo">
#yarn b

# cd $PWD/dist/
# echo $(pwd)
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done
# cd css
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done
# cd ..
# cd js
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done
# cd ..
# echo $(pwd)
# aws s3 sync . s3://scbd-components/action-agenda/demo   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"
# cd ..
# cd $PWD/dist/
# echo $(pwd)
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done

# echo $(pwd)
# aws s3 sync . s3://scbd-components/p2020/demo   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"

# cd ..
# cd $PWD/dist/
# echo $(pwd)
# gzip -9 *
# for i in *.gz; do mv -i $i `basename $i .gz`; done
# echo $(pwd)
# aws s3 sync . s3://scbd-components/action-agenda/demo   --exclude ".*" --cache-control "86400" --content-encoding "gzip" --acl "public-read"