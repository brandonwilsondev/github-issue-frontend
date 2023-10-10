import { Box, Typography } from '@mui/material';
import moment from 'moment';
import FilterTiltShiftIcon from '@mui/icons-material/FilterTiltShift';
import ChatIcon from '@mui/icons-material/Chat';

function ListItem({
    comments,
    state,
    user,
    title,
    number,
    updated_at,
}: any) {

    let agoTime
        = moment(updated_at).fromNow(true)

    if (!agoTime.includes('ago'))
        agoTime = agoTime + ' ago'

    return (
        <Box
            sx={{
                borderBottom: '1px solid #30363D',
                px: 5,
                py: 1,
                position: 'relative'
            }}
        >
            <Typography
                sx={{
                    color: '#E6EDF3',
                }}
            >
                {title}
            </Typography>
            <Typography
                variant='subtitle2'
                sx={{
                    color: '#7C8590'
                }}
            >
                {`#${number} ${state}ed ${agoTime} by ${user?.login}`}
            </Typography>
            <FilterTiltShiftIcon
                sx={{
                    color: '#3FBA50',
                    position: 'absolute',
                    top: 10,
                    left: 10,
                    fontSize: 20,
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    top: 10,
                    right: 10,
                    display: 'flex',
                }}
            >
                <ChatIcon
                    sx={{
                        color: '#7C8590',
                        fontSize: 20,
                        mt: 0.2,
                    }}
                />
                <Typography
                    sx={{
                        color: '#7C8590',
                        fontSize: 14,
                        ml: 0.5,
                    }}
                >
                    {comments}
                </Typography>
            </Box>
        </Box>
    )
}

export default ListItem