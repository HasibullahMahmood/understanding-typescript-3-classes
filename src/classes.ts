abstract class Department {
	protected employees: string[] = [];
	static fiscalYear = 2020;

	constructor(protected readonly id: string, protected name: string) {}

	abstract describe(this: Department): void;

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
	private static instance: ITDepartment;
	get mostRecentReport() {
		return this.lastReport;
	}

	set mostRecentReport(value: string) {
		this.lastReport = value;
	}
	private constructor(id: string, private admins: string[], private reports: string[]) {
		super(id, 'IT');
		this.lastReport = reports[0];
	}

	static getInstance() {
		if (this.instance) {
			return this.instance;
		}

		this.instance = new ITDepartment('d6', [], []);
		return this.instance;
	}

	describe(): void {
		console.log('ITDepartment - ID: ' + this.id);
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

// const it = new ITDepartment('d1', ['Hasibullah'], ['report1']);

const it = ITDepartment.getInstance();
const it2 = ITDepartment.getInstance();
console.log(it === it2);

it.addEmployee('Ahmed');
it.addEmployee('Hasibullah');
it.addEmployee('Mahmood');

it.describe();
it.getEmployeesInfo();
it.mostRecentReport = 'report 2 ';
console.log(it.mostRecentReport);

console.log(it);
