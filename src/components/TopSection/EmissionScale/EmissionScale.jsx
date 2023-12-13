import './EmissionScale.css'

const EmissionScale = () => {
    return (
        <>
        <div>
        <p className="info-text">Drag the Bottom Cards to Top Board and Order from Lowest to Highest Emission</p>
            <div className="scale">
                <div className="arrow left"></div>
                <div className="horizontal-line"></div>
                <div className="arrow right"></div>
            </div>
            </div>
        </>
    )
}

export default EmissionScale;