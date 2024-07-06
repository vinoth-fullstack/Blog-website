export default function Contact(){
    return(
        <div className="container" id="contacts">
        <div className="contact-head">
            <h1>Contact Us</h1>
            <h5>contact of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as
</h5>
        </div>
        <div className="map">
        
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15650.055950156384!2d77.61924415!3d11.297093199999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1716734374329!5m2!1sen!2sin"
                
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Google Map"
            ></iframe>
        </div>
        
        </div>
<div className="contact">
        <div className="form-container">
            <form className="contact-form">
                <input type="text" placeholder="Name" required />
                <input type="text" placeholder="Phone Number" required />
                <input type="email" placeholder="Email" required />
                <textarea placeholder="Massage" required></textarea>
                <button type="submit">SEND</button>
            </form>
        </div>
            
        </div>
        </div>
    )
}