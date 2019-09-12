import React, { useState } from 'react';
import cs from './styles';

const ProcessListForm = ({
    initRut = "",
    initFistName = "",
    initLastName = "",
    onProcessItem,
    buttonText,
    loading
}) => {
    const [rut, setRut] = useState(initRut);
    const [firstName, setFirstName] = useState(initFistName);
    const [lastName, setLastName] = useState(initLastName);

    return (
        <div className={cs.form}>
            <input
                type="text"
                placeholder="Rut"
                value={rut}
                className={cs.input}
                onChange={e => setRut(e.currentTarget.value)}
            />
            <input
                type="text"
                placeholder="Nombres"
                value={firstName}
                className={cs.input}
                onChange={e => setFirstName(e.currentTarget.value)}
            />

            <input
                type="text"
                placeholder="Apellidos"
                value={lastName}
                className={cs.input}
                onChange={e => setLastName(e.currentTarget.value)}
            />
            {loading ? (
                "...Loading"
            ) : (
                <button
                    onClick={() => onProcessItem({rut, firstName, lastName})}
                    className={cs.button}
                >
                    {buttonText}
                </button>
            )}
        </div>
    );
};

export default ProcessListForm;