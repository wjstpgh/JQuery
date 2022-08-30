function* gen(){
    const a=yield 1;
    console.log(a);

    const b=yield 2;
    console.log(b);

    const c=yield 3;
    console.log(c);

    const d=yield 4;
    console.log(d);
};

const iter=gen();
iter.next();
iter.next();//undefined
iter.next(1);//1
iter.next(2);//2
iter.next(3);//3
iter.next(5);//미실행