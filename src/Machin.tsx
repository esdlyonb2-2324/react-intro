export function Machin() {

    let message = "salut je suis un message"
    message = null

    if(message===null){
        return <p>pas de message</p>
    }

    return (
        <>
        <h2>Coucou je suis la phrase au dessus du message</h2>
        <h3>{ message }</h3>
        </>
    );
}