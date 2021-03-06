type Admin = {
    name: string;
    priveleges: string[];
}

type Employee = {
    name: string;
    startDate: Date;
}

type ElevatedEmployee = Admin & Employee;

const el: ElevatedEmployee = {
    name: 'Nitesh',
    priveleges: ['create-server'],
    startDate: new Date()
}

type Combinable = string | number;
type Numeric = number | boolean;

type Universal = Combinable | Numeric;
