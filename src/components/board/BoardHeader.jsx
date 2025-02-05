import {useEffect, useRef, useState} from "react";
import {Icon, IconButton} from "@ui";

export function BoardHeader() {
    const [boardName, setBoardName] = useState('Basic Board');
    const [showInput, setShowInput] = useState(false);
    const [isFavorite, setIsFavorite] = useState(false);
    const inputRef = useRef(null);

    useEffect(() => {
        if (showInput && inputRef.current) {
            inputRef.current.focus();
        }
    }, [showInput]);

    return (
        <section className='header'>
            <div className='board-info'>
                <div role='textbox'
                     className='board-name'
                     onClick={() => setShowInput(true)}
                >
                    {showInput ? (
                        <input type="text"
                               ref={inputRef}
                               onBlur={() => setShowInput(false)}
                               value={boardName}
                               onChange={(e) => setBoardName(e.target.value)}
                        />
                    ) : (
                        <h1>{boardName}</h1>
                    )}
                </div>

                <IconButton onClick={() => setIsFavorite(prev => !prev)}>
                    {isFavorite ? (<Icon size='16px' name="starFull" color='#FFF'/>) : (
                        <Icon size='16px' name="starEmpty" color='#FFF'/>)}
                </IconButton>

                <IconButton onClick={() => console.log('open workspace menu')}>
                    <Icon size='16px' name="workspace" color='#FFF'/>
                </IconButton>
            </div>
            <div></div>
        </section>
    )
}
