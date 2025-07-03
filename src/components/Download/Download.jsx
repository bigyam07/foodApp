import './Download.css'
import { assets } from '../../assets/frontend_assets/assets'
const Download = () => {
    return (
        <div className='download-content-container' id="mobile-app">
            <div className="download-content-section">
                <h1>For better Experience Download The App</h1>
                <div className="download-images">
                    <a href='https://play.google.com/store/games?hl=en&pli=1' target='_blank'><img src={assets.play_store} alt='' /></a>
                    <a href="https://www.apple.com/app-store/" target='_blank'><img src={assets.app_store} alt='' /></a>
                </div>
            </div>
        </div>
    )
}

export default Download