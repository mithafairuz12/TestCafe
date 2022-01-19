@LoginFeature
Feature: Login Feature

    @ValidLogin
    Scenario Outline: Login with valid account
    Given User access CURA Login page
    When User fill valid "<username>"
    And User fill valid "<password>"
    And User click Login button
    Then User success login and will see Appointment Form
    Examples:
        |   username    |   password            |
        |   John Doe    |   ThisIsNotAPassword  |

    @InvalidLogin
    Scenario: Login with invalid account
    Given User access CURA Login page
    When User fill valid "<username>"
    And User fill valid "<password>"
    And User click Login button
    Then User failed to login and will see error message
    Examples:
        |   username    |   password    |
        |   Mitha       |   mitha123    |
        |   WGS         |   wgs123      |
        |   Andi        |   andi123     |  