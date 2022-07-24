namespace API.DTOs;

public class LoginResponseDTO
{
    public Guid UserId { get; set; }
    public bool IsAuthenticated { get; set; }
}
