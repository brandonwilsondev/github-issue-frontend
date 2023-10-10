import { api } from '~services/index'

export const issueApi = api.injectEndpoints({
    endpoints: (builder) => ({

        issues: builder.query({
            query: ({
                page
            }) => {

                return {
                    url: `/issue/${page}`,
                    method: 'GET',
                }
            },
        }),

    }),
})

export const {
    useIssuesQuery,
} = issueApi