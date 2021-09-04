import { useState } from 'react';
import '../styles/App.css';

function ItemList(props) {

    const [showInput, setShowInput] = useState(false);
    const [nameEdit,setNameEdit] = useState("");

    return(
            <div className="itemList">
                { !showInput ? (
                    <>
                    <div className="itemTextContainer" >
                        <p className="textApp">{props.name}</p>
                    </div>
                    </>
                    ) : (
                        <>
                        <div className="itemTextContainer" >
                            <input 
                                className="inputItemEdit"
                                name="nome"
                                type="text"
                                value={nameEdit}
                                placeholder={props.name}
                                onChange={(e) => setNameEdit(e.target.value)}
                            />
                        </div>

                        <div className="removeItemContainer">
                            <button className="button" onClick={() =>{ 
                                props.handleEdit(props.id,(nameEdit.length > 0 ? nameEdit : props.name )); 
                                setShowInput(false);
                                setNameEdit("");
                                }}>
                                salvar
                            </button>
                        </div>
                        </>
                    )
                }
                
                <div className="removeItemContainer">
                    <button className="buttonEdit" onClick={() => setShowInput(!showInput)}>
                        {!showInput ? "editar" : "cancelar"}
                    </button>
                </div>
                <div className="removeItemContainer">
                    <button className="buttonRemove" onClick={() => props.handleDelete(props.id)}>
                        X
                    </button>
                </div>
            </div>
        
    );
}

export default ItemList;