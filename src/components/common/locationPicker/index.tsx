
import { TextField, List, ListItem, ListItemText, Paper, CircularProgress, Typography, Box, InputAdornment } from '@mui/material';
import { useState, useEffect } from 'react';
import './index.css'
import ClearIcon from '@mui/icons-material/Clear';
import { ISuggestions, ILocationAutocompleteProps } from './types';


const LocationAutocomplete: React.FC<ILocationAutocompleteProps> = (props) => {
    const { onChange = () => { }, label = 'Enter a location' } = props;
    const [query, setQuery] = useState<string>('');
    const [suggestions, setSuggestions] = useState<ISuggestions[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(false);
    // const [selectedLocation, setSelectedLocation] = useState<ISuggestions>({} as ISuggestions);
    const [skipFetch, setSkipFetch] = useState<boolean>(false); // 👈 new flag

    const [showSuggestions, setShowSuggestions] = useState<boolean>(false);
    // Fetch suggestions from Nominatim API
    useEffect(() => {
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }

        if (skipFetch) {
            setSkipFetch(false)
            return;
        }

        const fetchSuggestions = async () => {
            setIsLoading(true);
            try {
                const response = await fetch(
                    `https://nominatim.openstreetmap.org/search?q=${encodeURIComponent(query)}&format=json&limit=8`
                );
                const data = await response.json();
                setSuggestions(data);
                setShowSuggestions(true)
            } catch (error) {
                console.error('Error fetching suggestions:', error);
                setSuggestions([]);
            } finally {
                setIsLoading(false);
            }
        };

        // Debounce to limit API calls
        const timeoutId = setTimeout(fetchSuggestions, 300);
        return () => clearTimeout(timeoutId);
    }, [query]);

    const handleSelect = (suggestion: any) => {
        console.log('suggestion==', suggestion);
        setSkipFetch(true)
        setShowSuggestions(false)
        setQuery(suggestion?.display_name)
        onChange && onChange(suggestion)
    };

    const clearSearchInput = () => {
        // setSelectedLocation({} as ISuggestions);
        setQuery('');
        setSuggestions([]);
        onChange && onChange({} as ISuggestions)
    }

    return (
        <Box sx={{ maxWidth: '100%', position: 'relative' }}>
            <TextField
                fullWidth
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => setShowSuggestions(true)}
                // onBlur={() => setShowSuggestions(false)}
                label={label}
                variant="outlined"
                sx={{ mb: 2 }}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            {isLoading && <CircularProgress size={20} />}
                            {!!suggestions.length && <ClearIcon onClick={clearSearchInput} cursor='pointer' />}

                        </InputAdornment>
                    )
                }}
            />
            {(suggestions.length > 0 && showSuggestions) && (
                <Paper elevation={3} className='auto-complete-options'>
                    <List>
                        {suggestions.map((suggestion) => (
                            <ListItem
                                key={suggestion?.place_id}
                                onClick={() => handleSelect(suggestion)}
                                sx={{ '&:hover': { backgroundColor: 'action.hover', cursor: 'pointer' } }}
                            >
                                <ListItemText primaryTypographyProps={{ fontSize: "14px", padding: '0px', margin: '0px' }} primary={suggestion.display_name} />
                            </ListItem>
                        ))}
                    </List>
                </Paper>
            )}
        </Box>
    );
};

export default LocationAutocomplete;