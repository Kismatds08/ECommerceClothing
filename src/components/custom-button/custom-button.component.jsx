import './custom-button.styles.scss'

const CustomButton = ({children,isGoogleSignIn, ...otherProps}) => (
    <button 
    className={`${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
    {...otherProps}>
    {children}{/**Children */}
    </button>
)

export default CustomButton;