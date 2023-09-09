// import { exit } from "process";

// {
//     const predictions = {
//         past: 1,
//         current: 3,
//         future: 8
//     }

//     // let result;

//     // {

//     //     const loadedModifiers = [3, 4, 2, 7, 1, 7, 9]
//     //     result = loadedModifiers[predictions.current]

//     // }

//     // console.log(`Result: ${result}`);
// }

// const thisObject = {
//     mine: [
//         1, 2, 3, 4
//     ],

//     yours: [
//         2, 4, 6, 8
//     ]
// }

// const orniArray = [
//     {
//         name: `Test`,
//         age: `12`
//     },
//     {
//         name: "value",
//         age: "number"
//     }
// ]
// console.log(orniArray[0]?.name);

// if (orniArray[4]?.name !== undefined) {
//     console.log(orniArray[4].name);
// }

// const x = 2;
// if (orniArray.length > x) {
//     console.log(`Last Value: ${orniArray[x]?.name}`)
// } else {
//     console.log("Array out of bounds")
// }


// if (orniArray.length < x) {
//     console.log("Array out of bounds")
//     exit();
// }
// console.log(`Last Value: ${orniArray[x]?.name}`)

// const predictions = {
//     past: 1,
//     current: 3,
//     future: 8
// }


// function getModifier(inputValue: number): number {
//     const loadedModifiers = [3, 4, 2, 7, 1, 7, 9]
//     let result = loadedModifiers[inputValue]
//     if (result === undefined) { 
//         console.log("The result was not found in loadedModifiers.")
//         result = -1;
//     }
//     return result;

// }

// console.log(getModifier(1.5));

// Replace the giant account blob with a proper import
import { IAccount, accounts } from "./mockdata";

// {"id":6,"first_name":"Addy","last_name":"Wrassell","credit":7,"balance":720082,"transactions":[{"merchant":"Jacobi LLC","price":89.24}]},

// function getBalance(index: number): number {
//     return accounts[index].balance
//    const account = accounts[index];
//    const balance = account?.balance;
//    return balance;
// }

// getBalance(5);

// console.log(`The Balance is: ${accounts[5]?.balance}`);
// console.log(`Addy's only transaction was for: ${accounts[5]?.transactions[0]?.price}`)
// const lastIndex = accounts[598]?.transactions.length
// //@ts-ignore
// console.log(`Thoma Davenport's last transaction was for: ${accounts[598]?.transactions[lastIndex - 1]?.price}`)

// {"id":23,"first_name":"Shermy","last_name":"McEnhill","credit":8,"balance":632686,"transactions":[{"merchant":"Von-Heathcote","price":86.31},{"merchant":"Klein-Ankunding","price":98.85},{"merchant":"Labadie, Bosco and Armstrong","price":5.69},{"merchant":"McClure-Lynch","price":56.47},{"merchant":"Murphy-Rolfson","price":97.63},{"merchant":"Marquardt and Sons","price":18.12},{"merchant":"Sawayn, Quitzon and Goodwin","price":95.42},{"merchant":"Hessel Inc","price":85.24},{"merchant":"Goldner LLC","price":77.49},{"merchant":"Predovic-Ziemann","price":5.19}]},

// console.log(`The transaction is: ${accounts[22]?.transactions[7]?.price}`);


// Write a function that takes the ID of an account and returns the available credit line of that person.
// Assume that IDs are inconsistent in ordering, but are unique.
// The available credit line is 10% per level of credit, as a percentage of their balance.
// Assure the function has no side-effects.

// Functions, Parameters, Branching, and Loops

// function creditLine(accountsArray: any[], accountId: number): number{
//     const creditLevel = account?.credit //incorrect syntax, correct once it's figured out.

//     const accountBalance = account?.balance //incorrect syntax, correct once it's figured out.

//     const availableCredit =  accountBalance * (0.10 * creditLevel)

//     return availableCredit
// }

// // Change value here to change account looked up
// creditLine(accounts, 37)

// Step 1: Get the ID from Const Accounts. Incorrect. Give the function a parameter for the account ID.
// Step 2: Fix what needs to be figured out



// FIXME: Gavin's favorite tag.
// BLAME: Amber's favorite tag.
// HACK: Chris' favorite tag.
// BLAME: It's still `'s` for singular proper nouns ending in s. `Chris's`.
// HACK: ENGLISH.
// BLAME: French.

// HOMEWORK HELP!

// Using the []any workaround for parameters
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getCreditBad(accounts: any[], id: number): number {
    for (let i = 0; i < accounts.length; i++) {
        const account = accounts[i];
        if (account.id === id) {
            return 0.1 * account.balance * account.credit;
        }
    }
    return -1;
}

/* Because function parameters expect type declarations in typescript, interfaces are a way of being more specific
 * in how we talk about the inputs to our functions. When you hover over a variable in typescript, vscode will helpfully
 * present an interface for that variable in case you want to examine it or pass it into a function later.

 * Whenever you're uncertain how to pass a complex object into a function, consider using interfaces. They're a convenient
 * way to bottle up type information into a reusable name. */

// Please check mockdata.ts for the IAccount interface and corresponding account data 

/* terrible */
//function c(d: any[], i: number): number { const a = d.filter((a: { id: number }) => a.id === i)[0]; return a ? 0.1 * a?.balance * a?.credit : -1 }

// /* how I actually wrote it */
function getMathyCredit(accounts: IAccount[], id: number): number {
    const account = accounts.filter((account: IAccount) => account.id === id)[0];
    return account ? 0.1 * account?.balance * account?.credit : -1;
}

/* how I expect you guys to approach it */
// Given: Big block of data, ID of account to look for
// Expected: Credit balance of the account in question, as defined by 10% of balance * credit level
// Algorithm/Data: Find a needle in a haystack or ace in a deck of cards. Do some stuff with the cards and hand it back
function getCreditStudentWay(accounts: IAccount[], id: number): number {
    // Go through the stack of cards
    for (let i = 0; i < accounts.length; i++) {
        // Save the each account in case we need it later
        const account = accounts[i];
        // Look for the match
        if (account !== undefined && account.id === id) {
            // Give back the credit limit
            return 0.10 * account.balance * account.credit;
        }
    }

    // If we didn't return already, we don't have valid credit. Return the error value
    return -1;
}


function getCreditBreakWay(accounts: IAccount[], id: number): number {
    // Go through the stack of cards
    let account: IAccount | undefined;
    for (let i = 0; i < accounts.length; i++) {
        // Save the each account in case we need it later
        account = accounts[i];
        if (account == undefined) {
            continue;
        }
        // Look for the match
        if (account.id === id) {
            // We found it and can exit the loop
            break;
        }
    }
    if (account !== undefined && account.id === id) {
        return 0.10 * account.balance * account.credit;
    }
    // If we didn't return already, we don't have valid credit. Return the error value
    return -1;
}

// Using string return instead with union errors
// Let's try the for..of loop instead, and see what improvements it offers!
function getCredit(accounts: IAccount[], id: number): string | Error {
    for (const account of accounts) {
        // const account = accounts[i]; // Now unnecessary because of the of loop!
        if ( /* account !== undefined && */ account.id === id) { // can skip the undefined check!
            const result = 0.1 * account.balance * account.credit;
            return result.toFixed(2);
        }
    }
    return new Error("No such Account ID");
}

// Print out all the results!
console.log(getCreditBad(accounts, 42));
console.log(getMathyCredit(accounts, 42));
console.log(getCreditStudentWay(accounts, 42));
console.log(getCreditBreakWay(accounts, 42));
console.log(getCredit(accounts, 42));

// Now for something entirely different...enums!
enum locations {
    OnPerson,
    InBackpack,
    OnShip,
    Pending,
    Worn,
    InLBV,
    Other
}

interface IInventory {
    name: string,
    techLevel: number,
    cost: number,
    location: locations
    weight: number,
    count: number,
    shenanigans?: string // Optional properties can be specified with question marks
}

const items: IInventory[] = [
    { "name": "Rope", techLevel: 9, cost: 50, location: locations.OnShip, weight: 3, count: 3 },
    { "name": "Rope", techLevel: 9, cost: 50, location: locations.OnPerson, weight: 3, count: 1 },
    { "name": "Bivvy Pack", techLevel: 7, cost: 150, location: locations.InBackpack, weight: 1, count: 1 }
]

function getPlayerInventoryItems(inputItems: IInventory[]): string[] {
    const output = [];

    for (const item of inputItems) {
        if (item.location == locations.OnPerson || item.location == locations.InBackpack ||
            item.location == locations.Worn || item.location == locations.InLBV) {
            output.push(item.name); // add value onto the end of the array
        }
    }


    return output;
}

console.log(getPlayerInventoryItems(items));

// Discussion on array.shift and why it's potentially hazardous
console.log(items);

// More expensive than push/pop
items.shift();

console.log(items);

// Your assignment this week is a new function on the mock_data.json we provided previously. 
// Please generate a side-effect free function that computes and returns the average number of transactions among all customers in the object. 
// The only input to the function should be the mock_data object itself.
function averageTransactions(accounts: IAccount[]): number | Error {
    // can declare multiple variables like this
    let accountTotal = 0, transactionTotal = 0;
    // for (const account of accounts) {
    for (let i = accounts.length - 1; i >= 0; i--) { // doing it backwards because why not
        const account = accounts[i];
        if (account === undefined) continue;
        // accountTotal = accountTotal +1;
        accountTotal++;
        if (account.transactions === undefined) continue;
        // transactionTotal = transactionTotal + account.transactions.length;
        transactionTotal += account.transactions.length;
    }
    if (accountTotal === 0) return new Error("Accounts array has no valid accounts");

    return transactionTotal / accountTotal;
}

console.log(averageTransactions(accounts));

/* Print a pay stub for any given name or ID, that looks like the following:

==========
Pay Stub for ${name}
==========
You worked ${hours}.
<You worked ${hours} overtime. | You have no overtime.>
Your pay is ${Pay}.
==========

People who work more than 40 hours earn 1.5 times overtime.
People who are salaried are paid for 40 hours no matter how much they work.
Ensure you have no side effects.
All IDs are correlated. Do not assume similar array positions.*/
import { IPayrate, payrates } from "./payrate";
import { IPaytype, paytypes } from "./paytype";
import { IPerson, people } from "./person";
import { ITimesheet, timesheets } from "./timesheet";

interface IPayData {
    firstName: string;
    lastName: string;
    paidHours: number;
    overtimeHours: number;
    totalPay: number;
}

import { Ok, Err, Result } from "ts-results";

function generatePayData(id: string, payrates: IPayrate[], paytypes: IPaytype[], people: IPerson[], timesheets: ITimesheet[]): Result<IPayData, Error> {
    const HOURS_PER_WEEK = 40, OVERTIME_RATE = 1.5;

    // let IDPayrate : string;
    // for(const payrate of payrates) {
    //     if( payrate.id == id ) {
    //         IDPayrate = payrate.payrate;
    //     }
    // }
    const payrate = payrates[payrates.map(e => e.id).indexOf(id)];
    const paytype = paytypes[paytypes.map(e => e.id).indexOf(id)];
    const person = people[people.map(e => e.id).indexOf(id)];
    const timesheet = timesheets[timesheets.map(e => e.id).indexOf(id)];

    // Check if our id is present in each dataset and construct an error to return
    if (!payrate || !paytype || !person || !timesheet) {
        const problems: string[] = [];
        if (!payrate) problems.push("payrates");
        if (!paytype) problems.push("paytypes");
        if (!person) problems.push("people");
        if (!timesheet) problems.push("timesheets");
        return Err(new Error(`ID (${id}) not found in ${problems}`));
    }

    // let paidhours = 0;
    // for( const hours of timesheet.timesheet) {
    //     paidHours += hours;
    // }
    const paidHours = timesheet.timesheet.map(e => e.hours).reduce((a: number, b: number) => a + b);
    // let overtimeHours = 0;
    // if( paytype.paytype = "hourly" && paidHours > 40) overtimeHours = paidHours - HOURS_PER_WEEK
    const overtimeHours = paytype.paytype == "salary" ? 0 : Math.max(0, paidHours - HOURS_PER_WEEK);
    const wage = parseFloat(payrate.payrate.slice(1));
    // There are so many ways to do this calculation. Here's mine; if yours is readable and gets the right result, feel good about it.
    const totalPay = wage * Math.max(HOURS_PER_WEEK, paidHours) + OVERTIME_RATE * wage * overtimeHours;

    const result = {
        firstName: person.first_name,
        lastName: person.last_name,
        paidHours: paidHours,
        overtimeHours: overtimeHours,
        totalPay: totalPay,
    }
    return Ok(result);
}

function generatePayStub(payData: IPayData): string {
    return `
==========
Pay Stub for ${payData.firstName} ${payData.lastName}
==========
You worked ${payData.paidHours} hours.
${payData.overtimeHours > 0 ? `You worked ${payData.overtimeHours} overtime.` : `You have no overtime.`}
Your pay is $${payData.totalPay.toFixed(2)}.
==========`
}

const id = "139389fe-d0bb-4590-8392-427583c99f57";
const result = generatePayData(id, payrates, paytypes, people, timesheets);
if (result.err) {
    console.log(result.val);
} else {
    console.log(generatePayStub(result.val));
}

// Return an array of Full Names, and Hours Worked.
// Include error handling with the ts-results library.
// Assume IDs are Unique.
// Assume the Arrays are Not Sorted.
// Full Names without Hours Worked is an error state.
// Hours Worked without a Full name is not an error state.
// Ensure that your code has no side effects.
// I will tamper with your data.

// import { IPerson, people } from "./person";
// import { ITimesheet, timesheets } from "./timesheet";
// import { Ok, Err, Result } from "ts-results";

interface IWorklog {
    fullName?: string;
    totalHours?: number;
}

function generateWorklogsBySorting(people: IPerson[], timesheets: ITimesheet[]): Result<IWorklog, string>[] {
    // By sorting the arrays first, we can make sure we 
    // encounter all the matching IDs at the same time.
    people.sort((a: IPerson, b: IPerson) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);
    timesheets.sort((a: ITimesheet, b: ITimesheet) => a.id < b.id ? -1 : a.id > b.id ? 1 : 0);

    // Now we can loop through the arrays and throw them into our array
    const result = [];
    for (let p = 0, t = 0; p < people.length || t < timesheets.length; /* manual incrementing */) {
        // We'll be using these a lot, so let's save them for later reference.
        const person = people[p];
        const timesheet = timesheets[t];

        // Check if we've run off either of our arrays
        if (p >= people.length) {
            // We've run out of name data. Record the remaining worklogs by ID.
            for (const timesheet of timesheets.slice(t)) {
                const hours = timesheet.timesheet.map(e => e.hours).reduce((a: number, b: number) => a + b);
                result.push(Ok({ fullName: `Name Not Found (${timesheet.id}).`, totalHours: hours }));
            }
            return result;
        }
        if (t >= timesheets.length) {
            // We've run out of time data. Report the remaining employees without worklogs.
            for (const person of people.slice(p)) {
                const fullName = `${person.first_name} ${person.last_name}`;
                result.push(Err(`No hours found for ${fullName} (${person.id}).`));
            }
            return result;
        }

        // Move past any empty fields, pairwise if necessary.
        if (!person || !timesheet) {
            if (!person) p++;
            if (!timesheet) t++;
            continue;
        }

        // Check for missing entries by comparison
        if (person.id < timesheet.id) {
            // Again, no valid hours to record. Report the error.
            const fullName = `${person.first_name} ${person.last_name}`;
            result.push(Err(`No hours found for ${fullName} (${person.id}).`));
            p++;
        } else if (person.id > timesheet.id) {
            // Again, no valid name to assign the time to. Record the hours by ID.
            const totalHours = timesheet.timesheet.map(e => e.hours).reduce((a: number, b: number) => a + b);
            result.push(Ok({ fullName: `Name Not Found (${timesheet.id}).`, totalHours: totalHours }));
            t++;
        } else { // if (person.id == timesheet.id)
            // Finally valid data
            const fullName = `${person.first_name} ${person.last_name}`;
            const totalHours = timesheet.timesheet.map(e => e.hours).reduce((a: number, b: number) => a + b);
            result.push(Ok({ fullName: fullName, totalHours: totalHours }));
            p++;
            t++;
        }
    }

    // Yay?
    return result;
}

function generateWorklogsByMaps(people: IPerson[], timesheets: ITimesheet[]): Result<IWorklog, string>[] {
    // Shove 'em all in and let maps sort them out!
    const worklogMap = new Map<string, IWorklog>();
    for (const person of people) {
        const fullName = `${person.first_name} ${person.last_name}`;
        const totalHours = worklogMap.get(person.id)?.totalHours; // save existing value so you don't overwrite with undefined
        worklogMap.set(person.id, { fullName, totalHours: totalHours })
    }
    for (const timesheet of timesheets) {
        const fullName = worklogMap.get(timesheet.id)?.fullName // save existing value so you don't overwrite with undefined
        const totalHours = timesheet.timesheet.map(e => e.hours).reduce((a: number, b: number) => a + b);
        worklogMap.set(timesheet.id, { fullName: fullName, totalHours: totalHours })
    }

    // lol watch maps solve the problem
    const result = [];
    for (const [id, worklog] of worklogMap) {
        if (!worklog.totalHours) {
            if (!worklog.fullName) result.push(Err(`No data found for ${id}.`));
            if (worklog.fullName) result.push(Err(`No hours found for ${worklog.fullName} (${id}).`));
        } else { // if( worklog.totalHours )
            if (!worklog.fullName) result.push(Ok({ fullName: `Name Not Found (${id})`, totalHours: worklog.totalHours }));
            if (worklog.fullName) result.push(Ok({ fullName: worklog.fullName, totalHours: worklog.totalHours }));
        }
    }

    // Ta-dah
    return result;
}

// Create some shuffled data to do proper testing 
function shuffle<T>(array: T[]): T[] {
    array.sort(() => Math.random() - 0.5);
    return array;
}
const shuffledPeople = shuffle(people);
const shuffledTimesheets = shuffle(timesheets);

// Now we can test performance!
const sortStart = performance.now();
{ generateWorklogsBySorting(shuffledPeople, shuffledTimesheets); }
const sortEnd = performance.now();
console.log(`Sorting Time: ${sortEnd - sortStart} ms`);

const mapStart = performance.now();
{ generateWorklogsByMaps(shuffledPeople, shuffledTimesheets); }
const mapEnd = performance.now();
console.log(`Mapping Time: ${mapEnd - mapStart} ms`);

// Create a function that takes in an array of objects containing IDs, names, ages, and the education type of
// "High School", " College", "Vocational".  Sort applicants into lists based on being over or under 30 years old
// and if they have a college diploma or not. Treat any other education types as an error.
// Return the information as an object of four arrays.

// Write another function that can print out any one of the arrays, but only non-error entries.

enum Education {
    HighSchool = "High School",
    College = "College",
    Vocational = "Vocational",
}

interface IApplicant {
    id: string,
    name: string,
    age: number,
    education: string,
}

interface IApplicantCensus {
    YoungGrad: IApplicant[]
    YoungNonDegree: IApplicant[]
    OldGrad: IApplicant[]
    OldNonDegree: IApplicant[]
}

function classifyApplicants(applicants: IApplicant[]): Result<IApplicantCensus, IApplicant[]> {
    const results: IApplicantCensus = {
        YoungGrad: [],
        YoungNonDegree: [],
        OldGrad: [],
        OldNonDegree: []
    }
    const errors: IApplicant[] = []

    const AGE_CUTOFF = 30;
    for (const applicant of applicants) {
        if (applicant.age < AGE_CUTOFF) {
            if (applicant.education == Education.College) {
                results.YoungGrad.push(applicant);
            } else if (applicant.education == Education.HighSchool || applicant.education == Education.Vocational) {
                results.YoungNonDegree.push(applicant);
            } else {
                errors.push(applicant);
            }
        } else { // applicant.age >= AGE_CUTOFF
            if (applicant.education == Education.College) {
                results.OldGrad.push(applicant);
            } else if (applicant.education == Education.HighSchool || applicant.education == Education.Vocational) {
                results.OldNonDegree.push(applicant);
            } else {
                errors.push(applicant);
            }
        }
    }

    if (errors.length > 0) {
        return Err(errors)
    }
    return Ok(results);
}

enum Category {
    YoungGrad,
    YoungNonDegree,
    OldGrad,
    OldNonDegree,
}
function printApplicants(census: IApplicantCensus, category: Category): void {
    switch (category) {
        case Category.YoungGrad:
            console.log(census.YoungGrad);
            break;
        case Category.YoungNonDegree:
            console.log(census.YoungNonDegree);
            break;
        case Category.OldGrad:
            console.log(census.OldGrad);
            break;
        case Category.OldNonDegree:
            console.log(census.OldNonDegree);
            break;
        default:
            console.log("Invalid Category");
    }
}

// Wonderful applicant array courtesy of Tyler
const applicants = [
    { id: "A1", name: "John Moore", age: 28, education: "Vocational" },
    { id: "A2", name: "Jon Smith", age: 32, education: "College" },
    { id: "A3", name: "Emily Costatino", age: 30, education: "College" },
    { id: "A4", name: "Justin Beasly", age: 32, education: "High School" },
    { id: "A5", name: "Joel Hurd", age: 26, education: "College" },
]

// This is a really helpful pattern for checking errors on complex functions before using results
const census = classifyApplicants(applicants);
if (census.err) {
    console.log("Invalid Applicants Detected:")
    console.log(census.val);
} else {
    printApplicants(census.val, Category.OldGrad);
}

// ---------- Phase 1 ---------- \\
// Create an array of fruits objects and their weights (in oz)
// It need not be perfectly factual

// ---------- Phase 2 ---------- \\
// Create a function that takes in an array representing your backpack,
// a quantity, and a fruit object from the array in Phase 1 to add.
// The function will attempt to add items to your backpack.
// Your backpack has a maximum weight of 64 oz.
// Return the updated backpack from the function.

// ---------- Phase 3 ---------- \\
// Call the function from Phase 2 adding a variety of of different fruits 
// with different function calls, all of which add to the same backpack variable.

// ---------- Phase 4 ---------- \\
// Write another function that prints out all 
// the contents of the backpack from Phase 1, with a header. 
// List all items in the backpack including their weights, 
// count and the name of the item, neatly. (No Bare Objects)

// Phase 1
import { fruits, IFruit } from "./fruits";

// Phase 2
const BACKPACK_DEFAULT_CAPACITY = 64;
// Generics allow you to implement types that vary according to a parameter
// This IBackpack can contain different types. Ours uses an IFruit.
interface IBackpack<Type> {
    weight: number,
    capacity: number,
    contents: { item: Type, quantity: number }[],
}

function addFruit(backpack: IBackpack<IFruit>, fruit: IFruit, quantity: number): Result<IBackpack<IFruit>, string> {
    // This should never happen
    if (backpack.weight > backpack.capacity) return new Err("Backpack Weight Exceeds Capacity")
    // This should prevent the problem above
    if (backpack.weight + fruit.weight * quantity > backpack.capacity) {
        return new Err(`Insufficient Capacity (${backpack.weight}/${backpack.capacity}) for ${quantity} ${fruit.name} (${fruit.weight} each)`)
    }

    // Check for existing items of that type before adding more to the array.
    const content = backpack.contents.find((content) => content.item.name == fruit.name);
    if (content) {
        content.quantity += quantity;
    } else {
        backpack.contents.push({ item: fruit, quantity: quantity });
    }
    backpack.weight += fruit.weight * quantity;

    return Ok(backpack);
}

// Phase 3
let fruitBackpack: IBackpack<IFruit> = { weight: 0, capacity: BACKPACK_DEFAULT_CAPACITY, contents: [] };
for (const fruit of shuffle(fruits)) { // Using generic shuffle() from earlier lesson
    const result = addFruit(fruitBackpack, fruit, Math.floor(3 * Math.random() + 1));
    if (result.err) {
        console.log(result.val);
    } else {
        fruitBackpack = result.val;
    }
}

// Phase 4
function printBackpack(backpack: IBackpack<IFruit>): void {
    console.log(`=====================================
This backpack contains the following:
=====================================`);
    for (const content of backpack.contents) {
        console.log(`${content.quantity} ${content.item.name} (${content.item.weight * content.quantity} oz)`);
    }
    console.log(`Total Weight: ${backpack.weight} / ${backpack.capacity} oz (${backpack.capacity - backpack.weight} oz remaining)`);
}
printBackpack(fruitBackpack);

console.log("I sure hope that branch tutorial is going okay");