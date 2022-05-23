using Microsoft.EntityFrameworkCore.Migrations;

namespace MoviesAPI.Data.Migrations
{
    public partial class AddBool : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<bool>(
                name: "IsWatch",
                table: "Movie",
                type: "bit",
                nullable: false,
                defaultValue: false);
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "IsWatch",
                table: "Movie");
        }
    }
}
