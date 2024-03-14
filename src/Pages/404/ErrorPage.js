import React from 'react';

let ErrorBg = 'https://d2s80gmgq3vhu4.cloudfront.netHomeSlideImages/assets/Images/ErrorBg.png';

const ErrorPage = () => {

    const background = {
        backgroundImage: `url(${ErrorBg})`
    }

    return (
        <div className='ep-contianer page-noice-bg'>
            <div className='u-banner-container'>
                <div style={background} className='u-banner-bg-contianer'>
                    <div className='u-banner-bottom-div'>
                        <h1 className='medium-heading u-banner-heading'>Something’s amiss</h1>
                        <a href='/' className='small-text u-banner-small-text'>Click here to find home.</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage