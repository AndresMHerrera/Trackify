using API.DTOs;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace API.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    [HttpPost("login")]
    [ProducesResponseType(StatusCodes.Status201Created)]
    public ActionResult<LoginResponseDTO> Login(LoginRequestDTO credentials)
    {
        // TODO
        var response = new LoginResponseDTO();
        response.IsAuthenticated = true;

        return Created(string.Empty, response);
    }
}
