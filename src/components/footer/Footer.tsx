import './Footer.css';

function Footer() {
  return (
    <footer className="footer">
        <div className="container">
            <div className="footer__container">
                <ul className="footer__links">
                    <li><a href="#">Contact us</a></li>
                    <li><a href="#">Terms & Conditions</a></li>
                    <li><a href="#">Privacy</a></li>
                </ul>
                <div className="footer__copyright">
                    ©2017-2022 Lingua.com. All Rights Reserved.
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer