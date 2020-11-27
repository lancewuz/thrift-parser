import * as t from '../main/index'

const rawThrift: string = `
/*
*/

struct User {
    /**/
    1: string k1
    /** */
    2: string k2
    /** k3 */
    3: string k3
}

/* We */
enum Avatar {}
`

const thriftAST: t.ThriftDocument | t.ThriftErrors = t.parse(rawThrift)
console.log(thriftAST)
