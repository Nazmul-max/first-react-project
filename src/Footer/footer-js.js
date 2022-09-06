import './footer-css.css';
function Footer() {
    return (
            <footer className='container footer'>
                <section classname="ft-main">
                    <div classname="ft-main-item">
                        <h2 classname="ft-title">About</h2>
                        <ul>
                            <li><a href="#">Services</a></li>
                            <li><a href="#">Portfolio</a></li>
                            <li><a href="#">Pricing</a></li>
                            <li><a href="#">Customers</a></li>
                            <li><a href="#">Careers</a></li>
                        </ul>
                    </div>
                    <div classname="ft-main-item">
                        <h2 classname="ft-title">Resources</h2>
                        <ul>
                            <li><a href="#">Docs</a></li>
                            <li><a href="#">Blog</a></li>
                            <li><a href="#">eBooks</a></li>
                            <li><a href="#">Webinars</a></li>
                        </ul>
                    </div>
                    <div classname="ft-main-item">
                        <h2 classname="ft-title">Contact</h2>
                        <ul>
                            <li><a href="#">Help</a></li>
                            <li><a href="#">Sales</a></li>
                            <li><a href="#">Advertise</a></li>
                        </ul>
                    </div>
                    <div classname="ft-main-item">
                        <h2 classname="ft-title">Stay Updated</h2>
                        <p>Get free updates before others do!</p>
                        <form>
                            <input type="email" name="email" placeholder="Enter email address"/>
                            <input type="submit" value="Subscribe"/>
                        </form>
                    </div>
                        </section>

                        <section classname="ft-social">
                            <ul classname="ft-social-list">
                                <li><a href="#"><i classname="fab fa-facebook"></i></a></li>
                                <li><a href="#"><i classname="fab fa-twitter"></i></a></li>
                                <li><a href="#"><i classname="fab fa-instagram"></i></a></li>
                                <li><a href="#"><i classname="fab fa-github"></i></a></li>
                                <li><a href="#"><i classname="fab fa-linkedin"></i></a></li>
                                <li><a href="#"><i classname="fab fa-youtube"></i></a></li>
                            </ul>
                        </section>

                        <section classname="ft-legal">
                            <ul classname="ft-legal-list">
                                <li><a href="#">Terms &amp; Conditions</a></li>
                                <li><a href="#">Privacy Policy</a></li>
                                <li>&copy; 2022 by Nazmul Hossen</li>
                            </ul>
                        </section>
                    </footer>
                );
}

export default Footer;
