import { HighlightsPreview } from '../cmps/HighlightPreview'

export const HighlightsList = ({ highlights }) => {
    if (!highlights) return <div></div>
    return (
        <section className="highlight-list">
            {highlights.map(highlight => <HighlightsPreview highlight={highlight} key={highlight.title} />)}
        </section>
    )
}