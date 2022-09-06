import './contact-css.css';

function Contact(){
    return(
        <div className='container pt-5'>
            <h1 className='text-center pb-3'>Contact Me!</h1>
           <div className="inner contact">
                <div className="contact-form">
                    
                    <form id="contact-us" method="post" action="">
                     
                        <div className="wow animated slideInLeft" data-wow-delay=".5s">
                         
                            <input type="text" name="name" id="name" required="required" className="form" placeholder="Name" />
                          
                            <input type="email" name="mail" id="mail" required="required" className="form" placeholder="Email" />
                           
                            <input type="text" name="subject" id="subject" required="required" className="form" placeholder="Subject" />
                        </div>
                        
                        <div className="wow animated slideInRight" data-wow-delay=".5s">
                           
                            <textarea name="message" id="message" className="form textarea"  placeholder="Message"></textarea>
                        </div>
                    
                        <div className="relative fullwidth col-xs-12">
                            <button type="submit" id="submit" name="submit" className="form-btn semibold">Send Message</button> 
                        </div>
                    </form>
                </div>
            </div>

            <center> Visit Developer's Website <a href="https://github.com/Nazmul-max" target="blank">Nazmul Hossen</a> </center>
        </div>
    );
}
export default Contact;