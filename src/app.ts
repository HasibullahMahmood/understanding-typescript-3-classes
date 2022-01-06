class Department {
	protected employees: string[] = [];
	static fiscalYear = 2020;

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

	static createEmployee(name: string) {
		return { name };
	}
}

class ITDepartment extends Department {
	private lastReport: string;

	get mostRecentReport() {
		return this.lastReport;
	}

	set mostRecentReport(value: string) {
		this.lastReport = value;
	}
	constructor(id: string, private admins: string[], private reports: string[]) {
		super(id, 'IT');
		this.lastReport = reports[0];
	}

	addNewAdmin(admin: string) {
		this.admins.push(admin);
	}

	printAdmins() {
		console.log(this.admins);
	}

	addEmployee(employee: string): void {
		if (employee === 'Hasibullah') return;

		this.employees.push(employee);
	}

	printReports() {
		console.log(this.reports);
	}
}

const employee1 = Department.createEmployee('Max');
console.log(employee1, Department.fiscalYear);

const it = new ITDepartment('d1', ['Hasibullah'], ['report1']);

it.addEmployee('Ahmed');
it.addEmployee('Hasibullah');
it.addEmployee('Mahmood');

it.describe();
it.getEmployeesInfo();
it.mostRecentReport = 'report 2 ';
console.log(it.mostRecentReport);

console.log(it);
