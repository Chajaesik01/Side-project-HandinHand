import styled from 'styled-components'
import type {
  ContentBoxProps,
  MovieImageBoxProps,
  PosterBoxContainerProps
} from '@/types/components'

export const PosterBoxContainer = styled.div<PosterBoxContainerProps>`
  width: ${props => (props.$flex ? '70%' : '212px')};
  display: ${props => (props.$flex ? 'flex' : 'inline-block')};
  cursor: ${props => (props.$pointer ? 'pointer' : 'default')};
`
export const MovieImageBox = styled.img<MovieImageBoxProps>`
  width: ${props => (props.$flex ? '150px' : '212px')};
  height: ${props => (props.$flex ? '240px' : '318px')};
  border-radius: var(--border-radius-small);
  transition: transform 0.3s ease;
  ${PosterBoxContainer}:hover & {
    transform: scale(1.05);
  }
`

export const ContentBox = styled.div<ContentBoxProps>`
  ${props => (props.$flex ? 'align-self: center' : '')};
  ${props => (props.$flex ? 'margin-left: var(--space-medium)' : '')};
`
export const ContentTitle = styled.div`
  font-size: var(--font-medium);
  border-radius: var(--border-radius-small);
  margin-top: var(--space-medium);
  width: 100%;
  text-overflow: ellipsis;
  overflow: hidden;
  white-space: nowrap;
`
export const ContentDescription = styled.div`
  font-size: var(--font-small);
  color: var(--color-text-gray);
  border-radius: var(--border-radius-small);
  margin: var(--space-medium) 0;
`
