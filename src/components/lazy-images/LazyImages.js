import React, {useEffect, useState} from 'react'
import PropTypes from 'prop-types'

import placeholder from '../../assets/lazy_loader.gif'

const LazyImages = (props) => {
    const {src, alt, children, className } = props;
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [imageRef, setImageRef] = useState();

    useEffect(() => {
        let observer;
        let didCancel = false;
        
        if(imageRef && imageSrc !== src){
            if(IntersectionObserver){
                observer = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        console.log("here-0")
                        if(!didCancel &&  (entry.intersectionRatio > 0 || entry.isIntersecting)){
                            setImageSrc(src);
                            console.log("here-1")
                            observer.unobserve(imageRef)
                        }
                    });
                }, {
                    threshold: 0.01,
                    rootMargin: '75%'
                });
                observer.observe(imageRef)
            }else{
                setImageSrc(src)
            }
        }

        return () => {
            didCancel = true;
            if(observer && observer.unobserve){
                observer.unobserve(imageRef)
            }
        };
    }, [src, imageSrc, imageRef])
    return (
        <>
            <div 
                className={className} 
                ref={setImageRef} 
                style={{backgroundImage: `url(${imageSrc})`}}
                alt={alt}
            >
            {children}
            </div>
        </>
    )
}

LazyImages.propTypes = {
    src: PropTypes.string,
    alt: PropTypes.string,
    children: PropTypes.any,
    className: PropTypes.string
}

export default LazyImages
