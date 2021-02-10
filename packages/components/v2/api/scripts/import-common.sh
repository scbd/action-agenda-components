curl https://attachments.cbd.int/aan/test-set.json --output scripts/test-set.json
mongoimport --db=aa-db --collection=action-agenda --file=scripts/test-set.json

curl https://attachments.cbd.int/aan/test-set-versions.json --output scripts/test-set-versions.json
mongoimport --db=aa-db --collection=action-agenda-versions --file=scripts/test-set-versions.json

rm scripts/test-set.json
rm scripts/test-set-versions.json