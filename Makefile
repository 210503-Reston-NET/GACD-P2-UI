.PHONY: build run clean test clearlogs publish

#Angular_project_root is the directory containing the angular project relative to this makefile
Angular_project_root = Ang-GACD-UI

#log_dir is the name of directory with logs relative to Angular_project_root
log_dir = logs

runserver:
	cd "./$(Angular_project_root)/src/assets/MockData" && (npm run server)
build:
	cd ./$(Angular_project_root) && ng build
run: 
	cd ./$(Angular_project_root) && ng serve

clean: clearlogs
	
clearlogs:
	rm -f $(Angular_project_root)/$(log_dir)/*
