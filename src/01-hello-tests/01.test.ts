import {mult, splitintoWords, sum} from "./01";

test ('sum should be correct', ()=> {
    const a = 1;
    const b = 2;
    const c = 3;

    const result1 = sum(a,b);
    const result2 = sum(b,c);

    expect(result1).toBe(3);
    expect(result2).toBe(5);
})

test ('multiply should be correct', ()=> {
    const a = 1;
    const b = 2;
    const c = 3;

    const result1 = mult(a,b);
    const result2 = mult(b,c);

    expect(result1).toBe(2);
    expect(result2).toBe(6);
})

test("splitting into words should be correct",()=>{
   //data
    const sent1 = "Hello my friend!"
    const sent2 = "JS - the best  programming language."

    //action
    const result1 = splitintoWords(sent1);
    const result2 = splitintoWords(sent2);

    //expect result
    expect(result1.length).toBe(3)
    expect(result1[0]).toBe("hello")
    expect(result1[1]).toBe("my")
    expect(result1[2]).toBe("friend")

    expect(result1.length).toBe(5)
    expect(result1[0]).toBe("js")
    expect(result1[1]).toBe("the")
    expect(result1[2]).toBe("best")
    expect(result1[2]).toBe("programming")
    expect(result1[2]).toBe("language")


})