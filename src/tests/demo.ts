
import * as t from '../main/index';


const rawThrift: string =`
  struct MyStruct {
    1: required i32 lists
  }
`;

const thriftAST: t.ThriftDocument | t.ThriftErrors = t.parse(rawThrift);
console.log(thriftAST);