import axios from 'axios'

import { author } from '@/contents/siteMetadata'

const GITHUB_ACCOUNTS = author.github_accounts
const GITHUB_USER_ENDPOINT = 'https://api.github.com/graphql'

const GITHUB_USER_QUERY = `query($username: String!) {
  user(login: $username) {
    contributionsCollection {
      contributionCalendar {
        colors
        totalContributions
        months {
          firstDay
          name
          totalWeeks
        }
        weeks {
          contributionDays {
            color
            contributionCount
            date
          }
          firstDay
        }
      }
    }
  }
}`

export const fetchGithubData = async (username: string, token: string | undefined) => {
  const response = await axios.post(
    GITHUB_USER_ENDPOINT,
    {
      query: GITHUB_USER_QUERY,
      variables: {
        username: username,
      },
    },
    {
      headers: {
        Authorization: `bearer ${token}`,
      },
      proxy: false,
    },
  )

  const status: number = response.status
  const responseJson = response.data

  if (status > 400) {
    return { status, data: {} }
  }

  return { status, data: responseJson.data.user }
}

export const getGithubUser = async (type: string) => {
  const account = GITHUB_ACCOUNTS.find((account) => account?.type === type && account?.is_active)

  if (!account) {
    throw new Error('Invalid user type')
  }

  const { username, token } = account
  return await fetchGithubData(username, token)
}
