@echo off
setlocal enabledelayedexpansion

:: ============================================
:: CCSR Community Guide - Rolling Backup
:: Keeps a rolling 10-backup history in _BACKUP
:: ============================================

set "BACKUP_ROOT=_BACKUP"

:: Ensure backup directory exists
if not exist "%BACKUP_ROOT%" mkdir "%BACKUP_ROOT%"

:: 1. Handle Rotation (Keep only 10)
:: Find folders, sort by date/name. If > 10, remove oldest.
set "count=0"
for /f "tokens=*" %%d in ('dir "%BACKUP_ROOT%" /b /ad /o-d /tc') do (
    set /a count+=1
)

if !count! geq 10 (
    echo [MAINTENANCE] 10 backups detected. Removing oldest to maintain limit...
    for /f "tokens=*" %%d in ('dir "%BACKUP_ROOT%" /b /ad /o-d') do (
        set "OLDEST=%%d"
    )
    rd /s /q "%BACKUP_ROOT%\!OLDEST!"
)

:: 2. Generate timestamp (YYYY-MM-DD_HHMM)
:: Overwrites existing folder if run in the same minute
for /f "tokens=2 delims==" %%I in ('wmic os get localdatetime /value') do set datetime=%%I
set "TIMESTAMP=%datetime:~0,4%-%datetime:~4,2%-%datetime:~6,2%_%datetime:~8,2%%datetime:~10,2%"
set "BACKUP_DIR=%BACKUP_ROOT%\%TIMESTAMP%"

echo.
echo ============================================
echo   CCSR Community Guide - Backup Utility
echo   Target: %BACKUP_DIR%
echo ============================================
echo.

:: Create backup directory (or prepare to overwrite)
mkdir "%BACKUP_DIR%" 2>nul

:: Mirror the project root
:: /XD = Exclude Directories, /XF = Exclude Files
robocopy . "%BACKUP_DIR%" /E /XD node_modules .next _BACKUP bak .git /XF BACKUP.bat /NFL /NDL /NJH /NJS /NC /NS /NP

if %ERRORLEVEL% LEQ 7 (
    echo [SUCCESS] Backup rotation complete (Slot used: %TIMESTAMP%)
) else (
    echo [ERROR] Backup encountered issues. Robocopy error: %ERRORLEVEL%
)

echo.
pause
endlocal
