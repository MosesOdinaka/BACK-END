// import createIteratorObject from "./100-createIteratorObject";
// import createEmployeesObject from "./11-createEmployeesObject";

// export default function iterateThroughObject(reportWithIterator) {

// }

// // Return every employee name in a string, separated by |
// {
//     allEmployees: {
//         engineering: [
//             'Jogn Doe',
//             'Guillaume Salva',
//         ],
//     },
//     ...
// };

// // Full example:
// &gt; employees = {
//     ...createEmployeesObject('engineering', engineering),
//     ...createEmployeesObject('desing', design),
// };
// &gt;
// &gt; const report = createReportObject(employees);
// &gt; const reportWithIterator = createIteratorObject(report);
// &gt; iterateThroughObject(reportWithIterator)
// 'John Doe | Guillaume Salva | Kanye East | Jay Li'
// &gt;

// Using array methods with spread operator
export default function iterateThroughObject(reportWithIterator) {
    return [...reportWithIterator].join(' | ');
}
