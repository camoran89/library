export class User {
	isActive: boolean;

	fullname: string;
	idType: string;
	idNumber: string;
	phone: string;
	vehicleId: string;
	vehicleType: string;
	notes: string;

	createdAt: Date;
	updatedAt: Date;

	constructor() {
		this.isActive = false;

		this.fullname = "";
		this.idType = "";
		this.idNumber = "";
		this.phone = "";
		this.vehicleId = "";
		this.vehicleType = "";
		this.notes = "";

		this.createdAt = new Date();
		this.updatedAt = new Date();
	}
}