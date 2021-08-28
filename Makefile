install:
	npm ci
brain-games:
	node bin/brain-games.js
publish:
	npm publish --dry-run
lint:
	npx eslint bin/ src/
lint-fix:
	npx eslint --fix bin/ src/