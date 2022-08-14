// ** MUI Imports
import Box from '@mui/material/Box'
import Link from '@mui/material/Link'
import { Theme } from '@mui/material/styles'
import Typography from '@mui/material/Typography'
import useMediaQuery from '@mui/material/useMediaQuery'

const FooterContent = () => {
  const clinkHandler = () => {
    window.open('mailto:pristine.web.dev@gmail.com')
  }

  // ** Var
  const hidden = useMediaQuery((theme: Theme) => theme.breakpoints.down('md'))

  return (
    <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
      <Typography sx={{ mr: 2 }}>
        {`© ${new Date().getFullYear()}, Made with `}
        <Box component='span' sx={{ color: 'error.main' }}>
          ❤️
        </Box>
        {` by `}
        <Link target='_blank' onClick={() => clinkHandler()}>
          PRISTINE
        </Link>
      </Typography>
      {hidden ? null : (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', '& :not(:last-child)': { mr: 4 } }}>
          {/*<Link*/}
          {/*  target='_blank'*/}
          {/*  onClick={() => clinkHandler()}*/}
          {/*>*/}
          {/*  MIT License*/}
          {/*</Link>*/}
          <Link target='_blank' href='https://pristine-app.com/'>
            Request More Themes
          </Link>
          {/*<Link*/}
          {/*  target='_blank'*/}
          {/*  href=''*/}
          {/*>*/}
          {/*  Documentation*/}
          {/*</Link>*/}
          {/*<Link*/}
          {/*  target='_blank'*/}
          {/*  href=''*/}
          {/*>*/}
          {/*  Support*/}
          {/*</Link>*/}
        </Box>
      )}
    </Box>
  )
}

export default FooterContent
