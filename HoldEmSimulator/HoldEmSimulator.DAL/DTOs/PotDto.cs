namespace HoldEmSimulator.DAL.DTOs
{
    using System.Collections.Generic;

    public class PotDto
    {
        public IEnumerable<CardDto> Hand { get; set; }

        public IEnumerable<CardDto> BoardCards { get; set; }

        public int TotalPlayers { get; set; }
    }
}
