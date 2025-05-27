import { useRef, useState } from 'react'
import emailjs from '@emailjs/browser'
import { ToastContainer, toast } from 'react-toastify'

const Contact = () => {

    const formRef = useRef()
    const [loading, setLoading] = useState(false)
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    })

    const handleChange = ({ target: { name, value } }) => {
        setForm({ ...form, [name]: value })
    }


    const handleSubmit = async (e) => {
        e.preventDefault();  //Prevent re-loading of browser

        setLoading(true);

        try {
            await emailjs.send('service_7drcjio', 'template_h3pntls', {
                from_name: form.name,
                to_name: 'Mit',
                from_email: form.email,
                to_email: 'mit4sheth@gmail.com',
                message: form.message
            }, 'TJycEliFKstcou3PC')

            setLoading(false)
            toast('Your message has been sent!', { theme: "dark" })
        } catch (error) {
            setLoading(false)
            console.error(error)
            toast.error('Something went wrong!', { theme: "dark" })
        }

        setTimeout(() => {
            setForm({
                name: '',
                email: '',
                message: ''
            })
        }, 5000);

    }



    return (
        <section className='c-space my-20' id='contact'>
            <div className='relative min-h-screen  flex items-center justify-center flex-col'>
                <img src="/assets/terminal.png" alt="terminal background" className='absolute inset-0 min-h-screen' />
                <div className='contact-container'>
                    <h3 className='head-text sm:mt-6 mt-3'>Let&apos;s Talk</h3>
                    <p className='text-lg text-white-600 sm:mt-10'>Whether you&apos;re looking to build a new website, improve your existing platform, or bring a unique project to life, I&apos;m here to help.</p>
                    <form ref={formRef} onSubmit={handleSubmit} className='mt-12 flex flex-col space-y-7'>
                        <label className='space-y-3'>
                            <span className='field-label'>Full Name</span>
                            <input type="text"
                                name="name"
                                value={form.name}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='Enter your full name'
                                autoComplete='on'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Email</span>
                            <input type="email"
                                name="email"
                                value={form.email}
                                onChange={handleChange}
                                required
                                className='field-input'
                                placeholder='you@example.com'
                                autoComplete='on'
                            />
                        </label>
                        <label className='space-y-3'>
                            <span className='field-label'>Your message</span>
                            <textarea
                                name="message"
                                value={form.message}
                                onChange={handleChange}
                                required
                                rows={5}
                                className='field-input'
                                placeholder="Hi, I want to give you a job ..."
                                autoComplete='on'
                            />
                        </label>
                        <button className='field-btn' type="submit" disabled={loading}>
                            {loading ? 'Sending...' : 'Send Message'}
                            <img src="/assets/arrow-up.png" alt="arrow-up" className='field-btn_arrow' />
                        </button>
                        <ToastContainer theme='dark' />
                    </form>
                </div>
            </div>
        </section>
    )
}

export default Contact
