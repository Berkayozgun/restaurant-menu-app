import React from 'react';


function Contact() {
  return (
    <div>

      <div className="contact-header"> Bize Ulaşın </div>

      <div className="contact-content">
      
      <div className="phone-number">Telefon : +90 284 000 00 00 </div>

      <div className="adress">Adres : Abdurrahman, Atatürk Blv NO:999, 22100 Edirne Merkez/Edirne
      </div>
      
      <div className="map-link">
      <a href="https://www.google.com/maps/@41.6339576,26.624081,19z">
      <button>Haritada göster </button>
      </a>
      </div>

      <div className="email-adress">E-posta adresimiz : restaurant@mail.com</div>
      
      <div className="send-email">
      <a href="mailto:someone@example.com">
        <button>
          E-posta gönder
          </button></a>  
      </div>

      </div>
          
    </div>
  )
}

export default Contact;