import pandas as pd
import os

# Get the current directory where advisor.py is located
CURRENT_DIR = os.path.dirname(os.path.abspath(__file__))
CSV_PATH = os.path.join(CURRENT_DIR, 'data', 'education_career_options.csv')

def load_education_data():
    try:
        # Read CSV with explicit encoding
        df = pd.read_csv(CSV_PATH, encoding='utf-8')
        print(f"Loaded {len(df)} rows from CSV")
        
        # Normalize column names to lowercase and strip spaces
        df.columns = df.columns.str.strip().str.lower()
        
        # Only normalize option_type to lowercase, keep education_level as-is
        df['education_level'] = df['education_level'].str.strip()
        df['option_type'] = df['option_type'].str.strip().str.lower()
        df['options'] = df['options'].str.strip()
        
        return df
    except Exception as e:
        print(f"Error loading CSV: {str(e)}")
        raise

# Load the data when module is imported
df = load_education_data()

def get_advice(education_level, option_type):
    """
    Get educational or career advice based on education level and option type.
    
    Args:
        education_level (str): The education level to search for
        option_type (str): The type of option (study or career)
    
    Returns:
        list: Available options for the given criteria
    """
    # Only normalize option_type to lowercase, keep education_level as-is
    education_level = education_level.strip()  # Remove the .lower()
    option_type = option_type.strip().lower()
    
    # Debug print to see what we're searching for
    print(f"Searching for - Education Level: '{education_level}', Option Type: '{option_type}'")
    print(f"Available levels: {sorted(df['education_level'].unique())}")
    
    # Filter the DataFrame
    filtered = df[
        (df['education_level'] == education_level) &
        (df['option_type'] == option_type)
    ]
    
    if filtered.empty:
        all_levels = sorted(df['education_level'].unique())
        return [f"No options found. Available levels: {', '.join(all_levels)}"]
    
    return filtered['options'].tolist()

def print_available_options():
    """Print all available education levels and option types."""
    print("\n=== Available Education Levels ===")
    education_levels = sorted(df['education_level'].unique())
    print(f"Total levels: {len(education_levels)}")
    for idx, level in enumerate(education_levels, 1):
        print(f"{idx}. {level}")
    
    print("\n=== Available Option Types ===")
    option_types = sorted(df['option_type'].unique())
    for idx, opt in enumerate(option_types, 1):
        print(f"{idx}. {opt}")

def test_all_combinations():
    """Test get_advice() with all possible combinations."""
    education_levels = sorted(df['education_level'].unique())
    option_types = sorted(df['option_type'].unique())
    
    print("\n=== Testing All Combinations ===")
    for level in education_levels:
        for opt_type in option_types:
            print(f"\nEducation Level: {level}")
            print(f"Option Type: {opt_type}")
            result = get_advice(level, opt_type)
            print(f"Results: {result}")

if __name__ == "__main__":
    print_available_options()
    test_all_combinations()

