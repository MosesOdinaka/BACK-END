// export default function createEmployeesObject(departmentName, employees) {

// }

// {
//     $department
// }

export default function createEmployeesObject(departmentName, employees) {
    return {
        [departmentName]: employees,
    };
}
