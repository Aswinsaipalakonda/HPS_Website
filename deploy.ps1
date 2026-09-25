# HPS Website Deployment Script
# Automates local build, upload, remote backup, and extraction

$ErrorActionPreference = "Stop"

# 1. Run local build
Write-Host "=== Step 1: Running local production build ===" -ForegroundColor Cyan
npm run build

# 2. Compress the dist folder
Write-Host "=== Step 2: Archiving dist folder ===" -ForegroundColor Cyan
if (Test-Path dist.tar.gz) {
    Remove-Item dist.tar.gz -Force
}
tar -czf dist.tar.gz -C dist .

# 3. Upload archive to VPS
Write-Host "=== Step 3: Uploading archive to Hostinger VPS ===" -ForegroundColor Cyan
scp dist.tar.gz root@145.223.18.5:/root/HpsNew/

# 4. SSH into VPS to backup and extract
Write-Host "=== Step 4: Backing up current version and extracting new files on VPS ===" -ForegroundColor Cyan
$remoteCommands = @'
set -e
echo '--- Creating backup ---'
BACKUP_DIR="/root/HpsNew/backups"
mkdir -p "$BACKUP_DIR"
TIMESTAMP=$(date +%Y%m%d_%H%M%S)

if [ -d "/root/HpsNew/dist" ]; then
    mv /root/HpsNew/dist "$BACKUP_DIR/dist_$TIMESTAMP"
    echo "Backup created at $BACKUP_DIR/dist_$TIMESTAMP"
else
    echo "No existing dist folder found to backup."
fi

echo '--- Extracting new build ---'
mkdir -p /root/HpsNew/dist
tar -xzf /root/HpsNew/dist.tar.gz -C /root/HpsNew/dist
rm -f /root/HpsNew/dist.tar.gz
echo '--- Deployment completed successfully on VPS ---'
'@

ssh root@145.223.18.5 $remoteCommands

# 5. Clean up local archive
Write-Host "=== Step 5: Cleaning up local temporary files ===" -ForegroundColor Cyan
if (Test-Path dist.tar.gz) {
    Remove-Item dist.tar.gz -Force
}

Write-Host "=== Deployment finished successfully! ===" -ForegroundColor Green
