import {
    CircularProgress
} from '@mui/material';

type LoaderType = {
    isLoading: boolean
}

function Loader({
    isLoading,
}: LoaderType) {

    return (
        <>
            {isLoading &&
                <CircularProgress
                    sx={{
                        color: '#7C8590',
                    }}
                />
            }
        </>
    )
}

export default Loader