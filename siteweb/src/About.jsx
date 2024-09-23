import React from 'react'

 function About() {
  return (
    <div>
    <img 
        src="path_to_your_photo.jpg" 
        alt="Photo de moi" 
        style={{ 
            width: '150px', 
            height: '150px', 
            borderRadius: '50%' 
        }} 
    />
    <p>
        Je suis un développeur web autodidacte et en formation chez Studi, travaillant dans le secteur du bâtiment. 
        Je vois l'importance et la différence d'avoir un site web.
    </p>
    </div>
  )
}
export default About;
