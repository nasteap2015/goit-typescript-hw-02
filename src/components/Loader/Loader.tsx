import { InfinitySpin } from 'react-loader-spinner';

const Loader = () => {
    return (
        <InfinitySpin
            visible={true}
            width="200"
            color="#6495ED"
            ariaLabel="infinity-spin-loading"
        />
    );
};

export default Loader;