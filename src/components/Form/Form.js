import React from "react";


const Form = () => {
  const initialForm = {
    login: "david",
    password: "toto",
    language: "en",
    newsletter: false
  }
  const [form, setform] = React.useState(initialForm)
  
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(form)
    setform(initialForm)
  }

  const handleChange = (event) => {
    const value = event.target.type === "checkbox" ? event.target.checked : event.target.value
    const name = event.target.name
    setform({ ...form, [name]: value })
  }

  return <>
    <h1>S'inscrire</h1>
    <form onSubmit={handleSubmit}>
      <div>
        <input type="text" placeholder="login" name="login" value={form.login} onChange={handleChange} />
      </div>
      <div>
        <input type="password" placeholder="password" name="password" value={form.password} onChange={handleChange} />
      </div>
      <div>Langue :
        <select name="language" value={form.language} onChange={handleChange} >
          <option value="fr">Français</option>
          <option value="en">English</option>
          <option value="it">Italiano</option>
          <option value="es">Spanish</option>
        </select>
      </div>
      <div>S'inscrire à la newsletter :
        <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
      </div>
      <div><button>Valider</button></div>
    </form >
  </>;
};


export default Form;
