// import { Fragment } from "react"
// import { ThinDecoration } from "./ThinDecoration"
import { BoldDecoration } from "./BoldDecoration"
import { StripesDecoration } from "./StripesDecoration"

export const Family = () => {
    return (
        <div className="family-container">
            <BoldDecoration />
            <section className="family flex space-between main-layout">
                <div className="stripes-decor-container">
                    <StripesDecoration />
                    <img src={require(`./../assets/img/homepage/family-gathering-desktop.jpg`).default} alt="" />
                </div>
                <div className="txt-info flex">
                    <div>
                        <h2>Family Gathering</h2>
                        <p>We love catering for entire families. So please bring everyone along for a special meal with your loved ones. We’ll provide a memorable experience for all.</p>
                        <button>Book a table</button>
                    </div>
                    <ul className="flex">
                        <li className="active">Family gathering</li>
                        <li>special events</li>
                        <li>social events</li>
                    </ul>
                </div>
            </section>
        </div>

    )
}