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

class ITDepartment extends Department {
	constructor(id: string, private admins: string[]) {
		super(id, 'IT');
	}

	addNewAdmin(admin: string) {
		this.admins.push(admin);
	}

	printAdmins() {
		console.log(this.admins);
	}
}

const it = new ITDepartment('d1', ['Hasibullah']);

it.addEmployee('Ahmed');
it.addEmployee('Mahmood');

it.describe();
it.getEmployeesInfo();
console.log(it);
