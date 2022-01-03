using System;

namespace HoldEmSimulator.Controllers
{
    using BL.Contracts;
    using DAL.DTOs;
    using Microsoft.AspNetCore.Mvc;

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
        public double Post(PotDto pot)
        {
            try
            {
                return _oddsService.CalculateProbability(pot);
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                throw;
            }
        }

        [Route("/error")]
        public IActionResult HandleError() =>
            Problem();

    }
}
