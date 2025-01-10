import marker from '/images/marker.png'

export default function Entry() {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src="https://www.quebec-cite.com/sites/otq/files/styles/landscape_wide_desktop/public/media/image/Old-Quebec.jpg"
                    alt=""
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker}
                    alt="map marker icon"
                />
                <span className="country">country</span>
                <a href="#" target="_blank">View on Google Maps</a>
                <h2 className="entry-title">entry-title</h2>
                <p className="trip-dates">trip-dates</p>
                <p className="entry-text">info text</p>
            </div>
            
        </article>

    )
}