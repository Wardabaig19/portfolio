import React, { useRef, useState } from 'react';
import '../assets/styles/Contact.scss';
import emailjs from '@emailjs/browser';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import TextField from '@mui/material/TextField';

function Contact() {

  const [name, setName] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  const [nameError, setNameError] = useState<boolean>(false);
  const [emailError, setEmailError] = useState<boolean>(false);
  const [messageError, setMessageError] = useState<boolean>(false);

  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e: any) => {
    e.preventDefault();

    setNameError(name === '');
    setEmailError(email === '');
    setMessageError(message === '');

    /* Uncomment below if you want to enable the emailJS */

     if (name !== '' && email !== '' && message !== '') {
       var templateParams = {
         name: name,
         email: email,
         message: message
       };

       console.log(templateParams);
        emailjs.send('service_auo7igj', 'template_jz82ikb', templateParams, '2sCrWIJMDActyBHLc').then(
          (response) => {
            console.log('SUCCESS!', response.status, response.text);
          },
          (error) => {
            console.log('FAILED...', error);
          },
       );
       setName('');
       setEmail('');
       setMessage('');
     }
  };

  return (
    <div id="contact">
      <div className="items-container">
        <div className="contact_wrapper">
          <h1>Contact Me</h1>
          <p>Got a project waiting to be realized? Let's collaborate and make it happen!</p>
          <form
            ref={form}
            onSubmit={sendEmail}
            className='contact-form'
            style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginTop: '20px' }}
          >
            <div className='form-flex' style={{ display: 'flex', gap: '16px' }}>
              <div style={{ flex: 1 }}>
                <input
                  required
                  type="text"
                  placeholder="Your Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '4px',
                    border: nameError ? '2px solid #d32f2f' : '1px solid #c4c4c4',
                    color: 'black',
                    backgroundColor: 'white',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
                {nameError && <span style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>Please enter your name</span>}
              </div>

              <div style={{ flex: 1 }}>
                <input
                  required
                  type="text"
                  placeholder="Email / Phone"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '16px',
                    borderRadius: '4px',
                    border: emailError ? '2px solid #d32f2f' : '1px solid #c4c4c4',
                    color: 'black',
                    backgroundColor: 'white',
                    fontSize: '1rem',
                    fontFamily: 'inherit'
                  }}
                />
                {emailError && <span style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>Please enter your email or phone number</span>}
              </div>
            </div>

            <div>
              <textarea
                required
                placeholder="Message: Send me any inquiries or questions"
                rows={10}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                style={{
                  width: '100%',
                  padding: '16px',
                  borderRadius: '4px',
                  border: messageError ? '2px solid #d32f2f' : '1px solid #c4c4c4',
                  color: 'black',
                  backgroundColor: 'white',
                  fontSize: '1rem',
                  fontFamily: 'inherit',
                  resize: 'vertical'
                }}
              />
              {messageError && <span style={{ color: '#d32f2f', fontSize: '0.75rem', marginTop: '4px', display: 'block' }}>Please enter the message</span>}
            </div>

            <Button type="submit" variant="contained" endIcon={<SendIcon />} style={{ alignSelf: 'flex-start' }}>
              Send
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Contact;