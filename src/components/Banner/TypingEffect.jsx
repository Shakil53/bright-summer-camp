
import ReactTypingEffect from 'react-typing-effect';


const TypingEffect = () => {
    return (
        <>
            {/* A Summer of Learning and Light.Where Knowledge Shines Bright */}




            <ReactTypingEffect
                text={["Where Knowledge Shines Bright.."]}
                cursorRenderer={cursor => <h1>{cursor}</h1>}
                displayTextRenderer={(text, i) => {
                    return (
                        <p>
                            {text.split('').map((char, i) => {
                                const key = `${i}`;
                                return (
                                    <span
                                        key={key}
                                        style={{ color: '[#F5F5F5]' }}
                                    >{char}</span>
                                );
                            })}
                        </p>
                    );
                }}
            />


        </>
    );
};

export default TypingEffect;