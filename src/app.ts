class Department {
	public name: string;
	private employees: string[] = [];

	constructor(n: string) {
		this.name = n;
	}

	describe(this: Department) {
		console.log('Department: ' + this.name);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	getEmployeesInfo() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department('Accounting');

accounting.addEmployee('Ahmed');
accounting.addEmployee('Mahmood');

accounting.describe();
accounting.getEmployeesInfo();
