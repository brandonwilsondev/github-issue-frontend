import { Box } from "@mui/material"

type MainLayoutType = {
    children?: React.ReactNode
}

function MainLayout({
    children
}: MainLayoutType) {

    return (
        <Box
        >
            {children}
        </Box>
    )
}

export default MainLayout