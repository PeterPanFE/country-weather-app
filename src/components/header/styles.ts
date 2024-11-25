export const searchContainer: React.CSSProperties = {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
    maxWidth: '350px',
    marginRight: "5%"
}

export const headerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    padding: '16px',
};

export const inputStyle: React.CSSProperties = {
    width: '100%',
    padding: '20px 40px 20px 16px',
    fontSize: '1.2rem',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '20px',
    background: 'rgba(255, 255, 255, 0.1)',
    outline: 'none',
    color: '#ddd',
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', /* Subtle shadow */
    transition: 'border-color 0.3s ease',
};

export const searchIcon: React.CSSProperties = {
    position: 'absolute',
    right: '16px', /* Align icon inside the input */
    color: '#ddd', /* Icon color */
    fontSize: '18px',
    pointerEvents: 'none' /* Prevent interaction */
  
}

export const selectContainer: React.CSSProperties = {
    display: 'flex',
    position: 'relative',
    width: '100%',
    maxWidth: '350px',
    alignItems: 'center'
  
}

export const selectLabel: React.CSSProperties = {
    width: '100px'
}
export const selectStyle: React.CSSProperties = {
    width: '100%',
    padding: '20px 40px 20px 16px', /* Leave space for the icon */
    fontSize: '1.2rem',
    border: '2px solid rgba(255, 255, 255, 0.5)',
    borderRadius: '20px', /* Makes the select rounded */
    background: 'rgba(255, 255, 255, 0.1)', /* Semi-transparent background */
    outline: 'none',
    color: '#ddd', /* Text color */
    appearance: 'none',/* Hides the default dropdown arrow */
    boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)', /* Subtle shadow */
    transition: 'border-color 0.3s ease',
    cursor: 'pointer'
};

export const dropdownIcon: React.CSSProperties = {
    position: 'absolute',
    right: '16px', /* Align icon inside the select */
    top: '50%',
    transform: 'translateY(-50%)',
    color: 'rgba(0, 0, 0, 0.5)',/* Icon color */
    pointerEvents: 'none', /* Prevent interaction */
    fontSize: '1rem'
}
  
