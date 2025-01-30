export class project {
    constructor(projectName) {
        this.name = projectName;
        this.projectList = [];
    }
    addItem(todoItem) {
        this.projectList.push(todoItem);
    }
    removeItem(id) {
        this.projectList = this.projectList.filter(element => element.getId() !== id);
    }
    projectLog() {
        this.projectList.forEach(element => {
            console.log(element.getId());
        });
    }
    getProjectName() {
        return this.name
    }
    getProjectList(){
        return this.projectList
    }
    
}