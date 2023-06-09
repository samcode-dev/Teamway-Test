import { Box } from '@material-ui/core'
import colors from '../../theme/colors'

const Title = (props) => (
   <Box color={colors.pink} textAlign={'center'} fontSize={56}>
      {props.children}
   </Box>
)

export default Title
