namespace HoldEmSimulator.BL.Extensions
{
    using DAL.DTOs;

    public static class CardExtensions
    {
        public static string ConvertToString(this CardDto card)
        {
            var rank = card.Rank == "10" ? "T" : card.Rank;

            return card.Suit switch
            {
                "♠" => $"{rank}s",
                "♥" => $"{rank}h",
                "♦" => $"{rank}d",
                "♣" => $"{rank}c",
                _ => string.Empty
            };
        }
    }
}
