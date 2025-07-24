package socialMediaApp.responses.user;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class UserFollowerResponse {
   private int userId;
   private String firstName;
   private String lastName;
}
