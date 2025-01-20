import { useRef } from "react"



export default function UseRefEx1 (){


    const emailRef = useRef()
    const passwordRef = useRef()


    function onSubmit(e){
        e.preventDefault(
            console.log({
                email: emailRef.current.value,
                password: passwordRef.current.value
            })
        )
    }
return(<form onSubmit={onSubmit}>
<p>email</p>
<input ref={emailRef}></input>
<p>Password</p>
<input ref={passwordRef}></input>
<button type='submit'>Submit</button>
</form>)
}