using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace MoviesAPI.Models
{
    public class Movie
    {
        [Key]
        public int Id { get; set; }

        [Column(TypeName = "nvarchar(50)")]
        public string  Name { get; set; }

        [Column(TypeName = "nvarchar(500)")]
        public string  Summery { get; set; }

        [Column(TypeName = "nvarchar(20)")]
        public string Genre { get; set; }

        public string Image { get; set; }

        public decimal Score { get; set; }

        [Column(TypeName = "nvarchar(200)")]
        public string Trailer { get; set; }

        public bool IsWatch { get; set; } //this bool is irrelevent for the api and only changes for spcecific user in their personal localhost

    }
}
