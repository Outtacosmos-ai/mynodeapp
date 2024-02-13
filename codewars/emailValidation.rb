def validate(email)
  # Check if email contains "@" symbol
  unless email.include?("@")
    return false # no @ symbol
  else
    # Split email by "@" symbol
    parts = email.split("@")
    # Check if there are more than two parts after splitting
    if parts.length != 2
      return false # more than one @ symbol
    else
      left_part = parts[0]
      right_part = parts[1]
      # Check if left part is empty or contains only whitespace characters
      if left_part.strip.empty?
        return false # left part is empty
      elsif right_part.index(".") == nil
        return false # no dot in the right part
      else
        # Split right part by dot
        domain_parts = right_part.split(".")
        # Check if there is only one part after splitting
        if domain_parts.length <= 1
          return false # no string after the dot in the right part
        else
          # Check if any part is empty or contains only whitespace characters
          domain_parts.each do |part|
            if part.strip.empty?
              return false # one of the parts is empty
            end
          end
          # If all checks passed, email is valid
          return true
        end
      end
    end
  end
end

# Example usage:
email1 = "john.doe@example.com"
email2 = "invalid.email@.com"
puts validate(email1) # Output: true
puts validate(email2) # Output: false
