using System.Threading.Tasks;
using HoldEmSimulator.DAL.DTOs;

namespace HoldEmSimulator.BL
{
    using Contracts;

    public class OddsService : IOddsService
    {
        public async Task<double> CalculateProbability(PotDto pot)
        {
            // TODO: implement logic for calculating the probability

            return 42.12;
        }
    }
}
