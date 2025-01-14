'use client'

import { CacheProvider } from '@chakra-ui/next-js'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export function ChakraProviders({
  children
}: {
  children: React.ReactNode
}) {

  const theme = extendTheme({
    fonts: {
      heading: '"Avenir Next", sans-serif',
      body: '"Open Sans", sans-serif',
    },
    colors: {
    },
    components: {
      Button: {
        defaultProps: {
          size: 'md',
          variant: 'solid',
          colorScheme: 'purple'
        },
      },
      Tabs: {
        defaultProps: {
          colorScheme: 'purple'
        }
      },
      Badge: {
        defaultProps: {
          colorScheme: 'purple'
        }
      },
      IconButton: {
        defaultProps: {
          colorScheme: 'purple'
        }
      },
      Avatar: {
        parts: ["container"],
        baseStyle: {
          container: {
            bg: 'purple.500',
            color: 'white'
          }
        }
      },
      Input: {
        defaultProps: {
          focusBorderColor: 'purple.500',
        },
      }
    },
  })

  return (
    <CacheProvider>
      <ChakraProvider theme={theme}>
        {children}
      </ChakraProvider>
    </CacheProvider>
  )
}