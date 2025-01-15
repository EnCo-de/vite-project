import marker from '/images/marker.png'

export default function Entry({image, url, country, title, dates, info}) {
    return (
        <article className="journal-entry">
            <div className="main-image-container">
                <img 
                    className="main-image"
                    src={image?.src}
                    alt={image?.alt}
                />
            </div>
            <div className="info-container">
                <img 
                    className="marker"
                    src={marker}
                    alt="map marker icon"
                />
                <span className="country">{country}</span>
                <a href={url}>View on Google Maps</a>
                <h2 className="entry-title">{title}</h2>
                <p className="trip-dates">{dates}</p>
                <p className="entry-text">{info}</p>
            </div>
            
        </article>

    )
}