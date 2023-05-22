import { forwardRef, useState } from "react";
import classNames from "classnames";
import images from "~/assets/images";
import styles from "./Image.module.scss";

const Image = forwardRef(({ src, alt, className, fallback: customFallback = images.noImage, ...props }, ref) => {
    const [fallback, setFallback] = useState('');
    const hadnleError = () => {
        setFallback(customFallback);
    };

    return (
        <img className={classNames(styles.wrapper, className)} ref={ref} src={fallback || src} alt={alt} {...props} onError={hadnleError} />
    );
});

export default Image;