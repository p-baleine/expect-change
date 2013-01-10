test:
	@./node_modules/.bin/mocha \
	--require ./test/common \
	--reporter spec \
	--ui bdd

test-browser:
	@./node_modules/.bin/serve .

.PHONY: test
