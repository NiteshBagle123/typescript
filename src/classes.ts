class Department {
    // private id: number;
    // private name: string;
    private employees: string[] = [];

    constructor(private readonly id: number, public name: string) {
        // this.id = id;
        // this.name = name;
    }

    describe(this: Department) {
        console.log(`Department details: ${this.id} - ${this.name}`)
    }

    addEmployee(employee: string) {
        this.employees.push(employee);
    }

    printEmployeeInformation() {
        console.log(this.employees.length);
        console.log(this.employees);
    }
}

class ITDepartment extends Department {
    admins: string[];
    constructor(id: number, admins: string[]) {
        super(id, 'IT');
        this.admins = admins;
    }

    printReport(reportDetails: string[]){
        console.log(reportDetails);
    }
}

const itDepartment = new ITDepartment(1, ['Nitesh']);
itDepartment.describe();

// const departmentNameCopy = { name: 'Dummy', describe: departmentName.describe };
// departmentNameCopy.describe();

itDepartment.addEmployee('Nitesh');
itDepartment.addEmployee('Rahul');
itDepartment.printEmployeeInformation();
itDepartment.printReport(['something went wrong!']);

