cd src\TestEasy.WebUi\
npm run build-app & npm run package-win
cd ..
dotnet build -c Release TestEasy.sln
pause