import React, { useState } from 'react'
import { useForm, ValidationError } from '@formspree/react';
import { FadeInOnScroll } from '../../components'
import './Contact.css'

const Contact = () => {
    const [state, handleSubmit] = useForm('mdovgawe');


    return (
        <FadeInOnScroll>
            <div className='contact-container'>
                {/* <h1>UNDER CONSTRUCTION</h1> */}

                {
                    state.succeeded ? <h3>Thanks for your message!</h3> :

                        <form className="contact-form" onSubmit={handleSubmit}  >
                            <label htmlFor="email">
                                Email Address:
                            </label>
                            <input
                                className="contact-input"
                                id="email"
                                type="email"
                                name="email"
                            />
                            <ValidationError
                                prefix="Email"
                                field="email"
                                errors={state.errors}
                            />
                            <label htmlFor="message">
                                Message:
                            </label>
                            <textarea
                                className="contact-text"
                                id="message"
                                name="message"
                            />
                            <ValidationError
                                prefix="Message"
                                field="message"
                                errors={state.errors}
                            />
                            <button type="submit" disabled={state.submitting}>
                                Submit
                            </button>
                        </form>
                }

            </div>
        </FadeInOnScroll>
    )
}

export default Contact