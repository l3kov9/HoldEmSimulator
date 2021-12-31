namespace HoldEmSimulator.BL.Contracts
{
    using DAL.DTOs;
    using System.Threading.Tasks;

    public interface IOddsService
    {
        Task<double> CalculateProbability(PotDto pot);
    }
}
