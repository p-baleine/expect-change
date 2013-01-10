test:
	@./node_modules/.bin/mocha \
	--require ./test/common \
	--reporter spec \
	--ui bdd

.PHONY: test
