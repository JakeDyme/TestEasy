
# Database
## Creating the first migration:
*Install EF tools...*
<code>dotnet tool install --global dotnet-ef</code> 

*Run the first migration...*
<code>dotnet ef migrations add Initial -o Migrations -p TestEasy.Data -s TestEasy.WebApi</code>

*Create the database...*
<code>dotnet ef database update -p TestEasy.Data -s TestEasy.WebApi</code>
