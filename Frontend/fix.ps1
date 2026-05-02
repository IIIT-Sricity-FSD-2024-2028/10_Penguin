$file = 'c:\Users\panth\Downloads\FFSD_project\FFSD_project\Index.html'
$content = Get-Content -Path $file -Raw
$fixed = $content -replace '₹', '$'
Set-Content -Path $file -Value $fixed -Encoding UTF8
Write-Host "File fixed!"
