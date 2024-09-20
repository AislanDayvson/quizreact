import React from 'react'

const Radio = ({pergunta, options, id, onChange, value, active}) => {

  if(active === false) return null
  return (
    <fieldset style={{padding: "2rem", marginBottom: "1rem", border: "2px solid #eee"}}>
        <legend style={{fontWeight: "bold"}}>{pergunta}</legend>
        {options.map((opt) => (
            <label key={opt} style={{marginBottom: "1rem", fontFamily: "monospace"}}>
                <input id={id} type='radio' value={opt} checked={value === opt} onChange={onChange}/>{opt}
            </label>
        ))}
    </fieldset>
  )
}

export default Radio