import React from 'react'
import styles from "./ContactForm.module.css"
import Button from '../Button/Button'

function ContactForm() {
  return (
    <section className={styles.container}>
      <div className={styles.contact_form}>
        <Button />
      </div>
      <div className={styles.contact_image}>
        <img src="/Images/Service 24_7-pana 1.svg" alt="" />
      </div>
    </section>
  )
}

export default ContactForm
