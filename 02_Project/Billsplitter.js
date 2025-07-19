function BillSplitter(persons,bill){
    let perpersonsplit=bill/persons;
    console.log(perpersonsplit);
    console.log(`Each person has to pay: ${perpersonsplit}`)
}
BillSplitter(3,2400);