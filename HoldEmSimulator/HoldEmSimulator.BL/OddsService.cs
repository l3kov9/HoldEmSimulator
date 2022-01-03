namespace HoldEmSimulator.BL
{
    using Contracts;
    using DAL.DTOs;
    using Extensions;
    using System.Linq;
    using System.Net;
    using System.Text.RegularExpressions;

    public class OddsService : IOddsService
    {
        private const string OddsCalculatorUrl = "https://th.odds.pokernews.com/game-probs?input=";
        private readonly WebClient _client;

        public OddsService()
        {
            _client = new WebClient();
        }

        public double CalculateProbability(PotDto pot)
        {
            var handConvertedCards = string.Join("|", pot.Hand.Select(CardExtensions.ConvertToString));
            var boardConvertedCards = string.Join("|", pot.BoardCards.Select(CardExtensions.ConvertToString));

            var url = $"{OddsCalculatorUrl}{handConvertedCards}|{pot.TotalPlayers - 1}|{boardConvertedCards}|1|1";
            var response = _client.DownloadString(url);

            var rx = new Regex(@"<win>(.*?)</win>");
            var probability = rx.Match(response).Groups[1].Value.Split("|").First();

            return double.Parse(probability);
        }
    }
}
