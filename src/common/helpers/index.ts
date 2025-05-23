import { addMinutes, format, getTime, parseISO, toDate } from 'date-fns'
import { formatInTimeZone, getTimezoneOffset } from 'date-fns-tz'

import { siteMetadata } from '@/contents/siteMetadata'

import { ChapterGroupProps, MdxFileContentProps } from '../types/learn'

interface ParsedUrlProps {
  parentSlug: string
  contentSlug: string
}

export const formatBlogSlug = (slug: string) => slug?.slice(0, -5)

// 模拟旧版本的 utcToZonedTime
export function utcToZonedTime(date: Date | number | string, timeZone: string) {
  const dateString = format(date, "yyyy-MM-dd'T'HH:mm:ss.SSS'Z'")
  return toDate(formatInTimeZone(dateString, timeZone, "yyyy-MM-dd'T'HH:mm:ss.SSS"))
}

// 模拟旧版本的 zonedTimeToUtc
export function zonedTimeToUtc(date: Date | number | string, timeZone: string) {
  const dateObj = date instanceof Date ? date : new Date(date)
  const tzOffset = getTimezoneOffset(timeZone, dateObj)
  return addMinutes(dateObj, -tzOffset)
}

export const formatDate = (date: string, type = 'MMMM dd, yyyy') => {
  if (!date) {
    return ''
  }

  const formattedDate = format(utcToZonedTime(parseISO(date), siteMetadata.timeZone), type)
  return formattedDate
}

export const getTimestamp = (date: string) => {
  const [y, m, d] = formatDate(date, 'yyyy MM dd')
    .split(' ')
    .map((i) => Number.parseInt(i))
  return getTime(new Date(y, m, d))
}

export const groupContentByChapter = (contents: MdxFileContentProps[]): Record<string, ChapterGroupProps> => {
  return contents.reduce(
    (acc, content) => {
      const { frontMatter } = content

      const chapter_id = frontMatter.chapter_id ?? 0
      const chapter_title = frontMatter.chapter_title || 'ungrouped'

      if (!acc[chapter_id]) {
        acc[chapter_id] = {
          chapter_id,
          chapter_title,
          contents: [],
        }
      }

      acc[chapter_id].contents.push(content)

      return acc
    },
    {} as Record<string, ChapterGroupProps>,
  )
}

export const parseUrl = (url: string): ParsedUrlProps => {
  const parts = url.split('/')
  return {
    parentSlug: parts[2],
    contentSlug: parts[3],
  }
}

export const removeHtmlTags = (html: string) => {
  if (typeof DOMParser !== 'undefined') {
    const doc = new DOMParser().parseFromString(html, 'text/html')
    return doc.body.textContent || ''
  } else {
    return html
  }
}

export const formatExcerpt = (content: string, maxLength = 100) => {
  const cleanedContent = removeHtmlTags(content)

  if (cleanedContent.length <= maxLength) {
    return cleanedContent
  }

  const trimmed = cleanedContent.substring(0, maxLength).replace(/\s+\S*$/, '')

  return trimmed + (cleanedContent.length > maxLength ? '...' : '')
}

export const calculateReadingTime = (content: string, wordsPerMinute = 5) => {
  const cleanedContent = formatExcerpt(content)
  const readingTimeMinutes = Math.ceil(cleanedContent.split(/\s+/).length / wordsPerMinute)
  return readingTimeMinutes
}
