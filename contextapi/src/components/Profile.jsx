import React,{useContext} from 'react';
import Usercontext from '../context/Usercontext';

function Profile(){
const {user}=useContext(Usercontext);
if(!user) return <div>Please login to view profile</div>;
    return <div>Welcome {user.username}</div>
}
export default Profile