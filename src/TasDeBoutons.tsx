import {useState} from "react";

interface Props{
    textButtons:string[],
    onSelectedButton: (textButton:string)=>void


}

export function TasDeBoutons(props: Props) {

   // const textButtons = ["je", "suis", "un", "bouton"]

    //handler
    const handleClick = (event:MouseEvent)=>{console.log(event)}

    const [selectedIndex, setSelectedIndex ] = useState(-1)


   // let selectedIndex = 3
    //const setSelectedIndex = (i)=>{selectedIndex = i}


    return (
        <>

            {props.textButtons.map((textButton, index)=>
                <button
                    className={selectedIndex === index ? "btn btn-primary" : "btn btn-secondary"}
                    key={index}
                    onClick={ ()=>{
                        handleClick
                        setSelectedIndex(index)
                        props.onSelectedButton(textButton)
                    }}
                >
                    {textButton}
                </button>

            )}




        </>
    );
}