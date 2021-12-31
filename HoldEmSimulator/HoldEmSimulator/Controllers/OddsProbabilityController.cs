namespace HoldEmSimulator.Controllers
{
    using BL.Contracts;
    using DAL.DTOs;
    using Microsoft.AspNetCore.Mvc;
    using System.Threading.Tasks;

    [ApiController]
    [Route("[controller]")]
    public class OddsProbabilityController : ControllerBase
    {
        private readonly IOddsService _oddsService;

        public OddsProbabilityController(IOddsService oddsService)
        {
            _oddsService = oddsService;
        }

        [HttpPost]
        public async Task<double> Post(PotDto pot)
        {
            var probability = await _oddsService.CalculateProbability(pot);

            return probability;
        }
    }
}
