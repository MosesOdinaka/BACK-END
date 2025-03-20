// export default function createReportObject(employeesList) {
    
// }

// {
//     allEmployees: {
//         engineering: [
//             'John Doe',
//             'Guillaume Salva',
//         ],
//     },
// };

// Rewriten
export default function createReportObject(employeesList) {
    return {
        allEmployees: { ...employeesList },
        getNumberOfDepartments() {
            return Object.keys(this.allEmployees).length;
        },
    };
}
