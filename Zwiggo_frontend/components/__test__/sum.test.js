import sum from "../sum";

test("Sum is the return function which take two argument",()=>{
    const result = sum(3,7);

    //Assertion
    expect(result).toBe(10);
})