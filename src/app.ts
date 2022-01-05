class Department {
	private employees: string[] = [];

	constructor(private readonly id: string, private name: string) {}

	describe(this: Department) {
		console.log(`Department ${this.id}: ${this.name}`);
	}

	addEmployee(employee: string) {
		this.employees.push(employee);
	}

	getEmployeesInfo() {
		console.log(this.employees.length);
		console.log(this.employees);
	}
}

const accounting = new Department('d1', 'Accounting');

accounting.addEmployee('Ahmed');
accounting.addEmployee('Mahmood');

accounting.describe();
accounting.getEmployeesInfo();
