import React from 'react'
//1 create context and store in variable
const Usercontext=React.createContext();

export default Usercontext;

//2 create provider and whatever components you give inside it can access the context provided above
//example like:
{/* <Usercontext>
    <Login></Login>
    <Card>
        <Data/>
    </Card>
</Usercontext>  */} //all compo inside this can access var
