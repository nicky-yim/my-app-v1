import React from 'react'

import Layout from '../components/layout'

const Contact = () => {
    return (
        <Layout>
            <div>
                <form name="contact" method="POST">
                    <p>
                        <label>Your Name: <input type="text" name="name" /></label>   
                    </p>
                    <p>
                        <label>Your Email: <input type="email" name="email" /></label>
                    </p>
                    <p>
                        <label>Message: <textarea name="message"></textarea></label>
                    </p>
                    <p>
                        <button type="submit">Send</button>
                    </p>
                </form>
            </div>
        </Layout>
    )
}

export default Contact
