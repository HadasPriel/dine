
export const AppFooter = () => {


    return (
        <footer className="app-footer dark">
            <div className="footer-content main-layout flex">
                <img className="logo" src={require(`./../assets/img/logo.svg`).default} alt="" />
                <div className="footer-txt flex">
                    <div className="address">
                        <p>Marthwaite,</p>
                        <p>Sedbergh Cumbria</p>
                        <p>+00 44 123 4567</p>
                    </div>
                    <div className="open-times">
                        <p>Open Times</p>
                        <p>Mon - Fri: 09:00 AM - 10:00 PM</p>
                        <p>Sat - Sun: 09:00 AM - 11:30 PM</p>
                    </div>
                </div>
            </div>
        </footer>
    );
}