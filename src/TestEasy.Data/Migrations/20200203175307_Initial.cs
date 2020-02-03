using Microsoft.EntityFrameworkCore.Migrations;

namespace TestEasy.Data.Migrations
{
    public partial class Initial : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "DbActions",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true),
                    DbParentActionId = table.Column<int>(nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DbActions", x => x.Id);
                    table.ForeignKey(
                        name: "FK_DbActions_DbActions_DbParentActionId",
                        column: x => x.DbParentActionId,
                        principalTable: "DbActions",
                        principalColumn: "Id",
                        onDelete: ReferentialAction.Cascade);
                });

            migrationBuilder.CreateTable(
                name: "DbRoutine",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DbRoutine", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DbSetup",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DbSetup", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "DbTest",
                columns: table => new
                {
                    Id = table.Column<int>(nullable: false)
                        .Annotation("Sqlite:Autoincrement", true),
                    Name = table.Column<string>(nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_DbTest", x => x.Id);
                });

            migrationBuilder.CreateIndex(
                name: "IX_DbActions_DbParentActionId",
                table: "DbActions",
                column: "DbParentActionId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "DbActions");

            migrationBuilder.DropTable(
                name: "DbRoutine");

            migrationBuilder.DropTable(
                name: "DbSetup");

            migrationBuilder.DropTable(
                name: "DbTest");
        }
    }
}
