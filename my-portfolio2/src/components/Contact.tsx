function Contact(){
    return (
        <section id="contact" className="bg-purple-300 text-black text-center py-10">
      <h2 className="text-3xl font-bold mb-4">Contact Me</h2>
      <p className="text-lg">Feel free to reach out to me for collaborations or questions.</p>
      <form className="mt-0">
        <input
          type="email"
          placeholder="Your Email"
          className="p-3 rounded-lg w-64 mt-4"
        />
        <div> 
        <textarea
          placeholder="Your Message"
          className="p-3 rounded-lg w-64 mt-4"
        ></textarea>
        </div>
        <button type="submit" className="bg-white text-blue-600 p-3 rounded-lg mt-4">Send Message</button>
      </form>
    </section>
    )
    }
    export default Contact;