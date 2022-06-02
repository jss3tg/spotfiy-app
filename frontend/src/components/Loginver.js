import Login from './Login';
function Loginver() {
    const [currUser, setUser] = useState();
  return (
    <>
        {username? <Chat currUser={username} logout={() => setUser(null)}/> : <Login setUser={setUsername}/>}
    </>
  )
}