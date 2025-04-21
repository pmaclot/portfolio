import React, { memo } from 'react';

// Externals
import { StaticImage } from 'gatsby-plugin-image';
import { Badge, Box, Button, Flex } from 'theme-ui';

interface ScreenProps {
  screenZoomed: boolean;
  toggleScreenZoomed: () => void;
}

const Screen: React.FC<ScreenProps> = ({ screenZoomed, toggleScreenZoomed }) => {
  return (
    <Flex
      sx={{
        alignItems: 'center',
        flexDirection: 'column',
        justifyContent: 'space-evenly',
        pointerEvents: screenZoomed ? 'auto' : 'none',
        height: '100%',
        width: '100%'
      }}
    >
      <Box sx={{ my: 4 }}>
        {getComputedStyle(document.documentElement).getPropertyValue('--theme-ui-colors-text') === '#000' && (
          <StaticImage
            alt="Logo"
            layout="constrained"
            loading="eager"
            placeholder="blurred"
            src="../images/dark_logo.png"
            width={120}
          />
        )}
        {getComputedStyle(document.documentElement).getPropertyValue('--theme-ui-colors-text') === '#fff' && (
          <StaticImage
            alt="Logo"
            layout="constrained"
            loading="eager"
            placeholder="blurred"
            src="../images/light_logo.png"
            width={120}
          />
        )}
      </Box>
      <Flex
        sx={{
          flexDirection: 'column',
          overflowY: 'scroll',
          '::-webkit-scrollbar': {
            WebkitAppearance: 'none'
          },
          '::-webkit-scrollbar-thumb': {
            backgroundColor: 'var(--theme-ui-colors-accent)'
          }
        }}
      >
        {/* TODO: Avanade */}
        <Flex
          sx={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: ['none', 'none', 'block'],
              flex: '0 1 350px',
              mr: 3
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', m: 0, textAlign: 'right' }}>
              November 2023 &ndash; Present
            </Box>
          </Box>
          <Box
            sx={{
              flex: '0 1 400px'
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', display: ['block', 'block', 'none'], m: 0 }}>
              November 2023 &ndash; Present
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-primary)', m: 0 }}>
              Consultant &bull; Avanade
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-secondary)', mb: 2, mt: 1 }}>
              TODO: Change description.
            </Box>
            <Flex sx={{ flexWrap: 'wrap', mb: 3, '& > div': { mb: 1, mr: 1 } }}>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Azure
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                DevOps
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                ASP.NET
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                ASP.NET Core
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                MySql
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Node.js
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                React
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                React Native
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Razor Pages
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                SignalR
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Sql Server
              </Badge>
            </Flex>
          </Box>
        </Flex>
        {/* Revomon DMCC */}
        <Flex
          sx={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: ['none', 'none', 'block'],
              flex: '0 1 350px',
              mr: 3
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', m: 0, textAlign: 'right' }}>
              August 2021 &ndash; August 2023
            </Box>
          </Box>
          <Box
            sx={{
              flex: '0 1 400px'
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', display: ['block', 'block', 'none'], m: 0 }}>
              August 2021 &ndash; August 2023
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-primary)', m: 0 }}>
              Lead Developer &bull; Revomon
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-secondary)', mb: 2, mt: 1 }}>
              In charge of developing and coordinating the development of server infrastructure, databases, web
              applications and their interaction with smart contracts.
            </Box>
            <Flex sx={{ flexWrap: 'wrap', mb: 3, '& > div': { mb: 1, mr: 1 } }}>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Azure
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                AWS
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Confluence
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Jira
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                ASP.NET Core
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Firebase
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Gatsby
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                GitHub Actions
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                MySql
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Node.js
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                React
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Redux
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Three.js
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Unity
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Web3.js
              </Badge>
            </Flex>
          </Box>
        </Flex>
        {/* Sparkle SRL */}
        <Flex
          sx={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: ['none', 'none', 'block'],
              flex: '0 1 350px',
              mr: 3
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', m: 0, textAlign: 'right' }}>
              June 2018 &ndash; March 2023
            </Box>
          </Box>
          <Box
            sx={{
              flex: '0 1 400px'
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', display: ['block', 'block', 'none'], m: 0 }}>
              June 2018 &ndash; March 2023
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-primary)', m: 0 }}>
              Full Stack Developer &bull; Sparkle SRL
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-secondary)', mb: 2, mt: 1 }}>
              In charge of developing web and mobile solutions for startups that don't have the necessary development
              teams to get them off the ground.
            </Box>
            <Flex sx={{ flexWrap: 'wrap', mb: 3, '& > div': { mb: 1, mr: 1 } }}>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Azure
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                DevOps
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                ASP.NET
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                ASP.NET Core
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Expo
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Firebase
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                MongoDB
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                MySql
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Next.js
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Node.js
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                React
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                React Native
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Razor Pages
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                SignalR
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Sql Server
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Stripe
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Xamarin
              </Badge>
            </Flex>
          </Box>
        </Flex>
        {/* Microsoft Innovation Center Belgium */}
        <Flex
          sx={{
            alignItems: 'flex-start',
            flexDirection: 'row',
            justifyContent: 'center'
          }}
        >
          <Box
            sx={{
              display: ['none', 'none', 'block'],
              flex: '0 1 350px',
              mr: 3
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', m: 0, textAlign: 'right' }}>
              February 2018 &ndash; June 2018
            </Box>
          </Box>
          <Box
            sx={{
              flex: '0 1 400px'
            }}
          >
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-highlight)', display: ['block', 'block', 'none'], m: 0 }}>
              February 2018 &ndash; June 2018
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-primary)', m: 0 }}>
              Full Stack Developer &bull; Microsoft Innovation Center Belgium (Internship)
            </Box>
            <Box as="p" sx={{ color: 'var(--theme-ui-colors-secondary)', mb: 2, mt: 1 }}>
              In charge of developing a website aimed at offering paid challenges to students by companies.
            </Box>
            <Flex sx={{ flexWrap: 'wrap', mb: 3, '& > div': { mb: 1, mr: 1 } }}>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Azure
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                DevOps
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                ASP.NET Core
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Razor Pages
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                SignalR
              </Badge>
              <Badge
                sx={{
                  color: 'var(--theme-ui-colors-primary)',
                  bg: 'transparent',
                  boxShadow: '0px 0px 0px 1px inset'
                }}
              >
                Sql Server
              </Badge>
            </Flex>
          </Box>
        </Flex>
      </Flex>
      <Button
        onClick={toggleScreenZoomed}
        sx={{
          bg: 'var(--theme-ui-colors-primary)',
          color: 'var(--theme-ui-colors-background)',
          cursor: 'pointer',
          fontFamily: 'inherit',
          fontSize: 'inherit',
          lineHeight: 'inherit',
          my: 4
        }}
      >
        Back
      </Button>
    </Flex>
  );
};

export default memo(Screen);
