export default function Button({children, onClick}){
    return(<button style={{marginRight: 10}} onClick={onClick}>{children}</button>)
}