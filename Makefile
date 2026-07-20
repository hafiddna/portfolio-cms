.PHONY: start
start: ## Start the production docker container.
	sudo docker compose -f docker-compose.yaml up --build -d

.PHONY: stop
stop: ## Stop the production docker container.
	sudo docker compose -f docker-compose.yaml down