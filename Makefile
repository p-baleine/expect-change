test:
	@./node_modules/.bin/mocha \
	--recursive \
	--require should \
	--reporter spec \
	--ui bdd

test-browser:
	@./node_modules/.bin/serve .

.PHONY: test
