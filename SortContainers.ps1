# Fetch our container list
$profileLocation = "$env:APPDATA\Mozilla\Firefox\Profiles\"
$defaultRelease = Get-ChildItem -Path $profileLocation -Directory | Where-Object { $_.PSIsContainer -and $_.Name -like "*.default-release" } | Select-Object -First 1
if (-not $defaultRelease) {
  Write-Error "Profile has gone AWOL. If your profile folder is not named '*.default-release' Try running the script with the container location pre set in line 8"
  return
}
$Container = "$profileLocation$($defaultRelease.Name)\containers.json"

# Load the JSON file
$json = Get-Content -Raw -Path $Container | ConvertFrom-Json

#Sorting Options
$options = @("name", "icon", "color", "default")

$selectedOption = $null

while($selectedOption -eq $null) {
    Write-Host "Please select an option:"
    for($i = 0; $i -lt $options.Length; $i++) {
        Write-Host "  $($i+1). $($options[$i])"
    }
    $selectedIndex = Read-Host "Enter the number of your selection"
    if($selectedIndex -gt 0 -and $selectedIndex -le $options.Length) {
        $selectedOption = $options[$selectedIndex - 1]
    } else {
        Write-Host "Invalid selection. Please try again."
    }
    if ($selectedOption -eq "default"){ 
    $selectedOption = "userContextId"
    }
}
# Sort the array by the specified option field
$sortedIdentities = $json.identities | Sort-Object -Property $selectedOption


# Update the JSON object with the sorted array
$json.identities = $sortedIdentities

# Save the modified JSON back to the file
$json | ConvertTo-Json | Set-Content -Path $Container

Write-Host "DONE! Containers have been sorted by: $selectedOption "
