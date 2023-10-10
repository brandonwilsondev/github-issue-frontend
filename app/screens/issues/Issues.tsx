import { Box } from "@mui/material"
import { useEffect, useState } from "react"
import IssuesHeader from "~components/issues-header"
import ListItem from "~components/list-item"
import { useIssuesQuery } from "./services/issueApi"
import Loader from "~components/loader"

function Issues({
}) {

    const [page, setPage] = useState(1)
    const [issues, setIssues] = useState<any>([])

    const {
        data = [],
        isFetching,
    } = useIssuesQuery({
        page
    })

    const renderListItems
        = issues.map((item: any) => (
            <ListItem
                {...item}
            />
        ))

    const handleScroll
        = () => {

            const scrollTop
                = document
                    .documentElement
                    .scrollTop
            const scrollHeight
                = document
                    .documentElement
                    .scrollHeight
            const clientHeight
                = document
                    .documentElement
                    .clientHeight

            if (
                scrollTop
                + clientHeight
                >= scrollHeight
                && !isFetching
            ) {

                setPage(prev =>
                    prev + 1
                )
            }
        }
    useEffect(() => {

        if (data?.length > 0)
            setIssues((prev: any) =>
            ([
                ...prev,
                ...data,
            ]))

    }, [data])

    useEffect(() => {

        window.addEventListener(
            'scroll',
            handleScroll
        )

        return () =>
            window.removeEventListener(
                'scroll',
                handleScroll
            )

    }, [issues])

    return (
        <Box
            sx={{
                border: '1px solid #30363D',
                width: '80%',
                m: '0 auto',
                my: 5,
                borderRadius: 3,
                overflow: 'hidden',
            }}
        >
            <IssuesHeader />
            {renderListItems}
            <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                py={3}
            >
                <Loader
                    isLoading={isFetching}
                />
            </Box>
        </Box>
    )
}

export default Issues