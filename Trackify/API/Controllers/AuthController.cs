using API.DTOs;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace API.Controllers;

[Route("api/auth")]
[ApiController]
public class AuthController : ControllerBase
{
    private readonly IConfiguration _config;

    public record UserData(int Id, string FirstName, string LastName, string UserName);

    public AuthController(IConfiguration config)
    {
          _config = config;
    }

    [HttpPost("login")]
    [ProducesResponseType(StatusCodes.Status200OK)]
    [ProducesResponseType(StatusCodes.Status401Unauthorized)]
    [AllowAnonymous]
    //public ActionResult<LoginResponseDTO> Login([FromBody] LoginRequestDTO credentials)
    public async Task<ActionResult<string>> Login([FromBody] LoginRequestDTO credentials)
    {
        var user = ValidateCredentials(credentials);

        if (user is null)
        {
            return Unauthorized();
        }

        string token = GenerateToken(user);

        return Ok(token);

        //var response = new LoginResponseDTO();
        //response.IsAuthenticated = true;

        //return Created(string.Empty, response);
    }

    private string GenerateToken(UserData user)
    {
        var secretKey = new SymmetricSecurityKey(
            Encoding.ASCII.GetBytes(_config.GetValue<string>("Authentication:SecretKey")));

        var signingCredentials = new SigningCredentials(secretKey, SecurityAlgorithms.HmacSha256);

        List<Claim> claims = new();
        claims.Add(new(JwtRegisteredClaimNames.Sub, user.Id.ToString())); // subject; what identifies the user
        claims.Add(new(JwtRegisteredClaimNames.UniqueName, user.UserName));
        claims.Add(new(JwtRegisteredClaimNames.GivenName, user.FirstName));
        claims.Add(new(JwtRegisteredClaimNames.FamilyName, user.LastName));

        var token = new JwtSecurityToken(
            _config.GetValue<string>("Authentication:Issuer"),
            _config.GetValue<string>("Authentication:Audience"),
            claims,
            DateTime.UtcNow, // when this token becomes valid
            DateTime.UtcNow.AddMinutes(1),
            signingCredentials);

        return new JwtSecurityTokenHandler().WriteToken(token);
    }


    private UserData? ValidateCredentials(LoginRequestDTO data)
    {
        // THIS IS NOT PRODUCTION CODE - REPLACE THIS WITH A CALL TO AUTH SYSTEM
        if (data.UserName.Equals("test") && data.Password.Equals("123"))
        {
            return new UserData(1, "John", "Doe", data.UserName!);
        }

        return null;
    }
}
