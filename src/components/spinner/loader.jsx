import { Vortex } from "react-loader-spinner";
import css from './loader.module.css'

export const Loader = () => {
    return (
        <div className={css.wrapper}>
        <Vortex
                    visible={true}
                    height="80"
                    width="80"
                    ariaLabel="vortex-loading"
                    wrapperStyle={{}}
                    wrapperClass="vortex-wrapper"
                    colors={['blue', 'blue', 'blue','yellow', 'yellow', 'yellow']}
            />
            </div>
    )
}