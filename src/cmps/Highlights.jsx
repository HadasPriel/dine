import { HighlightsList } from "./HighlightsList"
import { ThinDecoration } from "./ThinDecoration"

export const Highlights = ({ highlights }) => {
    return (
        <section className="highlights dark ">
            <div className="highlights-content main-layout flex space-between">
                <div className="txt-info">
                    <ThinDecoration />
                    <h2>A few highlights from our menu</h2>
                    <p>We cater for all dietary requirements, but here’s a glimpse at some of our diner’s favourites. Our menu is revamped every season.</p>
                </div>
                <HighlightsList highlights={highlights} />
            </div>
        </section>
    )
}