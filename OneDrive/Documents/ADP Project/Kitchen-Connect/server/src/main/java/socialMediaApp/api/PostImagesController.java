package socialMediaApp.api;

import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;
import socialMediaApp.responses.postImage.PostImageResponse;
import socialMediaApp.services.PostImageService;

import java.io.IOException;

@RestController
@RequestMapping("/api/postimages")
public class PostImagesController {

    private final PostImageService postImageService;

    public PostImagesController(PostImageService postImageService) {
        this.postImageService = postImageService;
    }

    @PostMapping("/upload")
    public ResponseEntity<?> upload(@RequestParam("image") MultipartFile file, @RequestParam int postId) {
        if (file == null || file.isEmpty()) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("File is empty or not provided.");
        }
        if (!file.getContentType().startsWith("image/")) {
            return ResponseEntity.status(HttpStatus.BAD_REQUEST)
                    .body("Invalid file type. Only image files are allowed.");
        }

        try {
            PostImageResponse postImageResponse = postImageService.upload(file, postId);
            return new ResponseEntity<>(postImageResponse, HttpStatus.OK);
        } catch (IOException e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to upload the image.");
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An unexpected error occurred.");
        }
    }

    @GetMapping("/download/{postId}")
    public ResponseEntity<?> download(@PathVariable int postId) {
        try {
            byte[] image = postImageService.download(postId);
            if (image != null) {
                return ResponseEntity.status(HttpStatus.OK)
                        .contentType(MediaType.valueOf("image/png"))
                        .body(image);
            } else {
                return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Image not found for the given post ID.");
            }
        } catch (Exception e) {
            return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed to download the image.");
        }
    }
}
