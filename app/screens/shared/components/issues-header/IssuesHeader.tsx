import {
    Box,
    Typography
} from "@mui/material"

function IssuesHeader({
}) {

    return (
        <Box>
            <Typography
                variant="h5"
                sx={{
                    borderBottom: '1px solid #30363D',
                    color: '#7C8590',
                    px: 2,
                    py: 1,
                }}
            >
                Github Issues
            </Typography>
        </Box>
    )
}

export default IssuesHeader