"Y:/InProd/WoA/Code/Python39_64/python.exe" "D:\UE\Tailwind_R E B U I L D\Resources\Code\Website\site\configure_site.py"

@echo off
setlocal enabledelayedexpansion

REM Check if enough arguments are provided
if "%~1"=="" (
    echo Usage: push_submodule_changes.bat ^<submodule-path^> ^<commit-message^>
    echo   ^<submodule-path^>: Path to the submodule within the parent repository
    echo   ^<commit-message^>: Commit message for the submodule and parent repo
    exit /b 1
)

set SUBMODULE_PATH=%~1
set COMMIT_MESSAGE=%~2

REM Check if submodule directory exists
if not exist "%SUBMODULE_PATH%" (
    echo Error: Submodule path "%SUBMODULE_PATH%" does not exist!
    exit /b 1
)

REM Navigate to the submodule directory
cd /d "%SUBMODULE_PATH%"
if errorlevel 1 (
    echo Error: Unable to navigate to submodule directory.
    exit /b 1
)

REM Stage, commit, and push changes in the submodule
echo Staging changes in the submodule...
git add .
if errorlevel 1 (
    echo Error: Failed to stage changes in the submodule.
    exit /b 1
)

echo Committing changes in the submodule...
git commit -m "%COMMIT_MESSAGE%"
if errorlevel 1 (
    echo No changes to commit in the submodule.
)

echo Pushing changes in the submodule...
git push
if errorlevel 1 (
    echo Error: Failed to push changes in the submodule.
    exit /b 1
)

REM Navigate back to the parent repository
cd /d "%~dp0"

REM Stage the updated submodule reference in the parent repository
echo Staging updated submodule reference in the parent repository...
git add "%SUBMODULE_PATH%"
if errorlevel 1 (
    echo Error: Failed to stage updated submodule reference.
    exit /b 1
)

REM Commit and push the updated submodule reference
echo Committing updated submodule reference...
git commit -m "Update submodule '%SUBMODULE_PATH%': %COMMIT_MESSAGE%"
if errorlevel 1 (
    echo No changes to commit in the parent repository.
)

echo Pushing changes in the parent repository...
git push
if errorlevel 1 (
    echo Error: Failed to push changes in the parent repository.
    exit /b 1
)

echo Submodule changes and parent repository updates pushed successfully.
exit /b 0
