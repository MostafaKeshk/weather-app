import React from "react";
import {
  Box,
  CircularProgress,
  MenuList,
  MenuItem,
  ListItemText,
  TextField,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import { styles } from "./styles";

interface Props<T> {
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  loading: boolean;
  options: T[];
  getOptionLabel: (option: T) => string;
  onSelect: (option: T) => void;
  onClear: () => void;
  openList: boolean;
}

const SearchDropdown = <T,>({
  value,
  onChange,
  loading,
  options,
  getOptionLabel,
  onSelect,
  onClear,
  openList,
}: Props<T>) => {
  return (
    <Box sx={{ position: "relative", width: "100%" }}>
      <TextField
        size="small"
        fullWidth
        value={value}
        onChange={onChange}
        placeholder="Search..."
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              {loading ? (
                <CircularProgress size={20} />
              ) : value ? (
                <CloseIcon
                  onClick={onClear}
                  sx={{ cursor: "pointer" }}
                  fontSize="small"
                />
              ) : (
                <SearchIcon fontSize="small" />
              )}
            </InputAdornment>
          ),
        }}
      />

      {openList && (
        <MenuList sx={styles.menu}>
          {options.length > 0 ? (
            options.map((option, index) => (
              <MenuItem key={index} onClick={() => onSelect(option)}>
                <ListItemText>{getOptionLabel(option)}</ListItemText>
              </MenuItem>
            ))
          ) : (
            <MenuItem disabled>
              <Typography variant="body2" color="textSecondary">
                City was not found
              </Typography>
            </MenuItem>
          )}
        </MenuList>
      )}
    </Box>
  );
};

export default SearchDropdown;
