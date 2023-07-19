import React from 'react';
import { ContainerState, SetContainerState } from '../screens/Login/Login.types';


const useShowToastHideEffect = (getter: ContainerState, setter: SetContainerState) => {
    React.useEffect(() => {
        setTimeout(() => {
            setter({
                ...getter,
                showToast: false,
            });
        }, 500);

    }, [getter.showToast]);
};

export default useShowToastHideEffect;
