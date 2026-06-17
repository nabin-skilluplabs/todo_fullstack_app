# ToDo
---------------------
BRD: Business wants its staff to keep list of ToDo, So that business can see the list of tasks the staffs are working on.
PRD: Store the title of the tasks you work on. Allow to add new, update existing and delete tasks

Task
- title
🚧
## Milestone 1: ToDo App Frontend
	✅ Setup the project git repository (DONE)
	✅ Install and setup react application using vite
		✅ Configure routing
		✅ Add react hook form
		✅ Add yup
        ✅ Clean the react default scaffolding 
	✅ As a user I should be able to list all tasks
	✅ As a user I should be able to add new task and see it as soon as I add it
	✅ As a user I should be able to edit existing task
	✅ As a user I should be able to delete existing task
## Milestone 2: ToDo App Backend
	✅ Install and setup express using vite
		✅ Prisma (connect to database)
	✅ Create database schema
		Task
	- Create API endpoints
		✅ List all tasks
		✅ Add new task
		✅ Update existing task
		✅ Delete task
	- Configure swagger to list all the API endpoints
	- Configure postman collection

## Milestone 3: Integration between Frontend and backend
	✅ As a user I should be able to get tasks from backend
	✅  As a user when I new task it should save to the database and show in the list
	✅ As a user when I update existing task it should persist
	- As a user when I delete existing task it should be permanently deleted
	- As a user I should be able to add new task that store to the database
## Milesotne 4: Deploy the app
	- Create pipeline to build and deploy task to AWS
	- Create infra to host frontend in S3
	- Create infra to host backend in EC2
## Milestone 5: Write e2e test to test the featues