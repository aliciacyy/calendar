#!/bin/bash

# Check if the number of arguments is correct
if [ "$#" -ne 1 ]; then
  echo "Usage: $0 <line_number>"
  exit 1
fi

input_file="./src/App.js"
line_number="$1"
echo "Updating line $line_number in $input_file"

# Function to get the current date in YYYY-MM-DD format
get_current_date() {
  date +"%Y-%m-%d"
}

# Replace the specified line with the current date
sed -i "${line_number}s/.*/  let updatedDate = '$(get_current_date)';/" "$input_file"