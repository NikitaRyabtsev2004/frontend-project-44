install:
	-g npm @latest
	
publish:
	--dry-run
	
run:
	bin/brain-games.js

lint:
	npx eslint
	
 
